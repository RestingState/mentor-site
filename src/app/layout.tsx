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
        className={`${beVietnamPro.className} text-sm text-dark-grayish-blue`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
