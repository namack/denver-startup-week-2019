import React, { createContext, useContext, ReactNode } from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { useAuthState } from '../Auth/hooks';

interface ProfileContextValue {
  backgroundColor: string;
}

const ProfileContext = createContext<ProfileContextValue | undefined>(
  undefined
);

const ProfileProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [backgroundColor, setBackgroundColor] = useState('red');
  const { isAuthenticated } = useAuthState();

  useEffect(() => {
    if (isAuthenticated) {
      setBackgroundColor('green');
    } else {
      setBackgroundColor('red');
    }
  }, [isAuthenticated]);

  return (
    <ProfileContext.Provider value={{ backgroundColor }}>
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
    backgroundColor: context.backgroundColor,
  };
};

export { ProfileProvider, useProfileContext };
