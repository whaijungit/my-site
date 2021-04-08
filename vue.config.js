module.exports = {
  devServer: {
    proxy: {
      '/erp': {
        target: 'http://deverp.e-youngo.com',
        changOrigin: true
      }
    }
  }
}