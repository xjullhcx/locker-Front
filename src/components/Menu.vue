<template>
  <div class="hamburger-container">
    <!-- Botón hamburguesa -->
    <div class="hamburger" :class="{ open: isOpen }" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Menú desplegable -->
    <nav class="menu" :class="{ open: isOpen }">
      <a href="#">Rent a Locker</a>
      <a href="#">Open a Locker</a>
      <a href="#">Assistance</a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.hamburger-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}

/* Botón hamburguesa */
.hamburger {
  width: 35px;
  height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 10;
}

.hamburger span {
  height: 4px;
  background: #00e0ff;
  border-radius: 4px;
  transition: 0.4s;
}

/* Animación al abrir */
.hamburger.open span:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
}

/* Menú */
.menu {
  position: absolute;
  top: 40px;
  right: 0;
  background: #0f1f1f;
  border: 1px solid #00e0ff;
  border-radius: 10px;
  padding: 15px 20px;
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: 0.3s ease;
}

.menu.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.menu a {
  color: #00e0ff;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s;
}

.menu a:hover {
  color: white;
}
</style>
