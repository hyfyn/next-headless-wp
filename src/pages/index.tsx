import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Lottie from "react-lottie";
import styles from "@styles/Home.module.css";
import animationData from "@animations/hello_mydude.json";
import type { Post } from "@types";

type Props = {
  data: Post[];
  pages: any[];
};

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Home({ data, pages }: Props) {
  console.log(data, pages);
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
      <header>
        <div className={`absolute ${styles.header_position}`}>
          <h1 className={styles.intro}>Hello 10up</h1>
          <h2 className={styles.intro}>I'm Matt</h2>
        </div>
        <div className={styles.animation}>
          <Lottie options={lottieOptions} />
        </div>
      </header>
      <nav>
        <ul className={styles.inline}>
          {pages.map((page) => (
            <li key={page.id}>
              <Link href={`${page.slug}`}>{page.title.rendered}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className={styles.main}>
        <section className={styles.description}>
          <p>
            I built this site to submit as a my code sample for the front-end
            position I applied for.
            <br />
            The site is built with Next.js and is a fake blog pulling data from
            a headless WordPress setup.
          </p>
        </section>
        <section className={styles.grid}>
          {data.map((post) => (
            <article key={post.post.id}>
              <Link href={`/blog/${post.post.slug}`}>
                <figure className={styles.card}>
                  {post.featuredImage.link && (
                    <Image
                      src={post.featuredImage.source_url}
                      alt={post.featuredImage.alt}
                      width={300}
                      height={300}
                    />
                  )}

                  <figcaption>
                    <h2>{post.post.title.rendered}</h2>
                    <span>Read More -&gt;</span>
                  </figcaption>
                </figure>
              </Link>
            </article>
          ))}
        </section>
        {/* <div className={styles.grid}>
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
        </div> */}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const wpPosts = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?sticky=true`
  );
  const stickyPosts = await wpPosts.json();
  const postsWithImages = await Promise.all(
    stickyPosts.map((post: Post, idx: number) =>
      fetch(
        `http://headless-wp.local/wp-json/wp/v2/media/${post.featured_media}`
      )
        .then((imageData) => imageData.json())
        .then((imageJson) => {
          return { post: stickyPosts[idx], featuredImage: imageJson };
        })
    )
  );

  const wpPages = await fetch("http://headless-wp.local/wp-json/wp/v2/pages");
  const pages = await wpPages.json();

  return {
    props: {
      data: postsWithImages,
      pages: pages,
    },
  };
};
