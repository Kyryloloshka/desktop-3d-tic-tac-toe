import Model3d from "@/components/Model3d";
import TopBarControlsReplay from "@/components/TopBarControlsReplay";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>Replay - 3D Tic Tac Toe</title>
      </Head>

      <div className="flex relative flex-col min-h-full flex-auto">
        <TopBarControlsReplay />
        <Model3d />
      </div>
    </>
  );
};

export default page;
