import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from '../actions/TypeAuthenticatedUser';

const initialState = {
  strError: '',
  strToken: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS: {
      const { strToken } = action.payload;
      return {
        ...state,
        strToken,
        strError: '',
      };
    }
    case LOGIN_ERROR:
    case REGISTER_ERROR: {
      const { strError } = action.payload;
      return {
        ...state,
        strError,
        strToken: '',
      };
    }
    default:
      return state;
  }
}
