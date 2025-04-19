import Header from "@/src/components/Header/header";
import React from "react";
import EventInfo from "./components/EventInfo";
import Participants from "./components/Participants";
import MarketList from "./components/MarketList";
import { getDetails } from "./util/fetchDetails";

interface PageProps {
  params: Promise<any>;
}

export default async function OddEspecifica({ params }: PageProps) {
  const param = await params;
  const event = await getDetails(param.event_id);
  return (
    <main>
      <section className="pt-8 flex flex-col w-full items-center">
        <EventInfo name={event.name} startTime={event.startTime} />
        <Participants participants={event.participants} homeParticipantKey={event.homeParticipantKey} />
        <MarketList markets={event.markets} />
      </section>
    </main>
  );
}
