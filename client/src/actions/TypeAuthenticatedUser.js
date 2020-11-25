export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const actionLoginBegin = () => ({
  type: LOGIN_BEGIN,
});

export const actionLoginFailure = (strError) => ({
  payload: {
    strError,
  },
  type: LOGIN_ERROR,
});

export const actionLoginSuccess = (strToken) => ({
  payload: {
    strToken,
  },
  type: LOGIN_SUCCESS,
});

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_BEGIN = 'REGISTER_BEGIN';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const actionRegisterBegin = () => ({
  type: REGISTER_BEGIN,
});

export const actionRegisterFailure = (strError) => ({
  payload: {
    strError,
  },
  type: REGISTER_ERROR,
});

export const actionRegisterSuccess = (strToken) => ({
  payload: {
    strToken,
  },
  type: REGISTER_SUCCESS,
});
