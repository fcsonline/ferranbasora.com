import NextImage from 'next/image'
import { PropTypes } from 'prop-types'

const Image = ({ src, alt, context, slug }) => {
  const assetSrc = () => {
    if (src.startsWith('http')) return src

    return `/${context}/${slug}/${src}`
  }

  const unoptimized = src.startsWith('http')

  return (
    <div className="w-full relative" style={{ width: '100%', height: '500px' }}>
      <NextImage
        src={assetSrc()}
        alt={alt}
        unoptimized={unoptimized}
        layout="fill"
        objectFit="contain"
      />
    </div>
  )
}

Image.propTypes = {
  context: PropTypes.string,
  slug: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
}

export default Image
