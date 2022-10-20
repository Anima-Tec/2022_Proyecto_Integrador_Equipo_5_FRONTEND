import React, {
  createContext, useEffect, useState,
  useMemo,
} from 'react';

import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import AuthService from '../../networking/services/AuthService';

export const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const loadState = () => {
  const storedAccessToken = localStorage.getItem('accessToken');

  if (storedAccessToken) {
    return {
      token: storedAccessToken,
    };
  }
  return initialState;
};
export const AuthContext = createContext(initialState);

export function AuthProvider({ children }) {
  const [{ user, token, isAuthenticated }, setState] = useState(loadState);
  const location = useLocation();

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    AuthService.getCurrentUser(storedAccessToken).then((response) => {
      setState({
        user: response.data,
      });
      /*  Acá se implementara el refresh token */
    }).catch(() => {
      setState(initialState);
    });
  }, [location.pathname]);

  const states = useMemo(() => ({
    user,
    token,
    isAuthenticated,
    setState,
  }), [user, token, isAuthenticated]);
  return (
    <AuthContext.Provider value={states}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
