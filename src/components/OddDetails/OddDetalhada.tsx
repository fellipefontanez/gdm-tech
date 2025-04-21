"use client";

import React from "react";
import EventInfo from "./components/EventInfo";
import Participants from "./components/Participants";
import MarketList from "./components/MarketList";
import Timer from "./components/Timer";

type OddDetailsProps = {
  event: Awaited<ReturnType<any>>;
  isModal?: boolean;
};

export default function OddDetails({ event, isModal }: OddDetailsProps) {
  return (
    <section
      className={`${isModal ? "container" : ""} pt-8 flex overflow-hidden flex-col w-full items-center relative ${isModal ? "@container" : ""}`}
    >
      {!isModal && <div className="absolute top-0 left-0 w-full h-[30%] bg-(--header)"></div>}
      <div className="flex flex-col p-4 bg-[#f3f3f3] rounded-lg flex-wrap z-10">
        <EventInfo name={event.name} startTime={event.startTime} />
        <div className="@md:grid grid-cols-2 items-center">
          <Participants participants={event.participants} homeParticipantKey={event.homeParticipantKey} />
          <Timer startTime={event.startTime} />
        </div>
        <MarketList markets={event.markets} />
      </div>
    </section>
  );
}
