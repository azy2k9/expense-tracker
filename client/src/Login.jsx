import React, { useState, useEffect } from 'react';
import Wrapper from './layouts/Wrapper';
import Input from './components/atoms/Input';
import Button from './components/atoms/Button';
import lodash from 'lodash';
import Header from './layouts/Header';
import { Lock } from '@styled-icons/material/Lock';
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogin, actionRegister } from './actions/ActionAuthenticatedUser';

const Login = () => {
  const [strEmail, setStrEmail] = useState('');
  const [strPassword, setStrPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const strError = useSelector(
    (state) => state.ReducerAuthenticatedUser.strError
  );

  const strToken = useSelector(
    (state) => state.ReducerAuthenticatedUser.strToken
  );

  if (!lodash.isEmpty(strToken)) {
    history.push('/');
  }

  return (
    <>
      <Header>Login / Register</Header>
      <Wrapper
        strDirection="column"
        strJustifyContent="center"
        strAlignItems="center"
        bFullscreen
        remFullscreenOffset={8}>
        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => setStrEmail(e.target.value)}
          value={strEmail}
          strWidth="50vw"
          adornment={<AccountCircle />}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setStrPassword(e.target.value)}
          value={strPassword}
          strWidth="50vw"
          adornment={<Lock />}
        />
        <Wrapper>
          <Button
            onClick={() => {
              const objUserCredentials = {
                email: strEmail,
                password: strPassword,
              };
              dispatch(actionLogin(objUserCredentials));
              setStrEmail('');
              setStrPassword('');
            }}
            color="#145DA0"
            accent="#145DA0"
            large
            disabled={lodash.isEmpty(strEmail) || lodash.isEmpty(strPassword)}>
            Sign In
          </Button>
          <Button
            onClick={() => {
              const objUserCredentials = {
                email: strEmail,
                password: strPassword,
              };
              dispatch(actionRegister(objUserCredentials));
              setStrEmail('');
              setStrPassword('');
            }}
            color="#4c4"
            accent="#4c4"
            large
            disabled={lodash.isEmpty(strEmail) || lodash.isEmpty(strPassword)}>
            Register
          </Button>
        </Wrapper>
        <Wrapper
          strDirection="column"
          strJustifyContent="center"
          strAlignItems="center">
          <Header intFontSize={1} strColor="red">
            {strError}
          </Header>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Login;
