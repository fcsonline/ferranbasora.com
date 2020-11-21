import { PropTypes } from 'prop-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useInView } from 'react-intersection-observer'

const CodeBlock = ({ language, value }) => {
  const { ref, inView } = useInView({})

  return (
    <div ref={ref}>
      { inView && (<SyntaxHighlighter style={materialDark} language={language}>{value}</SyntaxHighlighter>) }
    </div>
  )
}

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string
}

export default CodeBlock
