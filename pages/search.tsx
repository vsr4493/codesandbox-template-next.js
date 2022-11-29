import Head from "next/head";
import { useRef } from "react";
import { useGleanSearchResults } from "../hooks/useGleanSearch";

export default function Search(props) {
  const resultsContainerRef = useRef(null);
  useGleanSearchResults(resultsContainerRef);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-screen-lg">
        <div ref={resultsContainerRef} className="mt-24 h-[800px]"></div>
      </main>
    </div>
  );
}
