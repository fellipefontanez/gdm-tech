import { apiService } from '@/src/services/ApiService';
import { EventsResponse } from '@/src/types/eventDeatail.model';
import { ApiResponse } from '@/src/types/reponses.model';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const a: EventsResponse = {
    "events": [
        {
            "key": "6E1m-zeie-Ogqk",
            "name": "Port Adelaide @ Sydney Swans",
            "startTime": "2025-04-20T05:20:00.000Z",
            "homeParticipantKey": "jank-xbdu-GLYH",
            "participants": [
                {
                    "key": "LQ53-xbdu-wiMk",
                    "slug": "port-adelaide",
                    "name": "Port Adelaide",
                    "shortName": "PA",
                    "sport": "AUSTRALIAN_RULES_FOOTBALL"
                },
                {
                    "key": "jank-xbdu-GLYH",
                    "slug": "sydney-swans",
                    "name": "Sydney Swans",
                    "shortName": "SYD",
                    "sport": "AUSTRALIAN_RULES_FOOTBALL"
                }
            ],
            "summaries": [],
            "markets": [
                {
                    "key": "r0JO-zekl-JB3i",
                    "type": "MONEYLINE",
                    "segment": "FULL_MATCH",
                    "lastFoundAt": "2025-04-19T02:09:00.228Z",
                    "participantKey": null,
                    "participant": null
                },
                {
                    "key": "0kiA-zekl-L23R",
                    "type": "POINT_SPREAD",
                    "segment": "FULL_MATCH",
                    "lastFoundAt": "2025-04-19T02:09:00.228Z",
                    "participantKey": null,
                    "participant": null
                },
                {
                    "key": "Po6v-zepb-VL40",
                    "type": "POINT_TOTAL",
                    "segment": "FULL_MATCH",
                    "lastFoundAt": "2025-04-19T02:09:00.228Z",
                    "participantKey": null,
                    "participant": null
                },
                {
                    "key": "Yo1O-zepa-k9Aq",
                    "type": "POINT_TOTAL",
                    "segment": "REGULATION_TIME",
                    "lastFoundAt": "2025-04-19T02:09:00.106Z",
                    "participantKey": null,
                    "participant": null
                },
                {
                    "key": "eNFU-zeie-GoAa",
                    "type": "MONEYLINE",
                    "segment": "REGULATION_TIME",
                    "lastFoundAt": "2025-04-19T02:09:00.106Z",
                    "participantKey": null,
                    "participant": null
                },
                {
                    "key": "iCBv-zeie-kD7l",
                    "type": "POINT_SPREAD",
                    "segment": "REGULATION_TIME",
                    "lastFoundAt": "2025-04-19T02:09:00.106Z",
                    "participantKey": null,
                    "participant": null
                }
            ]
        }
    ]
}

export async function GET(req: NextApiRequest, res: NextApiResponse<ApiResponse<EventsResponse>>) {
    console.log("bateu aqui")
    return NextResponse.json({message: 'ok', data: a});
    try {
        const { event_id } = req.query;
        const endpoint = `api/protected/events/${event_id}`;
        const data = await apiService<EventsResponse>({ endpoint, method: 'GET' });
        res.status(200).json({ message: "ok", data });
    } catch (error: any) {
        res.status(500);
    }
}
