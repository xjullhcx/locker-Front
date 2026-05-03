<template>
  <footer class="tiktok-footer">
    <button class="nav-btn">Rent a Locker</button>
    <button class="nav-btn">Open Locker</button>
    <button class="nav-btn">Contact Us</button>
  </footer>
</template>

<style scoped>
/* Barra completa estilo TikTok */
.tiktok-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 14px 0;

  /* Placa metálica */
  background: linear-gradient(145deg, #3a3a3a, #1f1f1f);
  box-shadow:
    0 -4px 12px rgba(0,0,0,0.6),
    inset 0 0 10px rgba(0,0,0,0.5);

  border-top: 1px solid rgba(255,255,255,0.08);

  z-index: 9999;
}

/* Textura metálica */
.tiktok-footer::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    90deg,
    rgba(255,255,255,0.05) 0px,
    rgba(255,255,255,0.05) 2px,
    rgba(0,0,0,0.15) 4px
  );
  opacity: 0.25;
  pointer-events: none;
}

/* Botones estilo TikTok pero metálicos */
.nav-btn {
  flex: 1;
  margin: 0 12px;

  padding: 12px 0;
  font-size: 16px;
  font-weight: 700;
  color: #e0e0e0;

  background: linear-gradient(145deg, #4a4a4a, #2a2a2a);
  border: none;
  border-radius: 10px;

  box-shadow:
    inset 0 0 6px rgba(0,0,0,0.5),
    0 2px 6px rgba(0,0,0,0.4);

  cursor: pointer;
  transition: 0.25s ease;
}

/* Hover oscuro (efecto TikTok) */
.nav-btn:hover {
  background: linear-gradient(145deg, #2f2f2f, #1a1a1a);
  transform: translateY(-2px);
}
</style>
