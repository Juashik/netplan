<template>
<div id='component'>
  <h1>Добро пожаловать в обучающую программу <span>P</span>lanner!</h1>
  <br>
  <br>
  <p>Выберите, что вы хотите сделать:</p>
  <router-link to='/book/1' class="button">Открыть учебник</router-link>
  <router-link to='/test/' class="button">Пройти тест</router-link>
</div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1,
h2
  font-weight: 300
  font-size: 2em

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

.button
  display: inline-block
  min-width: 350px
  color: white
  font-size: 0.5cm
  margin: 20px 10px
  padding: 25px 10px
  text-decoration: none
  font-weight: bold
  background: #4fc08d
  border-radius: 50px
  box-shadow: 0px 1px 21px 0px rgba(50, 50, 50, 0.2)
  text-shadow: 1px 2px 3px #666

.button:hover
  box-shadow: 0px 1px 21px 0px rgba(50, 50, 50, 0.5)

span
  color: #4fc08d

</style>
