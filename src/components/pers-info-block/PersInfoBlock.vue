<template>
  <div class="pers-info-block">
    <div class="custom-checkbox" :class="{ 'custom-checkbox_error': isDisabled}">
      <label class="custom-checkbox__label" @click.stop="">
          <input class="custom-checkbox__input" type="checkbox" v-model="isChecked" @change="change">
          <span class="custom-checkbox__checkmark"></span>
      </label>
    </div>

    <div class="pers-info-block__descr">
      <span class="pers-info-block__descr-text">Регистрируясь, Вы соглашаетесь с</span>
      <span class="pers-info-block__descr-link">
        <a href="#">
          политикой конфиденциальности
        </a>
      </span>
      <span class="pers-info-block__descr-text"> и обработкой </span>
      <span class="pers-info-block__descr-link">
        <a href="#">
          персональных данных
        </a>
      </span>
    </div>
  </div>
</template>

<script src="./pers-info-block.js">
</script>

<style src="./PersInfoBlock.css">
</style>
