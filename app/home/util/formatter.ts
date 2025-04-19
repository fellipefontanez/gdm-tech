import { AdvantagesV1Response, Vantagem } from "@/src/types/eventResponse.model";
import { getAdvantages } from "./fetchs";
import _ from "lodash";

const esportesAlvo = ["SOCCER", "BASKETBALL", "BASEBALL", "VOLEYBALL", "AMERICAN_FOOTBALL", "AUSTRALIAN_RULES_FOOTBALL"];

export type AgrupadoPorEsporte = {
    [sport: string]: Vantagem[];
};

export async function getListaDadosGerais(data?: AdvantagesV1Response) {
    const response = data ?? await getAdvantages();
    const allVantagens = _.flatten(_.flatten(Object.values(response.advantages)));

    const vantagensFiltradas = allVantagens.filter(v => esportesAlvo.includes(v.context.eventSport));
    const agrupado = _.groupBy(vantagensFiltradas, v => v.context.eventSport);
    const resultado: AgrupadoPorEsporte = {};

    for (const esporte of esportesAlvo) {
        const eventos = agrupado[esporte] || [];
        const unicosPorEvento = _.uniqBy(eventos, v => v.context.eventKey).slice(0, 3);
        resultado[esporte] = unicosPorEvento;
    }

    return resultado;
}

export async function getListaDadosPorEsporte(esporte: string, data?: AdvantagesV1Response) {
    const response = data ?? await getAdvantages();
    const allVantagens = _.flatten(_.flatten(Object.values(response.advantages)));

    const vantagensFiltradas = allVantagens.filter(v => esportesAlvo.includes(v.context.eventSport));
    const agrupado = _.groupBy(vantagensFiltradas, v => v.context.eventSport);
    const resultado: AgrupadoPorEsporte = {};

    const eventos = agrupado[esporte] || [];
    const unicosPorEvento = _.uniqBy(eventos, v => v.context.eventKey);
    resultado[esporte] = unicosPorEvento;
    
    return resultado;
}

export const formatName = (esporte: string): string => {
    const formatador: { [key: string]: string } = {
        "SOCCER": "Futebol",
        "BASKETBALL": "Basquete",
        "BASEBALL": "Beisebol",
        "VOLEYBALL": "Vôlei",
        "AMERICAN_FOOTBALL": "Futebol Americano",
        "AUSTRALIAN_RULES_FOOTBALL": "Futebol AU",
    }
    return formatador[esporte] ?? esporte;
}