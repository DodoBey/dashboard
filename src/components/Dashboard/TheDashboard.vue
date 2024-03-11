<script setup>
import TheDate from "../Date/TheDate.vue";
import TheWeather from "../Weather/TheWeather.vue";
import TheBookmarks from "../Bookmarks/TheBookmarks.vue";
import GoogleSearch from "../GoogleSearch/GoogleSearch.vue";
import TheEmail from "../Email/TheEmail.vue";
import TheCalendar from "../Calendar/TheCalendar.vue";
import ToDoList from "../ToDo/ToDoList.vue";
import ChatGpt from "../ChatGpt/ChatGpt.vue";
import LightControl from "../LightControl/LightControl.vue";
import FlightTracker from "../FlightTracker/FlightTracker.vue";
</script>

<template>
  <div class="h-100 d-flex justify-space-around align-center">
    <div class="h-100 w-100 d-flex flex-column justify-space-around ma-4">
      <TheDate />
      <TheWeather />
      <TheBookmarks />
      <GoogleSearch />
    </div>
    <div class="h-100 w-100 d-flex flex-column justify-space-around ma-4">
      <TheEmail />
      <TheCalendar />
      <ToDoList />
    </div>
    <div class="h-100 w-100 d-flex flex-column justify-space-around ma-4">
      <ChatGpt />
      <LightControl />
      <FlightTracker />
    </div>
  </div>
</template>
