import Head from "next/head";
import { PhotoCard } from "../components";
import AppLayout from "../layouts";
import { Photos as Data } from "../content/Photos";

export default function Photos() {
  return (
    <div>
      <Head>
        <title>Arun Govil / Photos</title>
        <meta name="description" content="jack of all commands" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main className="flex flex-col items-center">
        <AppLayout showSearch={false}>
          <div className="flex flex-col p-4 w-full max-w-2xl min-h-[70vh] mt-12">
            <p className="text-2xl text-white">Photos</p>
            <div className="flex flex-wrap justify-around gap-5 h-auto p-2">
              {Data.map((item, i) => {
                return (
                  <PhotoCard
                    key={i}
                    title={item.title}
                    description={item.description}
                    photo={item.photo}
                    date={item.date}
                  />
                );
              })}
            </div>
          </div>
        </AppLayout>
      </main>
    </div>
  );
}
