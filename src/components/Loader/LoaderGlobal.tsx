"use client";

import { useLoader } from "@/src/contexts/LoaderContext";
import { Loader } from "./Loader";

export default function GlobalLoader() {
  const { isLoading } = useLoader();

  if (!isLoading) return null;

  return <Loader />;
}
