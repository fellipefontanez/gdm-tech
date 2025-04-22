'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail } from 'lucide-react';
import { footer, holder, infoEmpresa } from './style';

const Footer = () => {
  return (
    <motion.footer
      style={footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={holder}>
        <div
          className="flex justify-between gap-10 flex-wrap"
          style={infoEmpresa}
        >
          <motion.div
            className="flex flex-col gap-4"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-bold text-2xl">FellipeBet</p>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <p>Rua das Apostas, 123, Centro, São Paulo, SP</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <p>(11) 1234-5678</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <p>contato@fellipebet.com</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-bold text-2xl">Advertência</p>
            <p>
              Apostas podem causar dependência. Aposte com responsabilidade.
              Somente maiores de 18 anos podem participar.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <p className="font-bold text-2xl">Sobre o Projeto</p>
            <p>
              Este é um projeto pessoal de Fellipe Fontanez. Não é um site real
              de apostas.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; 2025 FellipeBet LTDA. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default React.memo(Footer);
