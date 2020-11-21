import { getSiteMetaData } from 'utils/helpers'

const Intro = () => {
  const { author } = getSiteMetaData()

  return (
    <div>
      <h2 className="mt-6 mb-6 text-4xl font-black leading-none font-display">
        Welcome, I&apos;m {author.name}
      </h2>

      <p className="text-base leading-7 mb-12">
        On this site I&apos;m going to post technical articles related
        to software engineering and other interesting stuff.
        An attempt to present and express my thoughs about any kind of topic
        about the world around us.
      </p>
    </div>
  )
}

export default Intro
