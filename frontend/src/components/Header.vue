<script setup>
import {useUserStore} from "@/stores/userStore.js";
const userStore = useUserStore();
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-container">
        <img class="logo-img" src="@/../public/logo.png" alt="">
        <h1 class="logo-title">Lotos</h1>
      </div>
      <button class="sign-out-button" @click="userStore.signOut">Выйти</button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/base";

.header{
  height: 80px;
  border-bottom: 1px solid $separator-grey;
}

.header-container{
  margin: 0 auto;
  max-width: 500px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container{
  height: 100%;
  gap: 18px;
  display: flex;
  align-items: center;

  .logo-img{
    height: 80%;
  }

  .logo-title{
    font-family: Gilroy;
    font-weight: bold;
    color: $text-violet;
    font-size: 42px;
    padding-top: 8px;
    line-height: 42px;
  }
}

.sign-out-button{
  width: 128px;
  height: 24px;
  border-radius: 4px;
  font-size: 15px;
  background-color: $bg-blue;
  color: $text-blue;
  cursor: pointer;
}
</style>