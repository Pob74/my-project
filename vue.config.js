module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Zeljko app'
      return args
    })

  },
  pwa: {
    manifestOptions: {
      background_color: 'blue'
    },
    name: 'Zeljko app',
    themeColor: 'red',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://avancera.app/cities/'
        },
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://api.adviceslip.com/advice'
        }
      ]
    }
  }
}