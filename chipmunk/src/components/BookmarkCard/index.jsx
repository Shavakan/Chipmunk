import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CommentIcon from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton';
import StarRateIcon from '@material-ui/icons/StarRate';
import BookmarkCardTag from "../BookmarkCardTag";
import "./BookmarkCard.scss";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    maxHeight: 200,
  },
  tagContainer: {
    flex: 1,
    paddingLeft: theme.spacing(1),
  },
  info: {
    size: 'medium',
    paddingRight: 0,
  },
  star: {
    paddingLeft: 1,
    paddingTop: 10,
    paddingRight: 1,
  },
  rate: {
    fontSize: 17,
    paddingTop: 10,
    paddingLeft: 0,
    paddingRight: 15,
  },
  comments: {
    paddingLeft: 10,
    paddingRight: 165,
  }
}));

export default function BookmarkCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <div>
            <IconButton className={classes.star} aria-label="settings">
              <StarRateIcon style={{ fontSize: 35 }}></StarRateIcon>
            </IconButton>
            <box className={classes.rate}>3.5</box>
          </div>
        }
        title="Docker Starter - What is Docker?"
      />
      <div className={classes.tagContainer}>
        <BookmarkCardTag></BookmarkCardTag>
      </div>
      <CardActions disableSpacing>
          <box className={classes.comments}>
            <box style={{ fontSize: 12 }}>3</box>
            <IconButton>
              <CommentIcon />
            </IconButton>
          </box>
      </CardActions>
    </Card>
  );
}