import { FETCH_POSTS } from '../actions/index';
export default (state, action) => {
  console.log(state);
  switch (action.type) {
    case action.type == FETCH_POSTS:
      console.log('fetch post');
  }
}
