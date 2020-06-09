import axios from 'axios';
// import queryString from 'query-string';

const URL = "https://chipmunk-89590.firebaseio.com/users";
const user_id = "dc4b3b02-a31a-11ea-bb37-0242ac130002";

// https://chipmunk-89590.firebaseio.com/users/dc4b3b02-a31a-11ea-bb37-0242ac130002/channels/bookmarks.json
export const getBookmarks = async (user_id = "dc4b3b02-a31a-11ea-bb37-0242ac130002") => await axios.get(`${URL}/${user_id}/channels/bookmarks.json`);

// https://chipmunk-89590.firebaseio.com/users/dc4b3b02-a31a-11ea-bb37-0242ac130002/channels/bookmarks/.json
export const getBookmark = async (bookmark_id: any, user_id = "dc4b3b02-a31a-11ea-bb37-0242ac130002") => await axios.get(`${URL}/${user_id}/channels/bookmarks/${bookmark_id}.json`);

export const patchBookmark = async (bookmark_id: any, body: any, user_id = "dc4b3b02-a31a-11ea-bb37-0242ac130002") => {
    await axios.patch(`${URL}/${user_id}/channels/bookmarks/${bookmark_id}.json`, body);
};

// https://chipmunk-89590.firebaseio.com/users/dc4b3b02-a31a-11ea-bb37-0242ac130002/channels/connections.json
export const getConnections = async (user_id = "dc4b3b02-a31a-11ea-bb37-0242ac130002") => await axios.get(`${URL}/${user_id}/channels/connections.json`);

// https://chipmunk-89590.firebaseio.com/users/comments.json
export const getComments = async () => await axios.get(`${URL}/comments.json`);

// TODO : define all APIS.
export const insertDummyBookmark = async ({}: any) => {
    const dummyBookmarkBody = {
        "uuid": "daaaaaaa-a31a-11ea-bb37-0242ac130002",
        "url": "https://www.medium.com/",
        "rating": 3,
        "title": "MEDIUM",
        "tags": ["Docker"]
    };
    await axios.put(`${URL}/${user_id}/channels/bookmarks/daaaaaaa-a31a-11ea-bb37-0242ac130002.json`, dummyBookmarkBody);

    const dummyConnectionBody = {
        "parent_uuid": "kjlk-adas-bjkj-jkhk-sajs",
        "child_uuid": "daaaaaaa-a31a-11ea-bb37-0242ac130002",
        "type": ":thumbs-up:",
        "uuid": "dbbbbbbb-a31a-11ea-bb37-0242ac130002"
    };

    await axios.put(`${URL}/${user_id}/channels/connections/dbbbbbbb-a31a-11ea-bb37-0242ac130002.json`, dummyConnectionBody);
};

export const setConnectionType = async (uuid: string, type: string) => {
    await axios.put(`${URL}/${user_id}/channels/connections/${uuid}/type`, type);
}