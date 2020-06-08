import React, { useState, useEffect } from "react";

const ConnectionImage = function ConnectionImage(props) {
  const imgStyle = {
      position: 'absolute',
      top: props.top,
      left: props.left,
  };

  var src = "/logos/" + props.src;

  // todo: implement click for changing type
  return (
      <img src={src} style={imgStyle}></img>
  );
}

export default ConnectionImage;