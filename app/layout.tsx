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
      <head>
        <meta name="theme-color" content="#016ca5"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
      </head>
      <body>
        <SessionProvider session={session}>
          <DataProvider>
            <FavoritosProvider>
              <Header />
              <main className="relative pt-[74px]">{children}</main>
            </FavoritosProvider>
          </DataProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
