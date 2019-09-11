import React, {
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  useReducer,
} from 'react';
import { Actions } from './actions';
import { useLocalStorageTokens } from './effects';
import { reducer, State } from './reducer';

interface AuthProviderProps {
  initialState?: State;
  children: ReactNode;
}

const AuthStateContext = createContext<State | undefined>(undefined);
const AuthDispatchContext = createContext<Dispatch<Actions> | undefined>(
  undefined
);

const AuthProvider: FunctionComponent<AuthProviderProps> = ({
  initialState = {
    accessToken: '',
    idToken: '',
    isAuthenticated: false,
  },
  ...rest
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useLocalStorageTokens(dispatch);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {rest.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export { AuthProvider, AuthStateContext, AuthDispatchContext };
