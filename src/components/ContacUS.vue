<template>
  <v-container class="contact-wrapper" fluid>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="locker-card" elevation="12">
          <!-- Top bar like locker plate -->
          <div class="locker-header d-flex align-center justify-space-between">
            <span class="locker-title">Contact Logicore Smart Lockers</span>
            <v-icon color="#00E5FF">mdi-locker</v-icon>
          </div>

          <!-- Vent slots -->
          <div class="locker-vents">
            <span v-for="n in 5" :key="n" class="vent-slot"></span>
          </div>

          <v-card-text>
            <p class="subtitle">
              Tell us about your company, school, or building and we will help you design the perfect smart locker solution.
            </p>

            <v-form v-model="valid" @submit.prevent="submitForm">
              <v-row dense>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.name"
                    label="Full name"
                    variant="outlined"
                    density="comfortable"
                    color="cyan-accent-3"
                    :rules="[rules.required]"
                    prepend-inner-icon="mdi-account"
                  />
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    variant="outlined"
                    density="comfortable"
                    color="cyan-accent-3"
                    :rules="[rules.required, rules.email]"
                    prepend-inner-icon="mdi-email"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="form.company"
                    label="Company / School / Building"
                    variant="outlined"
                    density="comfortable"
                    color="cyan-accent-3"
                    prepend-inner-icon="mdi-domain"
                  />
                </v-col>

                <v-col cols="12">
                  <v-select
                    v-model="form.useCase"
                    :items="useCases"
                    label="What do you want lockers for?"
                    variant="outlined"
                    density="comfortable"
                    color="cyan-accent-3"
                    prepend-inner-icon="mdi-clipboard-list"
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="form.message"
                    label="Tell us about your project"
                    variant="outlined"
                    density="comfortable"
                    color="cyan-accent-3"
                    auto-grow
                    rows="3"
                    prepend-inner-icon="mdi-message-text-outline"
                  />
                </v-col>

                <v-col cols="12" class="mt-2">
                  <div class="locker-footer d-flex align-center justify-space-between">
                    <span class="footer-text">
                      No apps. No keys. Just secure, automated access.
                    </span>
                    <v-btn
                      type="submit"
                      color="cyan-accent-3"
                      class="locker-btn"
                      :disabled="!valid || loading"
                      :loading="loading"
                    >
                      <v-icon start>mdi-send</v-icon>
                      Send message
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const valid = ref(false);
const loading = ref(false);

const form = ref({
  name: "",
  email: "",
  company: "",
  useCase: "",
  message: "",
});

const useCases = [
  "Corporate offices",
  "Schools / Universities",
  "Residential buildings",
  "Gyms / Clubs",
  "Logistics / Delivery",
  "Other",
];

const rules = {
  required: (v) => !!v || "Required",
  email: (v) =>
    !v || /.+@.+\..+/.test(v) || "Enter a valid email",
};

const submitForm = async () => {
  loading.value = true;

  // Aquí puedes hacer tu POST al backend
  // await axios.post("/api/contact", form.value)

  console.log("Contact form submitted:", form.value);

  setTimeout(() => {
    loading.value = false;
    // Reset simple
    form.value = {
      name: "",
      email: "",
      company: "",
      useCase: "",
      message: "",
    };
  }, 800);
};
</script>

<style scoped>
.contact-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: radial-gradient(circle at top, #1b2735 0, #090a0f 55%, #020308 100%);
}

.locker-card {
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(145deg, #151922, #10131a);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 229, 255, 0.08);
}

.locker-header {
  padding: 14px 20px;
  background: linear-gradient(90deg, #11141c, #181d29);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.locker-title {
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: #e0e6ff;
}

.locker-vents {
  display: flex;
  gap: 6px;
  padding: 10px 18px 4px;
}

.vent-slot {
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: linear-gradient(90deg, #05070b, #151922);
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.9);
}

.subtitle {
  color: #c3c8dd;
  font-size: 0.9rem;
  margin-bottom: 18px;
}

.locker-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 10px;
  margin-top: 4px;
}

.footer-text {
  font-size: 0.78rem;
  color: #8f96b3;
}

.locker-btn {
  text-transform: none;
  font-weight: 600;
  border-radius: 999px;
  box-shadow: 0 0 18px rgba(0, 229, 255, 0.35);
}
</style>
