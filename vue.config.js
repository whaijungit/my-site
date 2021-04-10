module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://my.site.test.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}