<template>
  <div id="app">

    <header>
      <div id="header-wrapper">
        <router-link to='/'>
          <h2><span>P</span>lanner</h2>
        </router-link>
      </div>
    </header>

    <div id="container">
      <div id="card">
        <router-view/>
      </div>
    </div>
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
