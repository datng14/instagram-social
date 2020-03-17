import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Layout from '../../components/Layout';

function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
AuthRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,

  children: PropTypes.node,
};

export default AuthRoute;
