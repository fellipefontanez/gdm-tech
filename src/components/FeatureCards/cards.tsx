'use client';
import { motion } from 'framer-motion';
import { card, cardContainer, cardVariants, container, splash } from './styles';

interface Feature {
  title: string;
  description: string;
  icon: string;
  hueA: number;
  hueB: number;
}

const features: Feature[] = [
  {
    title: 'Apostas Ao Vivo',
    description: 'Sinta a emoção em tempo real.',
    icon: '🔥',
    hueA: 10,
    hueB: 30,
  },
  {
    title: 'Estatísticas em Tempo Real',
    description: 'Dados para palpites mais certeiros.',
    icon: '📊',
    hueA: 200,
    hueB: 230,
  },
  {
    title: 'Pagamentos Rápidos',
    description: 'Ganhos direto na sua conta.',
    icon: '💸',
    hueA: 120,
    hueB: 150,
  },
  {
    title: 'Suporte 24h',
    description: 'Estamos com você o tempo todo.',
    icon: '🎧',
    hueA: 280,
    hueB: 310,
  },
];

export default function FeatureCards() {
  return (
    <div style={container}>
      {features.map((feature, i) => (
        <Card {...feature} i={i} key={feature.title} />
      ))}
    </div>
  );
}

function Card({
  title,
  description,
  icon,
  hueA,
  hueB,
  i,
}: Feature & { i: number }) {
  const background = `linear-gradient(306deg, hsl(${hueA}, 100%, 50%), hsl(${hueB}, 100%, 50%))`;

  return (
    <motion.div
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.6 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants}>
        <span style={{ fontSize: 64 }}>{icon}</span>
        <h3 style={{ margin: '12px 0 4px', fontSize: 24 }}>{title}</h3>
        <p style={{ textAlign: 'center', padding: '0 12px' }}>{description}</p>
      </motion.div>
    </motion.div>
  );
}
