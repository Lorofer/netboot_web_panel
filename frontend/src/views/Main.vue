<script setup>
import Header from "@/components/Header.vue"
import Machines from "@/components/Machines.vue";
import BookPopup from "@/components/BookPopup.vue";
import {useTemplateRef} from "vue";

const popup = useTemplateRef('book-popup');
function openBookPopup(){
  popup.value.open();
}
</script>

<template>
  <Header/>
  <main>
    <BookPopup ref="book-popup"/>
    <Machines @open-popup="openBookPopup"/>
  </main>
</template>

<style scoped lang="scss">
main{
  display: grid;
  place-items: center;
  height: calc(100vh - 80px);
}
</style>