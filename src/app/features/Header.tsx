'use client';

import Image from 'next/image';
import LogoIcon from '../assets/svg/LogoIcon';
import hamburger from '../assets/svg/icon-hamburger.svg';
import close from '../assets/svg/icon-close.svg';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Link from 'next/link';

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
    <nav
      className='flex items-center justify-between px-5 py-10 2xl:hidden'
      aria-label='Primary'
    >
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
          <li>
            <Link href='#'>Pricing</Link>
          </li>
          <li>
            <Link href='#'>Product</Link>
          </li>
          <li>
            <Link href='#'>About Us</Link>
          </li>
          <li>
            <Link href='#'>Careers</Link>
          </li>
          <li>
            <Link href='#'>Community</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

function DesktopNavigation() {
  return (
    <nav className='hidden 2xl:block' aria-label='Primary'>
      <div className='desktop-content-w flex items-center justify-between py-12'>
        <LogoIcon type='primary' />
        <ul className='flex gap-8 font-medium text-dark-blue'>
          <li className='hover:opacity-60'>
            <Link href='#'>Pricing</Link>
          </li>
          <li className='hover:opacity-60'>
            <Link href='#'>Product</Link>
          </li>
          <li className='hover:opacity-60'>
            <Link href='#'>About Us</Link>
          </li>
          <li className='hover:opacity-60'>
            <Link href='#'>Careers</Link>
          </li>
          <li className='hover:opacity-60'>
            <Link href='#'>Community</Link>
          </li>
        </ul>
        <Button text='Get Started' />
      </div>
    </nav>
  );
}
