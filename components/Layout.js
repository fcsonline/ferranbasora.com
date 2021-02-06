import React from 'react'
import { PropTypes } from 'prop-types'

import PlausibleProvider from 'next-plausible'

import Header from 'components/Header'
import Footer from 'components/Footer'
import MenuContext from 'components/MenuContext'

const Layout = ({ children }) => {
  const [open, toggleOpen] = React.useState(false)

  return (
    <MenuContext.Provider
      value={{
        open,
        toggleOpen
      }}
    >
      <PlausibleProvider domain="ferranbasora.com">
        <div className="max-w-screen-md px-4 py-12 mx-auto antialiased font-body">
          <Header />
          {!open && (<main>{children}</main>)}
          <Footer />
        </div>
      </PlausibleProvider>
    </MenuContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
