import { Outcome } from "@/src/types/eventResponse.model";

export const associarOdds = (participantKey: string, outcomes: Outcome[], index: number): string => {
  const exactMatch = outcomes.find((out) => out.participantKey === participantKey);

  if (exactMatch) return formatarOdds(exactMatch.payout);

  const similarMatch = outcomes.find((out) => out.participantKey.startsWith(participantKey.slice(0, 4)));
  if (similarMatch) return formatarOdds(similarMatch.payout);

  return formatarOdds(outcomes[index].payout);
};

export const formatarOdds = (payout: number): string => {
  // deu problema umas 2 vezes de retornar um payout maior que 60, então adicionei aqui um filtro de segurança;
  if(payout > 20) return "N/A";
  return payout.toFixed(2);
}