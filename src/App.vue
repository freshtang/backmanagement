<template lang="html">
  <div id="app" v-cloak>
      <router-view></router-view>
</div>
</template>


<script>
export default {
  mounted () {
    this.$store.dispatch('GetArticleList').then(() => console.log('初始化文章列表成功'))
    this.$store.dispatch('GetLabelList').then(() => console.log('初始化标签列表成功'))
  }
}
</script>

<style lang="css">

  #app{
    height: 100%;
  }
</style>
