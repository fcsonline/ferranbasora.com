import { PropTypes } from 'prop-types'

const Link = ({ href, children }) => {
  const rel = href.startsWith('http') ? 'noopener noreferrer' : null
  const target = href.startsWith('http') ? '_blank' : null

  return (
    <a href={href} rel={rel} target={target}>
      {children}
    </a>
  )
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
}

export default Link
