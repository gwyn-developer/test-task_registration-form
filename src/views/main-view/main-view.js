import ButtonRegular from '../../components/button-regular/ButtonRegular.vue'
import InputString from '../../components/input-string/InputString.vue'
import StringSelect from '../../components/string-select/StringSelect.vue'
import SwitchBlock from '../../components/switch-block/SwitchBlock.vue'
import PersInfoBlock from '../../components/pers-info-block/PersInfoBlock.vue'

export default {
  name: 'main-view',

  components: {
    ButtonRegular,
    InputString,
    StringSelect,
    SwitchBlock,
    PersInfoBlock
  },

  props: {
    titleForm: {
      type: String,
      default: 'Регистрация'
    },
    titleFormBody: {
      type: String,
      default: 'Заполните Ваши данные'
    },
    btnText: {
      type: String,
      default: 'Зарегистрироваться'
    },
    btnTitle: {
      type: String,
      default: 'Для регистрации необходимо дать согласие на обработку персональных данных'
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
    persInfo: {
      type: Boolean,
      default: true
    },
    switchInfo: {
      type: Boolean,
      default: true
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

  methods: {
    clickBtn () {
      this.$emit('clickBtn')
    },

    updateName (name) {
      this.$emit('update-name', name)
    },

    updateMail (mail) {
      this.$emit('update-mail', mail)
    },

    updatePassword (password) {
      this.$emit('update-password', password)
    },

    updatePosition (position) {
      this.$emit('update-position', position)
    },

    updatePasswordRepeat (passwordRepeat) {
      this.$emit('update-passwordRepeat', passwordRepeat)
    },

    changePersInfo (value) {
      this.$emit('change-pers-info', value)
    },

    changeSwitchInfo (value) {
      this.$emit('change-switch-info', value)
    }
  }
}
