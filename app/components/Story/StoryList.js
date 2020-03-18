import React from 'react';
import StoryItem from './StoryItem';
import avatarDefault from '../../assets/images/avatar.jpg';

const list = [
  { username: 'datng14', avatar: avatarDefault, lastActive: '7 hours ago' },
  { username: 'datng14', avatar: avatarDefault, lastActive: '7 hours ago' },
  { username: 'datng14', avatar: avatarDefault, lastActive: '7 hours ago' },
  { username: 'datng14', avatar: avatarDefault, lastActive: '7 hours ago' },
  { username: 'datng14', avatar: avatarDefault, lastActive: '7 hours ago' },
];

const StoryList = () => (
  <div className="story-list">
    {list.map(({ username, avatar, lastActive }) => (
      <StoryItem username={username} avatar={avatar} lastActive={lastActive} />
    ))}
  </div>
);

export default StoryList;
