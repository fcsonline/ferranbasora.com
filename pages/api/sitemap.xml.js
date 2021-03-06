import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap'
import { createGzip } from 'zlib'

import { getSiteMetaData } from 'utils/helpers'
import { getSortedPosts } from 'utils/posts'
import { getSortedProjects } from 'utils/projects'

export default async (req, res) => {
  if (!res) return {}

  try {
    const siteMetadata = getSiteMetaData()

    res.setHeader('Content-type', 'application/xml')
    res.setHeader('Content-Encoding', 'gzip')

    const smStream = new SitemapStream({
      hostname: siteMetadata.siteUrl
    })

    const pipeline = smStream.pipe(createGzip())

    smStream.write({ url: '/', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.WEEKLY })
    smStream.write({ url: '/about', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.MONTHLY })

    const posts = getSortedPosts(false)

    posts.forEach(post => {
      smStream.write({
        url: `/posts/${post.slug}`,
        lastmod: post.date,
        changefreq: EnumChangefreq.WEEKLY
      })
    })

    const projects = getSortedProjects()

    projects.forEach(project => {
      smStream.write({
        url: `/projects/${project.slug}`,
        lastmod: project.date,
        changefreq: EnumChangefreq.WEEKLY
      })
    })

    smStream.end()
    streamToPromise(pipeline)

    pipeline.pipe(res).on('error', e => {
      throw e
    })
  } catch (e) {
    res.status(500).end()
  }
}
