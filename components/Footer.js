import { getSiteMetaData } from 'utils/helpers'
import Link from 'next/link'

const Footer = () => {
  const { author, title } = getSiteMetaData()

  return (
    <div className="flex flex-row w-full">
      <Link href="/">
        <a className="w-1/2 font-black leading-none text-gray-700 no-underline text-lg font-display mb-8">
          <span className="font-black leading-none text-black text-lg font-display text-blue-400">~</span>{title}
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
