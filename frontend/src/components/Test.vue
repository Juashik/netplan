<template>
<div id='component'>
  <h3>Вопрос {{ test.count }} из 5</h3>
  <p>{{ test.text }}</p>
  <a class="button" v-for="qstn in test.qstns" v-bind:key="qstn.id" href="#">
    {{ qstn.text }}
  </a>
</div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      test: {
        count: '2',
        text: 'Что такое критический путь в контексте задачи сетевого планирования?',
        qstns: [
          { id: 1, text: 'Наименьшее расстояние между начальным и конечным событием' },
          { id: 2, text: 'Обязательный комплекс работ' },
          { id: 3, text: 'Путь, на котором резерв времени работ равен нулю' }
        ]
      }
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
.button
  color: #4fc08d
  font-size: 0.8em
  margin: 5px 10px
  padding: 25px 10px
  text-decoration: none
  font-weight: bold
  background-color: white
  border-radius: 50px
  border: solid 1px #4fc08d

.correct
  color: #ffffff
  background-color: #4fc08d

.incorrect
  color: #ffffff
  background-color: #B21800
  border: solid 1px #B21800

</style>
