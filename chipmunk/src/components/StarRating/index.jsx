import React, { Component } from "react";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Star from '@material-ui/icons/Star';

export default function StarRating() {
  const [value, setValue] = React.useState(-1);

  return (
    <div>
        <Rating
          name="simple-controlled"
          value={value}
          icon="⭑"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
    </div>
  );
}