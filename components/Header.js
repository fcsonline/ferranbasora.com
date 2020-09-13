import { getSiteMetaData } from "utils/helpers";
import Link from "next/link";
import { useRouter } from "next/router";

import Nav from "components/Nav";

export default function Header() {
  const siteMetadata = getSiteMetaData();

  return (
    <div className="flex flex-row">
      <h1 className="mb-8">
        <Link href="/">
          <a className="font-black leading-none text-black no-underline text-xl font-display">
            {siteMetadata.title}
          </a>
        </Link>
      </h1>
      <div className="flex-grow text-right flex justify-end">
        <Nav />
      </div>
    </div>
  );
}
