module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? 'https://cdn.jsdelivr.net/gh/turkyden/image-hover@gh-pages/'
  : '/'
}