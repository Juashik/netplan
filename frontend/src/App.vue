<template>
  <div id="app">

    <header>
      <div id="header-wrapper">
        <router-link to='/'>
          <img src="./assets/logo.png">
        </router-link>
      </div>
    </header>

    <router-view/>

    <footer>
      <router-link to='/admin'>Админ-панель</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

footer {
  width: 100%;
  padding: 15px;
  background: #d4d4d4;
}

footer a{
  color: #555555;
}

a, a:visited {
  color: #42b983;
  text-decoration: none;
}
</style>
