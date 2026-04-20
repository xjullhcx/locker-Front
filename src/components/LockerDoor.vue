<template>
  <div class="locker-wrapper">
    <div
      class="locker-door"
      :class="{
        'locker-door--closed': isClosed,
        'locker-door--open': !isClosed
      }"
      @click="toggleDoor"
    >
      <div class="locker-status">
      
        <span :class="isClosed ? 'status-closed' : 'status-open'">
          {{ isClosed ? 'click to Open' : 'OPEN' }}
        </span>
      </div>
    
      
    </div>

    
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isClosed = ref(true)

const toggleDoor = () => {
  isClosed.value = !isClosed.value
}
</script>

<style scoped>
.locker-wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Outer door frame */
.locker-door {
  width: 160px;
  height: 120px;
  border-radius: 6px;
  border: 4px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.15s ease;
  background: rgba(255, 255, 255, 0.02);
}

/* Closed = red border */
.locker-door--closed {
  border-color: #4080ff;
  box-shadow: 0 0 12px rgba(229, 57, 53, 0.6);
}

/* Open = green border */
.locker-door--open {
  border-color: #43a047;
  box-shadow: 0 0 12px rgba(67, 160, 71, 0.6);
}

.locker-door:active {
  transform: scale(0.97);
}

/* Clear middle area */
.locker-center {
  width: 80%;
  height: 70%;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Code text in the middle */
.locker-code {
  color: #4080ff;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.08em;
}

/* Status text */
.locker-status {
  font-size: 0.9rem;
}

.status-closed {
  color: #4080ff;
  font-weight: 600;
}

.status-open {
  color: #43a047;
  font-weight: 600;
}
</style>
