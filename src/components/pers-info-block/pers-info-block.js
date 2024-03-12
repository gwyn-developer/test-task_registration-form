export default {
  name: 'pers-info-block',

  props: {
    persInfo: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      isChecked: true,
      isDisabled: false
    }
  },

  mounted () {
    this.isChecked = this.persInfo
  },

  watch: {
    persInfo (newValue) {
      this.isDisabled = !newValue
    }
  },

  methods: {
    change () {
      this.$emit('changePersInfo', this.isChecked)
    }
  }
}
