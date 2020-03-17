import React from 'react';
import Img from '../Img';
import { PhotoWrapper } from './PostStyles';
import PhotoContent from '../../images/photo-content.jpg';

const PostPhoto = () => (
  <PhotoWrapper>
    <Img className="photo-content" src={PhotoContent} alt="photo content" />
  </PhotoWrapper>
);

export default PostPhoto;
