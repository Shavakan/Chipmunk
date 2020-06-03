import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import "./BookmarkCardTag.scss";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));
  
  export default function TagsArray() {
    const classes = useStyles();
    const [chipData, setChipData] = React.useState([
      { key: 0, label: 'docker' },
      { key: 1, label: 'starter' },
    ]);
  
    const handleDelete = (chipToDelete) => () => {
      setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
  
    return (
      <Paper component="ul" className={classes.root} elevation={0}>
        {chipData.map((data) => {
          let icon;
          return (
            <li key={data.key}>
              <Chip
                icon={icon}
                label={data.label}
                className={classes.chip}
              />
            </li>
          );
        })}
      </Paper>
    );
  }