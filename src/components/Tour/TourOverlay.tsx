'use client';
import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useTour } from './TourProvider';

export function TourOverlay() {
  const { steps, currentStepIndex, nextStep, isTourOpen } = useTour();
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  const currentStep = steps[currentStepIndex];

  useLayoutEffect(() => {
    if (!isTourOpen || !currentStep) return;

    const el = document.querySelector(currentStep.target);
    if (el instanceof HTMLElement) {
      const rect = el.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(el);
      setIsFixed(computedStyle.position === 'fixed');
      setTargetRect(rect);
      el.classList.add('tour-highlight');
    }

    return () => {
      const el = document.querySelector(currentStep.target);
      if (el instanceof HTMLElement) {
        el.classList.remove('tour-highlight');
      }
    };
  }, [currentStepIndex, isTourOpen]);

  if (!isTourOpen || !currentStep || !targetRect) return null;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const style = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let top: number;
    let left: number;

    if (isFixed) {
      if (isMobile) {
        top = targetRect.bottom + 80;
        left = Math.min(targetRect.left, windowWidth - 320);
      } else {
        top = targetRect.top;
        left = targetRect.right + 50;
      }

      return {
        top,
        left,
        position: 'fixed' as const,
        zIndex: 9999,
      };
    }

    top = targetRect.bottom + 10 + window.scrollY;
    left = targetRect.left + window.scrollX;

    if (left + 300 > windowWidth) {
      left = windowWidth - 300;
    }

    if (top + 100 > windowHeight) {
      top = windowHeight - 100;
    }

    return {
      top,
      left,
      position: 'absolute' as const,
      zIndex: 9999,
    };
  };

  return createPortal(
    <>
      <motion.div
        className="fixed inset-0 bg-black/50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="bg-white shadow-2xl rounded-xl p-4 w-80 border border-gray-200"
        style={style()}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
      >
        <p className="font-semibold text-lg mb-2">{currentStep.title}</p>
        <p className="text-gray-700 mb-4">{currentStep.content}</p>
        <div className="flex justify-end">
          <button
            className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={nextStep}
          >
            {steps.length - 1 === currentStepIndex ? 'Concluir' : 'Próximo'}
          </button>
        </div>
      </motion.div>
    </>,
    document.body
  );
}
