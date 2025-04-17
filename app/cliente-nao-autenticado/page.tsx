'use client'

import React, { useCallback, useEffect } from 'react'
import Header from "@/src/components/Header/header";
import { motion } from 'framer-motion';
import Image from 'next/image';
import notFound from '@/public/not-found-user.png';
import Button from '@/src/components/SimpleButton/button';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { useSession } from '@/src/contexts/SessionContext';

const ClienteNaoLogadoPage = () => {
  const router = useRouter();

  const {session} = useSession();

  useEffect(()=>{
    if(session) signOut({redirect: false});
  }, []);

  const redirecionarHome = useCallback(
    () => {
      router.push("/")
    }, []
  )
  
  return (
    <main>
      <div className="h-full flex flex-col justify-between">
        <Header />
        <section className="flex w-full h-full justify-center items-center">
          <motion.div
            className="flex flex-col justify-center items-center border w-[350px] max-w-[90%] h-[400px] rounded-xl p-3"
            initial={{ opacity: 0.0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image src={notFound} alt="Usuário não encontrado" width={100} height={100} />
            <h1 className="text-center font-sans font-semibold text-hljs-title">Poxa, tivemos um problema em identificar sua sessão</h1>
            <p className="text-center my-2">Por favor, volte para a tela inicial e tente novamente</p>
            <Button style="solid" action={() => redirecionarHome() }>
              Início
            </Button>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default ClienteNaoLogadoPage;