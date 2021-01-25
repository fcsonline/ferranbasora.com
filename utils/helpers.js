import SiteConfig from '../site.config'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import MarkdownCodeBlock from 'components/MarkdownCodeBlock'
import MarkdownPre from 'components/MarkdownPre'
import MarkdownLink from 'components/MarkdownLink'
import MarkdownImage from 'components/MarkdownImage'
import MarkdownTableDemo from 'components/MarkdownTableDemo'
import MarkdownKanbanDemo from 'components/MarkdownKanbanDemo'

export function getSiteMetaData () {
  return SiteConfig.siteMetadata
}

const contextualize = (context, slug) => {
  const ContextMarkdownImage = (props) => <MarkdownImage {...props} context={context} slug={slug} />

  return {
    MarkdownTableDemo,
    MarkdownKanbanDemo,

    pre: MarkdownPre,
    img: ContextMarkdownImage,
    a: MarkdownLink,
    code: MarkdownCodeBlock
  }
}

export async function mdxToString (mdx, context, slug) {
  return await renderToString(mdx, { components: contextualize(context, slug) })
}

export function stringToMdx (string, context, slug) {
  return hydrate(string, { components: contextualize(context, slug) })
}
