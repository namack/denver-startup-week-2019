import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalProviders } from './state';
import { useProfileContext } from './state/Profile/context';
import { useAuth } from './state/Auth';

const App = () => {
  useAuth();
  const { backgroundColor } = useProfileContext();

  return (
    <div style={{ backgroundColor }}>
      <h1>My super secure app</h1>
    </div>
  );
};

ReactDOM.render(
  <GlobalProviders>
    <App />
  </GlobalProviders>,
  document.getElementById('app')
);
