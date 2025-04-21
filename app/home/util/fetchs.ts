import { apiChamadaClient, RequestProps } from "@/src/services/ApiService";
import { AdvantagesV1Response } from "@/src/types/eventResponse.model";
import { ApiResponse } from "@/src/types/reponses.model";

export async function getAdvantages() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const req: RequestProps = {
        endpoint: "/protected/sports",
        method: "GET",
        body: null,
        reqOptions: { cache: "no-store" },
    };

    const res = await apiChamadaClient<ApiResponse<AdvantagesV1Response>>(req);
    return res.data;
}