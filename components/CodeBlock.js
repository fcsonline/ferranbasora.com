import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useInView } from 'react-intersection-observer';

export default function CodeBlock ({ language, value }) {
  const { ref, inView, entry } = useInView({});

  return (
    <div ref={ref}>
      <SyntaxHighlighter style={materialDark} language={language}>{value}</SyntaxHighlighter>
    </div>
  );
};
