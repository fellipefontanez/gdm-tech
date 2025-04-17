'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/FellipeBet.png';
import LoginButton from "@/src/components/LoginButton/button";
import { useSession } from '@/src/contexts/SessionContext';

const Header = () => {
  const { session } = useSession();
  
  return (
    <header className='flex justify-around'>
        <Link href='/'>
            <Image src={logo} alt="FellipeBet" width={120} height={40} priority/>
        </Link>
        <LoginButton session={session} />
    </header>
  );
}

export default Header;
