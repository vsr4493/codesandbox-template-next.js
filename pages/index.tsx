import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="mx-auto max-w-screen-lg">
          <h1 className="my-8 text-2xl">Sample home page</h1>
        </div>
      </main>
    </div>
  );
}
