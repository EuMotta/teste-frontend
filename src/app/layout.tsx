import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ToastContainer } from 'react-toastify';

import Navbar from '@/components/Navbar';

import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokemon',
  description: 'Teste-frontend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer position="top-right" limit={5} />
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
