<script setup>
import Header from "@/components/Header.vue";
import RegisterForm from "@/components/RegisterForm.vue";
</script>

<template>
  <Header/>
  <main>
    <RegisterForm/>
  </main>
</template>

<style scoped lang="scss">
main{
  display: grid;
  place-items: center;
  height: calc(100vh - 80px);
}
</style>