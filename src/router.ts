import { createRouter, createWebHistory } from 'vue-router'

import LockerDoor from './components/LockerDoor.vue'
import HomeComponent from './components/HomeComponent.vue'

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/locker-door', component: LockerDoor }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
