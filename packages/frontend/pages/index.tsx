import React, { useState } from "react";
import Head from "next/head";

import Navbar from "@/components/component/Navbar";
import Hero from "@/components/component/Hero";
import { useAccount } from "wagmi";
import SidebarWithHeader from "@/components/component/Sidebar";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className={""}>
      <Head>
        <title>ontrack</title>
        <meta name="keep accountable" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {isConnected ? (
          <SidebarWithHeader />
        ) : (
          <>
            <Navbar />
            <Hero />
          </>
        )}
      </main>
    </div>
  );
}
