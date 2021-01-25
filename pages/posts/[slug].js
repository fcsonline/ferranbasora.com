import { PropTypes } from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import Bio from 'components/Bio'
// import CodeBlock from 'components/CodeBlock'
// import Chart from 'components/Chart'

import { getPostBySlug, getPostsSlugs } from 'utils/posts'

const Chart = () => {
  return (
    <div onClick={() => alert(2)}>
      <h2 className="mt-6 mb-6 text-4xl font-black leading-none font-display">
        YOLOOOOOOOOOOOOOOO
      </h2>
    </div>
  )
}

const components = {
  Chart
}

/**
 * serialize mdx to string
 */
export async function mdxToString(mdx) {
  return await renderToString(mdx, {components})
}
/**
 * render string back to react components
 */
export function stringToMdx(string) {
  return hydrate(string, {components})
}

const Post = ({ post, slug, frontmatter, duration, nextPost, previousPost, source }) => {
  const MarkdownImage = ({ src, alt }) => {
    const assetSrc = () => {
      if (src.startsWith('http')) return src

      return `/posts/${slug}/${src}`
    }

    const unoptimized = src.startsWith('http')

    return (
      <div className="w-full relative" style={{ width: '100%', height: '500px' }}>
        <Image
          src={assetSrc()}
          alt={alt}
          unoptimized={unoptimized}
          layout="fill"
          objectFit="contain"
        />
      </div>
    )
  }

  MarkdownImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
  }

  const MarkdownLink = ({ href, children }) => {
    const rel = href.startsWith('http') ? 'noopener noreferrer' : null
    const target = href.startsWith('http') ? '_blank' : null

    return (
      <a href={href} rel={rel} target={target}>
        {children}
      </a>
    )
  }

  MarkdownLink.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node
  }

  const image = frontmatter.thumbnail ? `/posts/${slug}/${frontmatter.thumbnail}` : null

  console.log('FCS', source)

  const content = stringToMdx(source, { components })
  console.log('FCS222', content)

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
        url={`/posts/${slug}`}
        canonical={frontmatter.canonical}
        image={image}
      />

      <article>
        <header className="mb-8 mt-6">
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-none font-display">
            {frontmatter.title}
          </h1>
          <span className="text-sm text-gray-700">
            <svg className="w-4 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>

            {frontmatter.date}
          </span>
          <span className="text-sm ml-2">·</span>
          <span className="text-sm ml-2 text-gray-700">

            <svg className="w-4 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            {duration} minute read
          </span>
        </header>
        {content}
      </article>
      <nav className="flex justify-between mb-10 mt-10">
        {previousPost
          ? (
            <Link href={'/posts/[slug]'} as={`/posts/${previousPost.slug}`}>
              <a className="text-lg font-bold">
                <svg className="w-6 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>

                {previousPost.frontmatter.title}
              </a>
            </Link>
            )
          : (
            <div />
            )
        }
        {nextPost
          ? (
            <Link href={'/posts/[slug]'} as={`/posts/${nextPost.slug}`}>
              <a className="text-lg font-bold">
                {nextPost.frontmatter.title}

                <svg className="w-6 inline ml-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </Link>
            )
          : (
            <div />
            )
        }
      </nav>
      <hr className="mt-10" />
      <footer>
        <Bio className="mt-8 mb-16" />
      </footer>
    </Layout>
  )
}

Post.propTypes = {
  post: PropTypes.object,
  slug: PropTypes.string,
  frontmatter: PropTypes.object,
  duration: PropTypes.number,
  nextPost: PropTypes.object,
  previousPost: PropTypes.object
}

export default Post

export async function getStaticPaths () {
  const paths = getPostsSlugs(true)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params: { slug } }) {
  const postData = getPostBySlug(slug, true)

  if (!postData.previousPost) {
    postData.previousPost = null
  }

  if (!postData.nextPost) {
    postData.nextPost = null
  }

  // const source = 'Some **mdx** text, with a component <Chart />'
  const content = await mdxToString(postData.post.content || '')
  console.log('KAKA', content)

  return { props: { ...postData, source: content } }
}
