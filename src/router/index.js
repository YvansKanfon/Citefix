import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue'
import DashboardView from '../views/DashboardView.vue'
import PlainteList from '../views/PlainteList.vue'
import NouvellePlainte from '../views/NouvellePlainte.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect: '/dashboard' },
      { path: 'dashboard', component: DashboardView },
      { path: 'NouvellePlainte', component: NouvellePlainte },
      { path: 'PlainteList', component: PlainteList }
    ]
  }
]










const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
