enum ActionTypes {
  SetTokens = 'app/Auth/SetTokens',
  InvalidateTokens = 'app/Auth/InvalidateTokens',
}

interface SetTokens {
  type: ActionTypes.SetTokens;
  payload: {
    accessToken: string;
    idToken: string;
  };
}

interface InvalidateTokens {
  type: ActionTypes.InvalidateTokens;
}

type Actions = SetTokens | InvalidateTokens;

export { Actions, ActionTypes };
