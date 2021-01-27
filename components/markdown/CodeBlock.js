import React from 'react'
import { PropTypes } from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { useInView } from 'react-intersection-observer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'

import Prism from 'prism-react-renderer/prism';

(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-rust')

const CodeBlock = ({ children, className }) => {
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

  const language = (className || '').replace(/language-/, '')
  const code = children.replace(/\n$/, '')

  return (
    <div ref={ref}>
      { hasBeenInView && (
        <Highlight Prism={Prism} {...defaultProps} code={code} language={language} theme={nightOwl}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style, padding: '20px' }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      ) }
    </div>
  )
}

CodeBlock.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
}

export default CodeBlock
