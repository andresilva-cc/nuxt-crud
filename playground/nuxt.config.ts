export default defineNuxtConfig({
  modules: ['../src/module'],
  crud: {
    baseUrl: 'http://localhost:3000/api/',
    resources: [
      {
        name: 'users',
        fields: [
          { name: 'name', type: 'TextField' }
        ]
      },
      { name: 'products' }
    ]
  },
  devtools: { enabled: true },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    }
  }
})
