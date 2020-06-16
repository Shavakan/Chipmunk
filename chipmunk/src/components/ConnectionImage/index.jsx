import React, { useState, useEffect } from "react";
import ConnectionImageMenu from "../ConnectionImageMenu";
import "./ConnectionImage.scss";

const ConnectionImage = function ConnectionImage(props) {
  const size = 24;
  const buttonStyle = {
      position: 'absolute',
      top: props.top,
      left: props.left,
      width: `${size}px`,
      height: `${size}px`,
  }

  var path = "https://zoonoo.github.io/chipmunk";
  var defaultType = props.src;
  var defaultSrc = `${path}/logos/${defaultType}`;
  var otherType = "arrow_right.png";
  if (defaultType == "arrow_right.png") {
    otherType = "arrow_right_left.png";
  }
  var otherSrc = `${path}/logos/${otherType}`;

  var [src, setSrc] = useState(defaultSrc);
  var [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <button
        style={buttonStyle}
        onClick={() => {
          setShowMenu(!showMenu);
        }}>
        <img src={src}>
        </img>
      </button>
      {showMenu && <ConnectionImageMenu
                      src={[defaultSrc, otherSrc]}
                      top={props.top}
                      left={props.left}
                      size={size}
                      connectionData={props.connectionData}
                      setSrc={setSrc}
                      setShowMenu={setShowMenu}></ConnectionImageMenu>}
    </>
  );
}

export default ConnectionImage;