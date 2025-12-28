<script setup>
import SidebarNav from '../components/SidebarNav.vue'
</script>

<template>
  <div class="layout">
    <!-- LEFT NAVBAR -->
    <SidebarNav />

    <!-- RIGHT CONTENT -->
    <main class="content">
      <p>Home Layout</p>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

.layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.content {
  flex: 1;
  padding: 40px;
}
</style>