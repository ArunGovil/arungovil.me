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
        const formatDate = (date: string) => {
                const ar = date.split("-");
                let formattedDate = ar.reverse().join("-");
                return formattedDate;
        };
        return (
                <div>
                        <Head>
                                <title>Posts / {props.frontMatter.title}</title>
                                <meta name="description" content="jack of all commands" />
                                <link rel="icon" href="/img/frame.png" />
                        </Head>
                        <main className="flex flex-col items-center">
                                <AppLayout showSearch={false}>
                                        <div>
                                                <h1 className="mt-4 text-center">{props.frontMatter.title} </h1>
                                                <p className="text-sm mt-1 text-center font-thin text-gray-400">
                                                        {formatDate(props.frontMatter.date)} / {props.frontMatter.topic}
                                                </p>
                                        </div>
                                        <img
                                                src={props.frontMatter.cover}
                                                alt={props.frontMatter.title}
                                                className="max-w-2xl p-6 h-auto w-full"
                                        />
                                        <div
                                                className="markdown"
                                                dangerouslySetInnerHTML={{ __html: marked(props.content) }}
                                        />
                                </AppLayout>
                        </main>
                </div>
        );
}
