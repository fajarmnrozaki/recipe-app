// import { createRouter, createWebHistory } from 'vue-router'

// const routes = []

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'

import HomeLayout from '../layouts/HomeLayout.vue'
import RecipeLayout from '../layouts/RecipeLayout.vue'

import Home from '../views/Home.vue'
import Recipe from '../views/Recipe.vue'
import RecipeDetail from '../views/RecipeDetail.vue'

import RecipeTag from '../views/RecipeTag.vue'
import Tags from '../views/Tags.vue'

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '',
        component: Home
      }
    ]
  },
  {
    path: '/recipe',
    component: RecipeLayout,
    children: [
      {
        path: '',
        component: Recipe
      },
      {
        path: ':id',
        component: RecipeDetail
      },
      {
        path: 'tag/:tag',
        component: RecipeTag
      },
      {
        path: 'tags',
        component: Tags
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

