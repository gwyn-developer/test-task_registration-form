export default {
  name: 'input-string',

  props: {
    placeholder: {
      type: String
    },
    title: {
      type: String
    },
    id: {
      type: String
    },
    type: {
      type: String
    },
    isPassword: {
      type: Boolean,
      default: false
    },
    isTrySend: {
      type: Boolean,
      default: false
    },
    isMatchPassword: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      inputValue: '',
      isFillValue: false,
      passwordHidden: false
    }
  },

  computed: {
    errorText () {
      if (this.id === 'name') {
        return 'Заполните имя'
      } else if (this.id === 'mail') {
        return 'Заполните email'
      } else if (this.id === 'password') {
        return 'Заполните пароль'
      } else if (this.id === 'password-repeat') {
        if (!this.isMatchPassword) {
          return 'Пароли должны совпадать'
        } else {
          return 'Повторите пароль'
        }
      }
    }
  },

  methods: {
    pressEnter (event) {
      event.target.blur()
    },

    pressEsc (event) {
      event.target.blur()
    },

    togglePasswordHidden () {
      this.passwordHidden = !this.passwordHidden
    },

    update () {
      if (this.id === 'name') {
        this.$emit('updateName', this.inputValue)
      } else if (this.id === 'mail') {
        this.$emit('updateMail', this.inputValue)
      } else if (this.id === 'password') {
        this.$emit('updatePassword', this.inputValue)
      } else if (this.id === 'password-repeat') {
        this.$emit('updatePasswordRepeat', this.inputValue)
      }

      if (this.inputValue !== '') {
        this.isFillValue = true
      }
    }
  }
}
