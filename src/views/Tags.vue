<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const tags = ref([])

onMounted(async () => {
  const res = await api.get('/recipes/tags')
  tags.value = res.data
})
</script>

<!-- <template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Tags</h1>

    <div class="grid grid-cols-3 gap-2">
      <router-link
        v-for="tag in tags"
        :key="tag"
        :to="`/recipe/tag/${tag}`"
        class="border p-2 rounded hover:bg-gray-100"
      >
        {{ tag }}
      </router-link>
    </div>
  </div>
</template> -->

<template>
  <div>
    <h4 class="mb-3">Tags</h4>

    <!-- TAG LIST -->
    <div class="d-flex flex-wrap gap-3">
      <RouterLink
        v-for="tag in tags"
        :key="tag"
        :to="`/recipe/tag/${tag}`"
        class="badge bg-light text-dark text-decoration-none"
      >
        {{ tag }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.badge:hover {
  background-color: #e5e7eb;
}
</style>

