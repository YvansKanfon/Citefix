<template>
  <aside class="sidebar">
    <h2 class="logo">Citéfix</h2>
    <ul class="menu">
      <li><i class="fas fa-home"></i> Dashboard</li>
      <li class="active"><i class="fas fa-exclamation-circle"></i> Plaintes</li>
      <li><i class="fas fa-flag"></i> Signalements</li>
      <li><i class="fas fa-chart-line"></i> Analytics</li>
      <li><i class="fas fa-pen"></i> Reviews</li>
      <li><i class="fas fa-utensils"></i> Foods</li>
      <li><i class="fas fa-calendar-alt"></i> Calendar</li>
      <li><i class="fas fa-comments"></i> Chat</li>
      <li><i class="fas fa-wallet"></i> Wallet</li>
      <li>
  <router-link to="/nouvelle-plainte" class="text-decoration-none text-dark">
    <i class="fas fa-plus-circle"></i> Nouvelle plainte
  </router-link>
</li>
<li>
  <router-link to="/plaintes" class="text-decoration-none text-dark">
    <i class="fas fa-list"></i> Liste des plaintes
  </router-link>
</li>

    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  background: white;
  border-right: 1px solid #eee;
  padding: 20px 10px;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
}

.menu {
  list-style: none;
  padding: 0;
}

.menu li {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
  cursor: pointer;
  transition: 0.3s;
}

.menu li:hover,
.menu .active {
  background: #f4d462;
  border-radius: 8px;
}
</style>
