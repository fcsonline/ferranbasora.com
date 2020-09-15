import Link from "next/link";

import Layout from "components/Layout";
import SEO from "components/Seo";
import Intro from "components/Intro";
import Title from "components/Title";
import Posts from "components/Posts";

import { getSortedPosts } from "utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="Home" />
      <Intro className="my-14" />
      <Title>Recent posts</Title>
      <Posts posts={posts.slice(0, 3)}/>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts(false);

  return {
    props: {
      posts
    },
  };
}
