import React from 'react';
import { Input, Button } from 'antd';
import { CommentAreaWrapper } from './PostStyles';

const PostCommentArea = () => (
  <CommentAreaWrapper>
    <Input.TextArea placeholder="Add a comment..." autosize />
    <Button>Post</Button>
  </CommentAreaWrapper>
);

export default PostCommentArea;
