import React, { useMemo, useState, useEffect } from 'react';
import { Group } from '@vx/group';
import { Tree, hierarchy } from '@vx/hierarchy';
import { LinkHorizontal } from '@vx/shape';
import { LinearGradient } from '@vx/gradient';
import "./BookmarkGraph.scss";
import { peach, pink, lightpurple, background } from "./constants";
import { TreeNode, Node } from "./node";

import { insertDummyBookmark } from "../../api";

export type GraphProps = {
  tree: TreeNode
  width: number;
  height: number;
  margin: { top: number; right: number; bottom: number; left: number };
  setTree?: Function
};

// MIT License

// Copyright (c) 2017-2018 Harrison Shoff

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// Code adapted from the example : 
// https://github.com/hshoff/vx/blob/master/packages/vx-demo/src/sandboxes/vx-tree/Example.tsx
const BookmarkGraph = function BookmarkGraph({ tree, width, height, margin }: GraphProps) {
  const data = useMemo(() => hierarchy(tree), [tree]);
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;

  useEffect(
    () => {
      (async () => {
        console.log("BookmarkGraph useEffect : ", tree);
        await handleUpdateTree();
        console.log("BookmarkGraph useEffect after update : ", tree);
      })();
    }
  ,[]);

  const handleUpdateTree = async () => {
    setTimeout(async function() { await insertDummyBookmark({}); }, 5000);
  };

  return width < 10 ? null : (
    <svg id="bookmark-graph-svg" width={width} height={height} className="bookmark-graph">
      <LinearGradient id="lg" from={peach} to={pink} />
      {/* <rect width={width} height={height} rx={14} fill={background} /> */}
      <Tree<TreeNode> root={data} size={[yMax, xMax]}>
        {tree => (
          <Group top={margin.top} left={margin.left}>
            {tree.links().map((link, i) => (
              <LinkHorizontal
                key={`link-${i}`}
                data={link}
                stroke={lightpurple}
                strokeWidth="1"
                fill="none"
              />
            ))}
            {tree.descendants().map((node, i) => (
              <Node key={`node-${i}`} node={node} />
            ))}
          </Group>
        )}
      </Tree>
    </svg>
  );
}

export default BookmarkGraph;
