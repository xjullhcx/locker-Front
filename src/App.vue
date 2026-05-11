<script setup lang="ts">
//import HamburgerMenu  from './components/Menu.vue'
import Header  from './components/Header.vue'
import Footer  from './components/Footer.vue'
import HomeComponent from "./components/HomeComponent.vue";
import socket from "./socket";

socket.on("connect", () => {
  console.log("Conectado al backend:", socket.id);
});

socket.emit("message", "Hola desde Vue!");

socket.on("message", (msg) => {
  console.log("Mensaje recibido desdel bk:", msg);
});

</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <router-view />
    
  </main>
  
  <Footer/>
  
  
</template>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/*
main {
  width:100%;
  height: 100vh;
  display: flex;
  justify-content: center;   /* Centrado horizontal */
 /* align-items: flex-start;   /* Se pega arriba */
  /*overflow: hidden;
  padding-top: 50px;         /* Ajusta la distancia al header */
 /* padding-bottom: 30px;     /* espacio para el footer metálico */
/*}*/

</style>
