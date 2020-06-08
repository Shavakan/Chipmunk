import React, { useState, useEffect } from "react";
import ConnectionImage from "../ConnectionImage";

const ConnectionImages = function ConnectionImages(props) {
  var [images, setImages] = useState([]);

  useEffect(() => {
      var newImages = [];
      var pathArray = document.getElementById('bookmark-graph-svg').getElementsByTagName('path');
      for (var i = 0; i < pathArray.length; i ++) {
        var dAttribute = pathArray[i].getAttribute('d').split(/(?=[LMC])/);
        var firstAttribute = dAttribute[0].substring(1).split(',');
        var lastAttribute = dAttribute[dAttribute.length - 1].substring(1).split(',');
        var pointX = (Number(firstAttribute[0]) + Number(lastAttribute[lastAttribute.length - 2])) / 2;
        var pointY = (Number(firstAttribute[1]) + Number(lastAttribute[lastAttribute.length - 1])) / 2;
        // image anchor
        pointX -= 8;
        pointY -= 8;
        // todo: get connection type
        newImages.push({id: i, top: pointY, left: pointX, src: 'thumbs-up.png'});
      }

      setImages(newImages);
  }, []);

  return (
    <>
      {images.map(image => (
        <ConnectionImage
          key={image.id}
          top={image.top}
          left={image.left}
          src={image.src}></ConnectionImage>
      ))}
    </>
  );
}

export default ConnectionImages;