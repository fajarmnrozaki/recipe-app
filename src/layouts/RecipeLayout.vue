<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import SidebarNav from "../components/SidebarNav.vue";

const router = useRouter();
const keyword = ref("");

function onSearch() {
  if (!keyword.value.trim()) return;

  router.push({
    path: "/recipe",
    query: { keyword: keyword.value }
  });

  keyword.value = "";
}
</script>

<template>
  <div class="layout">
    <SidebarNav />

    <main class="content">
      <!-- SEARCH BAR -->
      <form
        class="mb-4 d-flex gap-2"
        @submit.prevent="onSearch"
      >
        <input
          v-model="keyword"
          type="text"
          class="form-control"
          placeholder="Search recipe (e.g. italian)"
        />
        <button class="btn btn-primary">
          Search
        </button>
      </form>

      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}
.content {
  flex: 1;
  padding: 40px;
}
</style>
