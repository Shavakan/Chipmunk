import React, { useState, useEffect } from "react";
import ConnectionImage from "../ConnectionImage";

const ConnectionImages = function ConnectionImages(props) {
  var [images, setImages] = useState([]);
  var [connectionUUid, setConnectionUUid] = useState("");

  useEffect(() => {
      var nodes = [];
      var vxGroupArray = document.getElementsByClassName('vx-group');
      for (var i=0; i<vxGroupArray.length; i++) {
        var id = vxGroupArray[i].getAttribute('id');
        if (id == null) continue;

        var translate = vxGroupArray[i].getAttribute('transform');
        nodes.push({translate: translate, id: id});
      }

      var newImages = [];
      var pathArray = document.getElementById('bookmark-graph-svg').getElementsByTagName('path');
      for (var i = 0; i < pathArray.length; i ++) {
        var dAttribute = pathArray[i].getAttribute('d').split(/(?=[LMC])/);
        var firstAttribute = dAttribute[0].substring(1).split(',');
        var lastAttribute = dAttribute[dAttribute.length - 1].substring(1).split(',');

        var parentX = Number(firstAttribute[0]);
        var parentY = Number(firstAttribute[1]);
        var childX = Number(lastAttribute[lastAttribute.length - 2]);
        var childY = Number(lastAttribute[lastAttribute.length - 1]);

        var parentStr = 'translate(' + parentX + ', ' + parentY + ')';
        var result = nodes.filter(node => node.translate == parentStr);
        var childStr = 'translate(' + childX + ', ' + childY + ')';
        var result2 = nodes.filter(node => node.translate == childStr);

        var parentNodeId = result[0].id;
        var childNodeId = result2[0].id;
        var type = 'thumbs-up.png';
        for (var key in props.connections) {
          if (parentNodeId == props.connections[key]['parent_uuid'] && childNodeId == props.connections[key]['child_uuid']) {
            if (props.connections[key]['type'] == ':no:') {
              type = 'no.jpg';
            }
            setConnectionUUid(props.connections[key]['uuid']);
            break;
          }
        }

        // 12 : image anchor
        var pointX = (parentX + childX) / 2 - 12;
        var pointY = (parentY + childY) / 2 - 12;

        newImages.push({id: i, top: pointY, left: pointX, src: type});
      }

      setImages(newImages);
  }, []);

  return (
    <>
      {images.map(image => (
        <ConnectionImage
          connectionUUid={connectionUUid}
          key={image.id}
          top={image.top}
          left={image.left}
          src={image.src}></ConnectionImage>
      ))}
    </>
  );
}

export default ConnectionImages;