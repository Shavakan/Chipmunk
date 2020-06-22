import React, { Component } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import SaveIcon from '@material-ui/icons/Save';
import Comment from "../Comment";
import CommentInput from "../CommentInput";
import StarRating from "../StarRating"
import "./BookmarkPopup.scss";

function getModalStyle() {
  const top = 40;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

// Code adapted from hanblueblue example:
// https://velog.io/@hanblueblue/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B2%8C%EC%8B%9C%ED%8C%90-front-%EB%A6%AC%ED%8E%99%ED%86%A0%EB%A7%81-5-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%88%98%EC%A0%95-%EC%9A%94%EC%B2%AD%ED%95%98%EA%B8%B0
export default function BookmarkPopup(props) {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  
  const buttonStyle = {
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: `${props.width}px`,
      height: `${props.height}px`,
      cursor: "pointer",
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <a href={props.bookmark.url} target="_blank"><h2 id="simple-modal-title">{props.bookmark.title}</h2></a>
      <StarRating rating={props.bookmark.rating} bookmarkId={props.bookmarkId}></StarRating>
      <Comment comments={props.comments}></Comment>
      <CommentInput></CommentInput>
      <div id="buttons">
          <Button
              variant="contained"
              color="secondary"
              size="small"
              className={classes.button}
              // startIcon={<DeleteIcon />}
          >Delete
          </Button>
          <div className="divider"/>
          <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              // startIcon={<SaveIcon />}
              onClick={() => { setOpen(false); }}
          >
          Save
          </Button>
      </div>
    </div>
  );

  return (
    <div>
      <button style={buttonStyle}
              onClick={handleOpen}></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {body}
      </Modal>
    </div>
  );
}
