import { PropTypes } from 'prop-types'

const Paragraph = (props) => {
  const isParagraph = typeof props.children === 'string'

  if (isParagraph) {
    return <p {...props} />
  }

  return <div {...props} />
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Paragraph
