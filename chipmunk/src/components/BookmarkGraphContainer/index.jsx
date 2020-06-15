import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmarkActions from '../../store/reducers/bookmarks';
import * as connectionActions from '../../store/reducers/connections';
import BookmarkGraph from '../BookmarkGraph';
import { parseBookmarks } from './parser';
import ConnectionImagesBox from "../ConnectionImagesBox";

// import { TreeNode } from "../BookmarkGraph/node";
// // Same as GraphProps
// export type BookmarkGraphContainerProps = {
//   tree: TreeNode
//   tree_?: TreeNode
//   width: number;
//   height: number;
//   margin?: { top: number; right: number; bottom: number; left: number };
// }

const defaultMargin = { top: 10, left: 80, right: 80, bottom: 10 };
const BookmarkGraphContainer = ({ tree, width, height, margin = defaultMargin, bookmarkActions, connectionActions }) => {

    const [enableImages, setEnableImages] = useState(false);

    useEffect(
        () => {
            (async () => {
                console.log("BookmarkGraphContainer : set image true");
                setEnableImages(true);
            })();
        },
        [tree]
    );

    useEffect(
        () => {
            (async () => {
                bookmarkActions.getBookmarks();
                connectionActions.getConnections();
                // setEnableImages(true);
            })();
        },
        []
    );


    return (
        <div>
            <BookmarkGraph
                tree={tree}
                width={width}
                height={height}
                margin={margin}
            >
            </BookmarkGraph>
            <ConnectionImagesBox
                enableImages={enableImages}
                tree={tree}
                width={width}
                height={height}
                marginLeft={margin.left}
                marginTop={margin.top}>
            </ConnectionImagesBox>
        </div>
        
    );
};



function mapStateToProps(state) {
    const bookmarks = state.bookmarks.get('bookmarks') || [];
    const connections = state.connections.get('connections') || [];
    console.log("BookmarkGraphContainer mapStateToProps : ", bookmarks, connections);
    return { tree: parseBookmarks(bookmarks, connections) }
}



export default connect(
    mapStateToProps,
    (dispatch) => ({
        bookmarkActions: bindActionCreators(bookmarkActions, dispatch),
        connectionActions: bindActionCreators(connectionActions, dispatch),
    })
)(BookmarkGraphContainer);
