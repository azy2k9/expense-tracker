import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import lodash from 'lodash';
import App from '../../../App';

const ProtectedRoute = () => {
  const strError = useSelector(
    (state) => state.ReducerAuthenticatedUser.strError
  );

  const strToken = useSelector(
    (state) => state.ReducerAuthenticatedUser.strToken
  );

  if (lodash.isEmpty(strToken)) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { strError },
        }}
      />
    );
  }

  return (
    <>
      <Route>
        <App />
      </Route>
    </>
  );
};

export default ProtectedRoute;
