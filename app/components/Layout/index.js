import React from 'react';
import PropTypes from 'prop-types';
import LayoutContainer from './LayoutContainer';
import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import Header from '../Header';
import Footer from '../Footer';
import MainContainer from './MainContainer';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => (
  <LayoutContainer>
    <HeaderContainer>
      <Header {...children.props} />
    </HeaderContainer>
    <MainContainer>
      {children}
      <Sidebar />
    </MainContainer>

    <FooterContainer>
      <Footer />
    </FooterContainer>
  </LayoutContainer>
);

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
