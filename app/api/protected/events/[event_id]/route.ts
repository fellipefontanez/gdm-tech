import { NextRequest, NextResponse } from 'next/server';
import { apiService } from '@/src/services/ApiService';
import { EventsResponse } from '@/src/types/eventDeatail.model';
import { ApiResponse } from '@/src/types/reponses.model';

export async function GET(req: NextRequest, { params }: { params: { event_id: string } }) {
    try {
        const event_id = params.event_id;
        const endpoint = `/v0/events/${event_id}`;

        const headers = {
            'x-rapidapi-host': 'sportsbook-api2.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPIDAPI_KEY ?? '',
        };

        const data = await apiService<EventsResponse>({
            endpoint,
            method: 'GET',
            body: null,
            reqOptions: { headers },
        });

        const response: ApiResponse<EventsResponse> = {
            message: 'ok',
            data,
        };

        return NextResponse.json(response);
    } catch (error: any) {
        console.error('Erro na API:', error);
        return NextResponse.json({ message: 'Erro ao buscar evento' }, { status: 500 });
    }
}
