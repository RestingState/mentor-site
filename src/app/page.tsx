import Image from 'next/image';
import illustrationIntro from './assets/svg/illustration-intro.svg';
import Button from './components/Button';
import avatarAli from './assets/image/avatar-ali.png';
import avatarAnisha from './assets/image/avatar-anisha.png';
import avatarRichard from './assets/image/avatar-richard.png';
import avatarShanai from './assets/image/avatar-shanai.png';
import facebook from './assets/svg/icon-facebook.svg';
import youtube from './assets/svg/icon-youtube.svg';
import twitter from './assets/svg/icon-twitter.svg';
import pinterest from './assets/svg/icon-pinterest.svg';
import instagram from './assets/svg/icon-instagram.svg';
import Input from './components/Input';
import LogoIcon from './assets/svg/LogoIcon';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className='2xl:desktop-content-w flex flex-col items-center bg-tablet bg-[length:400px] bg-[right_-16rem_bottom] bg-no-repeat px-6 pb-20 2xl:flex-row-reverse 2xl:justify-between 2xl:gap-10 2xl:bg-none'>
        <Image
          className='w-80 2xl:w-max'
          src={illustrationIntro}
          alt='illustration intro'
        />
        <div className='text-center 2xl:max-w-sm 2xl:text-start'>
          <h1 className='pb-3'>
            Bring everyone together to build better products.
          </h1>
          <p className='text-base'>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button className='mt-7' text='Get Started' />
        </div>
      </section>
      <section className='2xl:desktop-content-w flex flex-col gap-12 2xl:flex-row 2xl:justify-between'>
        <div className='px-7 text-center 2xl:max-w-sm 2xl:text-start'>
          <h2 className='pb-4'>What’s different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <ol className='pl-4 2xl:max-w-lg'>
          <li className='pb-12'>
            <h3 className="mb-3 rounded-s-full bg-very-pale-red before:mr-3 before:inline-block before:rounded-full before:bg-bright-red before:px-6 before:py-2 before:text-very-light-gray before:content-['01'] 2xl:relative 2xl:bg-opacity-0 2xl:before:absolute 2xl:before:-left-20 2xl:before:-top-2">
              Track company-wide progress
            </h3>
            <p>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </li>
          <li className='pb-12'>
            <h3 className="mb-3 rounded-s-full bg-very-pale-red before:mr-3 before:inline-block before:rounded-full before:bg-bright-red before:px-6 before:py-2 before:text-very-light-gray before:content-['02'] 2xl:relative 2xl:bg-opacity-0 2xl:before:absolute 2xl:before:-left-20 2xl:before:-top-2">
              Advanced built-in reports
            </h3>
            <p>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </li>
          <li className='pb-12'>
            <h3 className="mb-3 rounded-s-full bg-very-pale-red before:mr-3 before:inline-block before:rounded-full before:bg-bright-red before:px-6 before:py-2 before:text-very-light-gray before:content-['03'] 2xl:relative 2xl:bg-opacity-0 2xl:before:absolute 2xl:before:-left-20 2xl:before:-top-2">
              Everything you need in one place
            </h3>
            <p>
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </li>
        </ol>
      </section>
      <section className='flex flex-col'>
        <h2 className='pb-14 text-center'>What they’ve said</h2>
        <div className='no-scrollbar mx-auto flex w-80 gap-4 overflow-x-scroll pb-5 2xl:w-full'>
          {[
            {
              src: avatarAnisha,
              name: 'Anisha Li',
              quote:
                'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
            },
            {
              src: avatarAli,
              name: 'Ali Bravo',
              quote:
                'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
            },
            {
              src: avatarRichard,
              name: 'Richard Watts',
              quote:
                'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!',
            },
            {
              src: avatarShanai,
              name: 'Shanai Gough',
              quote:
                'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.',
            },
          ].map(({ src, name, quote }) => (
            <div
              key={name}
              className='relative mt-9 max-w-xs flex-shrink-0 bg-very-light-gray px-6 pb-10 pt-14 text-center 2xl:max-w-md'
            >
              <div className='absolute -top-9 left-0 right-0'>
                <Image
                  className='mx-auto'
                  src={src}
                  width={72}
                  height={72}
                  alt='avatar of Ali'
                />
              </div>
              <h3 className='pb-3'>{name}</h3>
              <q>{quote}</q>
            </div>
          ))}
        </div>

        <div className='flex justify-center gap-1 2xl:hidden'>
          <div className='h-2 w-2 rounded-full border border-bright-red' />
          <div className='h-2 w-2 rounded-full border border-bright-red bg-bright-red' />
          <div className='h-2 w-2 rounded-full border border-bright-red' />
          <div className='h-2 w-2 rounded-full border border-bright-red' />
        </div>

        <Button className='mx-auto my-10' text='Get Started' />
      </section>
      <section className='bg-bright-red'>
        <div className='2xl:desktop-content-w flex flex-col items-center gap-6 px-8 py-20 text-center 2xl:flex-row 2xl:justify-between 2xl:px-0 2xl:text-start'>
          <div className='text-4xl font-medium text-very-light-gray 2xl:max-w-md'>
            Simplify how your team works today.
          </div>
          <Button
            className='bg-very-light-gray !text-bright-red'
            text='Get Started'
          />
        </div>
      </section>
      <footer className='bg-very-dark-blue'>
        <div className='2xl:desktop-content-w flex flex-col items-center gap-12 pb-5 pt-12 2xl:grid 2xl:grid-cols-3 2xl:gap-x-0 2xl:gap-y-20 2xl:py-12'>
          <div className='flex gap-2 2xl:order-3 2xl:justify-self-end'>
            <Input placeholder='Updates in your inbox…' />
            <Button text='GO' className='shadow-none' />
          </div>
          <nav className='mx-auto max-w-xs text-very-light-gray opacity-80 2xl:order-2 2xl:row-span-2 2xl:mx-0 2xl:max-w-none'>
            <ol className='flex flex-wrap'>
              <li className='basis-1/2 pl-10 pt-2 2xl:pl-0'>
                <Link href='#'>Home</Link>
              </li>
              <li className='basis-1/2 pl-10 pt-2 2xl:pl-0'>
                <Link href='#'>Pricing</Link>
              </li>
              <li className='basis-1/2 pl-10 pt-2 2xl:pl-0'>
                <Link href='#'>Products</Link>
              </li>
              <li className='basis-1/2 pl-10 pt-2 2xl:pl-0'>
                <Link href='#'>About Us</Link>
              </li>
              <li className='basis-1/2 pl-10 pt-2 2xl:pl-0'>
                <Link href='#'>Careers</Link>
              </li>
              <li className='basis-1/2 pl-10 pt-2 2xl:pl-0'>
                <Link href='#'>Community</Link>
              </li>
              <li className='basis-1/2 pl-10 pt-2 2xl:pl-0'>
                <Link href='#'>Privacy Policy</Link>
              </li>
            </ol>
          </nav>
          <div className='flex w-72 justify-between 2xl:order-4 2xl:justify-normal 2xl:gap-3'>
            <Link href='#'>
              <Image
                src={facebook}
                className='w-7 2xl:w-5'
                alt='facebook icon'
              />
            </Link>
            <Link href='#'>
              <Image src={youtube} className='w-7 2xl:w-5' alt='youtube icon' />
            </Link>
            <Link href='#'>
              <Image src={twitter} className='w-7 2xl:w-5' alt='twitter icon' />
            </Link>
            <Link href='#'>
              <Image
                src={pinterest}
                className='w-7 2xl:w-5'
                alt='pinterest icon'
              />
            </Link>
            <Link href='#'>
              <Image
                src={instagram}
                className='w-7 2xl:w-5'
                alt='instagram icon'
              />
            </Link>
          </div>

          <Link href='#' className='2xl:order-1'>
            <LogoIcon type='secondary' />
          </Link>

          <div className='text-xs text-dark-grayish-blue text-opacity-60 2xl:order-5 2xl:justify-self-end'>
            Copyright 2020. All Rights Reserved
          </div>
        </div>
      </footer>
    </main>
  );
}
