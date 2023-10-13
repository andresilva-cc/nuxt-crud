import { defineNuxtModule, createResolver } from '@nuxt/kit'
import { Options } from './types/Options'

export default defineNuxtModule<Options>({
  meta: {
    name: 'nuxt-crud',
    configKey: 'crud'
  },
  setup (options, nuxt) {
    if (!options.resources) return

    const { resolve } = createResolver(import.meta.url)

    nuxt.hook('pages:extend', (pages) => {
      options.resources.map((resource) => {
        pages.push({
          name: resource.name,
          path: `/${resource.name}`,
          file: resolve('./components/PageTemplate.vue'),
          meta: {
            resource
          }
        })
      })
    })
  }
})
