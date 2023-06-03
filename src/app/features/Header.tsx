'use client';

import Image from 'next/image';
import LogoIcon from '../assets/svg/LogoIcon';
import hamburger from '../assets/svg/icon-hamburger.svg';
import close from '../assets/svg/icon-close.svg';
import { useEffect, useState } from 'react';

function Header() {
  return (
    <header className='flex items-center justify-between px-5 py-10'>
      <LogoIcon type='primary' className='relative z-10' />
      <MobileNavigation />
    </header>
  );
}

export default Header;

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  return (
    <div className='2xl:hidden'>
      {open ? (
        <MobileModal onClose={onClose} />
      ) : (
        <Image
          className='relative'
          src={hamburger}
          height={21}
          width={30}
          alt='hamburger'
          onClick={onOpen}
        />
      )}
    </div>
  );
}

type MobileModalProps = {
  onClose: () => void;
};

function MobileModal({ onClose }: MobileModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <Image
        className='relative z-10'
        src={close}
        height={26}
        width={25}
        alt='close'
        onClick={onClose}
      />
      <div className='absolute inset-0 bg-gradient-to-b from-very-light-gray to-very-dark-blue opacity-40' />
      <nav className='absolute inset-0'>
        <ul className='mx-6 mt-28 flex flex-col items-center gap-4 rounded bg-very-light-gray py-8 font-bold text-dark-blue'>
          <li>Pricing</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Community</li>
        </ul>
      </nav>
    </>
  );
}
