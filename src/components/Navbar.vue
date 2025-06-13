<template>
  <nav class="navbar">
    <input type="text" class="search" placeholder="Search here" />
    <div class="right">
      <i class="fas fa-bell"></i>
      <i class="fas fa-envelope"></i>
      <img src="https://i.pravatar.cc/40" class="avatar" />
      <span class="username">Hello, Samantha</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  height: 60px;
  background: white;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.search {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 250px;
}

.right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.username {
  font-size: 14px;
  color: #555;
}
</style>
