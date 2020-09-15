import Link from "next/link";

import Layout from "components/Layout";
import SEO from "components/Seo";
import Title from "components/Title";
import Posts from "components/Posts";

import { getSortedPosts } from "utils/posts";

export default function PostList ({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <Title>All posts</Title>
      <Posts posts={posts}/>
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
