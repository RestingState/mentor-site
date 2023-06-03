import Header from './features/Header';
import './globals.css';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${beVietnamPro.className} bg-tablet bg-[length:400px] bg-[right_-5rem_top_-5rem] bg-no-repeat text-sm text-dark-grayish-blue 2xl:bg-auto 2xl:bg-[right_-10rem_top_-12rem]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
