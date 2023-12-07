<script setup lang="ts">
import { useFetch } from 'nuxt/app';
import { useRoute } from 'vue-router'
import { Resource } from '../types/Options'

const route = useRoute()
const baseUrl = route.meta.baseUrl as string
const resource = route.meta.resource as Resource
const { data } = await useFetch<Array<any>>(`${baseUrl}/${resource.name}`)
</script>

<template>
  <div>
    <h1>{{ resource.name }}</h1>
    <table>
      <tbody v-if="data && data.length > 0">
        <tr
          v-for="(item, index) in data"
        
          :key="index"
        >
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <p>Empty</p>
      </tbody>
    </table>
    <NuxtLink :to="`/${resource.name}/create`">
      Create
    </NuxtLink>
  </div>
</template>
