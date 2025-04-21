"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const texts = ["Seu palpite, sua vitória", "Aqui o jogo é real", "Transforme apostas em ganhos", "Ganhe jogando com inteligência"];

const textVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://eventmundi.com.br/wp-content/uploads/2023/08/champions-league.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#000000a8] bg-opacity-60 z-10" />

      <AnimatePresence mode="wait">
        <motion.h1
          key={texts[index]}
          className="absolute z-20 text-white text-center font-bold select-none"
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ fontSize: "3.5rem" }}
        >
          {texts[index]}
        </motion.h1>
      </AnimatePresence>
    </section>
  );
}
