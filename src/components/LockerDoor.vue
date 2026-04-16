<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleDoor() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="door-wrapper">
    <div 
      class="door" 
      :class="{ open: isOpen }"
      @click="toggleDoor"
    >
      <!-- SVG DOOR DESIGN -->
      <svg 
        v-if="true"
        width="100%" 
        height="100%" 
        viewBox="0 0 200 400"
        xmlns="http://www.w3.org/2000/svg"
      >
      <defs>
        <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f5f5f5"/>
          <stop offset="20%" stop-color="#d6d6d6"/>
          <stop offset="40%" stop-color="#bfbfbf"/>
          <stop offset="60%" stop-color="#e0e0e0"/>
          <stop offset="80%" stop-color="#c8c8c8"/>
          <stop offset="100%" stop-color="#f5f5f5"/>
        </linearGradient>
      </defs>
      
        <!-- Door rectangle -->
        <rect 
          x="10" y="10" 
          width="180" height="380" 
          rx="10"
           fill="url(#metal)"
        />

        <!-- Ventilation slots -->
        <rect x="40" y="40" width="120" height="10" fill="#9ca3af"/>
        
        <rect x="40" y="100" width="120" height="10" fill="#9ca3af"/>

        <!-- Handle -->
        <rect x="150" y="180" width="20" height="60" rx="5" fill="#4b5563"/>
        
         <text 
          x="100" 
          y="85" 
          text-anchor="middle"
          font-size="25"
          stroke="black"
          stroke-width="2"
          
        >
          {{ isOpen ? 'OPEN' : 'CLOSED' }}
        </text>
        
      </svg>

      <!-- PNG IMAGE (optional) -->
      <!-- <img src="/locker.png" class="door-img" /> -->
    </div>

    
  </div>
</template>

<style scoped>
/* LED strip flowing animation */
@keyframes led-flow {
  0% {
    border-image-source: linear-gradient(
      90deg,
      var(--led-color),
      black,
      var(--led-color)
    );
  }
  50% {
    border-image-source: linear-gradient(
      90deg,
      black,
      var(--led-color),
      black
    );
  }
  100% {
    border-image-source: linear-gradient(
      90deg,
      var(--led-color),
      black,
      var(--led-color)
    );
  }
}

.door-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.door {
  width: 160px;
  height: 320px;
  background: #7c3aed;
  border-width: 6px;
  border-style: solid;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;

  /* LED strip border */
  --led-color: red;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, red, black);
  animation: led-flow 1.2s linear infinite;

  /* Door movement */
  transform-origin: left center;
  transition: transform 0.6s ease;
}

.door.open {
  background: #22c55e;

  /* LED strip turns blue */
  --led-color: #1d4ed8;
  border-image-source: linear-gradient(90deg, #1d4ed8, black);
  animation: led-flow 1.2s linear infinite;

  /* Door slides + rotates left */
  transform: translateX(-40px) rotateY(-35deg);
}

</style>