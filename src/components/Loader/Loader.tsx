import React from 'react';

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-[#FFFFFF73] bg-opacity-80 flex items-center justify-center">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12" />
    </div>
  );
};
