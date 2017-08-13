import React, { Component } from 'react';
import './Post.css';

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      post: props.post,
    };

    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }

  edit() {
    this.setState({ editing: true });
  }

  delete() {
    this.props.deletePost(this.props.index);
  }

  save() {
    const post = this.state.post;
    post.title = this.newTitle.value;
    post.date = this.newDate.value;
    post.content = this.newContent.value;
    this.props.updatePost(post, this.props.index);
    this.setState({ editing: false });
  }

  renderNormal() {
    return (
      <li className="post w3-panel w3-bottombar w3-border-blue w3-left-align">
        <div className="id">
          <h5 className="w3-text-theme">ID: </h5>
          {this.state.post.id}
        </div>
        <div className="title">
          <h5 className="w3-text-theme">Title: </h5>
          {this.state.post.title}
        </div>
        <div className="date">
          <h5 className="w3-text-theme">Date: </h5>
          {this.state.post.date}
        </div>
        <div className="content">
          <h5 className="w3-text-theme">Content: </h5>
          {this.state.post.content}
        </div>
        <button className="w3-indigo w3-btn" onClick={this.edit}>Edit</button>
        <button className="w3-red w3-btn" onClick={this.delete}>Delete</button>
      </li>
    );
  }

  renderEdit() {
    return (
      <li className="post w3-panel w3-bottombar w3-border-blue w3-left-align">
        <div className="id">
          <h5 className="w3-text-theme">ID: </h5>
          {this.state.post.id}
        </div>
        <div className="title">
          <h5 className="w3-text-theme">Title: </h5>
          <input
            ref={(c) => { this.newTitle = c; }} 
            className="w3-input w3-theme-l3"
            type="text"
            defaultValue={this.state.post.title}
          />
        </div>
        <div className="date">
          <h5 className="w3-text-theme">Date: </h5>
          <input
            ref={(c) => { this.newDate = c; }}
            className="w3-input w3-theme-l3"
            type="text"
            defaultValue={this.state.post.date}
          />
        </div>
        <div className="content">
          <h5 className="w3-text-theme">Content: </h5>
          <textarea
            ref={(c) => { this.newContent = c; }}
            className="w3-input w3-theme-l3"
            defaultValue={this.state.post.content}
          />
        </div>
        <button className="w3-green w3-btn" onClick={this.save}>Save</button>
      </li>
    );
  }

  render() {
    if (this.state.editing === true) {
      return (this.renderEdit());
    }
    return (this.renderNormal());
  }
}
