<script setup>
import { store } from "@/store/store.js";
console.log(store.selectedSetupItems);
</script>

<template>
  <div class="h-100 m-auto d-flex flex-column justify-center align-center">
    <v-card variant="tonal" class="rounded-lg font-weight-bold w-50">
      <v-card-item>
        <v-card-title class="font-weight-bold">Setup</v-card-title>

        <v-card-subtitle
          class="font-weight-medium word-break: break-word text-wrap"
          >You need to use your own API keys/credentials to continue with some
          services. All the details is kept in local storage, I don't collect
          any of these data.</v-card-subtitle
        >
      </v-card-item>
      <div class="overflow-container">
        <v-form ref="form">
          <v-text-field
            class="mx-2"
            v-model="username"
            :counter="12"
            label="Username"
            required
          ></v-text-field>
          <v-text-field
            class="mx-2"
            v-model="city"
            label="City"
            required
          ></v-text-field>
          <v-text-field
            class="mx-2"
            v-model="gmailauth"
            label="OAuth 2.0 Client ID"
            v-if="store.selectedSetupItems.includes('Email')"
            required
          ></v-text-field>
          <v-text-field
            class="mx-2"
            v-model="chatgptkey"
            label="ChatGPT API Key"
            v-if="store.selectedSetupItems.includes('ChatGPT')"
            required
          ></v-text-field>
          <v-text-field
            class="mx-2"
            v-model="goveekey"
            label="Govee API Key"
            v-if="store.selectedSetupItems.includes('Govee Light Control')"
            required
          ></v-text-field>
          <div class="d-flex justify-end mb-4">
            <v-btn
              color="variant"
              rounded="lg"
              variant="elevated"
              v-bind:disabled="false"
              to="/setup"
              >Go Back</v-btn
            >
            <v-btn
              color="primary"
              class="mx-4"
              rounded="lg"
              variant="elevated"
              v-bind:disabled="false"
              to="/dashboard"
              >Continue</v-btn
            >
          </div>
        </v-form>
      </div>
    </v-card>
  </div>
</template>
