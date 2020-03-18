import React from 'react';
import PropTypes from 'prop-types';
import Img from '../Img';
import A from '../A';

const StoryItem = ({ username, avatar, lastActive }) => (
  <div className="story-item">
    <span className="story-avatar-wrap">
      <Img className="story-avatar" src={avatar} alt="Dat Nguyen" />
    </span>
    <div className="story-info">
      <A href="#" className="story-username">
        {username}
      </A>
      <span className="story-active">{lastActive}</span>
    </div>
  </div>
);

StoryItem.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  lastActive: PropTypes.string,
};

export default StoryItem;
