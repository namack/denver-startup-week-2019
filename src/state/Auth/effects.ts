import { Dispatch, useEffect } from 'react';
import { Actions, ActionTypes } from './actions';
import { LocalStorageTokens } from './reducer';

const useLocalStorageTokens = (dispatch: Dispatch<Actions>) => {
  useEffect(() => {
    const accessToken: string =
      localStorage.getItem(LocalStorageTokens.Access) || '';
    const idToken: string = localStorage.getItem(LocalStorageTokens.ID) || '';

    if (accessToken.length > 0 && idToken.length > 0) {
      dispatch({
        type: ActionTypes.SetTokens,
        payload: {
          accessToken,
          idToken,
        },
      });
    }
  }, [dispatch]);
};

export { useLocalStorageTokens };
