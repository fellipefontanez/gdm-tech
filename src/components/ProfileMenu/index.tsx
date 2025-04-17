"use client";

import { memo, useState, useCallback, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProfileMenuProps {
  imageUrl: string | null | undefined;
  userName: string | null | undefined;
}

const ProfileMenu = ({ imageUrl, userName }: ProfileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeMenu]);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <motion.button
        onClick={toggleMenu}
        className="focus:outline-none rounded-full overflow-hidden w-10 h-10 border-2 border-gray-300 cursor-pointer"
        aria-label="Abrir menu do perfil"
        aria-expanded={isOpen}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "tween" }}
        whileTap={{ scale: 0.95, opacity: 0.9 }}
      >
        <Image src={imageUrl ?? ""} alt={userName ?? "Perfil"} width={40} height={40} className="rounded-full object-cover w-full h-full" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50 px-5 py-4 origin-top flex flex-col"
            initial={{
              opacity: 0,
              scaleY: 0,
              y: -15,
              clipPath: "inset(0 0 100% 0 round 12px)",
              transformOrigin: "top center",
            }}
            animate={{
              opacity: 1,
              scaleY: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0 round 12px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
              },
            }}
            exit={{
              opacity: 0,
              scaleY: 0.8,
              y: -10,
              clipPath: "inset(0 0 100% 0 round 12px)",
              transition: { duration: 0.2 },
            }}
          >
            <p className="text-sm text-gray-700 leading-tight tracking-wide mb-3">
              Bem-vindo, <span className="font-semibold">{userName}</span>
            </p>
            <hr className="border-t border-gray-200 mt-0.5 mb-1" />
            <motion.button
              onClick={() => signOut({redirect: true, callbackUrl: "/"})}
              className="self-end block w-min text-left px-4 py-2 text-sm text-black cursor-pointer font-medium rounded hover:bg-red-50 transition-colors duration-200"
              whileHover={{scale: 1.05}}
              whileTap={{scale:.9, opacity:.85}}
              transition={{type: 'spring', stiffness: 300}}
            >
              Sair
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(ProfileMenu);
