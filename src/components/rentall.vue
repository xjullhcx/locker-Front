<template>
  <section class="info-page">
    <div class="content">
      <h1>Welcome to Your Smart Locker Rent System</h1>

      <p class="subtitle">
        The new way to rent your space, keep your stuff safe, and enjoy hands-free freedom.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "InformationPage",
};
</script>

<style scoped>
.info-page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;

  /* ?? Fondo de muchos lockers estilo terror */
  background:
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)),
    repeating-linear-gradient(
      90deg,
      #1a1a1a 0px,
      #1a1a1a 80px,
      #111 80px,
      #111 90px
    ),
    repeating-linear-gradient(
      0deg,
      #1a1a1a 0px,
      #1a1a1a 140px,
      #111 140px,
      #111 150px
    );

  background-size: cover;
  background-position: center;
  color: white;

  /* ?? Efecto de luz parpadeante tipo terror */
  animation: flicker 3s infinite alternate ease-in-out;
}

@keyframes flicker {
  0% { filter: brightness(0.8); }
  50% { filter: brightness(1.1); }
  100% { filter: brightness(0.9); }
}

.content {
  max-width: 600px;
  z-index: 2;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.2rem;
  line-height: 1.5;
  opacity: 0.9;
}
</style>
