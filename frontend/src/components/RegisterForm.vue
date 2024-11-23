<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();

import {useUserStore} from "@/stores/userStore.js";
const userStore = useUserStore();

const login = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');

async function register(event){
  event.preventDefault();

  if(password.value === passwordConfirm.value){
    userStore.login = login.value;
    userStore.email = email.value;
    userStore.password = password.value;

    try {
      await userStore.register();
      await router.push({path: '/'});
    }
    catch (error) {
      console.error(error);
    }
  }
}
</script>

<template>
  <div class="register-container">
    <form id="register-form" @submit="register" class="register-form">
      <input
          placeholder="Логин"
          v-model="login"
          class="register-form-input"
          type="text"
          required
      >
      <input
          placeholder="Email"
          v-model="email"
          class="register-form-input"
          type="email"
          required
      >
      <input
          placeholder="Пароль"
          v-model="password"
          class="register-form-input"
          type="password"
          required
      >
      <input
          placeholder="Подтверждение пароля"
          v-model="passwordConfirm"
          class="register-form-input"
          type="password"
          required
      >
      <p>Уже зарегистрированы?</p>
      <input
          value="Регистрация"
          type="submit"
          form="register-form"
          class="register-button"
      >
    </form>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/base";

.register-container{
  width: 400px;
  padding: 40px;
  background-color: $bg-beige;
  border-radius: 20px;
  text-align: center;

  *:not(:first-child) {
    margin-top: 32px;
  }
}

.register-form-input{
  @include input;
}

.register-button{
  @include menu-button;
  background-color: $bg-blue;
  color: $text-blue;
}
</style>