import { useEffect, useState } from "react";
import { useFavoritosContext } from "@/src/contexts/FavoritosContext";

export const useBarraDeFavoritos = () => {
    const { cachedData, setCachedData, showOnlyFavCategories, setShowOnlyFavCategories } = useFavoritosContext();
    const [itens, setItens] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setItens(cachedData?.length ? cachedData : []);
    }, [cachedData]);

    const handleRemove = (item: string) => {
        const novaLista = itens.filter((i) => i !== item);
        setItens(novaLista);
        setCachedData(novaLista);
    };

    const reorderList = (a: string[]) => {
        setCachedData(a);
    };

    return {
        itens,
        isOpen,
        setIsOpen,
        isHovered,
        setIsHovered,
        handleRemove,
        reorderList,
        showOnlyFavCategories,
        setShowOnlyFavCategories,
    };
};
