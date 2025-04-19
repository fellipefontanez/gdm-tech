import { apiService } from '@/src/services/ApiService';
import { ApiResponse, EventDetail } from '@/src/types/reponses.model';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse<EventDetail>>) {
    try {
        const { event_id } = req.query;
        const endpoint = `/events/${event_id}`;
        const data = await apiService<EventDetail>(endpoint);
        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
