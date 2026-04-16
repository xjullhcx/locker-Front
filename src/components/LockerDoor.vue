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
        <!-- Door rectangle -->
        <rect 
          x="10" y="10" 
          width="180" height="380" 
          rx="10"
          fill="#d1d5db"
          stroke="none"
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
/* Border animations */
@keyframes pulse-red {
  0% { border-color: red; }
  50% { border-color: black; }
  100% { border-color: red; }
}

@keyframes pulse-blue {
  0% { border-color: #1d4ed8; }
  50% { border-color: black; }
  100% { border-color: #1d4ed8; }
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
  border: 6px solid red;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.5s ease;
  transform-origin: left center;
  animation: pulse-red 1.2s infinite ease-in-out;
  overflow: hidden;
}

.door.open {
  background: #22c55e;
  border-color: #1d4ed8;
  transform: rotateY(-55deg);
  animation: pulse-blue 1.2s infinite ease-in-out;
}

.door-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.label {
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
}
</style>
