import { getSiteMetaData } from 'utils/helpers'
import Link from 'next/link'

import Nav from 'components/Nav'

const Header = () => {
  const siteMetadata = getSiteMetaData()

  return (
    <div className="flex flex-row">
      <h1 className="mb-8">
        <Link href="/">
          <a className="font-black leading-none text-black no-underline text-xl font-display">
            <span className="font-black leading-none text-black text-xl font-display text-blue-400">~</span>{siteMetadata.title}
          </a>
        </Link>
      </h1>
      <div className="flex-grow text-right flex justify-end">
        <Nav />
      </div>
    </div>
  )
}

export default Header
