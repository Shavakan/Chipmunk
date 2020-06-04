import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChannelSideBar from "../ChannelSideBar";


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
    minHeight: 128,
    backgroundColor: "#7191A3",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
}));

export default function TopMenu() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h3" className={classes.title}>
          My Cheek Pouch 
        </Typography>
        <ChannelSideBar></ChannelSideBar>
      </Toolbar>
    </AppBar>
  );
}
