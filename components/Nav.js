import React from 'react';
import clsx from "clsx";
import { getSiteMetaData } from "utils/helpers";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuContext from 'components/MenuContext';

const sections = [
  { href: '/posts', label: 'articles' },
  { href: '/projects', label: 'projects' },
  { href: '/about', label: 'about' },
]

export default function Header() {
  const { open, toggleOpen } = React.useContext(MenuContext)

  const onClick = () => {
    toggleOpen(!open)
  }

  return (
    <nav>
      <div className="flex justify-end lg:hidden">
        <button onClick={onClick} className="flex items-center px-1 py-1 outline-none text-gray-700 hover:border-white" aria-label="Menu">
          <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className={clsx(`w-full flex flex-grow flex-col items-end mb-6 lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0`, { hidden: !open })}>
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          {sections.map(({ label, href }) => (
            <li key={href} className="mr-3 mb-5 lg:mb-0">
              <Link key={label} href={href}>
                <a className="font-black leading-none text-black no-underline text-4xl lg:text-xl font-display ml-4">
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        {open && (<button onClick={onClick} className="flex items-center px-1 py-1 outline-none text-gray-700 hover:border-white">
          <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
          </svg>
        </button>)}
      </div>
    </nav>
  );
}
