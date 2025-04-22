'use client';

import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { memo } from 'react';
import Button from '../SimpleButton/button';

interface LoginButtonProps {
  session: Session | null;
}

const LoginButton = ({ session }: LoginButtonProps) => {
  if (session) {
    return (
      <div className="flex flex-row items-center gap-4">
        <p className="text-sm">Bem vindo, {session.user?.name}</p>
        <Button action={() => signOut()} style="SignOut">
          Sair
        </Button>
      </div>
    );
  }
  return (
    <Button
      action={() => signIn('github', { callbackUrl: '/home' })}
      style="SignIn"
    >
      Logar
    </Button>
  );
};

export default memo(LoginButton);
