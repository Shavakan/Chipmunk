import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import BookmarkCard from "../BookmarkCard";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  listItem: {
    padding: 0,
  }
}));

function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function InteractiveList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <List>
          {generate(
            <ListItem className={classes.listItem}>
              <BookmarkCard
                bookmark="adfs-dsfa-sdfa-sfds-fadd"></BookmarkCard>
            </ListItem>,
          )}
        </List>
      </Grid>
    </div>
  );
}
