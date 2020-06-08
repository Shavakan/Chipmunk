import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChannelSideBar from "../ChannelSideBar";
import BookmarkMenuBar from "../BookmarkMenuBar";
import BookmarkGraph from "../BookmarkGraph";

import { newTree } from "../BookmarkGraph/parser";
import ConnectionImagesBox from "../ConnectionImagesBox";

const defaultMargin = { top: 10, left: 80, right: 80, bottom: 10 };

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 96,
    backgroundColor: "#934B00",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
}));

// export type TopMenuProps = {
// }

const TopMenu = function() {
  const classes = useStyles();
  const [tree, setTree] = useState({});
  const [enableImages, setEnableImages] = useState(false);

  // The effect to run when the component is generated.
  useEffect(
    () => {
      (async () => {
        const newtree = await newTree();
        console.log("TopMenu : ", newtree)
        setTree(newtree);
        setEnableImages(true);
      })();
    }, []);

  const width = 600;
  const height = 600*0.6;

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h3" color="inherit" className={classes.title}>
            My Cheek Pouch
          </Typography>
          <ChannelSideBar></ChannelSideBar>
        </Toolbar>
        <BookmarkMenuBar></BookmarkMenuBar>
      </AppBar>
      <BookmarkGraph 
        width={width}
        height={height}
        margin={defaultMargin}
        tree={tree}
        setTree={setTree}
      ></BookmarkGraph>
      <ConnectionImagesBox
        enableImages={enableImages}
        width={width}
        height={height}
        marginLeft={defaultMargin.left}
        marginTop={defaultMargin.top}></ConnectionImagesBox>
    </div>
  );
}

export default TopMenu;
