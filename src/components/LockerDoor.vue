<template>
  <div class="door-wrapper">
    
    <!-- Fondo interior -->
    <div class="interior"></div>

    <!-- Puerta 3D -->
    <div class="door" :class="{ open: isOpen, error: isError }" @click="showCodeCard = true">


      <!-- Rejilla superior -->
      <div class="vent">
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
      </div>

      <!-- Placa de texto -->
      <div class="text-plate">
    <span class="text-plate-label">
      {{ isError ? 'INCORRECT CODE' : (isOpen ? 'LOCKER OPENED' : 'OPEN YOUR LOCKER') }}
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

    <!-- ?? V-CARD PARA INGRESAR CÓDIGO -->
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
    />

     <v-card-actions class="d-flex justify-center mt-4">
       <v-btn color="cyan" @click="validateCode">
        Open
       </v-btn>
       <v-btn color="red" @click="showCodeCard = false">
         Cancel
       </v-btn>
     </v-card-actions>
   </v-card>
 </v-dialog>


  </div>
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
      this.showCodeCard = false;
      this.isOpen = true;
      this.isError = false;   // quita error
    } else {
      this.isOpen = false;
      this.isError = true;    // activa mensaje de error
      // sin alert()
    }
  }
}


};
</script>

<style scoped>
.door-wrapper {
  width: 310px;
  height: 510px;
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
    box-shadow 0.6s ease;
  z-index: 2;
  overflow: hidden;
}

/* Animación de apertura 3D */
.door.open {
  transform: rotateY(-70deg);
  box-shadow: 40px 0px 60px rgba(0, 255, 255, 0.4);
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

/* Brillo dinámico */
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

@keyframes sweep {
  0% { left: -120%; }
  60% { left: 140%; }
  100% { left: 140%; }
}

/* Rejilla superior */
.vent {
  position: absolute;
  top: 20px;
  left: 50%;
  width: 70%;
  height: 60px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
}

.slot {
  height: 10px;
  border-radius: 4px;
  background: linear-gradient(180deg, #000000aa, #00000055);
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.6);
}

/* Manija */
.handle {
  position: absolute;
  right: 25px;
  top: 150px;
  width: 22px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 6;
}

.handle-bar {
  width: 100%;
  height: 80px;
  background: linear-gradient(180deg, #000000aa, #00000055);
  border-radius: 4px;
  box-shadow:
    inset 0 2px 4px rgba(0,0,0,0.6),
    0 1px 2px rgba(0,0,0,0.4);
}

/* Cerradura */
.lock {
  margin-top: 10px;
  width: 26px;
  height: 26px;
  background: radial-gradient(circle, #e0e0e0, #8a8a8a);
  border-radius: 50%;
  box-shadow: inset 0 0 6px rgba(0,0,0,0.6);
}

/* Placa decorativa */
.text-plate {
  position: absolute;
  top: 95px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 45px;
  background: transparent;
  border-radius: 6px;
  border: 2px solid #6b6b6b;
  box-shadow:
    inset 0 0 6px rgba(0,0,0,0.4),
    0 2px 4px rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 7;
}

/* Texto en relieve */
.text-plate-label {
  font-size: 14px;
  font-weight: 800;
  color: #a7a7a7;
  text-shadow:
    0 1px 0 #ffffff,
    0 2px 2px rgba(0,0,0,0.4);
  letter-spacing: 1px;
}


/* Fondo interior profundo */
.interior {
  position: absolute;
  inset: 0;
  border-radius: 14px;
  z-index: 1;
  background:
    radial-gradient(
      circle at center,
      rgba(0,0,0,0.0) 0%,
      rgba(0,0,0,0.35) 70%,
      rgba(0,0,0,0.55) 100%
    ),
    linear-gradient(180deg, #3d3d3d, #1f1f1f);
  box-shadow:
    inset 0 0 40px rgba(0,0,0,0.6),
    inset 0 0 80px rgba(0,0,0,0.4),
    inset 0 0 120px rgba(0,0,0,0.3);
}

/* v card*/
 .metal-card {
  background: rgba(40, 40, 40, 0.35) !important; /* Transparente */
  backdrop-filter: blur(6px); /* Efecto vidrio */
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 14px;

  /* Textura metálica */
  position: relative;
  overflow: hidden;
}

.metal-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    90deg,
    rgba(255,255,255,0.08) 0px,
    rgba(255,255,255,0.08) 2px,
    rgba(0,0,0,0.15) 4px
  );
  opacity: 0.9;
  pointer-events: none;
}

.metal-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255,255,255,0.15) 50%,
    transparent 100%
  );
  opacity: 0.4;
  pointer-events: none;
}


.door.error {
  background: linear-gradient(160deg, #5a0000, #8a0000);
  border: 2px solid #ff1a1a;
  box-shadow: 0 0 25px rgba(255, 0, 0, 0.6);
}


</style>
