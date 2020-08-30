import { getSiteMetaData } from "utils/helpers";
import Link from "next/link";
import { useRouter } from "next/router";

const sections = {
  "articles": "/posts",
  "projects": "/projects",
  "about": "/about",
}

export default function Header() {
  return (
    <nav>
      {Object.entries(sections).map(([label, href]) => (
        <Link href={href}>
          <a className="font-black leading-none text-black no-underline text-xl font-display ml-4">
            {label}
          </a>
        </Link>
      ))}
    </nav>
  );
}
