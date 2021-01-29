module.exports = {
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