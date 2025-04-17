"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { memo } from "react";

interface LoginButtonProps {
  session: Session | null;
}

const LoginButton = ({session} : LoginButtonProps) => {
  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p className="text-sm">Bem vindo {session.user?.name}</p>
        <button onClick={() => signOut()} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Sair
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn("github")} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
      Login
    </button>
  );
}

export default memo(LoginButton);