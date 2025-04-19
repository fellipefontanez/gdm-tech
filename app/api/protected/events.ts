import { apiService } from '@/src/services/ApiService';
import { EventsResponse } from '@/src/types/eventResponse.model';
import { ApiResponse } from '@/src/types/reponses.model';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse<EventsResponse>>) {
    try {
        const endpoint = `/events`;
        const data = await apiService<EventsResponse>(endpoint);
        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
