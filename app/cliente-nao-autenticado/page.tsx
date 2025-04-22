'use client';
import { Loader } from '@/src/components/Loader/Loader';
import dynamic from 'next/dynamic';

const ClienteNaoLogadoPage = dynamic(
  () => import('@/app/cliente-nao-autenticado/Component'),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

export default ClienteNaoLogadoPage;
