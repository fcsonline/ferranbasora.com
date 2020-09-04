import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";

import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import Bio from "components/Bio";
import CodeBlock from "components/CodeBlock";

import { getPostBySlug, getPostsSlugs } from "utils/posts";

export default function Post({ post, slug, frontmatter, duration, nextPost, previousPost }) {
  const MarkdownImage = ({ src, alt }) => {
    const assetSrc = () => {
      if (src.startsWith('http')) return src

      return require(`../../content/posts/${slug}/${src}`)
    }

    const assetPreviewSrc = () => {
      if (src.startsWith('http')) return src
      if (src.endsWith('.gif')) return null

      return require(`../../content/posts/${slug}/${src}?lqip`)
    }

    return (
      <Image
        alt={alt}
        src={assetSrc()}
        previewSrc={assetPreviewSrc()}
        className="w-full"
      />
    )
  }

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
        canonical={frontmatter.canonical}
      />

      <article>
        <header className="mb-8 mt-6">
          <h1 className="mb-6 text-6xl font-black leading-none font-display">
            {frontmatter.title}
          </h1>
          <span className="text-sm text-gray-700">
            <svg className="w-4 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>

            {frontmatter.date} slug: {slug}
          </span>
          <span className="text-sm ml-2">·</span>
          <span className="text-sm ml-2 text-gray-700">

            <svg className="w-4 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            {duration} minute read
          </span>
        </header>
        <ReactMarkdown
          className="mb-4 prose-sm prose sm:prose lg:prose-lg"
          escapeHtml={false}
          source={post.content}
          linkTarget={(url) => (url.startsWith('http') ? '_blank' : null)}
          renderers={{ code: CodeBlock, image: MarkdownImage }}
        />
      </article>
      <nav className="flex justify-between mb-10 mt-10">
        {previousPost ? (
          <Link href={"/post/[slug]"} as={`/post/${previousPost.slug}`}>
            <a className="text-lg font-bold">
              <svg className="w-6 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>

              {previousPost.frontmatter.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link href={"/post/[slug]"} as={`/post/${nextPost.slug}`}>
            <a className="text-lg font-bold">
              {nextPost.frontmatter.title}

              <svg className="w-6 inline ml-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </Link>
        ) : (
          <div />
        )}
      </nav>
      <hr className="mt-10" />
      <footer>
        <Bio className="mt-8 mb-16" />
      </footer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug);

  if (!postData.previousPost) {
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    postData.nextPost = null;
  }

  return { props: postData };
}
