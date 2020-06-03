import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  commentInput: {
    width: '54.5ch',
  }
}));

export default function CommentInput() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TextField className={classes.commentInput} label="Leave your comment" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}