<template>
  <header class="metal-plate">
    <span class="title">Smart Locker for Rent</span>
  </header>
</template>

<style scoped>
.metal-plate {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;        /* ?? FULL WIDTH */
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(145deg, #3a3a3a, #1e1e1e);
  border-radius: 0;   /* ?? SIN BORDES REDONDOS (estilo industrial) */

  box-shadow:
    0 4px 10px rgba(0,0,0,0.6),
    inset 0 0 12px rgba(0,0,0,0.5);

  overflow: hidden;
}

/* ?? Textura metálica SIN HOLES */
.metal-plate::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    90deg,
    rgba(255,255,255,0.05) 0px,
    rgba(255,255,255,0.05) 2px,
    rgba(0,0,0,0.15) 4px
  );
  opacity: 0.35;
  pointer-events: none;
}

.title {
  font-size: 28px;
  font-weight: 800;
  color: #dcdcdc;
  letter-spacing: 1px;
  text-shadow: 0 0 4px rgba(0,0,0,0.7);
}
</style>
