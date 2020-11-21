import matter from 'gray-matter'
import fs from 'fs'

export function getPostsFolders () {
  return fs
    .readdirSync(`${process.cwd()}/content/posts`)
    .map((directory) => ({
      directory
    }))
}

// Get day in format: Month day, Year. e.g. April 19, 2020
function getFormattedDate (date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = date.toLocaleDateString('en-US', options)

  return formattedDate
}

function minuteRead (content) {
  return Math.round(content.length / 1500)
}

export function getSortedPosts (drafts) {
  const postFolders = getPostsFolders()

  const posts = postFolders
    .map(({ directory }) => {
      // Get raw content from file
      const markdownWithMetadata = fs
        .readFileSync(`content/posts/${directory}/index.md`)
        .toString()

      // Parse markdown, get frontmatter data, excerpt and content.
      const { data, excerpt, content } = matter(markdownWithMetadata)

      if (!drafts && data.draft) return null

      const frontmatter = {
        ...data,
        date: getFormattedDate(data.date)
      }

      const duration = minuteRead(content)

      return {
        slug: directory,
        frontmatter,
        excerpt,
        duration,
        content
      }
    })
    .filter(a => !!a)
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    )

  return posts
}

export function getPostsSlugs (drafts) {
  const posts = getSortedPosts(drafts)

  const paths = posts.map(({ slug }) => ({
    params: {
      slug
    }
  }))

  return paths
}

export function getPostBySlug (slug, drafts) {
  const posts = getSortedPosts(drafts)

  const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === slug)

  const { frontmatter, content, excerpt, duration } = posts[postIndex]

  const previousPost = posts[postIndex + 1]
  const nextPost = posts[postIndex - 1]

  return { frontmatter, slug, duration, post: { content, excerpt }, previousPost, nextPost }
}
