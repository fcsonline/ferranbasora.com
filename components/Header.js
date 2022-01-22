import { getSiteMetaData } from 'utils/helpers'
import Link from 'next/link'

import Nav from 'components/Nav'

const Header = () => {
  const siteMetadata = getSiteMetaData()

  return (
    <div className="flex flex-row">
      <h1 className="mb-8">
        <Link href="/">
          <a className="text-xl font-black leading-none text-black no-underline font-display">
            <span className="text-xl font-black leading-none text-blue-400 font-display">~</span>{siteMetadata.title}
          </a>
        </Link>
      </h1>
      <div className="flex flex-grow justify-end text-right">
        <Nav />
      </div>
    </div>
  )
}

export default Header
