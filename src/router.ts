import { createRouter, createWebHistory } from 'vue-router'

import LockerDoor from './components/LockerDoor.vue'
import HomeComponent from './components/HomeComponent.vue'
import ContacUS from './components/ContacUS.vue'

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/locker-door', component: LockerDoor },
  { path: '/ContacUS', component: ContacUS }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
