<template>
<div id='component'>
  <div v-if="!finished">
    <div v-if="!started">
      <a class="button start-button" href="#" v-on:click=" started = true ">
        Начать тестирование
      </a>
    </div>
    <div v-if="started">
      <h3>Вопрос {{ question.count }} из {{ size }}</h3>
      <p>{{ question.text }}</p>
      <a class="button"
          v-for="qstn in question.qstns"
          :key="qstn.id"
          v-on:click="vote( qstn.id )"
          :class=" style(qstn.id) "
          href="#">
        {{ qstn.text }}
      </a>
    </div>
  </div>
  <div v-if="finished">
    <br><br>
    <h3>Ваш результат:</h3>
    <h2>{{ score }} из {{ size }}</h2>
    <br><br>
    <router-link to="/">На главную</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      tests: [
        {
          count: '1',
          text: '1 Что такое критический путь в контексте задачи сетевого планирования?',
          qstns: [
            { id: 1, text: '1 Наименьшее расстояние между начальным и конечным событием' },
            { id: 2, text: '1 Обязательный комплекс работ' },
            { id: 3, text: '1 Путь, на котором резерв времени работ равен нулю' }
          ],
          correct: 3
        },
        {
          count: '2',
          text: '2 Что такое критический путь в контексте задачи сетевого планирования?',
          qstns: [
            { id: 1, text: '2 Наименьшее расстояние между начальным и конечным событием' },
            { id: 2, text: '2 Обязательный комплекс работ' },
            { id: 3, text: '2 Путь, на котором резерв времени работ равен нулю' }
          ],
          correct: 3
        },
        {
          count: '3',
          text: '3 Что такое критический путь в контексте задачи сетевого планирования?',
          qstns: [
            { id: 1, text: '3 Наименьшее расстояние между начальным и конечным событием' },
            { id: 2, text: '3 Обязательный комплекс работ' },
            { id: 3, text: '3 Путь, на котором резерв времени работ равен нулю' }
          ],
          correct: 3
        },
        {
          count: '4',
          text: '4 Что такое критический путь в контексте задачи сетевого планирования?',
          qstns: [
            { id: 1, text: '4 Наименьшее расстояние между начальным и конечным событием' },
            { id: 2, text: '4 Обязательный комплекс работ' },
            { id: 3, text: '4 Путь, на котором резерв времени работ равен нулю' }
          ],
          correct: 3
        },
        {
          count: '5',
          text: '5 Что такое критический путь в контексте задачи сетевого планирования?',
          qstns: [
            { id: 1, text: '5 Наименьшее расстояние между начальным и конечным событием' },
            { id: 2, text: '5 Обязательный комплекс работ' },
            { id: 3, text: '5 Путь, на котором резерв времени работ равен нулю' }
          ],
          correct: 3
        }
      ],
      correctStyle: {
        backgroundColor: '#4fc08d',
        color: 'white'
      },
      incorrectStyle: {
        backgroundColor: '#bb3000',
        color: 'white'
      },
      started: false,
      step: 0,
      finished: false,
      score: 0,
      clicked: false
    }
  },
  computed: {
    question () {
      return this.tests[this.step]
    },
    size () {
      var result = 0
      for (var prop in this.tests) {
        if (this.tests.hasOwnProperty(prop)) {
        // or Object.prototype.hasOwnProperty.call(obj, prop)
          result++
        }
      }
      return result
    }
  },
  methods: {
    style (n) {
      if (this.clicked) {
        console.log('clicked == true')
        if (this.question.correct === n) {
          console.log('correct == true')
          return 'correct'
        } else {
          console.log('correct == false')
          return 'incorrect'
        }
      } else {
        console.log('clicked == false')
        return ''
      }
    },
    vote (number) {
      if (!this.clicked) {
        if (number === this.question.correct) {
          this.score++
        }
        this.clicked = true
      } else {
        this.next()
      }
    },
    next () {
      if (this.step < 4) {
        this.step++
      } else {
        this.finished = true
      }
      this.clicked = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
#component
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between

a
  color: #4fc08d

.button
  display: block
  color: #4fc08d
  font-size: 0.8em
  margin: 5px 10px
  padding: 25px 10px
  text-decoration: none
  font-weight: bold
  background-color: white
  border-radius: 50px
  border: solid 1px #4fc08d

.start-button
  background-color: #4fc08d
  color: white
  font-size: 1em
  margin-top: 20vh

.correct
  color: #ffffff
  background-color: #4fc08d

.incorrect
  color: #ffffff
  background-color: #B21800
  border: solid 1px #B21800

</style>
