"use client";
import React, { useState, useEffect } from "react";
import GamesList from "@/src/components/GamesList/lista";
import { getAdvantages } from "./util/fetchs";
import BarraDeFavoritos from "@/src/components/FavoritosBar/Barra";
import { Loader } from "@/src/components/Loader/Loader";
import { AdvantagesV1Response } from "@/src/types/eventResponse.model";

const Home = () => {
  const [response, setResponse] = useState<AdvantagesV1Response>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAdvantages();
        setResponse(data);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="pt-[50px] md:p-0">
      <BarraDeFavoritos />
      <section className="grid md:grid-cols-12">
        <div className="hidden md:block md:col-span-3"></div>
        <div className="col-span-12 md:col-span-6 md:col-start-4 py-8">{response && <GamesList data={response} />}</div>
      </section>
    </main>
  );
};

export default Home;
