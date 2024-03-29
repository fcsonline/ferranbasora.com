import { PropTypes } from 'prop-types'

import Link from 'next/link'

const Posts = ({ posts }) => {
  return posts.map(({ frontmatter: { title, description, date, canonical }, slug, duration }) => (
    <article key={slug}>
      <header className="mb-2">
        <h3 className="mb-2">
          <Link href={'/posts/[slug]'} as={`/posts/${slug}`}>
            <a className="text-2xl font-bold text-gray-900 font-display">
              {title}
            </a>
          </Link>
        </h3>
        <span className="text-sm text-gray-700">
          <svg className="w-4 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>

          {date}
        </span>
        <span className="text-sm ml-2">·</span>
        <span className="text-sm ml-2 text-gray-700">

          <svg className="w-4 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          {duration} minutes read

        </span>
        {canonical && (
          <>
            <span className="text-sm ml-2">·</span>
              <span className="text-sm ml-2 text-gray-700">

              <svg className="w-4 inline mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>

              Originally published
              <a href={canonical} rel="noopener noreferrer" target='_blank' className="text-sm ml-1 text-gray-700">
                here
              </a>
            </span>
          </>
        )}
      </header>
      <section>
        <p className="mb-12 text-lg text-gray-800">{description}</p>
      </section>
    </article>
  ))
}

Posts.propTypes = {
  posts: PropTypes.array
}

export default Posts
