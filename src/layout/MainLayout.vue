<template>
  <div>
    <Navbar />
    <div style="display: flex">
      <Sidebar />
      <div style="flex: 1; padding: 1rem;">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
</script>
