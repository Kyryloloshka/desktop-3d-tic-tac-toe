import SimpleTicTacToeGame from "@/components/SimpleTicTacToeBoard";
import WinnerMessage from "@/components/SimpleTicTacToeBoard/_components/WinnerMessage";
import Head from "next/head";
import React from "react";

const SecretGameMode = () => {
  return (
    <>
      <Head>
        <title>Secret game mode - 3D Tic Tac Toe</title>
      </Head>
      <div className="flex-center min-h-[calc(100vh-80px)]">
        <SimpleTicTacToeGame />
        <WinnerMessage />
      </div>
    </>
  );
};

export default SecretGameMode;
