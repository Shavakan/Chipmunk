import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmarkActions from '../../store/reducers/bookmarks';
import * as connectionActions from '../../store/reducers/connections';
import BookmarkGraph from '../BookmarkGraph';
import { parseBookmarks } from './parser';
import ConnectionImagesBox from "../ConnectionImagesBox";

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
                bookmarks={bookmarks}
                width={width}
                height={height}
                margin={margin}
            >
            </BookmarkGraph>

            <ConnectionImagesBox
                tree={tree}
                location={location}
                connections={connections}
                enableImages={enableImages}
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

    const width = 1200;
    const height = 1200*0.6;

    return { 
        tree: parseBookmarks(bookmarks, connections), 
        connections: connections,
        bookmarks: bookmarks,
        width: width,
        height: height,
    };
}



export default connect(
    mapStateToProps,
    (dispatch) => ({
        bookmarkActions: bindActionCreators(bookmarkActions, dispatch),
        connectionActions: bindActionCreators(connectionActions, dispatch),
    })
)(BookmarkGraphContainer);
