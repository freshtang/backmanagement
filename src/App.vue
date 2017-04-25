<template>
  <div id="app">
    <header>
      <h1>后台管理</h1>
    </header>
    <div id="main">
      <div id="leftbar">
        <button @click="toAddArticle" >1</button>
        <button @click="toArticleList" >2</button>
        <button @click="toClassifiedList" >3</button>
      </div>
      <div id="maincontent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toAddArticle () {
      this.$router.push('/addarticle')
    },
    toArticleList () {
      this.$router.push('/articlelist')
    },
    toClassifiedList () {
      this.$router.push('/classifiedlist')
    }
  }
}
</script>

<style lang="scss">
$primary-color: green;
$secprimart-color: grey;
$hoverfontcolor:#4fb2d8;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height:100%;
  width: 100%;
  color: #2c3e50;
  background-color: $primary-color;
  header{
    height: 100px;
    background-color: $secprimart-color;
    h1{
      line-height: 100px;
      text-align: left;
      margin-left: 80px;
    }
  }
  #main{
    display: flex;
    height: 100%;
    #maincontent{
      width: 100%;
      background-color: white;
      height: 100%;
      flex: 1;
    }
    #leftbar{
      flex:none;
      width: 200px;
      height: 100%;
      button{
        display: block;
        padding: 10px;
        width: 100%;
        background-color: $secprimart-color;
        color: white;
      }
      button:hover{
        color: $hoverfontcolor;
      }
    }
  }
}
</style>
