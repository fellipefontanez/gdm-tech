import { apiService } from '@/src/services/ApiService';
import { ApiResponse, Odd } from '@/src/types/reponses.model';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse<Odd[]>>) {
    try {
        const { event_id } = req.query;
        const endpoint = `/odds?event_id=${event_id}`;
        const data = await apiService<Odd[]>(endpoint);
        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
