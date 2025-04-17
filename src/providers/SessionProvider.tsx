"use client";

import { Session } from "next-auth";
import { SessionProvider as NextAuthProvider, useSession } from "next-auth/react";
import { ReactNode, useMemo } from "react";
import { SessionContext } from "../contexts/SessionContext";

type Props = {
  children: ReactNode;
  session: Session | null;
};

function InternalSessionProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();

  const contextValue = useMemo(
    () => ({
      session,
      status,
    }),
    [session, status]
  );

  return <SessionContext.Provider value={contextValue}>{children}</SessionContext.Provider>;
}

export function SessionProvider({ children, session }: Props) {
  return (
    <NextAuthProvider session={session}>
      <InternalSessionProvider>{children}</InternalSessionProvider>
    </NextAuthProvider>
  );
}
