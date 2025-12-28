<!-- <script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '../services/api'

const route = useRoute()
const recipe = ref(null)

onMounted(async () => {
  const res = await api.get(`/recipes/${route.params.id}`)
  recipe.value = res.data
})
</script>

<template>
  <div v-if="recipe">
    <h1 class="text-2xl font-bold mb-2">{{ recipe.name }}</h1>
    <img :src="recipe.image" class="w-64 mb-4" />

    <p><b>Difficulty:</b> {{ recipe.difficulty }}</p>
    <p><b>Cuisine:</b> {{ recipe.cuisine }}</p>

    <h3 class="mt-4 font-semibold">Ingredients</h3>
    <ul>
      <li v-for="i in recipe.ingredients" :key="i">{{ i }}</li>
    </ul>
  </div>
</template> -->


<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "../services/api";

const route = useRoute();
const router = useRouter();
const recipe = ref(null);

onMounted(async () => {
  const res = await api.get(`/recipes/${route.params.id}`);
  recipe.value = res.data;
});
</script>

<template>
  <div v-if="recipe" class="container-fluid">

    <!-- BACK -->
    <button
      class="btn btn-sm btn-outline-secondary mb-3"
      @click="router.back()"
    >
      ← Back
    </button>

    <!-- TITLE -->
    <h2 class="mb-2">{{ recipe.name }}</h2>

    <!-- TAGS -->
    <div class="mb-2">
      <RouterLink
        v-for="tag in recipe.tags"
        :key="tag"
        :to="`/recipe/tag/${tag}`"
        class="badge bg-light text-dark me-1"
      >
        {{ tag }}
      </RouterLink>
    </div>

    <!-- META -->
    <p class="text-muted mb-2">
      ⏱ {{ recipe.prepTimeMinutes }}m prep +
      {{ recipe.cookTimeMinutes }}m cook
      • 👥 {{ recipe.servings }} people
    </p>

    <p class="text-muted mb-4">
      {{ recipe.difficulty }} level • {{ recipe.cuisine }}
    </p>

    <!-- IMAGE -->
    <img
      :src="recipe.image"
      class="img-fluid rounded mb-4"
      style="max-height: 360px; object-fit: cover;"
    />

    <!-- INGREDIENTS -->
    <h5>Ingredients</h5>
    <ul class="mb-4">
      <li v-for="(item, i) in recipe.ingredients" :key="i">
        {{ item }}
      </li>
    </ul>

    <!-- INSTRUCTIONS -->
    <h5>Instructions</h5>
    <ol>
      <li
        v-for="(step, i) in recipe.instructions"
        :key="i"
        class="mb-2"
      >
        {{ step }}
      </li>
    </ol>

  </div>
</template>
