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

function Header() {
  return (
    <HeaderWrap>
      <A href="#">
        <Img src={Logo} alt="SocialApp" />
      </A>
      <Searchbar />
      <NavBar>
        <HeaderLink to="/">
          <Img className="icon" src={HomeIcon} alt="Home" />
        </HeaderLink>
        <HeaderLink to="/explore">
          <Img className="icon" src={ExploreIcon} alt="Explore" />
        </HeaderLink>
        <HeaderLink to="/activities">
          <Img className="icon" src={HeartIcon} alt="Heart" />
        </HeaderLink>
        {/* <Img className="icon-avatar" src={AvatarDefault} alt="Avatar default" /> */}
      </NavBar>
    </HeaderWrap>
  );
}

export default Header;
