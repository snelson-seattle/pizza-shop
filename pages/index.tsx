import Head from "next/head";

import Featured from "@/components/Featured";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Web&apos;s Best Pizza 🍕</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Best pizza online" />
      </Head>

      <Featured />
      <section className="text-3xl font-bold">Home Page</section>
    </>
  );
}
