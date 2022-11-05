import Head from "next/head";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { GetGreeter, SetGreeter } from "../components/contract";
import Navbar from "@/components/component/Navbar";
import Hero from "@/components/component/Hero";
import Multistep from "@/components/component/Form";

export default function Home() {
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
        <Navbar />
        <Multistep />
      </main>
    </div>
  );
}
