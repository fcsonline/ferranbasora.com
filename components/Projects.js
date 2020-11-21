import { PropTypes } from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

const Projects = ({ projects }) => {
  return (
    <div className="grid gap-4 mb-16">
      {projects.map(({ frontmatter: { title, description, image, date, tags }, slug }) => {
        const thumbnail = `/projects/${slug}/thumbnail.png`
        return (
          <Link key={title} href={'/projects/[slug]'} as={`/projects/${slug}`}>
            <a className="flex h-48 max-w-32">
              <div className="flex w-full bg-white hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <div className="w-1/3">
                  <div className="h-full w-full relative overflow-hidden">
                    <Image
                      src={thumbnail}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                <div className="w-2/3 p-4 md:p-4">
                  <h3 className="text-gray-900 font-bold text-xl">{ title }</h3>

                  <p className="mt-2 text-gray-600 text-sm">{ description }</p>

                  <div className="flex item-center mt-2">
                    {tags.map((tag) => (
                      <span key={tag} className="text-gray-900 font-semibold mr-2">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

Projects.propTypes = {
  projects: PropTypes.array
}

export default Projects
