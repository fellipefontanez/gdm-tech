'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Step } from './types/types';

type TourContextType = {
  steps: Step[];
  currentStepIndex: number;
  nextStep: () => void;
  prevStep: () => void;
  isTourOpen: boolean;
  startTour: (steps: Step[]) => void;
};

const TourContext = createContext<TourContextType | undefined>(undefined);

export function TourProvider({ children }: { children: ReactNode }) {
  const [steps, setSteps] = useState<Step[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const startTour = (tourSteps: Step[]) => {
    setSteps(tourSteps);
    setCurrentStepIndex(0);
    setIsTourOpen(true);
  };

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsTourOpen(false);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <TourContext.Provider
      value={{
        steps,
        currentStepIndex,
        nextStep,
        prevStep,
        isTourOpen,
        startTour,
      }}
    >
      {children}
    </TourContext.Provider>
  );
}

export const useTour = (): TourContextType => {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
};
