import Head from "next/head";
import { ProjectCard } from "../components";
import AppLayout from "../layouts";
import { ProjectsData } from "../content/Projects";
import { useState } from "react";

export default function Projects() {
  const [data, setData] = useState(ProjectsData.reverse());
  return (
    <div>
      <Head>
        <title>Arun Govil / Projects</title>
        <meta name="description" content="jack of all commands" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main className="flex flex-col items-center">
        <AppLayout showSearch={false}>
          <div className="flex flex-col justify-center p-4 w-full max-w-2xl mt-12">
            <div className="mt-4 grid grid-cols-1  gap-4">
              {data.map((item) => {
                return (
                  <ProjectCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    icon={item.icon}
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
