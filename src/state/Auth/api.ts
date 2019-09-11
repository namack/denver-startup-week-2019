const authenticate = () => ({
  accessToken: 'my api token',
  idToken: 'id token',
});
const renewSession = () => ({
  accessToken: 'renewed token',
  idToken: 'renewed id token',
});

export { authenticate, renewSession };
