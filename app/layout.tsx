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
          name="description"
          content="Apostas esportivas em tempo real. Aposte com inteligência e ganhe com confiança!"
        />
        <meta
          name="keywords"
          content="apostas esportivas, futebol, apostas ao vivo, pagamentos rápidos"
        />
        <meta property="og:title" content="FellipeBet - Apostas Esportivas" />
        <meta
          property="og:description"
          content="Aposte ao vivo e aproveite os melhores palpites e estatísticas!"
        />
        <meta property="og:url" content="https://www.fellipebet.com" />
        <meta name="robots" content="index, follow" />
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
