<template>
  <div>
    <h3 class="mb-4">Liste des plaintes</h3>
    <div v-if="plaintes.length">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titre</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(plainte, i) in plaintes" :key="i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ plainte.titre }}</td>
            <td>{{ plainte.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p class="text-muted">Aucune plainte pour le moment.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const plaintes = ref([
  { titre: 'Fuite d’eau', description: 'Une fuite dans la cuisine.' },
  { titre: 'Lumière cassée', description: 'L’ampoule du couloir est grillée.' }
])
</script>
