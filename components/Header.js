import { getSiteMetaData } from "utils/helpers";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const titleClass = isRoot ? "mb-8" : "mb-2"
  const linkClass = isRoot
    ? "font-black leading-none text-black no-underline text-7xl font-display"
    : "text-2xl font-black text-black no-underline font-display"

  const siteMetadata = getSiteMetaData();

  return (
    <h1 className={ titleClass }>
      <Link href="/">
        <a className={ linkClass }>
          {siteMetadata.title}
        </a>
      </Link>
    </h1>
  );
}
