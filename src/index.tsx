import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalProviders, ActionTypes } from './state';
import { useProfileContext } from './state/Profile/context';
import { useAuth, useAuthDispatch } from './state/Auth';
import * as CSS from 'csstype';

const App = () => {
  const { danger } = useProfileContext();
  // Can use either custom wrapped hook or dispatch directly
  const { isAuthenticated, login } = useAuth();
  const authDispatch = useAuthDispatch();

  const appStyle: CSS.Properties = {
    backgroundColor: danger ? 'red' : 'green',
    height: '100vh',
  };

  const dialogStyle: CSS.Properties = {
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
  };

  const handleClick = () => {
    if (isAuthenticated) {
      authDispatch({
        type: ActionTypes.InvalidateTokens,
      });
    } else {
      login();
    }
  };

  return (
    <div style={appStyle}>
      <div style={dialogStyle}>
        <h1 style={{ margin: 0, cursor: 'pointer' }} onClick={handleClick}>
          My super secure app
        </h1>
      </div>
    </div>
  );
};

ReactDOM.render(
  <GlobalProviders>
    <App />
  </GlobalProviders>,
  document.getElementById('app')
);
