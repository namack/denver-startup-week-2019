import { ActionTypes, Actions } from './actions';

interface State {
  accessToken: string;
  idToken: string;
  isAuthenticated: boolean;
}

enum LocalStorageTokens {
  Access = 'MY_ACCESS_TOKEN',
  ID = 'MY_ID_TOKEN',
}

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.SetTokens: {
      const { accessToken, idToken } = action.payload;

      return {
        ...state,
        accessToken,
        idToken,
        isAuthenticated: true,
      };
    }

    case ActionTypes.InvalidateTokens: {
      return {
        accessToken: '',
        idToken: '',
        isAuthenticated: false,
      };
    }

    default: {
      return state;
    }
  }
};

export { State, reducer, LocalStorageTokens };
