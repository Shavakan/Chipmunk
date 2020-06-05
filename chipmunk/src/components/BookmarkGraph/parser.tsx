
import { Channel, Bookmark, Connection } from './types';
import { getBookmarks, getConnections } from '../../api';
import { TreeNode } from './node';

export async function newTree() : Promise<TreeNode> {
  // const bookmarks : Map<String, Bookmark> = (await getBookmarks({})).data;
  const bookmarks : Bookmark[] = Object.values((await getBookmarks({})).data);
  // const connections : Map<String, Connection> = (await getConnections({})).data;
  const connections : Connection[] = Object.values((await getConnections({})).data);
  // select all bookmarks that are roots (i.e. the connections do not have it as the child.)
  const roots = bookmarks.filter(is_root(connections));

  connections.forEach((x: any) => {
    const parent = bookmarks.find((b: Bookmark) => b.uuid === x.parent_uuid)!;
    const child = bookmarks.find((b: Bookmark) => b.uuid === x.child_uuid)!;
    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push(child);
  });
  console.log("newTree : roots : ", roots);

  // TODO : return multiple roots and draw graph for each of them.
  return roots[0];
}

const is_root = (connections: Connection[]) => {
  return (bm: Bookmark) : Boolean => { 
    console.log(bm); 
    return !connections.some((c : Connection) => {
      bm.uuid === c.child_uuid
    });
  };
};

// TODO remove dummytree.
export const dummyTree: TreeNode = {
    name: 'T',
    children: [
      {
        name: 'A',
        children: [
          { name: 'A1' },
          { name: 'A2' },
          { name: 'A3' },
          {
            name: 'C',
            children: [
              {
                name: 'C1',
              },
              {
                name: 'D',
                children: [
                  {
                    name: 'D1',
                  },
                  {
                    name: 'D2',
                  },
                  {
                    name: 'D3',
                  },
                ],
              },
            ],
          },
        ],
      },
      { name: 'Z' },
      {
        name: 'B',
        children: [{ name: 'B1' }, { name: 'B2' }, { name: 'B3' }],
      },
    ],
  };
