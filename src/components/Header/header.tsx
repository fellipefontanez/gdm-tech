"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/FellipeBet.png";
import LoginButton from "@/src/components/LoginButton/button";
import { useSession } from "@/src/contexts/SessionContext";
import ProfileMenu from "../ProfileMenu";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Header = () => {
  const { session } = useSession();
  const router = useRouter();

  const redirectHome = () => {
    router.push("/home");
  };

  return (
    <header className="w-full flex justify-center fixed z-50">
      <div className="flex flex-row justify-between py-4 md:w-[70%] w-[95%]">
        <Link href="/">
          <Image src={logo} alt="FellipeBet" width={120} height={40} priority />
        </Link>
        <ul className="flex items-center gap-10">
          <li>
            {!!session && (
              <motion.button
                className="cursor-pointer px-3 py-2 rounded-sm text-gray-100 font-extralight"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: "80" }}
                onClick={() => redirectHome()}
              >
                Home
              </motion.button>
            )}
          </li>
          <li>{session ? <ProfileMenu imageUrl={session.user?.image} userName={session.user?.name} /> : <LoginButton session={session} />}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
