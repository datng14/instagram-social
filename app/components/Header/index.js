import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Logo from '../../images/logo.png';
import messages from './messages';
import HeaderWrap from './HeaderWrap';
import Searchbar from './Searchbar';

function Header() {
  return (
    <HeaderWrap>
      <A href="#">
        <Img src={Logo} alt="SocialApp" />
      </A>
      <Searchbar />
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
    </HeaderWrap>
  );
}

export default Header;
