<template>
<div id='component'>
  <router-link to='/book' class="button">Открыть учебник</router-link>
  <router-link to='/test' class="button">Пройти тест</router-link>
</div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.button {
  display: inline-block;
  min-width: 300px;
  margin: 20px 10px;
  padding: 25px 10px;
  text-decoration: none;
  font-weight: lighter;
  color: rgb(50, 50, 50);
  background: #5ff7c9;
  border: solid 1px #5ff7c9;
  border-radius: 5px;
}

.button:hover{
  border: solid 1px #bebebe;
}
</style>
