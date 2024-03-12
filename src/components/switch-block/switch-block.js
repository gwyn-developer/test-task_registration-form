export default {
  name: 'switch-block',

  props: {
    switchInfo: {
      type: Boolean,
      default: true
    },

    descrBig: {
      type: String,
      default: 'Хотите чтобы Ваш профиль видели другие участники платформы?'
    },

    descrSmall: {
      type: String,
      default: 'Включает профиль для просмотра другими пользователями по ссылке'
    }
  },

  data () {
    return {
      isChecked: true
    }
  },

  mounted () {
    this.isChecked = this.switchInfo
  },

  methods: {
    change () {
      this.$emit('changeSwitchInfo', this.isChecked)
    }
  }
}
