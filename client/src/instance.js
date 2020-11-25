import axios from 'axios';
import { useSelector } from 'react-redux';

const strHost =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_HOST_LOCALHOST
    : process.env.REACT_APP_HOST;

const instance = axios.create({
  baseURL: strHost,
});

const setToken = (strToken) => {
  console.log('strToken is');
  console.log(strToken);
  instance.defaults.headers.common['Authorization'] = 'Bearer ' + strToken;
};

export { instance, setToken };
