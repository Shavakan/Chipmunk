
import { Bookmark, Connection } from '../BookmarkGraph/types';
import { getBookmarks, getConnections } from '../../api';
import { TreeNode } from '../BookmarkGraph/node';


export async function newTree() : Promise<TreeNode> {
  const bookmarks : Bookmark[] = Object.values((await getBookmarks()).data || {});
  const connections : Connection[] = Object.values((await getConnections()).data || {});
  return parseBookmarks(bookmarks, connections);
}

export function parseBookmarks(bookmarks: Bookmark[], connections: Connection[]) : TreeNode {
  // select all bookmarks that are roots (i.e. the connections do not have it as the child.)
  const roots = bookmarks.filter(is_root(connections));

  connections.forEach((x: any) => {
    const parent = bookmarks.find((b: Bookmark) => b.uuid === x.parent_uuid)!;
    const child = bookmarks.find((b: Bookmark) => b.uuid === x.child_uuid)!;
    if (!!parent) {
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(child);
    }
  });
  // TODO : return multiple roots and draw graph for each of them.
  return roots[0] || {};
}

const is_root = (connections: Connection[]) => {
  return (bm: Bookmark) : Boolean => { 
    return !connections.some((c : Connection) => {
      return bm.uuid == c.child_uuid
    });
  };
};
