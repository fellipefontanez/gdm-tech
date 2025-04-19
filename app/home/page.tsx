import Header from '@/src/components/Header/header';
import React from 'react'
import GamesList from '@/src/components/GamesList/lista';
import { getAdvantages } from './util/fetchs';

const Home = async () => {

  const response = await getAdvantages();

  return (
    <main>
      <section className='flex justify-center py-8'>
        <GamesList data={response} />
      </section>
    </main>
  )
}
export default Home;