import ButtonRegular from '../../components/button-regular/ButtonRegular.vue'

export default {
  name: 'modal-view',

  components: {
    ButtonRegular
  },

  props: {
    title: {
      type: String,
      default: 'Регистрация успешно завершена!'
    },
    textBtn: {
      type: String,
      default: 'Закрыть'
    }
  },

  methods: {
    cancel () {
      this.$emit('closeModal')
    }
  }
}
