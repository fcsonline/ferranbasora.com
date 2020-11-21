import { PropTypes } from 'prop-types'

const Title = ({ children }) => {
  return (
    <h3 className="mb-8 text-3xl font-bold text-gray-700 font-display">
      {children}
    </h3>
  )
}

Title.propTypes = {
  children: PropTypes.node
}

export default Title
