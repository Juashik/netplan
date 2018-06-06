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

<style lang="sass">
  @import "./main.sass"
</style>
