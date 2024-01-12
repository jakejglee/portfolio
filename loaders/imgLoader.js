export default function nubbysImgLoader({ src, width, quality }) {
  return `./${src}?w=${width}&q=${quality || 75}`
}
