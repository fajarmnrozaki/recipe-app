<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "../services/api";

const route = useRoute();
const router = useRouter();

const recipes = ref([]);
const loading = ref(false);

async function fetchRecipes() {
  loading.value = true;

  const keyword = route.query.keyword;
  let url = "/recipes";

  if (keyword) {
    url = `/recipes/search?q=${keyword}`;
  }

  const res = await api.get(url);
  recipes.value = res.data.recipes;
  loading.value = false;
}

onMounted(fetchRecipes);

// 🔁 React to URL change
watch(
  () => route.query.keyword,
  fetchRecipes
);

// 🔙 BACK BUTTON
function goBack() {
  router.push("/recipe");
}
</script>

<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h4>
        {{ route.query.keyword
          ? `Search: "${route.query.keyword}"`
          : "All Recipes" }}
      </h4>

      <button
        v-if="route.query.keyword"
        class="btn btn-outline-secondary btn-sm"
        @click="goBack"
      >
        ← Back
      </button>
    </div>

    <p v-if="loading">Loading recipes...</p>

    <div v-else class="row g-3">
      <div
        class="col-md-4"
        v-for="r in recipes"
        :key="r.id"
      >
        <div class="card h-100">
          <img
            :src="r.image"
            class="card-img-top"
            style="height:160px;object-fit:cover"
          />
          <div class="card-body p-2">
            <h6 class="card-title mb-1">{{ r.name }}</h6>

            <small class="text-muted d-block">
              {{ r.cuisine }} • {{ r.difficulty }}
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
