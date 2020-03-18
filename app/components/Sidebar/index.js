import React from 'react';
import { Wrapper } from './SidebarStyles';
import Profile from './Profile';
import Story from './Story';

const Sidebar = () => (
  <Wrapper>
    <Profile />
    <Story />
  </Wrapper>
);

export default Sidebar;
