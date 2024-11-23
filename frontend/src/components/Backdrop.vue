<script setup>

</script>

<template>
  <div class="backdrop" @click="$emit('close-popup')"></div>
</template>

<style scoped lang="scss">
.backdrop{
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(100, 100, 100, 0.3);
}
</style>