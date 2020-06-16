import React from 'react';
import { HierarchyPointNode } from '@vx/hierarchy/lib/types';
import { Group } from '@vx/group';
import BookmarkCard from "../BookmarkCard";

// 5 : for padding
const width = 250 + 5;
const height = 50 + 5;

export interface TreeNode {
    uuid: string;
    title: string;
    children?: this[];
  }
  
  type HierarchyNode = HierarchyPointNode<TreeNode>;
  
  /** Handles rendering Root, Parent, and other Nodes. */
  export function Node({ node }: { node: HierarchyNode }) {
    const isRoot = node.depth === 0;
    const isParent = !!node.children;
  
    if (isRoot) return <RootNode node={node} />;
    if (isParent) return <ParentNode node={node} />;
  
    return (
      <Group id={node.data.uuid} top={node.x} left={node.y}>
        <foreignObject className="card" x={-width/2} y={-height/2} width={width} height={height} >
          <BookmarkCard bookmark={node.data}></BookmarkCard>
        </foreignObject>
      </Group>
    );
  }
  
  function RootNode({ node }: { node: HierarchyNode }) {
    return (
      <Group id={node.data.uuid} top={node.x} left={node.y}>
        <foreignObject className="card" x={-width/2} y={-height/2} width={width} height={height} >
          <BookmarkCard bookmark={node.data}></BookmarkCard>
        </foreignObject>
      </Group>
    );
  }
  
  function ParentNode({ node }: { node: HierarchyNode }) {
    return (
      <Group id={node.data.uuid} top={node.x} left={node.y}>
        <foreignObject className="card" x={-width/2} y={-height/2} width={width} height={height} >
          <BookmarkCard bookmark={node.data}></BookmarkCard>
        </foreignObject>
      </Group>
    );
  }