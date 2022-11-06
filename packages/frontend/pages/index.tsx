import React, { useState } from "react";
import Head from "next/head";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { GetGreeter, SetGreeter } from "../components/contract";
import Navbar from "@/components/component/Navbar";
import Hero from "@/components/component/Hero";
import Profile from "@/components/component/Profile";
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
          <>
            <SidebarWithHeader />
            <Profile />
          </>
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
