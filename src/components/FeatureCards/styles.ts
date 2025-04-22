import { Variants } from 'framer-motion';

export const container: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 32,
  maxWidth: 1200,
  margin: '0 auto',
  padding: '100px 16px',
};

export const cardContainer: React.CSSProperties = {
  overflow: 'hidden',
  position: 'relative',
  width: 280,
  height: 380,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const splash: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

export const card: React.CSSProperties = {
  background: '#fff',
  borderRadius: 20,
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  padding: 20,
  width: '90%',
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

export const cardVariants: Variants = {
  offscreen: { y: 200, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: -2,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
};
