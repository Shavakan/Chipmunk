import React, { useMemo, useEffect, useState } from 'react';
import { Group } from '@vx/group';
import { Tree, hierarchy } from '@vx/hierarchy';
import { LinkHorizontal } from '@vx/shape';
import { LinearGradient } from '@vx/gradient';
import { dummyTree, newTree } from "./parser";
import "./BookmarkGraph.scss";
import { peach, pink, lightpurple, background } from "./constants";
import { TreeNode, Node } from "./node";

const defaultMargin = { top: 10, left: 80, right: 80, bottom: 10 };

export type TreeProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

export default function BookmarkGraph({ width, height, margin = defaultMargin }: TreeProps) {
  const [tree, setTree] = useState(dummyTree);
  const data = useMemo(() => hierarchy(tree), [tree]);
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;

  useEffect(() => {
    async function doEffect() {
      const newtree = await newTree();
      setTree(newtree);
    }
    doEffect();
  }, []);

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <LinearGradient id="lg" from={peach} to={pink} />
      <rect width={width} height={height} rx={14} fill={background} />
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