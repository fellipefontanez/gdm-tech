'use client'

import React, { memo, ReactNode } from 'react';
import { motion } from "framer-motion";

interface ButtonProps {
    style: "outline" | "solid" | "SignOut" | "SignIn";
    action: () => any;
    children: ReactNode;
    color?: string;
}

const Button = ({style, action, children, color}: ButtonProps) => {
    switch (style) {
        case 'SignOut':
            return <motion.button
                onClick={action}
                className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, opacity: 0.8 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {children}
            </motion.button>;
        case 'SignIn':
            return (
              <motion.button
                onClick={action}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, opacity: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {children}
              </motion.button>
            );
        case 'outline':
            return (
                <button
                    onClick={action}
                    className={
                    "px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors duration-200 cursor-pointer"
                    }
                >
                    {children}
                </button>
            )
        default:
            break;
    }
}

export default memo(Button);