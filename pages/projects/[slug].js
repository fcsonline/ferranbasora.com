import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";

import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import Bio from "components/Bio";
import CodeBlock from "components/CodeBlock";

import { getProjectBySlug, getProjectsSlugs } from "utils/projects";

export default function Project({ project, slug, frontmatter, duration, nextProject, previousProject }) {
  const MarkdownImage = ({ src, alt }) => {
    const assetSrc = () => {
      if (src.startsWith('http')) return src

      return require(`../../content/projects/${slug}/${src}`)
    }

    const assetPreviewSrc = () => {
      if (src.startsWith('http')) return src
      if (src.endsWith('.gif')) return null

      return require(`../../content/projects/${slug}/${src}?lqip`)
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
        description={frontmatter.description || project.excerpt}
        canonical={frontmatter.canonical}
      />

      <article>
        <header className="mb-8 mt-6">
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-none font-display">
            {frontmatter.title}
          </h1>
          <span className="text-sm text-gray-700">
            <svg className="w-4 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <title>Created at:</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>

            {frontmatter.date}
          </span>
        </header>
        <ReactMarkdown
          className="mb-4 prose-sm prose sm:prose lg:prose-lg"
          escapeHtml={false}
          linkTarget={(url) => (url.startsWith('http') ? '_blank' : null)}
          source={project.content}
          renderers={{ code: CodeBlock, image: MarkdownImage }}
        />

        <div className="mt-8">
          <span className="text-lg font-bold text-gray-700">
            Repository:
          </span>

          <a href={ frontmatter.repository } target="_blank" rel="noreferrer noopener nofollow" className="text-lg font-bold ml-2">
            <svg className="w-6 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            { frontmatter.title }
          </a>
        </div>

      </article>
      <nav className="flex justify-between mb-10 mt-10">
        {previousProject ? (
          <Link href={"/projects/[slug]"} as={`/projects/${previousProject.slug}`}>
            <a className="text-lg font-bold">
              <svg className="w-6 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <title>Previous project</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>

              {previousProject.frontmatter.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
        {nextProject ? (
          <Link href={"/projects/[slug]"} as={`/projects/${nextProject.slug}`}>
            <a className="text-lg font-bold">
              {nextProject.frontmatter.title}

              <svg className="w-6 inline ml-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <title>Next project</title>
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
  const paths = getProjectsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const projectData = getProjectBySlug(slug);

  if (!projectData.previousProject) {
    projectData.previousProject = null;
  }

  if (!projectData.nextProject) {
    projectData.nextProject = null;
  }

  return { props: projectData };
}
