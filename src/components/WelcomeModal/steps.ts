import { Step } from '../Tour/types/types';

export const steps: Step[] = [
  {
    title: '⚽ Meus Favoritos',
    content:
      'Clique nesta setinha para acessar e organizar seus esportes favoritos, sempre ao alcance de um clique.',
    target: '.first-step',
  },
  {
    title: '🏠 Página Inicial',
    content:
      'Para voltar à página inicial, basta clicar aqui. Tudo o que você precisa estará lá.',
    target: '.second-step',
  },
  {
    title: '📅 Jogos Disponíveis',
    content:
      'Aqui você pode explorar os jogos disponíveis, organizados por categoria para facilitar sua visualização.',
    target: '.third-step',
  },
  {
    title: '⭐ Adicionar aos Favoritos',
    content:
      'Achou um esporte que você gosta? Adicione aos seus favoritos para acessá-lo rapidamente sempre que quiser.',
    target: '.forth-step',
  },
  {
    title: '🔍 Detalhes da Aposta',
    content:
      'Quer saber mais sobre uma partida? Clique nela para ver todos os detalhes, mercados e estatísticas.',
    target: '.fifth-step',
  },
];
