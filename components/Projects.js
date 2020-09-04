import Link from "next/link";

export default function Projects({ projects }) {
  return (
    <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4 mb-16">
      {projects.map(({ frontmatter: { title, description, image, date, tags }, slug, duration }) => (
        <Link key={title} href={"/projects/[slug]"} as={`/projects/${slug}`}>
          <a>
            <div className="flex h-48 bg-white hover:shadow-lg shadow-md rounded-lg overflow-hidden">
              <div className="w-1/3 bg-cover" style={{  backgroundImage: `url('${image}')`  }}></div>

              <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-gray-900 font-bold text-xl">{ title }</h1>

                <p className="mt-2 text-gray-600 text-sm">{ description }</p>

                <div className="flex item-center mt-2">
                  {tags.map((tag) => (
                    <span className="text-gray-900 font-semibold">#{tags}</span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}

    </div>
  );
}
