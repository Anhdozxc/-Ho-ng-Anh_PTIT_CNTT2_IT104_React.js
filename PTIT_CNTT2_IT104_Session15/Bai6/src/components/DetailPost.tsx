import { Component } from "react";

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface DetailPostProps {
  post: Post;
}

export default class DetailPost extends Component<DetailPostProps> {
  render() {
    const { post } = this.props;
    return (
      <div>
        <p>
          <b>Id: {post.id}</b>
        </p>
        <p>
          <b>Title: {post.title}</b>
        </p>
        <p>
          <b>Content: {post.content}</b>
        </p>
        <p>
          <b>Author: {post.author}</b>
        </p>
        <hr />
      </div>
    );
  }
}
