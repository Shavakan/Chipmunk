import axios from 'axios';
// import queryString from 'query-string';


const URL = "https://chipmunk-89590.firebaseio.com/";
const user_id = "dc4b3b02-a31a-11ea-bb37-0242ac130002";

// https://chipmunk-89590.firebaseio.com/dc4b3b02-a31a-11ea-bb37-0242ac130002/bookmarks.json
export const getBookmarks = async ({}: any) => axios.get(`${URL}/${user_id}/bookmarks.json`);

// https://chipmunk-89590.firebaseio.com/dc4b3b02-a31a-11ea-bb37-0242ac130002/connections.json
export const getConnections = async ({}: any) => axios.get(`${URL}/${user_id}/connections.json`);

// https://chipmunk-89590.firebaseio.com/dc4b3b02-a31a-11ea-bb37-0242ac130002/comments.json
export const getComments = async ({}: any) => axios.get(`${URL}/${user_id}/comments.json`);
