export default {
  name: 'button-regular',

  props: {
    text: {
      type: String
    },
    title: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    click () {
      this.$emit('clickBtn')
    }
  }
}
