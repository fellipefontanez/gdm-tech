import { apiChamadaClient, apiChamadaServer, RequestProps } from "@/src/services/ApiService";
import { EventsResponse } from "@/src/types/eventDeatail.model";
import { ApiResponse } from "@/src/types/reponses.model";

export async function getDetails(event_id: string) {
    const res = await fetch(`/api/protected/events/${event_id}`);
    const response = await res.json();
    return formatEvent(response.data);
}

export async function getDetailsSSR(event_id: string) {
    const endpoint = `/v0/events/${event_id}`;
    const res = await apiChamadaServer<EventsResponse>({ endpoint, method: "GET" });
    return formatEvent(res);
}

const formatEvent = (data: EventsResponse) => {
    const event = data.events[0];
    if (event?.name) event.name = event.name.replaceAll("@", "X");
    return event;
}