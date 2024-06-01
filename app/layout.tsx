import { ReactNode } from 'react'
import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import "./globals.css";

type Props = {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Next.js and mdx blog"
};

export default function RootLayout(props: Readonly<Props>) {
  const { children } = props;

  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Header />
        <main className="mb-auto mx-auto w-3/5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}