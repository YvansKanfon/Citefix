
<template>
  <div class="layout">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="main-content">
      <!-- Navbar inside main content area -->
      <Navbar />

      <!-- Page content -->
      <div class="content-area">
        <!-- Main content -->
    <div class="flex-grow-1">
      <!-- Navbar -->
      <nav class="navbar navbar-expand navbar-light bg-light px-4 shadow-sm">
        <div class="container-fluid">
          <span class="navbar-brand">Bienvenue Samantha</span>
        </div>
      </nav>

      <!-- Dashboard Content -->
      <div class="container py-4">
        <!-- Statistiques -->
        <div class="row mb-4">
          <div
            v-for="stat in stats"
            :key="stat.title"
            class="col-md-3 col-sm-6 mb-3"
          >
            <div class="card text-white text-center h-100 shadow"
                 :class="stat.bg">
              <div class="card-body">
                <div class="fs-2 mb-2">{{ stat.icon }}</div>
                <h5 class="card-title">{{ stat.value }}</h5>
                <p class="card-text">{{ stat.title }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Plaintes récentes -->
        <div class="mb-5">
          <h4 class="mb-3 fw-semibold">Quelques plaintes récentes</h4>
          <div class="row">
            <div
              v-for="(complaint, index) in complaints"
              :key="index"
              class="col-md-4 mb-3"
            >
              <div class="card h-100 shadow">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <img :src="complaint.image" class="rounded-circle me-3" width="40" height="40" />
                    <div>
                      <strong>{{ complaint.name }}</strong>
                      <div class="text-muted small">{{ complaint.daysAgo }} days ago</div>
                    </div>
                  </div>
                  <p class="text-muted small">{{ complaint.text }}</p>
                  <div class="text-warning">⭐ {{ complaint.rating }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Graphiques -->
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card shadow">
              <div class="card-body">
                <h5 class="card-title">Total Revenue</h5>
                <BarChart :chartData="barData" :chartOptions="chartOptions" />
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="card shadow">
              <div class="card-body">
                <h5 class="card-title">Customer Map</h5>
                <LineChart :chartData="lineData" :chartOptions="chartOptions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BarChart from '../components/BarChart.vue'
import LineChart from '../components/LineChart.vue'
const stats = [
  { title: 'Total plaintes', value: '75', icon: '📁', bg: 'bg-primary' },
  { title: 'Plaintes résolues', value: '357', icon: '✅', bg: 'bg-success' },
  { title: 'Nombre de points actuel', value: '65', icon: '🎯', bg: 'bg-warning' },
  { title: 'Total points attribués', value: '128', icon: '💳', bg: 'bg-info' }
]


const complaints = [
  { name: 'Jon Sena', daysAgo: 2, rating: 4.5, image: 'https://i.pravatar.cc/100?img=1', text: 'Lorem ipsum dummy text of the printing and typesetting industry.' },
  { name: 'Sofia', daysAgo: 2, rating: 4.0, image: 'https://i.pravatar.cc/100?img=2', text: 'Lorem ipsum dummy text of the printing and typesetting industry.' },
  { name: 'Anandreansyah', daysAgo: 2, rating: 4.5, image: 'https://i.pravatar.cc/100?img=3', text: 'Lorem ipsum dummy text of the printing and typesetting industry.' }
]

const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Revenue',
    backgroundColor: '#0F2A71',
    data: [30000, 40000, 35000, 50000, 45000, 60000]
  }]
}

const lineData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '2024',
      borderColor: '#F4D462',
      data: [40, 30, 20, 50, 60, 70, 80],
      fill: false,
      tension: 0.4
    },
    {
      label: '2025',
      borderColor: '#0F2A71',
      data: [20, 40, 60, 30, 50, 70, 90],
      fill: false,
      tension: 0.4
    }
  ]
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: false }
  }
}
</script>
