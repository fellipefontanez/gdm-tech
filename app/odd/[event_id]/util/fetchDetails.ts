import { apiChamadaClient, apiChamadaServer, RequestProps } from "@/src/services/ApiService";
import { EventsResponse } from "@/src/types/eventDeatail.model";
import { ApiResponse } from "@/src/types/reponses.model";

export async function getDetails(event_id: string) {
    const res = await fetch(`/api/protected/events/${event_id}`);
    const response = await res.json();
    return formatEvent(response.data);
}

const formatEvent = (data: EventsResponse) => {
    const event = data.events[0];
    if (event?.name) event.name = event.name.replaceAll("@", "X");
    return event;
}