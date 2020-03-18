import React from 'react';
import { AuthorWrapper } from './PostStyles';
import Img from '../Img';
import AvatarDefault from '../../assets/images/avatar.jpg';
import A from '../A';
import Icon from '../Icon';

const PostAuthor = () => (
  <AuthorWrapper>
    <div>
      <Img className="author-avatar" alt="Avatar default" src={AvatarDefault} />
      <A className="author-name">datng14</A>
    </div>
    <Icon icon="more" />
  </AuthorWrapper>
);

export default PostAuthor;
