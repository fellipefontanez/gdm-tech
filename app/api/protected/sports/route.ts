import type { NextApiRequest, NextApiResponse } from 'next';
import { apiService } from '@/src/services/ApiService';
import { ApiResponse } from '@/src/types/reponses.model';
import { AdvantagesV1Response } from '@/src/types/eventResponse.model';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse<ApiResponse<AdvantagesV1Response>>) {
    try {
        const endpoint = "/v1/advantages/";
        const data = await apiService<AdvantagesV1Response>({ endpoint, method: 'GET', body: null, isClient: false });
        return NextResponse.json({ message: 'ok', data });
    } catch (error: any) {
        if (error instanceof Error) res.status(500);
    }
}
