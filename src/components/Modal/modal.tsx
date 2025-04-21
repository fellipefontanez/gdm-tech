"use client";

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  const fecharSeClicarFora = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-start md:items-center md:pt-4 bg-black"
      style={{ backgroundColor: `#00000080` }}
      onClick={fecharSeClicarFora}
    >
      <div
        className="bg-white p-4 rounded-md w-[420px] h-max-[300px] relative mt-8 md:mt-0 md:rounded-lg overflow-y-scroll limite"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => onClose()} className="absolute top-2 right-2 text-gray-700 font-bold">
          X
        </button>
        {children}
      </div>
    </div>
  );
}
