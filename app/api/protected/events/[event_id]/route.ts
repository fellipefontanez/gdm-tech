import { NextRequest, NextResponse } from 'next/server';
import { apiService } from '@/src/services/ApiService';
import { EventsResponse } from '@/src/types/eventDeatail.model';
import { ApiResponse } from '@/src/types/reponses.model';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { event_id: string } }
) {
  try {
    const endpoint = `/v0/events/${params.event_id}`;

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

    return NextResponse.json({
      message: 'ok',
      data,
    } satisfies ApiResponse<EventsResponse>);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Erro ao buscar evento';
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
