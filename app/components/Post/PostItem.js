import React from 'react';
import PostAuthor from './PostAuthor';
import PostPhoto from './PostPhoto';
import PostButton from './PostButton';
import PostContent from './PostContent';
import PostCommentList from './PostCommentList';
import PostCommentArea from './PostCommentArea';
import { ItemWrapper } from './PostStyles';

const PostItem = () => {
  return (
    <ItemWrapper>
      <PostAuthor />
      <PostPhoto />
      <PostButton />
      <PostContent />
      <PostCommentList />
      <PostCommentArea />
    </ItemWrapper>
  );
};

export default PostItem;
