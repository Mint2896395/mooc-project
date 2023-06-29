import React, { ReactNode } from 'react';
import Footer from "components/Footer";
import Header from "components/Header";
import GotoTop from './GotoTop';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <GotoTop />
    </>
  );
}
