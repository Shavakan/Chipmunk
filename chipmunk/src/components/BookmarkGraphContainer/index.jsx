import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmarkActions from '../../store/reducers/bookmarks';
import * as connectionActions from '../../store/reducers/connections';
import BookmarkGraph from '../BookmarkGraph';
import { parseBookmarks } from './parser';
import ConnectionImagesBox from "../ConnectionImagesBox";
import BookmarkPopupContainer from "../BookmarkPopupContainer";

const BookmarkGraphContainer = ({ 
    tree,
    connections,
    bookmarks,
    width,
    height,
    margin,
    bookmarkActions,
    connectionActions,
    location,
}) => {
    const [enableImages, setEnableImages] = useState(false);

    useEffect(
        () => {
            (async () => {
                setEnableImages(true);
            })();
        }, [tree]
    );

    useEffect(
        () => {
            (async () => {
                bookmarkActions.getBookmarks();
                connectionActions.getConnections();
            })();
        }, []
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
                location={location}
                connections={connections}
                enableImages={enableImages}
                width={width}
                height={height}
                marginLeft={margin.left}
                marginTop={margin.top}>
            </ConnectionImagesBox>

            <BookmarkPopupContainer
              width={width}
              height={height}
              margin={margin}
              tree={tree}
              bookmarks={bookmarks}
            >
            </BookmarkPopupContainer>
        </div>
        
    );
};



function mapStateToProps(state) {
    const bookmarks = state.bookmarks.get('bookmarks') || [];
    const connections = state.connections.get('connections') || [];
    console.log("BookmarkGraphContainer mapStateToProps : ", bookmarks, connections);
    return { 
        tree: parseBookmarks(bookmarks, connections), 
        connections: connections,
        bookmarks: bookmarks
    };
}



export default connect(
    mapStateToProps,
    (dispatch) => ({
        bookmarkActions: bindActionCreators(bookmarkActions, dispatch),
        connectionActions: bindActionCreators(connectionActions, dispatch),
    })
)(BookmarkGraphContainer);
