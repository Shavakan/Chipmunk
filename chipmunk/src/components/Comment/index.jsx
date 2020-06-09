import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList(props) {
  const classes = useStyles();
  const [commentData, setCommentData] = React.useState();

  React.useEffect(() => {
    if (!commentData) {
      setCommentData(props.comments);
    }
  })


  // 시간이 좀 걸림
  if (commentData && commentData.length >=0 ) {
    console.log(commentData)
    return (
      <List className={classes.root}>
        {commentData.map((data) => {
          return (
            <div>
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Someone" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Someone else"
                secondary={
                  <React.Fragment>
                    {/* <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                    Someone else ---
                    </Typography> */}
                    {data.text}
                  </React.Fragment>
              }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            </div>
          );
        })}

      </List>
    );
  } else {
    return (<p>Loading...</p>)
  }
}