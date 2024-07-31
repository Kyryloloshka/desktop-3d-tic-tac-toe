import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Rubik, Rubik_Mono_One } from "next/font/google";
import StoreProvider from "@/components/StoreProvider";
import Header from "@/components/Header";
import MainDragArea from "@/components/MainDragArea";
export const rubikMonoOne = Rubik_Mono_One({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
});
export const rubik = Rubik({
  weight: ["400", "300", "600"],
  subsets: ["latin", "cyrillic"],
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Header />
      <MainDragArea>
        <Component {...pageProps} />
      </MainDragArea>
    </StoreProvider>
  );
}

export default MyApp;
