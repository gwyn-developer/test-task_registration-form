<template>
  <div
    class="modal-view"
    @click.self="cancel"
    role="dialog"
  >
    <div class="modal-view-wrapper">
      <div class="modal-view-container">
        <div class="modal-view-header">
          <div class="modal-view-header__title">
            {{ title }}
          </div>
          <div
            class="modal-view-header__close"
            @click="cancel"
          >
            ✖
          </div>
        </div>

        <div class="modal-view-footer">
          <button-regular
            :text="textBtn"
            @clickBtn="cancel"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./modal-view.js">
</script>

<style src="./ModalView.css">
</style>
