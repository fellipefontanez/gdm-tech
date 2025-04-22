'use client';

import { createContext, useContext } from 'react';
import { Session } from 'next-auth';

export type SessionContextType = {
  session: Session | null;
  status: 'authenticated' | 'unauthenticated' | 'loading';
};

export const SessionContext = createContext<SessionContextType | undefined>(
  undefined
);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession faltando no SessionProvider');
  }
  return context;
};
