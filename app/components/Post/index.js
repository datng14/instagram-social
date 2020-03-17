import React from 'react';
import { PostWrapper } from './PostStyles';
import PostList from './PostList';

const Post = props => {
  return (
    <PostWrapper>
      <PostList />
    </PostWrapper>
  );
};

export default Post;
