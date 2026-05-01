<template>
  <header class="metal-plate">
    <span class="title">Smart Locker for Rent</span>
  </header>
</template>

<style scoped>
.metal-plate {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 460px;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(145deg, #3a3a3a, #1e1e1e);
  border-radius: 10px;

  /* Textura metálica */
  overflow: hidden;
  box-shadow:
    0 4px 10px rgba(0,0,0,0.6),
    inset 0 0 12px rgba(0,0,0,0.5);
}

/* Textura de acero cepillado */
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

/* Tornillos metálicos */
.metal-plate::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle, #000 20%, #555 60%, #222 100%) 10px 10px / 20px 20px no-repeat,
    radial-gradient(circle, #000 20%, #555 60%, #222 100%) calc(100% - 10px) 10px / 20px 20px no-repeat,
    radial-gradient(circle, #000 20%, #555 60%, #222 100%) 10px calc(100% - 10px) / 20px 20px no-repeat,
    radial-gradient(circle, #000 20%, #555 60%, #222 100%) calc(100% - 10px) calc(100% - 10px) / 20px 20px no-repeat;
  opacity: 0.8;
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
