import { Dispatch, useEffect } from 'react';
import { Actions, ActionTypes } from './actions';

enum LocalStorageTokens {
  Access = 'MY_ACCESS_TOKEN',
  ID = 'MY_ID_TOKEN',
}

const useLocalStorageTokens = (dispatch: Dispatch<Actions>) => {
  useEffect(() => {
    const accessToken: string =
      localStorage.getItem(LocalStorageTokens.Access) || '';
    const idToken: string = localStorage.getItem(LocalStorageTokens.ID) || '';

    dispatch({
      type: ActionTypes.SetTokens,
      payload: {
        accessToken,
        idToken,
      },
    });
  }, [dispatch]);
};

export { useLocalStorageTokens };
