<template>
<div id='component'>
  <div class="step">
    <h3>Шаг {{ id }} из 15</h3>
    <img src="../assets/7.png" alt="">
    <p>{{ text }}</p>
  </div>
  <div v-if='false' id="loading">
    <img id="loading_img" src="../assets/loading.gif" alt=""/>
  </div>
</div>
</template>

<script>
export default {
  name: 'Book',
  data: {
    steps: [
      { id: "1", text: "Lorem ipsum 1" },
      { id: "2", text: "Lorem ipsum 2" },
      { id: "3", text: "Lorem ipsum 3" },
      { id: "4", text: "Lorem ipsum 4" },
      { id: "4", text: "Lorem ipsum 4" },
      { id: "4", text: "Lorem ipsum 4" },
      {
        id: "7",
        text:
          "Критические работы – b3, b10, b11. \
          Резервы времени этих работ равны нулю. \
          Выделим критический путь двойными стрелками"
      },
      { id: "8", text: "Lorem ipsum 8" },
      { id: "9", text: "Lorem ipsum 9" },
      { id: "10", text: "Lorem ipsum 10" },
      { id: "11", text: "Lorem ipsum 11" },
      { id: "12", text: "Lorem ipsum 12" },
      { id: "13", text: "Lorem ipsum 13" },
      { id: "14", text: "Lorem ipsum 14" },
      { id: "15", text: "Lorem ipsum 15" }
    ]
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    text () {
      return this.steps[this.$route.params.id].text
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
