import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


export const drawerWidth = 160;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      paper: {
        marginTop: 96,
        width: drawerWidth,
        borderRight: 0,
        backgroundColor: "#F19953",
      },
      toolbar: {
        minHeight: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        backgroundColor: "#7191A3",
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    }));

export default function ChannelSideBar() {
  const classes = useStyles();

  return (
    <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{
            paper: classes.paper
        }}
    >
        {/* <div className={classes.toolbar}>
        </div> */}
        <Divider />
        <List>
        {/* TODO(changwon): Make Docker look like selected */}
        {['Front-end', 'Back-end', 'Algorithm', 'AI'].map((text, index) => (
            <ListItem button key={text}>
            <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
        <Divider />
    </Drawer>
  );
}
