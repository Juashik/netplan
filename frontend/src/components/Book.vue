<template>
<div id='component' @click="next()">
  <div v-if='steps[0]' class="step">
    <h3>Шаг {{ id }} из {{ size }}</h3>
    <img style='max-width: 90%' :src="imgUrl" alt="">
    <p>{{ text }}</p>
  </div>
  <div v-if='steps[0] == null' id="loading">
    <img id="loading_img" src="../assets/loading.gif" alt=""/>
  </div>
</div>
</template>

<script>
export default {
  name: 'Book',
  data () {
    return {
      steps: [],
      steps_array: [
        { id: '1', text: 'Lorem ipsum 1' },
        { id: '2', text: 'Lorem ipsum 2' },
        { id: '3', text: 'Lorem ipsum 3' },
        { id: '4', text: 'Lorem ipsum 4' },
        { id: '4', text: 'Lorem ipsum 4' },
        { id: '4', text: 'Lorem ipsum 4' },
        {
          id: '7',
          text:
            'Критические работы – b3, b10, b11. Резервы времени этих работ равны нулю. Выделим критический путь двойными стрелками'
        },
        { id: '8', text: 'Lorem ipsum 8' },
        { id: '9', text: 'Lorem ipsum 9' },
        { id: '10', text: 'Lorem ipsum 10' },
        { id: '11', text: 'Lorem ipsum 11' },
        { id: '12', text: 'Lorem ipsum 12' },
        { id: '13', text: 'Lorem ipsum 13' },
        { id: '14', text: 'Lorem ipsum 14' },
        { id: '15', text: 'Lorem ipsum 15' }
      ]
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    imgUrl () {
      return this.steps[this.$route.params.id - 1].data
    },
    text () {
      return this.steps[this.$route.params.id - 1].text
    },
    size () {
      var result = 0
      for (var prop in this.steps) {
        if (this.steps.hasOwnProperty(prop)) {
        // or Object.prototype.hasOwnProperty.call(obj, prop)
          result++
        }
      }
      return result
    }
  },
  methods: {
    next () {
      let url = this.$route.params.id + 1
      this.$router.replace('/book/' + url)
    },
    getFullBook: function () {
      this.$http.get('http://localhost:3000/book').then(function (response) {
        this.steps = response.data
      }, function (error) {
        return Promise.reject(error)
      })
    }
  },
  watch: {
    '$route' (to, from) {
      if (/^\d+$/.test(to.params.id)) {
        if (to.params.id > this.size) {
          this.$router.replace('/')
        }
        if (to.params.id < 1) {
          this.$router.replace('/book/1')
        }
      } else {
        this.router.replace('/book/1')
      }
    }
  },
  created: function () {
    this.getFullBook()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
