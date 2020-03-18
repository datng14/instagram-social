import React from 'react';
import StoryList from '../Story/StoryList';
import { StoryWrapper } from './SidebarStyles';

const Story = () => {
  return (
    <StoryWrapper>
      <div className="story-header">
        <div className="story-header-left">Stories</div>
        <div className="story-header-right">Watch All</div>
      </div>
      <StoryList />
    </StoryWrapper>
  );
};

export default Story;
