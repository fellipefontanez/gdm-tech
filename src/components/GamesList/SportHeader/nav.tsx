'use client';
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import FavoriteButton from './favorite';

interface SportNavProps {
  esporte: string;
  action: () => any;
  routeParam: string;
  index: number;
}

const SportNav = ({ esporte, action, routeParam, index }: SportNavProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-blue-900 pl-2 text-white font-semibold font-sans flex justify-between items-center w-full"
    >
      <h3 className="italic text-2xl tracking-widest cursor-default flex items-center gap-1">
        <FavoriteButton index={index} esporte={esporte} />
        {esporte}
      </h3>
      <motion.div
        className="h-10 w-fit bg-[#1e293b] text-nowrap pl-2 flex items-center cursor-pointer"
        style={{
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
        whileHover={{ scale: 1.1, cursor: 'pointer' }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 80 }}
      >
        <button
          className="ml-[-4rem] z-10 relative px-4 py-2 cursor-pointer"
          onClick={action}
        >
          {routeParam ? 'Voltar' : 'Ver tudo'}
        </button>
      </motion.div>
    </motion.nav>
  );
};

export default memo(SportNav);
