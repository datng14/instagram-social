import React from 'react';
import { Button } from 'antd';
import HeartIcon from '../../images/icons/heart.svg';
import CommentIcon from '../../images/icons/comment.svg';
import SendtIcon from '../../images/icons/send.svg';
import BookmarkIcon from '../../images/icons/bookmark.svg';
import { ButtonWrapper } from './PostStyles';
import Img from '../Img';

const PostButton = () => (
  <ButtonWrapper>
    <div>
      <Button>
        <Img className="icon" src={HeartIcon} alt="Heart" />
      </Button>
      <Button>
        <Img className="icon" src={CommentIcon} alt="Comment" />
      </Button>
      <Button>
        <Img className="icon" src={SendtIcon} alt="Send" />
      </Button>
    </div>
    <Button>
      <Img className="icon" src={BookmarkIcon} alt="Bookmark" />
    </Button>
  </ButtonWrapper>
);

export default PostButton;
