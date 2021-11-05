module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://nodejs-tweets-app.herokuapp.com',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
              }, 
        }
    }
}