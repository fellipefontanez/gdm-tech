"use client";

import React, { createContext, useContext, useState } from "react";

interface OnboardingContextProps {
  showModal: boolean;
  closeModal: () => void;
}

const OnboardingContext = createContext<OnboardingContextProps | undefined>(undefined);

export const OnboardingProvider = ({ children, hasOnboarded }: { children: React.ReactNode; hasOnboarded: boolean }) => {
  const [showModal, setShowModal] = useState(!hasOnboarded);

  const closeModal = async () => {
    setShowModal(false);
    await fetch("/api/user/onboarded", { method: "POST" });
  };

  return <OnboardingContext.Provider value={{ showModal, closeModal }}>{children}</OnboardingContext.Provider>;
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) throw new Error("useOnboarding must be used within OnboardingProvider");
  return context;
};
