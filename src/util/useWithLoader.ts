import { useLoader } from "@/src/contexts/LoaderContext";

export const useWithLoader = () => {
    const { startLoading, stopLoading } = useLoader();

    const withLoader = async <T>(fn: () => Promise<T>): Promise<T> => {
        try {
            startLoading();
            return await fn();
        } finally {
            stopLoading();
        }
    };

    return withLoader;
};
