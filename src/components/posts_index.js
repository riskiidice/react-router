import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

  componentDidMount(props){
      this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
        <Link to={`/posts/${post.id}`} key={ post.id }>
            <li className="list-group-item" >
              { post.title }
            </li>
        </Link>
      );
    });
  }


  render(){
    return(
        <div>
           <h3>All Posts</h3>
          <div className="text-xs-right">
              <Link
                className="btn btn-primary"
                to="/posts/new"
                >Add Post</Link>
          </div>
          <ul className="list-group">
            { this.renderPosts() }
          </ul>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts:state.posts };
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
