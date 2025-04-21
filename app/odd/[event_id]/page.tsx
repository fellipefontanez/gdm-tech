import React from "react";
import EventInfo from "./components/EventInfo";
import Participants from "./components/Participants";
import MarketList from "./components/MarketList";
import { getDetails } from "./util/fetchDetails";
import Timer from "./components/Timer";
import OddDetails from "@/src/components/OddDetails/OddDetalhada";

interface PageProps {
  params: Promise<any>;
}

export default async function OddEspecifica({ params }: PageProps) {
  const param = await params;
  const event = await getDetails(param.event_id);
  return <OddDetails event={event} />;
}
