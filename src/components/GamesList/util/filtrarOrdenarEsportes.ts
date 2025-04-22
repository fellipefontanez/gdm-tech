import { formatName } from '@/app/home/util/formatter';
import { orderBy } from 'lodash';

export const filtrarEOrdenarEsportes = (
  lista: Record<string, any[]>,
  favoritos: string[] | null = [],
  showOnlyFavCategories: boolean | undefined
): [string, any[]][] => {
  const esportesFiltrados = Object.entries(lista).filter(([esporte]) => {
    const nomeFormatado = formatName(esporte);
    return !showOnlyFavCategories || favoritos?.includes(nomeFormatado);
  });

  return orderBy(
    esportesFiltrados,
    ([esporte]) => {
      const nomeFormatado = formatName(esporte);
      const index = favoritos?.indexOf(nomeFormatado);
      return index === -1 ? Number.MAX_SAFE_INTEGER : index;
    },
    ['asc']
  );
};
