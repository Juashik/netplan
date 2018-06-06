<template>
<div id='component'>
  <h1>This is Book</h1>
  <div class="step" v-for="instance in instances" v-bind:key="instance._id">
    <h3>Шаг {{ instance.step }}</h3>
    <p>{{ instance.text }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Book'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
