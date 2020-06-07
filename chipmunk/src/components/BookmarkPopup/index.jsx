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
    },
    info: {
        fontSize: 15,
    }
  }));
  
  export default function BookmarkPopup() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Docker Starter - What is Docker?</h2>
        <StarRating></StarRating>
        <Comment></Comment>
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
            >
            Save
            </Button>
        </div>
      </div>
    );
  
    return (
      <div style={{marginRight: "10px"}}>
        <Button onClick={handleOpen} className={classes.info}>More Info</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }