'use client';

import Image from 'next/image';
import LogoIcon from '../assets/svg/LogoIcon';
import hamburger from '../assets/svg/icon-hamburger.svg';
import close from '../assets/svg/icon-close.svg';
import { useEffect, useState } from 'react';
import Button from '../components/Button';

function Header() {
  return (
    <header>
      <MobileNavigation />
      <DesktopNavigation />
    </header>
  );
}

export default Header;

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  return (
    <nav className='flex items-center justify-between px-5 py-10 2xl:hidden'>
      <LogoIcon type='primary' className='relative z-10' />
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
    </nav>
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
      <div className='absolute inset-0'>
        <ul className='mx-6 mt-28 flex flex-col items-center gap-4 rounded bg-very-light-gray py-8 font-bold text-dark-blue'>
          <li>Pricing</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Community</li>
        </ul>
      </div>
    </>
  );
}

function DesktopNavigation() {
  return (
    <nav className='hidden 2xl:block'>
      <div className='desktop-content-w flex items-center justify-between py-12'>
        <LogoIcon type='primary' className='cursor-pointer' />
        <ul className='flex gap-8 font-medium text-dark-blue'>
          <li className='cursor-pointer'>Pricing</li>
          <li className='cursor-pointer'>Product</li>
          <li className='cursor-pointer'>About Us</li>
          <li className='cursor-pointer'>Careers</li>
          <li className='cursor-pointer'>Community</li>
        </ul>
        <Button text='Get Started' />
      </div>
    </nav>
  );
}
