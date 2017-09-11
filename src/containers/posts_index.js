import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions/index'

class PostsIndex extends Component {

  componentDidMount(props){
    this.props.fetchPosts();
    console.log(this.props.posts);
  }

  fetchAllPosts(data){

  }
  render(){
    return(
        <div>
          EIEI { this.fetchAllPosts("mock") }
        </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPosts}, dispatch);
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
