import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from '../../api';

// action types
const GET_BOOKMARKS = 'bookmarks/GET_BOOKMARKS';

// action creators
export const getBookmarks = createAction(GET_BOOKMARKS, api.getBookmarks, meta => meta);

// initial state
const initialState = Map({
  bookmarks: []
});

export default handleActions({
  ...pender({
    type: GET_BOOKMARKS,
    onSuccess: (state, action) => {
      const { data } = action.payload;
      console.log("store/reducers/bookmarks GET_BOOKMARKS", data);
      return state.set('bookmarks', Object.values(data));
    }
  })
}, initialState);
