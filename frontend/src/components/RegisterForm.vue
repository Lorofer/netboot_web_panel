<script setup>

</script>

<template>
  <div class="register-container">
    <form id="register-form" class="register-form">
      <input class="register-form-input" placeholder="Логин" type="text">
      <input class="register-form-input" placeholder="Email" type="text">
      <input class="register-form-input" placeholder="Пароль" type="password">
      <input class="register-form-input" placeholder="Подтверждение пароля" type="password">
    </form>
    <p>Уже зарегистрированы?</p>
    <button class="register-button" type="button" form="register-form">Регистрация</button>
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