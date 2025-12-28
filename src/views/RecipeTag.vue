<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import api from "../services/api";

const route = useRoute();
const router = useRouter();
const recipes = ref([]);

async function fetchByTag() {
  const res = await api.get(`/recipes/tag/${route.params.tag}`);
  recipes.value = res.data.recipes;
}

onMounted(fetchByTag);
watch(() => route.params.tag, fetchByTag);
</script>

<template>
  <div class="container-fluid">

    <!-- HEADER -->
    <div class="d-flex align-items-center mb-3">
      <button
        class="btn btn-sm btn-outline-secondary me-3"
        @click="router.back()"
      >
        ← Back
      </button>

      <h4 class="mb-0">Tag: {{ route.params.tag }}</h4>
    </div>

    <!-- GRID -->
    <div class="row g-3">
      <div class="col-md-6" v-for="r in recipes" :key="r.id">
        <div class="card h-100">
          <img
            :src="r.image"
            class="card-img-top"
            style="height: 160px; object-fit: cover;"
          />

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
