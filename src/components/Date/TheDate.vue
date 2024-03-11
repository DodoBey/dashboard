<script setup>
import { onMounted, ref } from "vue";
let today = ref(new Date().toLocaleString());

const updateTime = () => {
  today.value = new Date().toLocaleString();
  requestAnimationFrame(updateTime);
};

onMounted(() => {
  updateTime();
});
</script>

<template>
  <v-card variant="tonal" class="w-100 rounded-lg">
    <v-card-item>
      <v-card-title class="font-weight-bold text-left"
        >Welcome Dodobey!</v-card-title
      >
      <v-card-subtitle class="font-weight-medium">
        <div class="d-flex justify-space-between">
          <span>Victoria, BC</span>
          <span>18C</span>
        </div>
      </v-card-subtitle>
    </v-card-item>
    <v-card-item>
      <span class="font-weight-medium">{{ today }}</span>
    </v-card-item>
    <div></div>
  </v-card>
</template>
