import React, { Component } from "react";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Star from '@material-ui/icons/Star';
import { patchBookmark } from "../../api";

export default function StarRating(props) {
  const [value, setValue] = React.useState(props.rating);
  const [bookmarkId, setBookmarkId] = React.useState();

  React.useEffect(() => {
    if (!bookmarkId) {
      setBookmarkId(props.bookmarkId);
    }
  })

    return (
      <div>
          <Rating
            name="simple-controlled"
            value={value}
            icon="⭑"
            onChange={(event, newValue) => {
              setValue(newValue);
              patchBookmark(bookmarkId, {
                    rating: newValue
              })}
            }
          />
      </div>
  );
}