<template>
  <div id="app">
    <main-view
      v-show="!showModal"
      titleForm="Регистрация"
      titleFormBody="Заполните Ваши данные"
      btnText="Зарегистрироваться"
      btnTitle="Для регистрации необходимо дать согласие на обработку персональных данных"
      :positionList="positionList"
      :persInfo="persInfo"
      :switchInfo="switchInfo"
      :isTrySend="isTrySend"
      :isMatchPassword="isMatchPassword"
      @update-name="updateName"
      @update-mail="updateMail"
      @update-password="updatePassword"
      @update-position="updatePosition"
      @update-passwordRepeat="updatePasswordRepeat"
      @change-pers-info="changePersInfo"
      @change-switch-info="changeSwitchInfo"
      @clickBtn="clickBtn"
    />

    <modal-view
      v-show="showModal"
      textBtn="Закрыть"
      title="Регистрация успешно завершена!"
      @closeModal="closeModalView"
    />
  </div>
</template>

<script src="./app.js">
</script>

<style src="./App.css">
</style>
