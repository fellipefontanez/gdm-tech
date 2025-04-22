import React from 'react';
import GamesList from '@/src/components/GamesList/lista';
import { getAdvantages } from './util/fetchs';
import BarraDeFavoritos from '@/src/components/FavoritosBar/Barra';
import { Loader } from '@/src/components/Loader/Loader';

const Home = async () => {
  const response = await getAdvantages();

  if (!response) return <Loader />;

  return (
    <main className="pt-[50px] md:p-0">
      <BarraDeFavoritos />
      <section className="grid md:grid-cols-12">
        <div className="hidden md:block md:col-span-3"></div>
        <div className="col-span-12 md:col-span-6 md:col-start-4 py-8">
          <GamesList data={response} />
        </div>
      </section>
    </main>
  );
};

export default Home;
