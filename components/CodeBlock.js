import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeBlock ({ language, value }) {
  return <SyntaxHighlighter style={materialDark} language={language}>{value}</SyntaxHighlighter>;
};
