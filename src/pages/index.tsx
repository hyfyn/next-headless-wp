import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Lottie from "react-lottie";
import styles from "@styles/Home.module.css";
import animationData from "@animations/hello_mydude.json";
import type { PostWithFeaturedImage, Post } from "@types";

type Props = {
  data: PostWithFeaturedImage[];
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
          {/* {pages.map((page) => (
            <li key={page.id}>
              <Link href={`${page.slug}`}>{page.title.rendered}</Link>
            </li>
          ))} */}
        </ul>
      </nav>
      <main className={styles.main}>
        <section className={styles.description}>
          <h3>
            I built this site to submit as a my code sample for the front-end
            position I applied for. The site is a static site generated with
            with Next.js and fetching data from a headless WordPress install.
          </h3>
        </section>
        <section className={styles.grid}>
          {data.map((post) => (
            <article key={post.post.id}>
              <Link href={`/blog/${post.post.slug}`}>
                <figure className={styles.card}>
                  {post.featuredImage.link && (
                    <Image
                      src={post.featuredImage.source_url}
                      alt={post.featuredImage.alt_text}
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
        `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${post.featured_media}`
      )
        .then((imageData) => imageData.json())
        .then((imageJson) => {
          return { post: stickyPosts[idx], featuredImage: imageJson };
        })
    )
  );

  return {
    props: {
      data: postsWithImages,
    },
  };
};
