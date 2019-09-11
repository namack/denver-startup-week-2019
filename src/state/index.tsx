import React, { FunctionComponent, ReactNode } from 'react';
import { AuthProvider } from './Auth';
import { ProfileProvider } from './Profile/context';

const ActionTypes = {};
const GlobalProviders: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => (
  <AuthProvider>
    <ProfileProvider>{children}</ProfileProvider>
  </AuthProvider>
);

export { ActionTypes, GlobalProviders };
