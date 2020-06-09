import React, { useState, useEffect } from "react";
import "./ConnectionImage.scss";
import { setConnectionType } from "../../api";

const ConnectionImage = function ConnectionImage(props) {
  const buttonStyle = {
      position: 'absolute',
      top: props.top,
      left: props.left,
      width: '16px',
      height: '16px',
  }

  var defaultSrc = "";
  var otherSrc = "";
  var defaultType = "";
  var otherType = "";
  if (props.src == 'thumbs-up.png') {
    defaultSrc = "https://zoonoo.github.io/chipmunk/logos/thumbs-up.png";
    otherSrc = "https://zoonoo.github.io/chipmunk/logos/no.jpg";
    defaultType = ":thumbs-up:";
    otherType = ":no:";
  } else {
    otherSrc = "https://zoonoo.github.io/chipmunk/logos/thumbs-up.png";
    defaultSrc = "https://zoonoo.github.io/chipmunk/logos/no.jpg";
    defaultType = ":no:";
    otherType = ":thumbs-up:";
  }
  var [src, setSrc] = useState(defaultSrc);

  // todo: implement click for changing type
  return (
      <button
        style={buttonStyle}
        onClick={() => {
          if (src == defaultSrc) {
            setSrc(otherSrc);
            //setConnectionType(props.connectionUUid, otherType);
          } else {
            setSrc(defaultSrc);
            //setConnectionType(props.connectionUUid, defaultType);
          }
        }}>
          <img src={src}></img>
      </button>
  );
}

export default ConnectionImage;