<template>
  <!-- Main image section -->
  <v-container class="home-wrapper pa-0 d-flex flex-column align-center">
    <v-img
      :src="Lockermain"
      alt="Smart Locker"
      class="full-image hover-effect"
      cover
    />
  </v-container>

  <!-- Gold–black–gold divider -->
  <v-container class="d-flex">
    <div class="d-flex flex-column gr-4 py-8 flex-grow-1">
      <v-divider
        color="amber-accent-4"
        opacity=".7"
        thickness="3"
        gradient
      />
    </div>
  </v-container>

  <!-- Text 0 -->
  <v-container fluid>
    <v-card variant="plain">
      <v-card-title class="Main-text">
        Experience the Future of Storage
      </v-card-title>

      <v-card-text class="Mtex">
        Logicore smart lockers are built for people who value speed, security,
        and simplicity whether you are managing deliveries, storing tools, or
        keeping personal items safe.
      </v-card-text>
    </v-card>
  </v-container>

  <!-- Text 1 -->
  <v-container fluid>
    <v-card class="locker-door">
      <div class="text-plate"></div>

      <!-- Handle -->
      <div class="handle">
        <div class="handle-bar"></div>
        <div class="lock"></div>
      </div>

      <v-card-title class="buble-text">No app required</v-card-title>
      <v-card-text class="Bubletex">
        Anyone can use the system instantly, no downloads, no accounts.
      </v-card-text>
    </v-card>
  </v-container>

  <!-- Text 2 -->
  <v-container fluid>
    <v-card class="locker-door">
      <!-- Handle -->
      <div class="handle">
        <div class="handle-bar"></div>
        <div class="lock"></div>
      </div>

      <v-card-title class="buble-text">
        No keys, no padlocks, no headaches
      </v-card-title>

      <v-card-text class="Bubletex">
        Every locker opens with a secure code. No lost keys, no replacements,
        no downtime.
      </v-card-text>
    </v-card>
  </v-container>

  <!-- Text 3 -->
  <v-container fluid>
    <v-card class="locker-door">
      <!-- Handle -->
      <div class="handle">
        <div class="handle-bar"></div>
        <div class="lock"></div>
      </div>

      <v-card-title class="buble-text">
        Security you can trust
      </v-card-title>

      <v-card-text class="Bubletex">
        Every opening is authenticated. Every moment is secure.
      </v-card-text>
    </v-card>
  </v-container>

  <br />

  <!-- Video Section -->
  <v-card elevation="12" class="video-frame d-flex justify-center">
    <v-container class="py-10 d-flex justify-center" fluid>
      <v-row justify="center">
        <v-col cols="12" md="6" class="d-flex justify-center video-offset">
          <v-card elevation="8" class="rounded-lg overflow-hidden">
            <v-responsive aspect-ratio="16/9">
              <video
                :src="videoFile"
                autoplay
                muted
                loop
                playsinline
                style="width: 100%; height: 100%; object-fit: scale-down;"
              ></video>
            </v-responsive>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <br />
  <!-- Footer -->
  <v-footer
  height="70"
  class="d-flex justify-center align-center simple-footer"
>
  
  <span class="footer-text">2026 Logicore Smart Lockers</span>
</v-footer>

  <br /><br />
</template>
<script>
import Lockermain from "@/assets/Lockermain.png";
import videoFile from "@/assets/VideoMain.mp4";

export default {
  data() {
    return {
      Lockermain,
      videoFile
    };
  },

  mounted() {
    const video = this.$refs.lockerVideo;
    if (video) {
      video.playbackRate = 0.3;
    }
  }
};
</script>
<style scoped>
/* Main image */
.full-image {
  margin-top: 30px;
  width: 100%;
  height: auto;
  transition: filter 0.6s ease, transform 0.6s ease;
}

/* Main wrapper spacing */
.home-wrapper {
  margin-top: 70px;
  margin-bottom: 10px;
}

.v-container {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

/* Main title */
.Main-text {
  text-align: center;
  color: #cfe8ff;
  text-shadow: 0 0 6px #4da3ff, 0 0 12px #4da3ff, 0 0 18px #4da3ff;
  font-weight: 600;
}

/* Body text */
.Mtex {
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  color: #e6e6e6;
  text-shadow: 0 1px 1px black, 0 0 6px rgba(255, 255, 255, 0.4);
}

/* Bubble text */
.Bubletex {
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  color: #e6e6e6;
  text-shadow: 0 1px 1px black, 0 0 6px rgba(255, 255, 255, 0.4);
}

.buble-text {
  text-align: center;
  color: #cfe8ff;
  text-shadow: 0 0 6px #4da3ff, 0 0 12px #4da3ff;
  font-weight: 400;
}

/* Locker door */
.locker-door {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(0, 0, 0, 0.35)),
    repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05) 0px,
      rgba(255, 255, 255, 0.05) 2px,
      rgba(0, 0, 0, 0.2) 4px
    );
  background-color: #2a2a2a;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.55);
  position: relative;
  overflow: hidden;
}

/* Handle */
.handle {
  position: absolute;
  right: 1px;
  top: 55%;
  transform: translateY(-50%);
  width: 30px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 4;
}

.handle-bar {
  width: 8px;
  height: 50px;
  background: linear-gradient(180deg, #8a8a8a, #8a8a8a);
  border-radius: 6px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

/* Video offset */
.video-offset {
  margin-top: 30px;
}

/* Footer */
.simple-footer {
  background: #1e1e1e;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-text {
  color: #cfcfcf;
  font-size: 14px;
  letter-spacing: 0.5px;
}
</style>
