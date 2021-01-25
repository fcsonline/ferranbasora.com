import React from 'react'
import { PropTypes } from 'prop-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useInView } from 'react-intersection-observer'

const CodeBlock = ({ language, value }) => {
  const { ref, inView, entry } = useInView({})
  const [hasBeenInView, setHasBeenInView] = React.useState(false)

  React.useEffect(() => {
    if (!entry) return

    const onTop = window.scrollY > entry.boundingClientRect.y

    setHasBeenInView(hasBeenInView || onTop)
  }, [entry])

  React.useEffect(() => {
    setHasBeenInView(hasBeenInView || inView)
  }, [inView])

  return (
    <div ref={ref}>
      { hasBeenInView && (<SyntaxHighlighter style={materialDark} language={language}>{value}</SyntaxHighlighter>) }
    </div>
  )
}

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string
}

export default CodeBlock
