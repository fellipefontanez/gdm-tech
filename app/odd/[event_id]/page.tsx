import React from "react";
import EventInfo from "./components/EventInfo";
import Participants from "./components/Participants";
import MarketList from "./components/MarketList";
import { getDetails } from "./util/fetchDetails";
import Timer from "./components/Timer";

interface PageProps {
  params: Promise<any>;
}

export default async function OddEspecifica({ params }: PageProps) {
  const param = await params;
  const event = await getDetails(param.event_id);
  return (
    <main>
      <section className="pt-8 flex flex-col w-full items-center relative">
        <div className="absolute top-0 left-0 w-full h-[30%] bg-(--header)"></div>
        <div className="flex flex-col p-4 bg-[#f3f3f3] rounded-lg z-50">
          <EventInfo name={event.name} startTime={event.startTime} />
          <div className="md:grid grid-cols-2 items-center">
            <Participants participants={event.participants} homeParticipantKey={event.homeParticipantKey} />
            <Timer startTime={event.startTime}/>
          </div>
          <MarketList markets={event.markets} />
        </div>
      </section>
    </main>
  );
}
