import { LocalStorageTokens } from './reducer';

const authenticate = () => {
  const tokens = {
    accessToken: 'my api token',
    idToken: 'id token',
  };

  localStorage.setItem(LocalStorageTokens.Access, tokens.accessToken);
  localStorage.setItem(LocalStorageTokens.ID, tokens.idToken);

  return tokens;
};
const renewSession = () => ({
  accessToken: 'renewed token',
  idToken: 'renewed id token',
});

export { authenticate, renewSession };
