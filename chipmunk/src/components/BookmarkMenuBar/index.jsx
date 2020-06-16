import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CallMadeIcon from '@material-ui/icons/CallMade';
import SearchBox from "../SearchBox";
import MultiSelectChip from "../MultiSelectChip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    marginLeft: 160,
    backgroundColor: "#FCE4D8",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    height: 88,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function TopMenu() {
    const classes = useStyles();
    
    return (
      <Toolbar className={classes.toolbar}>
        <SearchBox></SearchBox>
        <MultiSelectChip></MultiSelectChip>
        {/* <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CallMadeIcon />}
        >
          Add An Arrow
        </Button> */}
      </Toolbar>
    );
}
