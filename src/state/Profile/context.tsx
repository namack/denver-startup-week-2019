import React, { createContext, useContext, ReactNode } from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { useAuthState } from '../Auth/hooks';

interface ProfileContextValue {
  danger: boolean;
}

const ProfileContext = createContext<ProfileContextValue | undefined>(
  undefined
);

const ProfileProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [danger, setDanger] = useState(true);
  const { isAuthenticated } = useAuthState();

  useEffect(() => {
    if (isAuthenticated) {
      setDanger(false);
    } else {
      setDanger(true);
    }
  }, [isAuthenticated]);

  return (
    <ProfileContext.Provider value={{ danger }}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfileContext = () => {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error('useProfileContext must be used within an ProfileProvider');
  }

  return {
    danger: context.danger,
  };
};

export { ProfileProvider, useProfileContext };
