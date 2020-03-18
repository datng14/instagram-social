import React from 'react';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Logo from '../../images/logo.png';
import HeaderWrap from './HeaderWrap';
import Searchbar from './Searchbar';
import AvatarDefault from '../../images/avatar.jpg';
import HomeIcon from '../../images/icons/home.svg';
import ExploreIcon from '../../images/icons/explore.svg';
import HeartIcon from '../../images/icons/heart.svg';
import Icon from '../Icon';

function Header() {
  return (
    <HeaderWrap>
      <A href="#">
        <Img className="logo" src={Logo} alt="SocialApp" />
      </A>
      <Searchbar />
      <NavBar>
        <HeaderLink to="/">
          <Icon size="22px" className="icon" icon="home" />
        </HeaderLink>
        <HeaderLink to="/explore">
          <Icon size="22px" className="icon" icon="explore" />
        </HeaderLink>
        <HeaderLink to="/activities">
          <Icon size="22px" className="icon" icon="heart" />
        </HeaderLink>
        <HeaderLink to="/profile">
          <Img
            className="icon-avatar"
            src={AvatarDefault}
            alt="Avatar default"
          />
        </HeaderLink>
      </NavBar>
    </HeaderWrap>
  );
}

export default Header;
