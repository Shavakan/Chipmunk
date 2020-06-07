import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBox from "../SearchBox";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    marginLeft: 160,
    backgroundColor: "#7191A3",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
}));

export default function TopMenu() {
    const classes = useStyles();
    
    return (
        <Toolbar className={classes.toolbar}>
          <SearchBox></SearchBox>
        </Toolbar>
    );
}
