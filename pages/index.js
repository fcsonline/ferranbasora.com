import Link from "next/link";

import Layout from "components/Layout";
import Bio from "components/Bio";
import SEO from "components/Seo";
import { getSortedPosts } from "utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <Bio className="my-14" />
      {posts.map(({ frontmatter: { title, description, date }, slug, duration }) => (
        <article key={slug}>
          <header className="mb-2">
            <h3 className="mb-2">
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                <a className="text-4xl font-bold text-gray-900 font-display">
                  {title}
                </a>
              </Link>
            </h3>
            <span className="text-sm">{date}</span>
            <span className="text-sm ml-2">·</span>
            <span className="text-sm ml-2">{duration} minute read</span>
          </header>
          <section>
            <p className="mb-8 text-lg">{description}</p>
          </section>
        </article>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
