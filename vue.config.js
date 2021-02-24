module.exports = {
    filenameHashing: false,
    chainWebpack: (config) => {
        // 主题入口不需要生成 html
        config.plugins.store.delete('html-theme_blue')
        config.plugins.store.delete('html-theme_dark')
        config.plugins.store.delete('html-theme_template')
    },
    pages: {
        index: {
            entry: 'src/main.js',
        },
        theme_blue: {
            entry: 'src/assets/theme/blue/style.less',
        },
        theme_dark: {
            entry: 'src/assets/theme/dark/style.less',
        },
        theme_template: {
            entry: 'src/assets/theme/template/style.less',
        },
    },
}
