import Head from "next/head";
import AppLayout from "../../layouts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files
    .filter((filename) => filename.includes(".md"))
    .map((filename) => ({
      params: {
        slug: filename.replace(".md", ""),
      },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: never) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      slug,
      content,
    },
  };
}

export default function Post(props: {
  frontMatter: { [key: string]: string };
  slug: string;
  content: string;
}) {
  console.log("test");
  return (
    <div>
      <Head>
        <title>Posts / Welcome</title>
        <meta name="description" content="jack of all commands" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main className="flex flex-col items-center">
        <AppLayout showSearch={false}>
          {/* <Image
            src={props.frontMatter.thumbnail}
            alt={props.frontMatter.title}
            width="64"
            height="64"
          /> */}
          <div
            className="flex flex-col justify-center p-4 w-full max-w-2xl mt-12"
            dangerouslySetInnerHTML={{ __html: marked(props.content) }}
          />
        </AppLayout>
      </main>
    </div>
  );
}
