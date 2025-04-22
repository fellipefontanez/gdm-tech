'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section className="w-full py-20 px-4 bg-white flex flex-col items-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-700"
      >
        Segurança e Transparência
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-gray-600 max-w-2xl mb-10 mt-4"
      >
        Aqui, seus dados e apostas estão protegidos com as melhores práticas do
        mercado. Transparência em cada movimento, para você jogar com confiança
        e tranquilidade.
      </motion.p>

      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, duration: 0.15 }}
          className="flex flex-col items-center bg-gray-100 rounded-2xl p-6 w-72 shadow-md"
        >
          <ShieldCheck className="text-blue-600 w-14 h-14 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Proteção Total</h3>
          <p className="text-gray-500 text-sm">
            Criptografia de ponta e servidores seguros para manter seus dados
            sempre protegidos.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, duration: 0.15 }}
          className="flex flex-col items-center bg-gray-100 rounded-2xl p-6 w-72 shadow-md"
        >
          <Eye className="text-blue-600 w-14 h-14 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Transparência Real</h3>
          <p className="text-gray-500 text-sm">
            Histórico claro de apostas, sem surpresas ou taxas escondidas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
