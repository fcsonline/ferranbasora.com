import { PropTypes } from 'prop-types'
import 'styles/global.css'

import 'typeface-open-sans'
import 'typeface-merriweather'

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default MyApp
