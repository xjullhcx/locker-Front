<template>
  <div class="info-wrapper">
    <div class="info-content">

      <h1 class="title">Welcome to your Rent Locker System</h1>
       

      <!-- Imagen principal: personas ahorrando tiempo -->
      <div class="hero-image">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.FZ79V-h3wwCE1yOp1Dm9_QHaE8?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="People saving time using smart systems"
        />
      </div>
      <h1 class="title">contac us: logicoreautomation@gmail.com</h1>
       
      <p class="description">
        Save time, reduce waiting lines, and improve efficiency with our smart locker system.
      </p>

      <div class="gallery">

        <img
          class="gallery-img"
          src="https://i.pinimg.com/originals/45/29/78/45297865e9960ba4ef103bb1650b7ad2.jpg"
          alt="Students using lockers"
        />
        <img
          class="gallery-img"
          src="https://media.istockphoto.com/id/513948120/photo/construction-worker-in-the-locker-room.jpg?s=170667a&w=0&k=20&c=mufMYAjLWr5YPx99aO027vwm7z95LgnEwS3g-lqWBfU="
          alt="Employees using lockers"
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// No logic needed yet
</script>

<style scoped>
.info-wrapper {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #1f1f1f, #3a3a3a);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 20px;
}

.info-content {
  max-width: 900px;
  text-align: center;
  color: white;
}

/* Títulos */
.title {
  font-size: 38px;
  font-weight: 900;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.subtitle {
  font-size: 22px;
  opacity: 0.85;
  margin-bottom: 30px;
}

/* Imagen principal */
.hero-image img {
  width: 100%;
  max-width: 780px;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.5);
  margin-bottom: 25px;
  object-fit: cover;
}

/* Texto descriptivo */
.description {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 40px;
}

/* Galería */
.gallery {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-img {
  width: 260px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  transition: transform 0.3s ease;
}

.gallery-img:hover {
  transform: scale(1.05);
}
</style>
