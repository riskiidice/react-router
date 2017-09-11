import { FETCH_POSTS } from '../actions/index';
export default function (state = null, action) {
  switch (action.type) {
    case action.type == FETCH_POSTS:
      return state;
  }
  return state;
}
