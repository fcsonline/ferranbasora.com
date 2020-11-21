import matter from 'gray-matter'
import fs from 'fs'

export function getProjectsFolders () {
  return fs
    .readdirSync(`${process.cwd()}/content/projects`)
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

export function getSortedProjects () {
  const projectFolders = getProjectsFolders()

  const projects = projectFolders
    .map(({ directory }) => {
      // Get raw content from file
      const markdownWithMetadata = fs
        .readFileSync(`content/projects/${directory}/index.md`)
        .toString()

      // Parse markdown, get frontmatter data, excerpt and content.
      const { data, excerpt, content } = matter(markdownWithMetadata)

      if (data.draft) return null

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

  return projects
}

export function getProjectsSlugs () {
  const projectFolders = getProjectsFolders()

  const paths = projectFolders.map(({ directory }) => ({
    params: {
      slug: directory
    }
  }))

  return paths
}

export function getProjectBySlug (slug) {
  const projects = getSortedProjects()

  const projectIndex = projects.findIndex(({ slug: projectSlug }) => projectSlug === slug)

  const { frontmatter, content, excerpt, duration } = projects[projectIndex]

  const previousProject = projects[projectIndex + 1]
  const nextProject = projects[projectIndex - 1]

  return { frontmatter, slug, duration, project: { content, excerpt }, previousProject, nextProject }
}
