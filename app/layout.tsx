import type { Metadata } from "next";
import { Plus_Jakarta_Sans} from "next/font/local";
import "./globals.css";
import { cn } from '../lib/utils'

const fontSans = Plus_Jakarta_Sans({
  subset:["latin"],
  weight: ['300','400','500','600','700'],
  variable:'---font-Sans',
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
      <body className={cn}>
        {children}
      </body>
    </html>
  );
}
