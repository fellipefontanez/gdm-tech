"use client";
import { useFavoritosContext } from "@/src/contexts/FavoritosContext";
import React, { useEffect, useState } from "react";
import { Reorder } from "framer-motion";

const BarraDeFavoritos = () => {
  const { cachedData, setCachedData, showOnlyFavCategories, setShowOnlyFavCategories } = useFavoritosContext();
  const [itens, setItens] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false); // controla dropdown em telas menores

  useEffect(() => {
    if (cachedData && cachedData.length) {
      setItens(cachedData);
    } else setItens([]);
  }, [cachedData]);

  const handleRemove = (item: string) => {
    const novaLista = itens.filter((i) => i !== item);
    setItens(novaLista);
    setCachedData(novaLista);
  };

  const reorderList = (a: any) => {
    setCachedData(a);
  };

  return (
    <>
      <div className="hidden md:block bg-white p-4 rounded-md shadow-md h-full mx-auto w-full max-w-[300px] fixed">
        <h3 className="text-lg font-bold mb-3 text-gray-800">Favoritos</h3>

        <div className="max-h-96 overflow-hidden">
          <Reorder.Group axis="y" values={itens} onReorder={reorderList} className="mb-8 space-y-2">
            {itens.length ? (
              itens.map((item) => (
                <Reorder.Item
                  key={item}
                  value={item}
                  className="flex items-center justify-between pr-3 bg-gray-100 rounded-md shadow-sm cursor-pointer"
                  whileDrag={{
                    scale: 1.03,
                    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="p-2 mr-3 flex items-center justify-center bg-gray-200 rounded-l-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <circle cx="3" cy="3" r="1.5" />
                      <circle cx="3" cy="10" r="1.5" />
                      <circle cx="3" cy="17" r="1.5" />
                      <circle cx="10" cy="3" r="1.5" />
                      <circle cx="10" cy="10" r="1.5" />
                      <circle cx="10" cy="17" r="1.5" />
                    </svg>
                  </div>

                  <span className="flex-grow text-gray-800 py-3">{item}</span>

                  <button onClick={() => handleRemove(item)} className="text-sm text-red-600 hover:underline ml-4">
                    Remover
                  </button>
                </Reorder.Item>
              ))
            ) : (
              <p>Nenhum favorito adicionado</p>
            )}
          </Reorder.Group>
          <button
            type="button"
            onClick={() => {
              console.log(showOnlyFavCategories);
              setShowOnlyFavCategories(!showOnlyFavCategories);
            }}
            className={`mt-8 cursor-pointer w-full text-sm font-medium px-4 py-2 rounded-md text-white transition-colors duration-200 focus:outline-none focus:ring-2
                    ${
                      showOnlyFavCategories
                        ? "bg-emerald-600 hover:bg-emerald-500 focus:ring-emerald-400"
                        : "bg-neutral-800 hover:bg-neutral-700 focus:ring-neutral-500"
                    }`}
          >
            {showOnlyFavCategories ? "Ver todas as categorias" : "Ver apenas categorias favoritas"}
          </button>
        </div>
      </div>

      <div className="md:hidden fixed top-[74px] left-0 right-0 bg-white shadow-md z-50">
        <div className="flex justify-between items-center p-4">
          <h3 className="text-lg font-bold text-gray-800">Favoritos</h3>
          <button onClick={() => setIsOpen(!isOpen)} className="text-sm text-blue-600 font-medium">
            {isOpen ? "Fechar" : "Abrir"}
          </button>
        </div>

        {isOpen && (
          <div className="p-2 border-t border-gray-200 max-h-[300px] overflow-y-auto">
            <Reorder.Group axis="y" values={itens} onReorder={setItens} className="space-y-2">
              {itens.length ? (
                itens.map((item) => (
                  <Reorder.Item
                    key={item}
                    value={item}
                    className="flex items-center justify-between pr-3 bg-gray-100 rounded-md shadow-sm cursor-pointer"
                    whileDrag={{
                      scale: 1.03,
                      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="p-2 mr-3 flex items-center justify-center bg-gray-200 rounded-l-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <circle cx="3" cy="3" r="1.5" />
                        <circle cx="3" cy="10" r="1.5" />
                        <circle cx="3" cy="17" r="1.5" />
                        <circle cx="10" cy="3" r="1.5" />
                        <circle cx="10" cy="10" r="1.5" />
                        <circle cx="10" cy="17" r="1.5" />
                      </svg>
                    </div>

                    <span className="flex-grow text-gray-800 py-3">{item}</span>

                    <button onClick={() => handleRemove(item)} className="text-sm text-red-600 hover:underline ml-4">
                      Remover
                    </button>
                  </Reorder.Item>
                ))
              ) : (
                <p>Nenhum favorito adicionado</p>
              )}
            </Reorder.Group>
          </div>
        )}
      </div>
    </>
  );
};

export default BarraDeFavoritos;
