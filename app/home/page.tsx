import Header from '@/src/components/Header/header';
import React from 'react'
import GamesList from '@/src/components/GamesList/lista';
import { getListaDadosFromFetch } from './util/formatter';

const Home = async () => {

  const response = await getListaDadosFromFetch();

  return (
    <main>
      <Header />
      <section className='flex justify-center py-8'>
        <GamesList data={response} />
      </section>
    </main>
  )
}
export default Home;