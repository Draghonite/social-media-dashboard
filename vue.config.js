module.exports = {
    publicPath: './',
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/scss/styles.scss";`
            }
        }
    }
}