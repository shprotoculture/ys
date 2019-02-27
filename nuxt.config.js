module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'Йога смеха',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=1366' },

        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: [
        { src: '~/assets/scss/main.scss', lang: 'scss' }
    ],
    /*
    ** Customize the progress bar color
    */
    loading: 'components/others/AppPagePreloader.vue',
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    plugins: [
        { src: '~/plugins/fancybox', ssr: false },
        { src: '~/plugins/swiper', ssr: false },
        { src: '~/plugins/dot', ssr: false },
        { src: '~/plugins/vue-yandex-maps', ssr: false },
        { src: '~/plugins/vue-datepicker', ssr: false },
    ],
    modules: [
        'cookie-universal-nuxt',
    ],
    transpile: ['vuejs-datepicker']
}

