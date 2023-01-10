import Head from "next/head";
import { PostCard } from "../../components";
import AppLayout from "../../layouts";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files
    .filter((filename) => filename.includes(".md"))
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const markdownWithMeta = fs.readFileSync(
        path.join("posts", filename),
        "utf-8"
      );
      const { data: frontMatter } = matter(markdownWithMeta);
      return {
        slug,
        frontMatter,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime()
    );

  return {
    props: {
      posts,
    },
  };
}

export default function Blog(props: {
  posts: [
    {
      slug: string;
      frontMatter: { [key: string]: string };
    }
  ];
}) {
  return (
    <div>
      <Head>
        <title>Arun Govil / Posts</title>
        <meta name="description" content="jack of all commands" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main className="flex flex-col items-center">
        <AppLayout showSearch={false}>
          <div className="flex min-h-[70vh] flex-col justify-start p-4 w-full max-w-2xl mt-12">
            <p className="text-2xl">Posts</p>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {props.posts.map(
                ({ slug, frontMatter: { title, description, thumbnail } }) => (
                  <PostCard
                    key={slug}
                    title={title}
                    description={description}
                    url={slug}
                    icon={thumbnail}
                  />
                )
              )}
            </div>
          </div>
        </AppLayout>
      </main>
    </div>
  );
}
