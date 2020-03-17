/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import AuthRoute from './AuthRoute';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Instagram" defaultTitle="Instagram">
        <meta name="description" content="Custom Instagram" />
      </Helmet>

      <Switch>
        <AuthRoute exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>

      <GlobalStyle />
    </AppWrapper>
  );
}
