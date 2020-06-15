import axios from 'axios';
// import queryString from 'query-string';

const URL = "https://chipmunk-89590.firebaseio.com/users";
const default_user_id = "dc4b3b02-a31a-11ea-bb37-0242ac130002";
const channel_id = "Docker";

// https://chipmunk-89590.firebaseio.com/users/dc4b3b02-a31a-11ea-bb37-0242ac130002/Docker/bookmarks.json
export const getBookmarks = async (user_id = default_user_id) => await axios.get(`${URL}/${user_id}/${channel_id}/bookmarks.json`);

// https://chipmunk-89590.firebaseio.com/users/dc4b3b02-a31a-11ea-bb37-0242ac130002/Docker/bookmarks/.json
export const getBookmark = async (bookmark_id: any, user_id = default_user_id) => await axios.get(`${URL}/${user_id}/${channel_id}/bookmarks/${bookmark_id}.json`);

export const patchBookmark = async (bookmark_id: any, body: any, user_id = default_user_id) => {
    await axios.patch(`${URL}/${user_id}/${channel_id}/bookmarks/${bookmark_id}.json`, body);
};

// https://chipmunk-89590.firebaseio.com/users/dc4b3b02-a31a-11ea-bb37-0242ac130002/Docker/connections.json
export const getConnections = async (user_id = default_user_id) => await axios.get(`${URL}/${user_id}/${channel_id}/connections.json`);

// https://chipmunk-89590.firebaseio.com/users/comments.json
export const getComments = async () => await axios.get(`${URL}/comments.json`);

export const setConnectionType = async (uuid: string, data: string) => {
    await axios.patch(`${URL}/${default_user_id}/${channel_id}/connections/${uuid}.json`, data);
}