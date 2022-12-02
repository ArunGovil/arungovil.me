import Head from "next/head";
import React from "react";
import { Header, Footer } from "../components";

interface AppLayoutProps {
  children: any;
  showSearch: boolean;
}

export default function AppLayout({ children, showSearch }: AppLayoutProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
