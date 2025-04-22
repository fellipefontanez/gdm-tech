'use client';

import GamesList from '@/src/components/GamesList/lista';
import { Loader } from '@/src/components/Loader/Loader';
import { AdvantagesV1Response } from '@/src/types/eventResponse.model';
import { Suspense } from 'react';

export default function GamesListWrapper({
  data,
}: {
  data: AdvantagesV1Response;
}) {
  return (
    <Suspense fallback={<Loader />}>
      <GamesList data={data} />
    </Suspense>
  );
}
