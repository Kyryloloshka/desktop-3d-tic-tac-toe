import React from "react";
import LeftNavBar from "components/LeftNavBar";
import { Toaster } from "components/ui/toaster";
import dynamic from "next/dynamic";
import Recomendation from "components/Recomendation";
import BotMoveHandler from "components/BotMoveHandler";
import WinToastHandler from "components/WinToastHandler";
import Loading from "pages/loading";
import Head from "next/head";

const ComponentPlayGame = dynamic(() => import("@/components/Model3d"), {
  ssr: false,
  loading: () => <Loading />,
});

const PlayGame = () => {
  return (
    <>
      <Head>
        <title>Play game - 3D Tic Tac Toe</title>
      </Head>

      <div className={`overflow-hidden flex-auto flex flex-col h-full`}>
        <Recomendation />
        <div className="flex flex-col md:flex-row h-full flex-auto">
          <LeftNavBar />
          <ComponentPlayGame />
        </div>
        <Toaster />
        <BotMoveHandler />
        <WinToastHandler />
      </div>
    </>
  );
};

export default PlayGame;
