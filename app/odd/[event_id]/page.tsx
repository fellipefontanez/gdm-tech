import React from "react";
import { getDetails } from "./util/fetchDetails";
import OddDetails from "@/src/components/OddDetails/OddDetalhada";
import { Loader } from "@/src/components/Loader/Loader";

interface PageProps {
  params: Promise<any>;
}

export default async function OddEspecifica({ params }: PageProps) {
  const param = await params;
  const event = await getDetails(param.event_id);
  if (event) return <OddDetails event={event} />;
  return <Loader />;
}
