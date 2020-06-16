import React, { useState, useEffect }from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import "./MultiSelectChip.scss";
import BookmarkCard from "../BookmarkCard";
import { getTags, getBookmarks } from '../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  select: {
    padding: "0 0 2px",
  },
  grid: {
    backgroundColor: "lightgray",
    zIndex: 150,
  },
  list: {
    paddingBottom: 1,
  },
  listItem: {
    minHeight: 100,
    minWidth: 250,
    padding: 0,
    margin: 5,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(tag, tagName, theme) {
  return {
    fontWeight:
      tagName.indexOf(tag) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultiSelectChip(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [tagName, setTagName] = useState([]);
  const [tags, setTags] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [filteredBookmarks, setFilteredBookmarks] = useState([]);

  const handleChange = (event) => {
    setTagName(event.target.value);
    setFilteredBookmarks(filterBookmarks(event.target.value));
  };

  const filterBookmarks = (currTags) => {
    if (currTags.length === 0) return [];

    let lst = [];
    let keys = Object.keys(bookmarks).filter((k) => {
      for (let i=0; i<currTags.length; i++) {
        if (!bookmarks[k].tags.includes(currTags[i])) {
          return false;
        }
      }
      return true;
    });
    keys.map((k) => lst.push(bookmarks[k]))
    return lst;
  }


  useEffect(
    () => {
      (async () => {
        const tags = await getTags();
        const bookmarks  = await getBookmarks();
        setTags(tags.data);
        setBookmarks(bookmarks.data);
      })();
    }, []);

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="mutiple-chip-label">Filter…</InputLabel>
        <Select
          labelId="mutiple-chip-label"
          multiple
          value={tagName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
          className={classes.select}
        >
          {tags.map((tag) => (
            <MenuItem key={tag} value={tag} style={getStyles(tag, tagName, theme)}>
          {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid item className={classes.grid}>
        {filteredBookmarks.map((bookmark) => {
          return (
            <div>
              <Divider />
              <List disablePadding className={classes.list}>
                <ListItem key={bookmark.name} className={classes.listItem}>
                  <BookmarkCard bookmark={bookmark}></BookmarkCard>
                </ListItem>
              </List>
            </div>
          );
        })}
      </Grid>
    </div>
  );
}
