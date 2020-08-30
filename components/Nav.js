import { getSiteMetaData } from "utils/helpers";
import Link from "next/link";
import { useRouter } from "next/router";

const sections = [
  { href: '/posts', label: 'articles' },
  { href: '/projects', label: 'projects' },
  { href: '/about', label: 'about' },
]

export default function Header() {
  return (
    <nav>
      {sections.map(({ label, href }) => (
        <Link key={label} href={href}>
          <a className="font-black leading-none text-black no-underline text-xl font-display ml-4">
            {label}
          </a>
        </Link>
      ))}
    </nav>
  );
}
