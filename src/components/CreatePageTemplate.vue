<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Resource } from '../types/Options'
import { useFetch } from 'nuxt/app';

const route = useRoute()
const router = useRouter()
const baseUrl = route.meta.baseUrl as string
const resource = route.meta.resource as Resource
const formData = reactive({})

async function submit(event) {
  event.preventDefault()
  
  try {
    await useFetch(`${baseUrl}/${resource.name}`, { method: 'post', body: formData })
    await router.push(`/${resource.name}`)
  } catch (error) {
    alert(error)
  }
}
</script>

<template>
  <div>
    <h1>{{ resource.name }}</h1>
    <form @submit="submit">
      <input
        v-for="field in resource.fields"
        :key="field.name"
        v-model="formData[field.name]"
      >
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>
