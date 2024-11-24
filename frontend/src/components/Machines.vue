<script setup>
import {useMachinesStore} from "@/stores/machinesStore.js";
import {computed, onMounted} from "vue";
const machinesStore = useMachinesStore();

onMounted(() => {
  machinesStore.getMachines();
  machinesStore.getReservedMachines();
});

const resMachines = computed(() => machinesStore.reservedMachinesId);
</script>

<template>
<div class="machines-container">
  <div class="machines-header">
    <p>Доступные серверы</p>
  </div>
  <ul class="machines-list">
    <li class="machines-list-item" v-for="machine in machinesStore.machines">
      <p class="machines-list-nickname">№{{ machine['code'] }}</p>
      <button
          v-if="resMachines.includes(machine['id'])"
          class="machines-list-btn reserved"
          :id="machine['id']"
          @click="$emit('open-edit-popup', machine['id'])"
      >
        Бронь на {{ machinesStore.reservedMachines.find(obj => obj.id === machine['id'])["beginning"] }}
      </button>

      <button
          v-else-if="machine['status']"
          class="machines-list-btn available"
          :id="machine['id']"
          @click="$emit('open-reservation-popup', machine['id'])"
      >
        Забронировать
      </button>

      <button
          v-else
          class="machines-list-btn occupied"
          :id="machine['id']"
      >
        Занят
      </button>
    </li>
  </ul>
</div>
</template>

<style scoped lang="scss">
@import "@/assets/base";

.machines-container{
  width: 400px;
  height: 460px;
  padding: 32px 22px;
  border-radius: 20px;
  background-color: $bg-beige;
}

.machines-header {
  display: flex;
  justify-content: center;

  p {
    font-size: 24px;
  }
}

::-webkit-scrollbar{
  background: rgba(0, 0, 0, 0);
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: $light-grey;
  border-radius: 2px;
}
.machines-list {
  padding: 0 26px;
  margin: 32px 0 0;
  max-height: calc(100% - 64px);
  overflow-y: scroll;

  .machines-list-item {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .machines-list-btn{
      width: 128px;
      height: 24px;
      border-radius: 4px;
      font-size: 15px;
    }
    .machines-list-btn.available{
      background-color: $bg-blue;
      color: $text-blue;
      cursor: pointer;
    }
    .machines-list-btn.occupied{
      background-color: $bg-grey;
      color: $text-grey;
    }
    .machines-list-btn.reserved{
      background-color: #aee3a6;
      color: #183712;
      cursor: pointer;
    }
  }
  .machines-list-item:not(:first-child) {
    margin-top: 24px;
  }
}
</style>