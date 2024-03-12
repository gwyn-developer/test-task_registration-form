export default {
  name: 'string-select',

  props: {
    disabledValue: {
      type: String
    },
    title: {
      type: String
    },
    id: {
      type: String
    },
    positionList: {
      type: Array,
      default: [
        { value: 1, name: 'Директор' },
        { value: 2, name: 'Зам.директора' },
        { value: 3, name: 'Юрист' },
        { value: 4, name: 'Экономист' },
        { value: 5, name: 'Бухгалтер' },
        { value: 6, name: 'Программист' },
        { value: 7, name: 'Инженер' }
      ]
    },
    isTrySend: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      selectedValue: '',
      errorText: 'Выберите должность'
    }
  },

  methods: {
    pressEsc (event) {
      event.target.blur()
    },

    togglePasswordHidden () {
      this.passwordHidden = !this.passwordHidden
    },

    update () {
      this.$emit('updatePosition', this.selectedValue)
    }
  }
}
