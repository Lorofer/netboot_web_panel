<script setup>
import Header from "@/components/Header.vue"
import Machines from "@/components/Machines.vue";
import BookPopup from "@/components/ReservationPopup.vue";
import {useTemplateRef} from "vue";

const popup = useTemplateRef('reservation-popup');
function openReservationPopup(id){
  popup.value.open(id);
}
</script>

<template>
  <Header/>
  <main>
    <BookPopup ref="reservation-popup"/>
    <Machines @open-reservation-popup="openReservationPopup"/>
  </main>
</template>

<style scoped lang="scss">
main{
  display: grid;
  place-items: center;
  height: calc(100vh - 80px);
}
</style>