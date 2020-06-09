import React, { useState, useEffect } from "react";
import "./ConnectionImage.scss";

const ConnectionImage = function ConnectionImage(props) {
  const buttonStyle = {
      position: 'absolute',
      top: props.top,
      left: props.left,
      width: '16px',
      height: '16px',
  }

  var src = "https://zoonoo.github.io/chipmunk/logos/" + props.src;

  // todo: implement click for changing type
  return (
      <button
        style={buttonStyle}
        onClick={() => {
          alert(`clicked: ${JSON.stringify(1)}`);
        }}>
          <img src={src}></img>
      </button>
  );
}

export default ConnectionImage;