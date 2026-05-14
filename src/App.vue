<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import socket from "./socket"

// Socket events
socket.on("connect", () => {
  console.log("Conectado al backend:", socket.id)
})

socket.emit("message", "Hola desde Vue!")

socket.on("message", (msg) => {
  console.log("Mensaje recibido desde el backend:", msg)
})
</script>

<template>
  <v-app>

    <!-- HEADER -->
    <v-app-bar flat color="transparent">
      <Header />
    </v-app-bar>

    <!-- CONTENIDO PRINCIPAL -->
    <v-main>
      <v-container
        class="pa-0 fill-height d-flex flex-column"
      >
        <router-view />
      </v-container>
    </v-main>

    <!-- FOOTER -->
    <v-footer app>
      <Footer />
    </v-footer>

  </v-app>
</template>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
