<template>
  <aside class="sidebar">
    <h2 class="title">Recipe App</h2>

    <nav>
      <RouterLink to="/" class="nav-link text-white">Home</RouterLink>
      <RouterLink to="/recipe" class="nav-link text-white">Recipe</RouterLink>
      <RouterLink to="/recipe/tags" class="nav-link text-white">Tags</RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 220px;
  min-height: 100vh;
  background: #1f2937;
  color: white;
  padding: 20px;
}

.title {
  margin-bottom: 20px;
}

.nav-link {
  display: block;
  padding: 10px;
  margin-bottom: 5px;
  color: white;
  text-decoration: none;
  border-radius: 6px;
}

.nav-link.router-link-active {
  background-color: #2563eb;
  font-weight: bold;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100px;
    padding: 10px;
  }

  .title {
    font-size: 14px;
  }

  .nav-link {
    font-size: 14px;
    padding: 6px;
  }
}

</style>
