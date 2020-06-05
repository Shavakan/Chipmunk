
import { TreeNode } from './node';

export class Bookmark implements TreeNode {
    uuid: string;
    url: string;
    rating: 1|2|3|4|5;
    title: string;
    name: string;
    tags: string[];
    children?: this[];
}

export class Connection {
    uuid: string;
    parent_uuid: string;
    child_uuid: string;
    type: string;
}

export class Channel {
    name: string;
    bookmarks: Bookmark[];
}
