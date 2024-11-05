import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import { cn } from '../lib/utils'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'], // Note 'subsets' instead of 'subset'
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans', // Make sure this variable name is consistent with your CSS
});

export const metadata: Metadata = {
  title: 'Şehir hastanesi',
  description: 'Health care Management system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased',fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
