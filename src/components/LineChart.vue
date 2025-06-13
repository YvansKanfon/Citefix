<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale)

defineProps({
  chartData: Object,
  chartOptions: Object
})
</script>

<template>
  <Line :data="chartData" :options="chartOptions" />
</template>
