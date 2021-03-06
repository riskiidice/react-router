import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';
import _ from 'lodash';
export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload); //return objects that not in omit
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data,"id");
    case FETCH_POST:
      return { ...state , [action.payload.data.id]: action.payload.data }

  }
  return state;
}
