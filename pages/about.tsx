import Head from "next/head";
import { About } from "../components";
import AppLayout from "../layouts";

export default function AboutMe() {
  return (
    <div>
      <Head>
        <title>Arun Govil / About</title>
        <meta name="description" content="jack of all commands" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main className="flex flex-col items-center">
        <AppLayout showSearch={false}>
          <About />
        </AppLayout>
      </main>
    </div>
  );
}
