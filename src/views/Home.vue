<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import api from "../services/api";

const popular = ref([]);
const random = ref([]);

async function fetchPopular() {
  const res = await api.get("/recipes", {
    params: { limit: 4, sortBy: "rating", order: "desc" }
  });
  popular.value = res.data.recipes;
}

async function fetchRandom() {
  const skip = Math.floor(Math.random() * 20);
  const res = await api.get("/recipes", {
    params: { limit: 4, skip }
  });
  random.value = res.data.recipes;
}

onMounted(() => {
  fetchPopular();
  fetchRandom();
});
</script>

<template>
  <div class="container-fluid">

    <!-- POPULAR RECIPES -->
    <h4 class="mb-3">Popular Recipes</h4>
    <div class="row g-3 mb-4">
      <div class="col-md-6" v-for="r in popular" :key="r.id">
        <div class="card h-100">
          <img
            :src="r.image"
            class="card-img-top"
            style="height: 160px; object-fit: cover;"
          />

          <!-- CARD BODY -->
          <div class="card-body p-2">
            <h6 class="card-title mb-1">{{ r.name }}</h6>

            <!-- TAGS -->
            <div class="mb-1">
              <RouterLink
                v-for="tag in r.tags"
                :key="tag"
                :to="`/recipe/tag/${tag}`"
                class="badge bg-light text-dark me-1 mb-1"
              >
                {{ tag }}
              </RouterLink>
            </div>

            <!-- META -->
            <small class="text-muted d-block">
              ⏱ {{ r.prepTimeMinutes }}m + {{ r.cookTimeMinutes }}m
              • 👥 {{ r.servings }}
            </small>

            <small class="text-muted d-block">
              {{ r.difficulty }} level • {{ r.cuisine }}
            </small>

            <RouterLink
              :to="`/recipe/${r.id}`"
              class="text-primary small"
            >
              Detail →
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- RANDOM RECIPES -->
    <h4 class="mb-3">Random Recipes</h4>
    <div class="row g-3">
      <div class="col-md-6" v-for="r in random" :key="r.id">
        <div class="card h-100">
          <img
            :src="r.image"
            class="card-img-top"
            style="height: 160px; object-fit: cover;"
          />

          <!-- CARD BODY -->
          <div class="card-body p-2">
            <h6 class="card-title mb-1">{{ r.name }}</h6>

            <!-- TAGS -->
            <div class="mb-1">
              <RouterLink
                v-for="tag in r.tags"
                :key="tag"
                :to="`/recipe/tag/${tag}`"
                class="badge bg-light text-dark me-1 mb-1"
              >
                {{ tag }}
              </RouterLink>
            </div>

            <!-- META -->
            <small class="text-muted d-block">
              ⏱ {{ r.prepTimeMinutes }}m + {{ r.cookTimeMinutes }}m
              • 👥 {{ r.servings }}
            </small>

            <small class="text-muted d-block">
              {{ r.difficulty }} level • {{ r.cuisine }}
            </small>

            <RouterLink
              :to="`/recipe/${r.id}`"
              class="text-primary small"
            >
              Detail →
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
