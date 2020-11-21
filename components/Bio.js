import { PropTypes } from 'prop-types'
import clsx from 'clsx'

import Image from 'next/image'
import { getSiteMetaData } from 'utils/helpers'

const Bio = ({ className }) => {
  const { author, social } = getSiteMetaData()

  return (
    <div className={clsx('flex flex-row', className)}>
      <div className="flex-shrink-0 mb-0 mr-3 rounded-full w-14 h-14 relative overflow-hidden">
        <Image
          src="/profile.jpg"
          alt={author.name}
          width="387"
          height="387"
        />
      </div>
      <p className="text-base leading-7">
        Hi there 👋, I’m {author.name}, Software Engineer. I write this
        <a className='ml-1' href='/'>
          blog
        </a>, build
        <a className='ml-1' target="_blank" rel="noreferrer noopener nofollow" href='https://www.factorialhr.com'>
          Factorial
        </a> and publish the best I read on
        <a className='ml-1' target="_blank" rel="noreferrer noopener nofollow" href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a>.
      </p>
      <p className="text-sm text-gray-700">
        {author.summary}
      </p>
    </div>
  )
}

Bio.propTypes = {
  className: PropTypes.string
}

export default Bio
