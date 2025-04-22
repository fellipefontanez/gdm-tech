'use client';
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { AnimatePresence, motion, Reorder } from 'framer-motion';
import { useBarraDeFavoritos } from '@/src/hooks/useBarraDeFavoritos';
import { useIsMobile } from '@/src/hooks/useIsMobile';

const BarraDeFavoritos = () => {
  const {
    itens,
    isOpen,
    setIsOpen,
    isHovered,
    setIsHovered,
    handleRemove,
    reorderList,
    showOnlyFavCategories,
    setShowOnlyFavCategories,
  } = useBarraDeFavoritos();

  const isMobile = useIsMobile();

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={
          isMobile
            ? { height: '62px', width: '100%' }
            : { width: isOpen ? (isHovered ? 40 : 8) : 32 }
        }
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`${
          isMobile
            ? 'flex w-[100vw] md:hidden top-[105px] z-40 h-20'
            : 'hidden z-50 rounded-r-md md:flex top-1/2 h-20'
        } items-center justify-center fixed left-0 transform -translate-y-1/2 bg-[#1e293b] text-white overflow-hidden first-step`}
      >
        {isMobile ? (
          isOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )
        ) : isOpen && isHovered ? (
          <ChevronLeft className="w-4 h-4" />
        ) : isOpen && !isHovered ? (
          <></>
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ [isMobile ? 'y' : 'x']: -300 }}
            animate={{ [isMobile ? 'y' : 'x']: isMobile ? 60 : 0 }}
            exit={{ [isMobile ? 'y' : 'x']: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed z-40 bg-white shadow-md p-4 ${
              isMobile
                ? 'top-[74px] left-0 w-full rounded-md md:hidden'
                : 'top-[74px] left-0 w-[280px] h-full rounded-r-md hidden md:block'
            }`}
          >
            <h3 className="text-lg font-bold mb-3 text-gray-800">Favoritos</h3>

            <Reorder.Group
              axis="y"
              values={itens}
              onReorder={reorderList}
              className="mb-8 space-y-2"
            >
              {itens?.length ? (
                itens.map((item: any) => (
                  <Reorder.Item
                    key={item}
                    value={item}
                    className="flex items-center justify-between pr-3 bg-gray-100 rounded-md shadow-sm cursor-pointer"
                    whileDrag={{
                      scale: 1.03,
                      boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
                    }}
                  >
                    <div className="p-2 mr-3 flex items-center justify-center rounded-l-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <circle cx="3" cy="3" r="1.5" />
                        <circle cx="3" cy="10" r="1.5" />
                        <circle cx="3" cy="17" r="1.5" />
                        <circle cx="10" cy="3" r="1.5" />
                        <circle cx="10" cy="10" r="1.5" />
                        <circle cx="10" cy="17" r="1.5" />
                      </svg>
                    </div>
                    <span className="flex-grow text-gray-800 py-3">{item}</span>
                    <button
                      onClick={() => handleRemove(item)}
                      className="text-sm text-red-600 hover:underline ml-4"
                    >
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
              className={`mt-8 w-full text-sm font-medium px-4 py-2 rounded-md text-white transition-colors duration-200 ${
                showOnlyFavCategories
                  ? 'bg-emerald-600 hover:bg-emerald-500'
                  : 'bg-neutral-800 hover:bg-neutral-700'
              }`}
            >
              {showOnlyFavCategories
                ? 'Ver todas as categorias'
                : 'Ver apenas categorias favoritas'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BarraDeFavoritos;
