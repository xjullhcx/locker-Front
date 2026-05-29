<template>
  <v-container
    class="locker-page d-flex justify-center align-center pa-0"
  >

    <div class="door-wrapper">

      <!-- Fondo interior -->
      <div class="interior"></div>

      <!-- Puerta 3D -->
      <div
        class="door"
        :class="{ open: isOpen, error: isError }"
        @click="showCodeCard = true"
      >

        <!-- Rejilla superior -->
        <div class="vent">
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
        </div>

        <!-- Placa metálica SIN RELLENO -->
        <div class="text-plate" :class="{ error: isError }">
          <span class="text-plate-label">
            {{ isError ? 'INCORRECT CODE' : (isOpen ? 'LOCKER OPENED' : 'OPEN LOCKER') }}
          </span>
        </div>

        <!-- Manija -->
        <div class="handle">
          <div class="handle-bar"></div>
          <div class="lock"></div>
        </div>

        <!-- Textura metálica -->
        <div class="metal-texture"></div>

        <!-- Brillo -->
        <div class="shine"></div>

      </div>

      <!-- DIALOG VUETIFY -->
      <v-dialog v-model="showCodeCard" width="350">
        <v-card class="pa-4 metal-card" elevation="16">

          <v-card-title class="text-h6 text-center">
            Enter your access code
          </v-card-title>

          <v-text-field
            v-model="code"
            label="Access code"
            maxlength="6"
            type="password"
            variant="outlined"
            color="cyan"
            class="mt-2"
            @keyup.enter="validateCode"
          />

          <v-card-actions class="d-flex justify-center mt-4">
            <v-btn color="cyan" @click="validateCode">Open</v-btn>
            <v-btn color="red" @click="showCodeCard = false">Cancel</v-btn>
          </v-card-actions>

        </v-card>
      </v-dialog>

    </div>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      showCodeCard: false,
      code: "",
      isError: false
    };
  },

  methods: {
    validateCode() {
      if (this.code === "123456") {
        this.isOpen = true;
        this.isError = false;
        this.showCodeCard = false;
      } else {
        this.isOpen = false;
        this.isError = true;
      }
      this.code = "";
    }
  }
};
</script>

<style scoped>
/* Ajuste perfecto dentro de Vuetify */
.locker-page {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Centrado del locker */
.door-wrapper {
  width: 260px;
  height: 480px;
  position: relative;
  perspective: 1200px;
}

/* Fondo interior */
.interior {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #4a4a4a, #2a2a2a);
  border-radius: 14px;
  border: 2px solid #666;
  z-index: 1;
}

/* Puerta 3D */
.door {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, #3a3a3a, #144843);
  border-radius: 14px;
  border: 2px solid #0f140f;
  transform-origin: left center;
  transition: 
    transform 1s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.6s ease,
    background 0.3s ease;
  z-index: 2;
  overflow: hidden;
}

/* Puerta abierta */
.door.open {
  transform: rotateY(-70deg);
  box-shadow: 40px 0px 60px rgba(0, 255, 255, 0.4);
}

/* ?? ERROR: puerta roja */
.door.error {
  background: linear-gradient(160deg, #7a0000, #3a0000) !important;
  border-color: #ff0000 !important;
  box-shadow: 0 0 25px rgba(255, 0, 0, 0.7) !important;
}

/* ?? ERROR: textura más tenue */
.door.error .metal-texture {
  opacity: 0.2;
}

/* ?? ERROR: brillo más suave */
.door.error .shine {
  opacity: 0.1;
}

/* ??? PLACA METÁLICA SIN RELLENO ??? */
.text-plate {
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 40px;

  background: transparent; /* SIN RELLENO */
  border: 2px solid #b5b5b5; /* borde metálico */
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 5;
  transition: all 0.3s ease;

  /* efecto metálico en el borde */
  box-shadow:
    inset 0 0 4px rgba(255,255,255,0.4),
    0 0 6px rgba(0,0,0,0.4);
}

/* Letras metálicas */
.text-plate-label {
  font-size: 14px;
  font-weight: 700;
  color: #e6e6e6;
  text-shadow:
    0 1px 1px black,
    0 0 6px rgba(255,255,255,0.4);
}

/* ?? ERROR: borde rojo + texto amarillo */
.text-plate.error {
  border-color: #ff0000;
  box-shadow:
    inset 0 0 6px rgba(255,0,0,0.6),
    0 0 10px rgba(255,0,0,0.6);
}

.text-plate.error .text-plate-label {
  color: yellow;
  text-shadow:
    0 1px 1px black,
    0 0 8px rgba(255,0,0,0.8);
}

/* Textura metálica */
.metal-texture {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    90deg,
    rgba(255,255,255,0.06) 0px,
    rgba(255,255,255,0.06) 2px,
    rgba(0,0,0,0.1) 4px
  );
  pointer-events: none;
}

/* Brillo */
.shine {
  position: absolute;
  top: 0;
  left: -120%;
  width: 80%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255,255,255,0.25) 50%,
    transparent 100%
  );
  transform: skewX(-20deg);
  animation: sweep 2.3s infinite ease-in-out;
}

/* ?? V-CARD METÁLICA + TRANSPARENTE 60% */
.metal-card {
  background: rgba(40, 40, 40, 0.60) !important;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
}

/* Textura metálica */
.metal-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    90deg,
    rgba(255,255,255,0.10) 0px,
    rgba(255,255,255,0.10) 2px,
    rgba(0,0,0,0.20) 4px
  );
  opacity: 0.35;
  pointer-events: none;
}

/* Brillo metálico */
.metal-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255,255,255,0.25) 50%,
    transparent 100%
  );
  opacity: 0.35;
  pointer-events: none;
}


.vent {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 3;
}

.slot {
  height: 10px;
  border-radius: 4px;
  background: linear-gradient(90deg, #1a1a1a, #333);
  box-shadow: inset 0 0 4px rgba(0,0,0,0.6);
}
.handle {
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 4;
}

.handle-bar {
  width: 14px;
  height: 70px;
  background: linear-gradient(180deg, #d0d0d0, #8a8a8a);
  border-radius: 6px;
  box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}

.lock {
  margin-top: 10px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: radial-gradient(circle, #e0e0e0, #7a7a7a);
  box-shadow: inset 0 0 6px rgba(0,0,0,0.6);
}

</style>
