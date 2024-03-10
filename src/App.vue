<template>
  <div class="outer-container rounded-xl bg-blue-grey-lighten-2">
    <router-view></router-view>
  </div>
</template>


<style scoped>
.outer-container {
  margin: 30px;
  max-height: calc(100vh - 60px);
  max-width: calc(100vw - 60px);
  overflow: hidden;
}
</style>