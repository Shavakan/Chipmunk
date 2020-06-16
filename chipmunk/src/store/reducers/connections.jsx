import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from '../../api';

// action types
const GET_CONNECTIONS = "connections/GET_CONNECTIONS";

// action creators
export const getConnections = createAction(GET_CONNECTIONS, api.getConnections, meta => meta);

// initial state
const initialState = Map({
  connections: []
});

export default handleActions({
  ...pender({
    type: GET_CONNECTIONS,
    onSuccess: (state, action) => {
      const { data } = action.payload;
      return state.set('connections', Object.values(data));
    }
  })
}, initialState);

