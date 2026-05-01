<script setup lang="ts">
//import HamburgerMenu  from './components/Menu.vue'
import Header  from './components/Header.vue'
import LockerDoor from './components/LockerDoor.vue'
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
    <LockerDoor />
  </main>
  
</template>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


main {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;   /* Centrado horizontal */
  align-items: flex-start;   /* Se pega arriba */
  overflow: hidden;
  padding-top: 80px;         /* Ajusta la distancia al header */
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
