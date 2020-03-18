import React from 'react';
import A from '../A';
import AvatarDefault from '../../images/avatar.jpg';
import Img from '../Img';
import { ProfileWrapper } from './SidebarStyles';

const Profile = () => (
  <ProfileWrapper>
    <Img className="profile-avatar" src={AvatarDefault} alt="Dat Nguyen" />
    <div className="profile-info">
      <A href="#" className="profile-username">
        datng14
      </A>
      <span className="profile-fullname">Đạt</span>
    </div>
  </ProfileWrapper>
);

export default Profile;
