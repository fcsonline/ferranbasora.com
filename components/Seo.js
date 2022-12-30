import { PropTypes } from 'prop-types'
import Head from 'next/head'
import { getSiteMetaData } from 'utils/helpers'

const Seo = ({ title, description, url, image, canonical }) => {
  const siteMetadata = getSiteMetaData()

  const metaTitle = title || siteMetadata.title
  const metaDescription = description || siteMetadata.description
  const metaUrl = url && url[0] === '/' ? `${siteMetadata.siteUrl}${url}` : url
  const metaImage = image || '/profile.jpg'

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      <meta property="twitter:card" content={metaImage} />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:creator" content={siteMetadata.social.twitter} />
      <meta property="twitter:image" content={metaImage} />

      <meta name="image" content={metaImage} />
      <link rel="me" href="https://hachyderm.io/@fcsonline" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;600;700&display=swap" rel="stylesheet"/>

      {canonical && (<link rel="canonical" href={canonical} />)}

    </Head>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  canonical: PropTypes.string
}

export default Seo
