"use client";
import { useFavoritosContext } from "@/src/contexts/FavoritosContext";
import React, { useEffect, useState } from "react";
import { Reorder, motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const BarraDeFavoritos = () => {
  const { cachedData, setCachedData, showOnlyFavCategories, setShowOnlyFavCategories } = useFavoritosContext();
  const [itens, setItens] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ width: isOpen ? (isHovered ? 40 : 8) : 32 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`hidden md:flex items-center justify-center z-50 fixed top-1/2 left-0 transform -translate-y-1/2 bg-[#1e293b] text-white h-20 rounded-r-md overflow-hidden`}
      >
        {isOpen ? (
          !!isHovered && (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.707 4.293a1 1 0 010 1.414L4.414 9H16a1 1 0 110 2H4.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.293 15.707a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </motion.button>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ height: "62px", width: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`flex w-[100vw] md:hidden items-center justify-center z-50 fixed top-[105px] left-0 transform -translate-y-1/2 bg-[#1e293b] text-white h-20 overflow-hidden`}
      >
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <Favoritos
            itens={itens}
            reorderList={reorderList}
            handleRemove={handleRemove}
            setShowOnlyFavCategories={setShowOnlyFavCategories}
            showOnlyFavCategories={showOnlyFavCategories}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BarraDeFavoritos;

const Favoritos = ({ itens, reorderList, handleRemove, setShowOnlyFavCategories, showOnlyFavCategories }: any) => {
  return (
    <>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 60 }}
        exit={{ y: -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-[74px] left-0 z-40 w-full h-fit overflow-y-auto bg-white p-4 rounded-md shadow-md md:hidden"
      >
        <h3 className="text-lg font-bold mb-3 text-gray-800">Favoritos</h3>

        <Reorder.Group axis="y" values={itens} onReorder={reorderList} className="mb-8 space-y-2">
          {itens?.length ? (
            itens.map((item: any) => (
              <Reorder.Item
                key={item}
                value={item}
                className="flex items-center justify-between pr-3 bg-gray-100 rounded-md shadow-sm cursor-pointer"
                whileDrag={{
                  scale: 1.03,
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                }}
              >
                <div className="p-2 mr-3 flex items-center justify-center rounded-l-md">
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
          onClick={() => setShowOnlyFavCategories(!showOnlyFavCategories)}
          className={`mt-8 cursor-pointer w-full text-sm font-medium px-4 py-2 rounded-md text-white transition-colors duration-200 focus:outline-none focus:ring-2
                  ${
                    showOnlyFavCategories
                      ? "bg-emerald-600 hover:bg-emerald-500 focus:ring-emerald-400"
                      : "bg-neutral-800 hover:bg-neutral-700 focus:ring-neutral-500"
                  }`}
        >
          {showOnlyFavCategories ? "Ver todas as categorias" : "Ver apenas categorias favoritas"}
        </button>
      </motion.div>

      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-[74px] left-0 z-40 w-[280px] h-full overflow-y-auto bg-white p-4 rounded-r-md shadow-md hidden md:block"
      >
        <h3 className="text-lg font-bold mb-3 text-gray-800">Favoritos</h3>

        <Reorder.Group axis="y" values={itens} onReorder={reorderList} className="mb-8 space-y-2">
          {itens?.length ? (
            itens.map((item: any) => (
              <Reorder.Item
                key={item}
                value={item}
                className="flex items-center justify-between pr-3 bg-gray-100 rounded-md shadow-sm cursor-pointer"
                whileDrag={{
                  scale: 1.03,
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                }}
              >
                <div className="p-2 mr-3 flex items-center justify-center rounded-l-md">
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
          onClick={() => setShowOnlyFavCategories(!showOnlyFavCategories)}
          className={`mt-8 cursor-pointer w-full text-sm font-medium px-4 py-2 rounded-md text-white transition-colors duration-200 focus:outline-none focus:ring-2
                  ${
                    showOnlyFavCategories
                      ? "bg-emerald-600 hover:bg-emerald-500 focus:ring-emerald-400"
                      : "bg-neutral-800 hover:bg-neutral-700 focus:ring-neutral-500"
                  }`}
        >
          {showOnlyFavCategories ? "Ver todas as categorias" : "Ver apenas categorias favoritas"}
        </button>
      </motion.div>
    </>
  );
};
