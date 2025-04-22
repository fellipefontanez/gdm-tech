'use client';

import React, { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import notFound from '@/public/not-found-user.png';
import Button from '@/src/components/SimpleButton/button';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { useSession } from '@/src/contexts/SessionContext';

const ClienteNaoLogadoPage = () => {
  const router = useRouter();
  const { session } = useSession();

  useEffect(() => {
    if (session) signOut({ redirect: false });
  }, [session]);

  const redirecionarHome = () => {
    router.push('/');
  };

  return (
    <section className="h-full flex items-center w-full justify-center bg-neutral-100">
      <motion.div
        className="flex flex-col items-center gap-4 w-[360px] max-w-[90%] px-6 py-8 rounded-2xl shadow-xl bg-white border border-neutral-200"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.4, 0.1, 0.2, 1] }}
      >
        <Image
          src={notFound}
          alt="Usuário não encontrado"
          width={100}
          height={100}
          className="mb-2"
        />
        <h1 className="text-center text-lg font-semibold text-gray-800">
          Poxa, tivemos um problema em identificar sua sessão
        </h1>
        <p className="text-center text-sm text-gray-600">
          Por favor, volte para a tela inicial e tente novamente.
        </p>
        <Button style="solid" action={redirecionarHome}>
          Voltar ao início
        </Button>
      </motion.div>
    </section>
  );
};

export default ClienteNaoLogadoPage;
