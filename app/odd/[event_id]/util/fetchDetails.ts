import { apiChamadaClient, RequestProps } from "@/src/services/ApiService";
import { EventsResponse } from "@/src/types/eventDeatail.model";
import { ApiResponse } from "@/src/types/reponses.model";

export async function getDetails(event_id: string) {
    const req: RequestProps = { endpoint: `/protected/events/${event_id}`, method: "GET", body: null, reqOptions: { cache: "no-store" } };
    
    const res = await apiChamadaClient<ApiResponse<EventsResponse>>(req);
    return formatEvent(res.data);
}

const formatEvent = (data: EventsResponse) => {
    const event = data.events[0];
    if(event?.name) event.name = event.name.replaceAll("@", "X");
    return event;
}