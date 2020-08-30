import Image from "components/Image";

export default function MarkdownImage ({ alt, src }) {
  const assetSrc = require(`../content/assets/${src}`)
  const assetPreviewSrc = !src.endsWith('.gif') ? require(`../content/assets/${src}?lqip`) : null

  return (
    <Image
      alt={alt}
      src={assetSrc}
      previewSrc={assetPreviewSrc}
      className="w-full"
    />
  );
}
