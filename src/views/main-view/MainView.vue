<template>
  <div class="main-view">
    <form class="main-view-form">
      <div class="main-view-form__title">
        {{ titleForm }}
      </div>

      <div class="main-view-form__body">
        <div class="main-view-form__body-title">
          {{ titleFormBody }}
        </div>
        <div class="main-view-form__body-container">
          <div class="main-view-form__body-item">
            <input-string
              type="text"
              title="Введите имя"
              placeholder="Имя"
              id="name"
              :isTrySend="isTrySend"
              @updateName="updateName"
            />
          </div>
          <div class="main-view-form__body-item">
            <input-string
              type="email"
              title="Введите email"
              placeholder="Email"
              id="mail"
              :isTrySend="isTrySend"
              @updateMail="updateMail"
            />
          </div>
          <div class="main-view-form__body-item">
            <string-select
              title="Выберите должность"
              disabledValue="Должность"
              id="position"
              :positionList="positionList"
              :isTrySend="isTrySend"
              @updatePosition="updatePosition"
            />
          </div>
          <div class="main-view-form__body-item">
            <input-string
              type="text"
              title="Введите пароль"
              placeholder="Пароль"
              id="password"
              :isPassword="true"
              :isTrySend="isTrySend"
              @updatePassword="updatePassword"
            />
          </div>
          <div class="main-view-form__body-item">
            <input-string
              type="text"
              title="Повторно введите пароль"
              placeholder="Повторите пароль"
              id="password-repeat"
              :isPassword="true"
              :isTrySend="isTrySend"
              :isMatchPassword="isMatchPassword"
              @updatePasswordRepeat="updatePasswordRepeat"
            />
          </div>
        </div>
      </div>

      <div class="main-view-form__footer">
        <switch-block
          :switchInfo="switchInfo"
          descrBig="Хотите чтобы Ваш профиль видели другие участники платформы?"
          descrSmall="Включает профиль для просмотра другими пользователями по ссылке"
          @changeSwitchInfo="changeSwitchInfo"
        />

        <div class="main-view-form__footer-container">
          <pers-info-block
            :persInfo="persInfo"
            @changePersInfo="changePersInfo"
          />
          <button-regular
            :text="btnText"
            :disabled="!persInfo"
            :title="btnTitle"
            @clickBtn="clickBtn"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script src="./main-view.js">
</script>

<style src="./MainView.css">
</style>
