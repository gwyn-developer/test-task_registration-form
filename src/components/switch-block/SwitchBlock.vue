<template>
  <div class="switch-block">
    <div class="switch-block__container">
      <div class="switch-block__toggle">
        <input type="checkbox" id="toggle_switch" class="toggle-switch" v-model="isChecked" @change="change" />
        <label for="toggle_switch" class="toggle-switch-label"></label>
      </div>

      <div class="switch-block__big-descr">
        {{ descrBig}}
      </div>
    </div>

    <div class="switch-block__small-descr">
      {{ descrSmall }}
    </div>
  </div>
</template>

<script src="./switch-block.js">
</script>

<style src="./SwitchBlock.css">
</style>
