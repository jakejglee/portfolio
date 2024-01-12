/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: 'loaders/imgLoader.js',
  },
  output: 'export',
}

module.exports = nextConfig
