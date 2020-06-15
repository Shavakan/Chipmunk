import React from "react";
import ConnectionImages from "../ConnectionImages"

const ConnectionImagesBox  = function ConnectionImagesBox(props) {
  // overlap을 위한 -props.height / svg의 margin에 해당하는 -props.marginTop / 살짝 어긋난 부분을 위한 -5
  const marginTop = -props.height+props.marginTop-5;
  // svg의 margin에 해당하는 props.marginLeft / bookmark-graph class에 해당하는 160
  const marginLeft = props.marginLeft+160;
  const margin = marginTop + 'px 0px 0px ' + marginLeft + 'px';
  const divStyle = {
    position: 'relative',
    width: 10,
    height: 10,
    margin: margin,
  };

  return (
      <div id="connection-images-box" style={divStyle}>
          {props.enableImages && <ConnectionImages location={props.location} tree={props.tree} connections={props.connections}></ConnectionImages>}
      </div>
  );
}

export default ConnectionImagesBox;