export interface Step {
  target: string;
  content: string;
  title?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

export interface TourContextType {
  currentStepIndex: number;
  steps: Step[];
  isTourOpen: boolean;
  nextStep: () => void;
  closeTour: () => void;
}
