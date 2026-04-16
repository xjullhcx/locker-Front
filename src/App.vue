<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Front from './components/Front.vue'
import TheWelcome from './components/TheWelcome.vue'
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
   
  </header>

  <main>
    <Front />
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
