import Head from "next/head";
import { WorkCard } from "../components";
import AppLayout from "../layouts";
import { WorkExperience } from "../content/Work";

export default function Work() {
  return (
    <div>
      <Head>
        <title>Arun Govil / Work</title>
        <meta name="description" content="jack of all commands" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main className="flex flex-col items-center">
        <AppLayout showSearch={false}>
          <div className="flex flex-col p-4 w-full max-w-2xl min-h-[70vh] mt-12">
            <p className="text-2xl text-white">Work</p>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {WorkExperience.map((item) => {
                return (
                  <WorkCard
                    key={item.title}
                    title={item.title}
                    role={item.role}
                    url={item.url}
                    logo={item.logo}
                    year={item.year}
                    experience={item.experience}
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
