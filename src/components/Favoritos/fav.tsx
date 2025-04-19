import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useFavoritosContext } from "@/src/contexts/FavoritosContext";

export function SyncFavoritosFromDB() {
    const { data: session } = useSession();
    const { setCachedData } = useFavoritosContext();

    useEffect(() => {
        if (session?.user?.email) {
            fetch(`/api/protected/favoritos?email=${session.user.email}`)
                .then((res) => res.json())
                .then((data) => setCachedData(data.favoritos));
        }
    }, [session]);

    return null;
}