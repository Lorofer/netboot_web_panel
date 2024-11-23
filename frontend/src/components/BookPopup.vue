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
      <form class="book-container" @submit="signIn">
        <div>
          <label for="beginning-of-the-lease">Начало аренды</label>
          <input
              id="beginning-of-the-lease"
              type="time"
              @input="successful = true"
              class="book-input"
          >
        </div>
        <div>
          <label for="end-of-the-lease">Окончание аренды</label>
          <input
              id="end-of-the-lease"
              type="time"
              @input="successful = true"
              class="book-input"
          >
        </div>
        <span v-if="successful" class="separator"></span>
        <input
            value="Арендовать"
            type="submit"
            class="sign-in-button"
        >
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

  animation: open 0.35s ease-in-out;
}

.book-container > *:not(:first-child) {
  margin-top: 40px;
}

.closing {
  animation: close 0.35s ease-in-out;
  opacity: 0;
}

label{
  font-size: 15px;
}
.book-input {
  @include input;
  padding: 0 12px;
  margin-top: 6px;
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

.sign-in-button {
  @include menu-button;
  background-color: $bg-blue;
  color: $text-blue;
}
</style>