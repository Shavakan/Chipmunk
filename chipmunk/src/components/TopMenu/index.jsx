import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChannelSideBar from "../ChannelSideBar";
import BookmarkMenuBar from "../BookmarkMenuBar";
import BookmarkGraphContainer from "../BookmarkGraphContainer";

const defaultMargin = { top: -100, left: 200, right: 80, bottom: 10 };

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 96,
    backgroundColor: "#934B00",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
}));

const TopMenu = function(props) {
  var path = "https://zoonoo.github.io/chipmunk/logos/chipmunk.png";

  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h3" color="inherit" className={classes.title}>
            My Cheek Pouch
          </Typography>
          <img src={path}></img>
          <ChannelSideBar></ChannelSideBar>
        </Toolbar>
        <BookmarkMenuBar></BookmarkMenuBar>
      </AppBar>
      <BookmarkGraphContainer
        location={props.location}
        margin={defaultMargin}
      ></BookmarkGraphContainer>
    </div>
  );
}

export default TopMenu;
