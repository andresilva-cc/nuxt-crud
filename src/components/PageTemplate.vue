<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Resource } from '../types/Options'

const route = useRoute()
const resource = route.meta.resource as Resource
</script>

<template>
  <div>
    <h1>{{ resource.name }}</h1>
  </div>
</template>
