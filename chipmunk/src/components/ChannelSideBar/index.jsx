import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


export const drawerWidth = 240;
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
        marginTop: 128,
        width: drawerWidth,
        borderRight: 0,
        backgroundColor: "#A4BBC8",
      },
      toolbar: {
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
        <Divider />
        <List>
        {['Docker', 'AWS', 'VueJS', 'AngularJS'].map((text, index) => (
            <ListItem button key={text}>
            <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
        <Divider />
    </Drawer>
  );
}
