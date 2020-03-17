import React from 'react';
import A from '../A';
import { ContentWrapper } from './PostStyles';

const PostContent = () => (
  <ContentWrapper>
    <div className="total-like">5 likes</div>
    <div className="caption">
      <A href="#" className="ins-user">
        datng14
      </A>
      <span>Ngày đầu tiên của e</span>
    </div>
  </ContentWrapper>
);

export default PostContent;
