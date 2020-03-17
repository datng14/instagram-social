import React from 'react';
import { AuthorWrapper } from './PostStyles';
import Img from '../Img';
import AvatarDefault from '../../images/avatar.jpg';
import MoreIcon from '../../images/icons/more.svg';

const PostAuthor = () => (
  <AuthorWrapper>
    <div>
      <Img className="author-avatar" alt="Avatar default" src={AvatarDefault} />
      <span className="author-name">datng14</span>
    </div>
    <Img className="author-icon" alt="more option" src={MoreIcon} />
  </AuthorWrapper>
);

export default PostAuthor;
