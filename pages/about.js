import Image from 'next/image'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import { getSiteMetaData } from 'utils/helpers'

export default function About () {
  const { author } = getSiteMetaData()

  return (
    <Layout>
      <SEO title="About" />

      <div className="mr-3 rounded-full w-20 h-20 relative overflow-hidden">
        <Image
          src="/profile.jpg"
          alt={author.name}
          width="387"
          height="387"
        />
      </div>

      <p className="mb-6 mt-12 text-lg text-gray-800">
        Hi, I&apos;m Ferran.
      </p>

      <p className="mb-6 text-lg text-gray-800">
        Since I was a kid, I have been awesomed about all the stuff related to
        computers. Then, when Internet arrived, I went deep to this new world of
        possibilities and convert it to my passion.
      </p>

      <p className="mb-6 text-lg text-gray-800">
        Then I was enlighted by Linux and all the topics that bring the open
        source community.
      </p>

      <p className="mb-6 text-lg text-gray-800">
        Right now, I&apos;m working on
        <a className='mx-1' href="https://github.com/fcsonline/drill">Drill</a>
        project, a HTTP load testing application written in
        <a className='ml-1' href="https://www.rust-lang.org/">Rust</a>. On the other hand,
        I&apos;m working on
        <a className='mx-1' href="https://github.com/fcsonline/tmux-thumbs">tmux-thumbs</a>
        project, a hint picker for
        <a className='ml-1' href="https://github.com/tmux/tmux">Tmux</a>.
      </p>

      <p className="mb-6 text-lg text-gray-800">
        Since 2017, I work at
        <a className='ml-1' href="https://www.factorialhr.com">Factorial</a>,
        a Human Resources platform, improving the platform from frontend to
        infrastructure stuff. React, RoR and Terraform are the current stack
        for this platform.
      </p>

      <p className="mb-6 text-lg text-gray-800">
        From 2012 to 2017, I helped build, and grow
        <a className='ml-1' href="https://www.redbooth.com">Redbooth</a> (aka, Teambox)
        a project management platform for teams.
      </p>

      <p>
        <svg className="w-6 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>

        Email: <a href="mailto:fcsonline@gmail.com">fcsonline@gmail.com</a>
      </p>
      <p>
        <svg className="w-6 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>

        Github: <a href="https://www.github.com/fcsonline">@fcsonline</a>
      </p>
      <p className="mb-8">
        <svg className="w-6 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>

        Twitter: <a href="https://www.twitter.com/openfcsonline">@openfcsonline</a>
      </p>

    </Layout>
  )
}
