import axios from 'axios';
// import queryString from 'query-string';

const URL = "https://chipmunk-89590.firebaseio.com/";
const user_id = "dc4b3b02-a31a-11ea-bb37-0242ac130002";

// https://chipmunk-89590.firebaseio.com/dc4b3b02-a31a-11ea-bb37-0242ac130002/bookmarks.json
export const getBookmarks = async (user_id = "dc4b3b02-a31a-11ea-bb37-0242ac130002") => await axios.get(`${URL}/users/${user_id}/bookmarks.json`);

// https://chipmunk-89590.firebaseio.com/dc4b3b02-a31a-11ea-bb37-0242ac130002/bookmarks/.json
export const getBookmark = async (bookmark_id: any, user_id = "dc4b3b02-a31a-11ea-bb37-0242ac130002") => await axios.get(`${URL}/users/${user_id}/bookmarks/${bookmark_id}.json`);

// https://chipmunk-89590.firebaseio.com/dc4b3b02-a31a-11ea-bb37-0242ac130002/connections.json
export const getConnections = async (user_id = "dc4b3b02-a31a-11ea-bb37-0242ac130002") => await axios.get(`${URL}/users/${user_id}/connections.json`);

// https://chipmunk-89590.firebaseio.com/dc4b3b02-a31a-11ea-bb37-0242ac130002/comments.json
export const getComments = async (user_id = "dc4b3b02-a31a-11ea-bb37-0242ac130002") => await axios.get(`${URL}/users/${user_id}/comments.json`);

// TODO : define all APIS.
export const insertDummyBookmark = async ({}: any) => {
    const dummyBookmarkBody = {
        "title": "MEDIUM",
        "name": "MEDIUM",
        "uuid": "daaaaaaa-a31a-11ea-bb37-0242ac130002",
        "url": "https://www.medium.com/",
        "rating": 3
    };
    await axios.put(`${URL}/${user_id}/bookmarks/daaaaaaa-a31a-11ea-bb37-0242ac130002.json`, dummyBookmarkBody);

    const dummyCommentBody = {
        "child_uuid": "daaaaaaa-a31a-11ea-bb37-0242ac130002",
        "parent_uuid": "dc4b3cf6-a31a-11ea-bb37-0242ac130002",
        "type": ":thumbs-up:",
        "uuid": "dbbbbbbb-a31a-11ea-bb37-0242ac130002"
    };

    await axios.put(`${URL}/${user_id}/connections/dbbbbbbb-a31a-11ea-bb37-0242ac130002.json`, dummyCommentBody);
};
