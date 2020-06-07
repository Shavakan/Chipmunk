import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CommentIcon from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton';
import StarRateIcon from '@material-ui/icons/StarRate';
import BookmarkCardTag from "../BookmarkCardTag";
import BookmarkPopup from "../BookmarkPopup";
import { getBookmark, getBookmarks } from "../../api";
import "./BookmarkCard.scss";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    maxHeight: 700,
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
    fontSize: 12,
  },
}));


const BookmarkCard = function BookmarkCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [bookmark, setBookmark] = React.useState('');
  const [comments, setComments] = React.useState(0)

  const getBookmarkData = async () => {
    const data = await getBookmark(props.bookmarkId);
    setBookmark(data.data);
  };

  React.useEffect(() => {
    if (!bookmark) {
      getBookmarkData();
    }
  }, []);

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <div>
            <Box className={classes.rate}>★ {bookmark.rating}</Box>
          </div>
        }
        title={bookmark.title}
      />
      <div className={classes.tagContainer}>
        <BookmarkCardTag></BookmarkCardTag>
      </div>
      <CardActions disableSpacing>
          <Box className={classes.comments} flexShrink={0}>
            3 Comments
          </Box>
          <Box flexShrink={0}><BookmarkPopup className={classes.info}></BookmarkPopup></Box>      </CardActions>
    </Card>
  );
}

export default BookmarkCard;