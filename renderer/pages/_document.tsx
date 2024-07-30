import { Html, Head, Main, NextScript } from "next/document";
import { rubikMonoOne } from "./_app";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`${rubikMonoOne.className} h-[100dvh] common-container flex flex-col relative`}
        suppressHydrationWarning={true}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
