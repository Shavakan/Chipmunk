import React, { useState, useEffect } from "react";
import { setConnectionType } from "../../api";

const ConnectionImageMenu = function ConnectionImageMenu(props) {
  const size = props.size;
  const padding = 4;

  const buttonStyle = {
      position: 'absolute',
      top: `${props.top+size+padding}px`,
      left: `${props.left-(size+padding)/2}px`,
      width: `${size}px`,
      height: `${size}px`,
  }

  const buttonStyle2 = {
      position: 'absolute',
      top: `${props.top+size+padding}px`,
      left: `${props.left+(size+padding)/2}px`,
      width: `${size}px`,
      height: `${size}px`,
  }

  const onClick = (index) => {
    props.setSrc(props.src[index]);
    props.setShowMenu(false);

    var str = props.src[index].split('/');
    var type = str[str.length-1];

    var newData = props.connectionData;
    newData["type"] = type;

    setConnectionType(newData["uuid"], newData)
  }

  return (
    <>
      <button
        style={buttonStyle}
        onClick={() => {
          onClick(0);
        }}>
          <img src={props.src[0]}>
          </img>
      </button>
      <button
        style={buttonStyle2}
        onClick={() => {
          onClick(1);
        }}>
          <img src={props.src[1]}>
          </img>
      </button>
    </>
  );
}

export default ConnectionImageMenu;