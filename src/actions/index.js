import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  const request = axios.get('http://reduxblog.herokuapp.com/api/posts')

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
