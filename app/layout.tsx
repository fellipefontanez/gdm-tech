import { getServerSession } from "next-auth";
import { SessionProvider } from "@/src/providers/SessionProvider";
import { authOptions } from "@/src/lib/auth";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="pt-BR">
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
