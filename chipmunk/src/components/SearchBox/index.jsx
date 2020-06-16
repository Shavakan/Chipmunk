import React, { useState, useEffect } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import BookmarkCard from "../BookmarkCard";
import { getBookmarks } from '../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    marginTop: "auto",
    paddingTop: 15,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    padding: "8px 0",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -8,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '240px',
      '&:focus': {
        width: '400px',
      },
    },
  },
  searchGrid: {
    backgroundColor: "lightgray",
    zIndex: 150,
    marginLeft: 8,
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

export default function SearchBox() {
  const classes = useStyles();
  const [bookmarks, setBookmarks] = useState([]);
  const [filteredBookmarks, setFilteredBookmarks] = useState([]);

  const filterBookmarks = (keyword) => {
    console.log(keyword);
    if (keyword.length === 0) return [];

    let lst = [];
    let keys = Object.keys(bookmarks).filter((k) => {
      console.log(bookmarks[k]);
      if (bookmarks[k].title.toLowerCase().includes(keyword.toLowerCase())) { 
        return true;
      }

    //   for (let i=0; i<currTags.length; i++) {
    //     if (!bookmarks[k].tags.includes(currTags[i])) {
    //       return false;
    //     }
    //   }
    //   return true;
    });
    keys.map((k) => lst.push(bookmarks[k]))
    console.log(lst);
    return lst;
  }

  const handleChange = (event) => {
    setFilteredBookmarks(filterBookmarks(event.target.value));
  }

  useEffect(
    () => {
      (async () => {
        const bookmarks  = await getBookmarks();
        setBookmarks(bookmarks.data);
      })();
    }, []);

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
        />
      </div>
      <Grid item className={classes.searchGrid}>
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
