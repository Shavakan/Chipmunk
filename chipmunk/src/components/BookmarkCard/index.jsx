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
import { getBookmark, getComments } from "../../api";

const width = 250;
const height = 50;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: width,
    height: height,
  },
  tagContainer: {
    flex: 1,
    paddingLeft: theme.spacing(1),
  },
  star: {
    paddingLeft: 1,
    paddingTop: 10,
    paddingRight: 1,
  },
  rate: {
    fontSize: 14,
    paddingTop: 8,
    paddingLeft: 0,
    paddingRight: 10,
  },
}));


const BookmarkCard = function BookmarkCard({bookmark }) {
  const classes = useStyles();
  // const [bookmark, setBookmark] = React.useState('');
  const [comments, setComments] = React.useState('');

  const getBookmarkData = async () => {
    // const data = (await getBookmark(props.bookmarkId)).data;
    // setBookmark(data);

    const comments = Object.values((await getComments()).data);
    const commentsData = [];
    comments.forEach(function(comment) {
      if (comment.url === data.url) {
        commentsData.push(comment);
      }
    })
    setComments(commentsData);
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
        titleTypographyProps={{variant:'body2' }}
        title={bookmark.title}
      />
      <BookmarkPopup bookmark={bookmark} bookmarkId={bookmark.uuid} comments={comments} width={width} height={height}></BookmarkPopup>
    </Card>
  );
}

export default BookmarkCard;