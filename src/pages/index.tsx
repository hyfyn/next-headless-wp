import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Lottie from "react-lottie";
import styles from "@styles/Home.module.css";
import animationData from "@animations/hello_mydude.json";
import type { Post } from "@types";

type Props = {
  data: Post[];
};

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Home({ data }: Props) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Hello 10up</title>
        <meta
          name="description"
          content="code submission for a front-end role"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.main}>
        <h1>Hello 10up</h1>
        <h2>I'm Matt</h2>
        <Lottie options={lottieOptions} width="75vw" />
      </header>
      <nav>
        <ul>
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.grid}>
          {data.map((post) => (
            <article key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <header className={styles.card}>
                  <h2>{post.title.rendered}</h2>
                  <span>Read More -&gt;</span>
                </header>
              </Link>
            </article>
          ))}
        </div>
        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  const wpData = await fetch(
    "http://headless-wp.local/wp-json/wp/v2/posts?sticky=true"
  );
  const stickyPosts = await wpData.json();
  return { data: stickyPosts };
};
