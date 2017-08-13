import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.eachPost = this.eachPost.bind(this);
  }

  deletePost(i) {
    const arr = this.props.posts;
    arr.splice(i, 1);
    this.props.updatePosts(arr);
  }

  updatePost(newPost, i) {
    const arr = this.props.posts;
    arr[i] = newPost;
    this.props.updatePosts(arr);
  }
  eachPost(post, i) {
    return <Post key={post.id} index={i} post={post} updatePost={this.updatePost} deletePost={this.deletePost} />;
  }

  render() {
    return (
      <div id="posts" className="w3-panel w3-theme-l4 w3-center">
        <h1 className="w3-theme-l1">Posts</h1>
        <ul className="w3-ul">
          {this.props.posts.map(this.eachPost)}
        </ul>
      </div>
    );
  }
}
