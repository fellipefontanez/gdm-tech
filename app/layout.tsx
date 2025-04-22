import { SessionProvider } from '@/src/providers/SessionProvider';
import { DataProvider } from '@/src/contexts/AdvantagesContext';
import { FavoritosProvider } from '@/src/contexts/FavoritosContext';
import { LoaderProvider } from '@/src/contexts/LoaderContext';
import Header from '@/src/components/Header/header';
import GlobalLoader from '@/src/components/Loader/LoaderGlobal';
import './globals.css';
import { getUserOnboarding } from '@/src/util/getUserOnboarding';
import { OnboardingProvider } from '@/src/contexts/OnboardingContext';
import WelcomeModal from '@/src/components/WelcomeModal/Modal';
import { TourProvider } from '@/src/components/Tour/TourProvider';
import { TourOverlay } from '@/src/components/Tour/TourOverlay';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session, hasOnboarded } = await getUserOnboarding();

  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#016ca5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body>
        <SessionProvider session={session}>
          <DataProvider>
            <FavoritosProvider>
              <LoaderProvider>
                <OnboardingProvider hasOnboarded={hasOnboarded}>
                  <TourProvider>
                    <TourOverlay />
                    <WelcomeModal hasOnboarded={hasOnboarded} />
                    <GlobalLoader />
                    <Header />
                    <main className="relative pt-[74px]">{children}</main>
                  </TourProvider>
                </OnboardingProvider>
              </LoaderProvider>
            </FavoritosProvider>
          </DataProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
