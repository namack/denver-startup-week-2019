import { Dispatch, useContext, useEffect, useRef } from 'react';
import { Actions, ActionTypes } from './actions';
import { AuthDispatchContext, AuthStateContext } from './context';
import { State } from './reducer';
import { authenticate, renewSession } from './api';

const useAuthState = () => {
  const context = useContext(AuthStateContext);

  if (!context) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }

  return context;
};

const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);

  if (!context) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }

  return context;
};

const useAuthContext = (): [State, Dispatch<Actions>] => [
  useAuthState(),
  useAuthDispatch(),
];

const useAuth = () => {
  const [state, dispatch] = useAuthContext();
  const attemptRenewal = useRef(true);

  useEffect(
    function getTokens() {
      const { accessToken, idToken } = authenticate();
      dispatch({
        type: ActionTypes.SetTokens,
        payload: {
          accessToken,
          idToken,
        },
      });
    },
    [dispatch]
  );

  useEffect(
    function renewUserSession() {
      if (attemptRenewal.current) {
        attemptRenewal.current = false;
        const { accessToken, idToken } = renewSession();
        dispatch({
          type: ActionTypes.SetTokens,
          payload: {
            accessToken,
            idToken,
          },
        });
      }
    },
    [dispatch]
  );

  return { isAuthenticated: state.isAuthenticated };
};

export { useAuthState, useAuthDispatch, useAuthContext, useAuth };
