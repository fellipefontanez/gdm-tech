import { getListaDadosGerais, getListaDadosPorEsporte } from "@/app/home/util/formatter";
import { AdvantagesV1Response } from "@/src/types/eventResponse.model";

export const getListaCorreta = async (data: AdvantagesV1Response, sportParam: string | null) => {
    if (!sportParam) return await getListaDadosGerais(data);
    return await getListaDadosPorEsporte(sportParam, data);
};