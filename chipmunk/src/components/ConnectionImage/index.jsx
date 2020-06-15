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

  var path = props.location["origin"];
  var defaultType = props.src;
  var defaultSrc = `${path}/logos/${defaultType}`;
  var otherSrc = "";
  var otherType = "";
  if (defaultType == "arrow_right.png") {
    otherType = "arrow_right_left.png";
  } else {
    otherType = "arrow_right.png";
  }
  otherSrc = `${path}/logos/${otherType}`;
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