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
        <div class="card p-4 shadow">
            <h3 class="mb-3">Nouvelle plainte</h3>
            <form @submit.prevent="submitPlainte">
            <div class="mb-3">
                <label class="form-label">Titre</label>
                <input type="text" v-model="form.titre" class="form-control" required />
            </div>
            <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea v-model="form.description" class="form-control" required rows="4"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Soumettre</button>
            </form>
        </div>

        <slot />
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  titre: '',
  description: ''
})

const submitPlainte = () => {
  console.log('Plainte envoyée:', form)
  // En production : envoyer au backend ou l’ajouter à un tableau
}
</script>
