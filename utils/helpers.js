import SiteConfig from '../site.config'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import CodeBlock from 'components/markdown/CodeBlock'
import Paragraph from 'components/markdown/Paragraph'
import Pre from 'components/markdown/Pre'
import Link from 'components/markdown/Link'
import Image from 'components/markdown/Image'
import TableDemo from 'components/markdown/TableDemo'
import KanbanDemo from 'components/markdown/KanbanDemo'

export function getSiteMetaData () {
  return SiteConfig.siteMetadata
}

const contextualize = (context, slug) => {
  const ContextImage = (props) => <Image {...props} context={context} slug={slug} />

  return {
    TableDemo,
    KanbanDemo,

    p: Paragraph,
    pre: Pre,
    img: ContextImage,
    a: Link,
    code: CodeBlock
  }
}

export async function mdxToString (mdx, context, slug) {
  return await renderToString(mdx, { components: contextualize(context, slug) })
}

export function stringToMdx (string, context, slug) {
  return hydrate(string, { components: contextualize(context, slug) })
}
