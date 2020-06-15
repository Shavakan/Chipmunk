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
  
  
  export default function TagsArray(props) {
    const classes = useStyles();
    const [chipData, setChipData] = React.useState();

    React.useEffect(() => {
      if (!chipData) {
        setChipData(props.tags);
      }
    })

    // 시간이 좀 걸림
    if (chipData && chipData.length >=0 ) {
      // console.log(chipData)
      return (
        <Paper component="ul" className={classes.root} elevation={0}>
          {chipData.map((data) => {
            let icon;
            return (
              <li key={data}>
                <Chip
                  icon={icon}
                  label={data}
                  className={classes.chip}
                />
              </li>
            );
          })}
  
        </Paper>
      );
    } else {
      return (<p>Loading...</p>)
    }
  }