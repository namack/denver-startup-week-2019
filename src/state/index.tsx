import React, { FunctionComponent, ReactNode } from 'react';
import { AuthProvider, ActionTypes as AuthActionTypes } from './Auth';
import { ProfileProvider } from './Profile/context';

const ActionTypes = {
  ...AuthActionTypes,
};

const GlobalProviders: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => (
  <AuthProvider>
    <ProfileProvider>{children}</ProfileProvider>
  </AuthProvider>
);

export { ActionTypes, GlobalProviders };
