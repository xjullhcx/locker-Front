<template>
  <div class="page-wrapper">
    <div class="page-content">

      <!-- Título -->
      <h1 class="title">Welcome to our Smart Locker Rental System</h1>

      <!-- Imagen principal -->
      <div class="hero-image">
        <img :src="Lockermain" alt="Logicore Automation Mural" />
      </div>

      <!-- Botones -->
      <div class="actions">
        <button class="btn">Rent a Locker</button>
        <button class="btn">Open a Locker</button>
        <button class="btn">Contact Us</button>
      </div>

    </div>
  </div>
</template>

<script>
import Lockermain from "@/assets/Lockermain.png";

export default {
  name: "LockerMainPage",
  data() {
    return {
      Lockermain,
    };
  },
};
</script>

<style scoped>
/* Toda la pantalla */
.page-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #343434;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Contenido centrado */
.page-content {
  width: 100%;
  max-width: 430px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

/* Título */
.title {
  font-size: 26px;
  font-weight: 800;
  font-color: black;
  text-align: center;
  margin: 0;
}

/* Imagen */
.hero-image {
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

/* Botones */
.actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  background: #1a1a1a;
  color: white;
}
</style>
