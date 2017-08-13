import React, { Component } from 'react';
import './Write.css';

export default class Write extends Component {
  constructor(props) {
    super(props);
    this.getID = this.getID.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  getID() {
    for (let i = 0; i < 10000; i++) {
      if (this.isUnique(i)) {
        return i;
      }
    }
    return 10000;
  }

  isUnique(id) {
    const posts = this.props.posts;
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === id) {
        return false;
      }
    }
    return true;
  }

  addPost() {
    const posts = this.props.posts;
    posts.push(
      {
        id: this.getID(),
        title: this.title.value,
        date: this.date.value,
        content: this.content.value,
      },
    );
    this.props.updatePosts(posts);
  }

  render() {
    return (
      <div id="write" className="w3-panel w3-theme-l4 w3-center">
        <h1 className="w3-theme-l1">Write</h1>
        <form onSubmit={this.handleSubmit}>
          <table id="writeForm" className="w3-table w3-section w3-text-theme">
            <tbody>
              <tr><td>Title: </td>
                <td><input ref={(c) => { this.title = c; }} type="text" className="w3-input w3-theme-l3" />
                </td></tr>
              <tr><td>Date: </td>
                <td><input ref={(c) => { this.date = c; }} type="text" className="w3-input w3-theme-l3" />
                </td></tr>
              <tr><td>Content: </td>
                <td>
                  <textarea ref={(c) => { this.content = c; }} className="w3-input w3-theme-l3" />
                </td></tr>
            </tbody>
          </table>
          <input type="button" value="Submit" className="w3-btn w3-green w3-margin-bottom" onClick={this.addPost} />
        </form>
      </div>
    );
  }
}
