<template>
<div id='component'>
  <div class="step">
    <h3>Шаг {{ steps[0].id }} из 15</h3>
    <img src="../assets/7.png" alt="">
    <p>{{ steps[0].text }}</p>
  </div>
  <div v-if='false' id="loading">
    <img id="loading_img" src="../assets/loading.gif" alt=""/>
  </div>
</div>
</template>

<script>
export default {
  name: 'Book',
  data () {
    return {
      steps: [
        { id: '7', text: 'Критические работы – b3, b10, b11. Резервы времени этих работ равны нулю. Выделим критический путь двойными стрелками' },
        { id: '2', text: 'Lorem ipsum 2' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
