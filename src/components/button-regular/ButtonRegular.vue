<template>
  <div class="button-regular">
    <button
      class="button-regular__value"
      :class="{ 'button-regular__value_disabled': disabled }"
      :disabled="disabled"
      @click.prevent="click"
      :title="disabled ? title : ''"
    >
      {{ text }}
    </button>
  </div>
</template>

<script src="./button-regular.js">
</script>

<style src="./ButtonRegular.css">
</style>
