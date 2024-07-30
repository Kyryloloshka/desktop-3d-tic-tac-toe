import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Rubik, Rubik_Mono_One } from "next/font/google";
import StoreProvider from "@/components/StoreProvider";
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
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
