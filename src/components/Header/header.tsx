'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/FellipeBet.png';
import LoginButton from "@/src/components/LoginButton/button";
import { useSession } from '@/src/contexts/SessionContext';
import ProfileMenu from '../ProfileMenu';

const Header = () => {
  const { session } = useSession();
  
  return (
    <header className='flex flex-row justify-around py-4'>
        <Link href='/'>
            <Image src={logo} alt="FellipeBet" width={120} height={40} priority/>
        </Link>
        { session ? <ProfileMenu imageUrl={session.user?.image} userName={session.user?.name} />
        : <LoginButton session={session} /> }
    </header>
  );
}

export default Header;
