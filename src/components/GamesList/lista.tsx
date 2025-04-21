"use client";

import React, { useEffect, useState } from "react";
import SportNav from "./SportHeader/nav";
import { AgrupadoPorEsporte, formatName } from "@/app/home/util/formatter";
import { associarOdds } from "./util/formatters";
import { motion } from "framer-motion";
import { AdvantagesV1Response } from "@/src/types/eventResponse.model";
import { useSearchParams } from "next/navigation";
import { getListaCorreta } from "./util/service";
import { useRouter } from "next/navigation";
import { getDetails } from "@/app/odd/[event_id]/util/fetchDetails";
import Modal from "../Modal/modal";
import OddDetails from "../OddDetails/OddDetalhada";

type Props = {
  data: AdvantagesV1Response;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.2 } },
};

const GamesList = ({ data }: Props) => {
  const [lista, setLista] = useState<AgrupadoPorEsporte>({});
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [eventDetails, setEventDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const sportParam = searchParams.get("sport");
  const router = useRouter();

  const openModal = async (eventId: string) => {
    setLoading(true);
    setSelectedEventId(eventId);
    const details = await getDetails(eventId);
    setEventDetails(details);
    setLoading(false);
  };

  const closeModal = () => {
    setSelectedEventId(null);
    setEventDetails(null);
  };

  useEffect(() => {
    getListaCorreta(data, sportParam).then((res) => setLista(res));
  }, [data, sportParam]);

  const redirecionarRotaEsporte = (esporte: string) => {
    if (!sportParam) router.push(`/home?sport=${esporte}`);
    else router.push(`/home`);
  };

  return (
    <>
      <section className="flex flex-col w-full max-w-[700px] gap-3">
        {Object.entries(lista).map(([esporte, vantagens]) => {
          const esporteFormatado = formatName(esporte);
          return (
            <section key={esporte} className="w-full">
              <SportNav esporte={esporteFormatado} action={() => redirecionarRotaEsporte(esporte)} routeParam={sportParam ?? ""} />
              <motion.ul className="flex flex-col gap-2 mt-2" variants={containerVariants} initial="hidden" animate="show">
                {vantagens.length ? (
                  vantagens.map((vantagem, index) => {
                    const { context, outcomes } = vantagem;
                    return (
                      <motion.li
                        key={context.eventKey}
                        variants={itemVariants}
                        className={`p-3 rounded-md ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px 4px gray", cursor: "pointer" }}
                        whileTap={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => openModal(context.eventKey)}
                      >
                        <div className="flex justify-between font-medium text-sm text-gray-700">
                          <span className="font-semibold">{context.competitionName}</span>
                          <span>{new Date(context.eventStartTime).toLocaleString("pt-BR")}</span>
                        </div>

                        <div className="mt-1 text-sm text-gray-600">
                          {context.eventParticipants.map((team, i) => {
                            const payout = associarOdds(team.key, outcomes, i);
                            return (
                              <div key={team.key} className="flex justify-between">
                                <span>{team.name}</span>
                                <span className="font-semibold">Odd: {payout ?? "N/A"}</span>
                              </div>
                            );
                          })}
                        </div>
                      </motion.li>
                    );
                  })
                ) : (
                  <motion.li variants={itemVariants} className="p-4 text-sm text-center text-gray-500 bg-white rounded-md">
                    Nenhum evento próximo registrado para este esporte no momento.
                  </motion.li>
                )}
              </motion.ul>
            </section>
          );
        })}
      </section>

      <Modal isOpen={!!selectedEventId} onClose={closeModal}>
        {loading && <p className="text-center">Carregando...</p>}
        {eventDetails && <OddDetails event={eventDetails} isModal={true} />}
      </Modal>
    </>
  );
};

export default GamesList;
