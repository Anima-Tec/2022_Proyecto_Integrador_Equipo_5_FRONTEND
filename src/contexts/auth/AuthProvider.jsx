import React, {
  createContext, useEffect, useState,
  useMemo,
} from 'react';

import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const [storedAccessToken, setStoredAccessToken] = useState(token);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setStoredAccessToken(accessToken);
    }

    if (!storedAccessToken) {
      setState(initialState);
      navigate('/login');
    }

    AuthService.getCurrentUser(storedAccessToken).then((data) => {
      setState({
        user: data,
        token: storedAccessToken,
        isAuthenticated: true,
      });
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
