import { Post } from "@types";
import styles from "@styles/Post.module.css";
import Link from "next/link";
type Props = {
  post: Post[] | [];
  randomPost: Post | null;
};
export default function Blog({ post = [], randomPost = null }: Props) {
  return (
    <>
      <nav className={styles["post-navigation"]}>
        <ul>
          <li>
            <Link href="/">Home Page</Link>
          </li>
          {randomPost && (
            <li>
              <Link href={`${randomPost?.slug}`}>
                {" "}
                Next Post: {randomPost?.title.rendered}
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <main className={styles.main}>
        {post[0] ? (
          <section
            dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}
          ></section>
        ) : (
          <section>
            <h1>Error PreRendering this page</h1>
          </section>
        )}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=25`
  );
  const postsJson: Post[] = await posts.json();
  return {
    paths: postsJson.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  try {
    const postData = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${params.slug}`
    );

    const randomPost = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts`
    );

    const randomPostJson = await randomPost.json();
    const post = await postData.json();
    return {
      props: {
        post,
        randomPost: randomPostJson[Math.floor(Math.random() * 10)] ?? null,
      },
    };
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};
