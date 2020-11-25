import { instance as axios, setToken } from '../instance';

import {
  actionLoginBegin,
  actionLoginFailure,
  actionLoginSuccess,
  actionRegisterBegin,
  actionRegisterFailure,
  actionRegisterSuccess,
} from './TypeAuthenticatedUser';

export const URI_AUTH = `/auth`;

export const actionLogin = (objUserCredentials) => (dispatch) => {
  dispatch(actionLoginBegin());
  return axios
    .post(`${URI_AUTH}/login`, objUserCredentials)
    .then(({ data }) => {
      setToken(data.data);
      return dispatch(actionLoginSuccess(data.data));
    })
    .catch(({ response }) => {
      console.error(
        `Failed to login user. ${response.data.error}`,
        'ActionAuthenticatedUser'
      );
      return dispatch(actionLoginFailure(response.data.error));
    });
};

export const actionRegister = (objUserCredentials) => (dispatch) => {
  dispatch(actionRegisterBegin());
  return axios
    .post(`${URI_AUTH}/register`, objUserCredentials)
    .then(({ data }) => {
      setToken(data.data);
      return dispatch(actionRegisterSuccess(data.data));
    })
    .catch(({ response }) => {
      console.error(
        `Failed to register user. ${response.data.error}`,
        'ActionAuthenticatedUser'
      );
      return dispatch(actionRegisterFailure(response.data.error));
    });
};
