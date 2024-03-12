import axios from 'axios'

import MainView from '../views/main-view/MainView.vue'
import ModalView from '../views/modal-view/ModalView.vue'

export default {
  name: 'App',

  components: {
    MainView,
    ModalView
  },

  data () {
    return {
      showModal: false,

      positionList: [
        { value: 1, name: 'Директор' },
        { value: 2, name: 'Зам.директора' },
        { value: 3, name: 'Юрист' },
        { value: 4, name: 'Экономист' },
        { value: 5, name: 'Бухгалтер' },
        { value: 6, name: 'Программист' },
        { value: 7, name: 'Инженер' }
      ],

      name: '',
      mail: '',
      password: '',
      position: '',
      passwordRepeat: '',

      persInfo: true,

      switchInfo: true,

      isTrySend: false,

      isMatchPassword: false
    }
  },

  methods: {
    updateName (name) {
      this.name = name
    },

    updateMail (mail) {
      this.mail = mail
    },

    updatePassword (password) {
      this.password = password

      this.checkIsMatchPassword()
    },

    updatePosition (position) {
      this.position = position
    },

    updatePasswordRepeat (passwordRepeat) {
      this.passwordRepeat = passwordRepeat

      this.checkIsMatchPassword()
    },

    changePersInfo (value) {
      this.persInfo = value
    },

    changeSwitchInfo (value) {
      this.switchInfo = value
    },

    closeModalView () {
      this.showModal = false
    },

    checkIsMatchPassword () {
      if (this.password !== '' && this.password !== this.passwordRepeat) {
        this.isMatchPassword = false
      } else if (this.password !== '' && this.password === this.passwordRepeat) {
        this.isMatchPassword = true
      } else if (this.password === '' && this.passwordRepeat === '') {
        this.isMatchPassword = true
      }
    },

    async clickBtn () {
      this.isTrySend = true

      this.checkIsMatchPassword()

      if (this.password !== '' && this.passwordRepeat !== '' && this.name !== '' && this.mail !== '' && this.position !== '' && this.persInfo && this.isMatchPassword) {
        console.log('Данные заполнены верно.')

        let positionNumber
        this.positionList.forEach(item => {
          if (item.name === this.position) {
            positionNumber = item.value
          }
        })

        axios.post('https://jsonplaceholder.typicode.com/posts', {
          public: this.switchInfo,
          username: this.name,
          role: positionNumber,
          email: this.mail,
          password: this.password,
          password_repeat: this.passwordRepeat
        })
          .then(response => {
            console.log('Данные успешно отправлены:', response.data)
            this.showModal = true
          })
          .catch(error => {
            console.error('Ошибка при отправке данных:', error)
          })
      } else {
        console.log('Данные заполнены не полностью или неверно.')
      }
    }
  }
}
