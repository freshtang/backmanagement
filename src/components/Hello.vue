<template>
  <div class="hello">
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count: function () {
      return this.$store.getters.Getarticlecount
    }
  }
}
</script>

<style scoped>

</style>
