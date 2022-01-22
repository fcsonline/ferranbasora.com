import { getSiteMetaData } from 'utils/helpers'
import Link from 'next/link'

const Footer = () => {
  const { author, title } = getSiteMetaData()

  return (
    <div className="flex flex-row w-full">
      <Link href="/">
        <a className="mb-8 w-1/2 text-lg font-black leading-none text-gray-700 no-underline font-display">
          <span className="text-lg font-black leading-none text-blue-400 font-display">~</span>{title}
        </a>
      </Link>
      <p className="w-1/2 text-sm text-right text-gray-700">
        {author.summary}

        <br />

        © {new Date().getFullYear()}, Built with{' '}

        <a href="https://nextjs.org/">Next.js</a>
      </p>
    </div>
  )
}

export default Footer
