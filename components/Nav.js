import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import MenuContext from 'components/MenuContext'

const sections = [
  { href: '/posts', label: 'articles' },
  { href: '/projects', label: 'projects' },
  { href: '/about', label: 'about' }
]

const Nav = () => {
  const { open, toggleOpen } = React.useContext(MenuContext)

  const onClick = () => {
    toggleOpen(!open)
  }

  return (
    <nav>
      <div className="flex justify-end lg:hidden">
        <button onClick={onClick} className="flex items-center py-1 px-1 text-gray-700 outline-none hover:border-white" aria-label="Menu">
          <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className={clsx('w-full flex flex-grow flex-col items-end mb-6 lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0', { hidden: !open })}>
        <ul className="flex-1 justify-end items-center lg:flex list-reset">
          {sections.map(({ label, href }) => (
            <li key={href} className="mr-3 mb-5 lg:mb-0">
              <Link key={label} href={href}>
                <a className="ml-4 text-4xl font-black leading-none text-black no-underline lg:text-xl font-display">
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        {open && (<button onClick={onClick} className="flex items-center py-1 px-1 text-gray-700 outline-none hover:border-white">
          <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
          </svg>
        </button>)}
      </div>
    </nav>
  )
}

export default Nav
