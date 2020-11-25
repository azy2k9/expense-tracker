import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/atoms/ProtectedRoute';

const store = configureStore();

const renderApp = () => {
  return render(
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <ProtectedRoute path="/" />
          </Switch>
        </Router>
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp);
}

renderApp();
