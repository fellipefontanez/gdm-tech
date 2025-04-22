'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useTour } from '../Tour/TourProvider';
import { steps } from './steps';

export default function WelcomeModal({
  hasOnboarded,
}: {
  hasOnboarded: boolean;
}) {
  const [show, setShow] = useState(false);
  const { data: session } = useSession();
  const { startTour } = useTour();

  useEffect(() => {
    if (!hasOnboarded && session?.user) {
      setShow(true);
    }
  }, [hasOnboarded]);

  const handleClose = async () => {
    setShow(false);
    await fetch('/api/user/onboarded', { method: 'POST' });
    startTour(steps);
  };

  const fechar = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={e => fechar(e)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={e => e.stopPropagation()}
          >
            <p className="text-2xl font-bold mb-4">
              Bem-vindo(a), {session?.user?.name?.split(' ')[0]}! 👋
            </p>
            <p className="text-gray-700 mb-4">
              Estamos felizes em ter você por aqui.
            </p>
            <ul className="text-left text-gray-600 mb-6 list-disc pl-5">
              <li className="mb-2">
                🎯 Visualize os jogos e apostas disponíveis
              </li>
              <li className="mb-2">🔍 Veja os detalhes de cada aposta</li>
              <li className="mb-2">⭐ Favorite suas categorias preferidas</li>
              <li className="mb-2">
                📁 Organize sua experiência com facilidade
              </li>
            </ul>
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 cursor-pointer transition"
              onClick={handleClose}
            >
              Começar agora
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
