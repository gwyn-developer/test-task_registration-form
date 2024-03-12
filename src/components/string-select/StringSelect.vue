<template>
  <div class="string-select-group">
    <select
      class="string-select"
      :class="{'string-select__disabled': selectedValue == '', 'string-select__error': isTrySend && selectedValue == ''}"
      :name="id"
      :id="id"
      v-model="selectedValue"
      @change="update()"
      @keydown.esc ="pressEsc"
    >
      <option
        class="string-select-option string-select-option__disabled"
        :class="{'string-select-option__error': isTrySend && selectedValue == ''}"
        disabled
        value=""
      >
        {{ isTrySend ? errorText : disabledValue }}
      </option>
      <option
        class="string-select-option"
        v-for="position in positionList"
        :key="position.value"
        :value="position.name"
      >
        {{ position.name }}
      </option>
    </select>
  </div>
</template>

<script src="./string-select.js">
</script>

<style src="./StringSelect.css">
</style>
