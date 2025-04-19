import { getServerSession } from "next-auth";
import { SessionProvider } from "@/src/providers/SessionProvider";
import { authOptions } from "@/src/lib/auth";
import "./globals.css";
import { DataProvider } from "@/src/contexts/AdvantagesContext";
import Header from "@/src/components/Header/header";
import { FavoritosProvider } from "@/src/contexts/FavoritosContext";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="pt-BR">
      <body>
        <SessionProvider session={session}>
          <DataProvider>
            <FavoritosProvider>
              <Header />
              {children}
            </FavoritosProvider>
          </DataProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
