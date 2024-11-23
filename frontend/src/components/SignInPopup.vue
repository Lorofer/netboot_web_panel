<script setup>
import {ref} from "vue";
import { useRouter } from 'vue-router'
const router = useRouter();

import Backdrop from "@/components/Backdrop.vue";

import {useUserStore} from "@/stores/userStore";
const userStore = useUserStore();

const startClosing = ref(false);
const isOpen = ref(false);
const successful = ref(true);

function open() {
  isOpen.value = true;
}
defineExpose({open});

async function close() {
  startClosing.value = true;
  await new Promise((resolve) => setTimeout(resolve, 350));
  startClosing.value = isOpen.value = false;
  successful.value = true;
}

const login = ref('');
const password = ref('');

async function signIn(event){
  event.preventDefault();

  userStore.login = login.value;
  userStore.password = password.value;

  try{
    await userStore.signIn();
    await close();
    await router.push({path: '/'});
  }
  catch(error){
    console.error(error);
  }
}
</script>

<template>
  <Backdrop v-if="isOpen" @close-popup="close"/>
  <div class="popup-container" v-if="isOpen">
    <div :class="[{'closing': startClosing}, 'popup']">
      <form @submit="signIn">
        <input
            placeholder="Логин"
            v-model.trim="login"
            @input="successful = true"
            :class="[{'error': !successful}, 'sign-in-input']"
        >
        <input
            placeholder="Пароль"
            v-model.trim="password"
            type="password"
            @input="successful = true"
            :class="[{'error': !successful}, 'sign-in-input']"
        >
        <span v-if="successful" class="separator"></span>
        <p v-else class="text-separator">Неправильный email или пароль</p>
        <div class="links">
          <input
              value="Войти"
              type="submit"
              class="sign-in-button"
          >
          <div class="text-container">
            <p>Если у вас нет аккаунта</p>
            <a @click="close">Создать аккаунт</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/base";

@keyframes open {
  from {
    transform: translate(0, -30%) rotateX(45deg);
    opacity: 0;
  }
  to {
    transform: translate(0, 0) rotateX(0);
  }
}

@keyframes close {
  from {
    transform: translate(0, 0) rotateX(0);
    opacity: 1;
  }
  to {
    transform: translate(0, -30%) rotateX(45deg);
  }
}

.popup-container {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  perspective: 800px;
}

.popup {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $bg-beige;
  border-radius: 24px;
  padding: 40px;
  text-align: center;

  animation: open 0.35s ease-in-out;

  *:not(:first-child) {
    margin-top: 40px;
  }
}

.closing {
  animation: close 0.35s ease-in-out;
  opacity: 0;
}

.sign-in-input {
  @include input;
}

.error {
  border-color: rgba(255, 0, 0, 0.4);
  background-color: rgba(255, 0, 0, 0.03);
}

.separator {
  @include separator;
  background-color: $separator-grey;
}

.text-separator{
  display: block;
  position: relative;
  height: 2px;
  line-height: 2px;
  color: $text-grey;
}

.links {
  background-color: #fff;
  border-radius: 16px;

  .sign-in-button {
    @include menu-button;
    background-color: $bg-blue;
    color: $text-blue;
  }

  .text-container {
    padding: 9px 0;
    margin-top: 0;
    text-align: center;

    a {
      color: $text-blue;
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>