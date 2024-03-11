<script setup>
import { ref } from "vue";
import setupItems from "../../../constants/setupitems";
import { store } from "@/store/store.js";

const setupDashboardItems = ref(setupItems);
</script>

<template>
  <v-checkbox-btn
    v-for="item in setupDashboardItems"
    :label="item.value"
    hide-details
    color="primary"
    :key="item.id"
    :value="item.value"
    v-model="store.selectedSetupItems"
  ></v-checkbox-btn>
</template>
