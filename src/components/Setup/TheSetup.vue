<script setup>
import SetupItems from "./SetupItems/SetupItems.vue";
import { store } from "@/store/store.js";
</script>

<template>
  <div
    class="h-screen w-100 m-auto d-flex flex-column justify-center align-center"
  >
    <v-card variant="tonal" class="rounded-lg font-weight-bold">
      <v-card-item>
        <v-card-title class="font-weight-bold">Setup</v-card-title>

        <v-card-subtitle class="font-weight-"
          >Select the options you want to use from the list</v-card-subtitle
        >
      </v-card-item>
      <div class="overflow-container">
        <SetupItems />
      </div>

      <v-card-actions class="m-auto justify-end">
        <v-btn
          color="primary"
          rounded="lg"
          variant="elevated"
          v-bind:disabled="store.selectedSetupItems.length === 0"
          >Continue</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.overflow-container {
  max-height: 250px;
  overflow-y: auto;
}

/* Hide the scrollbar */
.overflow-container::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
