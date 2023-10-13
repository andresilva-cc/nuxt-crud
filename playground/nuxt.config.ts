export default defineNuxtConfig({
  modules: ['../src/module'],
  crud: {
    resources: [
      { name: 'users' },
      { name: 'products' }
    ]
  },
  devtools: { enabled: true }
})
