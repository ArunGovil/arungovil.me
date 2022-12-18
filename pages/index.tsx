import Head from "next/head";
import { About, Hero } from "../components";
import AppLayout from "../layouts";

export default function App() {
  return (
    <div>
      <Head>
        <title>Arun Govil</title>
        <meta name="description" content="Hobbyist developer" />
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
