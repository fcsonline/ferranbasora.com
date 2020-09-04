import Image from "components/Image";

const assetSrc = (src) => {
  if (src.startsWith('http')) return src

  return require(`../content/assets/${src}`)
}

const assetPreviewSrc = (src) => {
  if (src.startsWith('http')) return src
  if (src.endsWith('.gif')) return null

  return require(`../content/assets/${src}?lqip`)
}

export default function MarkdownImage ({ alt, src }) {
  return (
    <Image
      alt={alt}
      src={assetSrc(src)}
      previewSrc={assetPreviewSrc(src)}
      className="w-full"
    />
  );
}
