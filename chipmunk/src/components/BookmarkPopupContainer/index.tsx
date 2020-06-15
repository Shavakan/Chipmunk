
import React, { CSSProperties } from "react";
import Typography from '@material-ui/core/Typography';
import BookmarkCard from "../BookmarkCard";
import { Bookmark } from "../BookmarkGraph/types"; 

export type Props = {
    margin: any;
    width: any;
    height: any;
    bookmarks: Bookmark[];
}


export default function BookmarkPopupContainer(props: Props) {

    const divStyle: CSSProperties = {
        position: 'relative',
        width: props.width,
        height: props.height,
        margin: `0px 0px 0px ${props.margin.left + 160}px`
    }


    console.log("BookmarkPopupContainer ", props.bookmarks.length, props.bookmarks);

    return (
        <div id="bookmark-popup-container" style={divStyle}>
            {props.bookmarks.map(bm => (
                <BookmarkCard key={bm.uuid} bookmark={bm} bookmarkId="daaaaaaa-a31a-11ea-bb37-0242ac130002">
                </BookmarkCard>
            ))}
        </div>
    );
}