<template>
  <div id="app">
    <div id="main">
      <transition name="leftbar">
        <div id="leftbar" v-show="isShowLeft">
          <img src="./assets/logo.jpg"></img>
          <ul>
            <li @click="toAddArticle" v-bind:class="{active : index==1}"><i class="articleicon "></i>添加文章</li>
            <li @click="toArticleList" v-bind:class="{active : index==2}"><i class="managementicon"></i>文章管理</li>
            <li @click="toClassifiedList" v-bind:class="{active : index==3}"><i class="tagicon"></i>标签管理</li>
          </ul>

        </div>
      </transition>

      <div id="maincontent">
        <div id="toggleleft">
          <i class="lgicon toggleicon" @click="toggleleftbar"></i>
        </div>
      <transition name="show" mode="out-in">
        <router-view id="router"></router-view>
      </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isShowLeft: true,
      index: 0
    }
  },
  methods: {
    toggleleftbar () {
      this.isShowLeft = !this.isShowLeft
    },
    toAddArticle (event) {
      this.$router.push('/addarticle')
      this.index = 1
    },
    toArticleList () {
      this.$router.push('/articlelist')
      this.index = 2
    },
    toClassifiedList () {
      this.$router.push('/classifiedlist')
      this.index = 3
    }
  }
}
</script>

<style lang="scss">
@import "./common/style/base.scss";

$primary-color: #5c7990;
$secprimart-color: #3e4e60;
$hoverfontcolor:#4fb2d8;

.leftbar-enter-active,.leftbar-leave-active  {
  transition: all .4s ease;
}
.leftbar-enter, .leftbar-leave-active {
  transform:translateX(-150px);
  opacity: 0;
}

.show-enter-active,.show-leave-active  {
  transition: all .3s ease;
}
.show-enter, .show-leave-active {
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height:100%;
  width: 100%;
  color: #2c3e50;

  #main{
    display: flex;
    height: 100%;
    #maincontent{
      width: 100%;
      background-color: white;
      height: 100%;
      flex: 1;
      text-align: left;
      #toggleleft{
        margin: 10px;
        .toggleicon{
          background: url('./assets/toggle.svg') no-repeat;
        }

      }
      #router{
        height: 90%;
        width: 100%;
      }

    }
    #leftbar{
      background-color: $primary-color;
      flex:none;
      width: 200px;
      height: 100%;
      text-align: center;
      img{
        height: 120px;
        width: 120px;
        margin: 20px;
        border-radius: 50%;
      }
      ul{
        padding: 0;
        li{
          display: block;
          font-weight: bold;
          padding: 10px 0;
          width: 100%;
          background-color: transparent;
          color: white;
          list-style-type: none;
          i{
            margin:5px 5px 0px;
          }
          .tagicon{
            background: url('./assets/tag.svg') no-repeat;

          }
          .articleicon{
            background: url('./assets/article.svg') no-repeat;
          }
          .managementicon{
            background: url('./assets/management.svg') no-repeat;
          }
        }
        li:hover{
          color: $hoverfontcolor;
          background-color: $secprimart-color;
        }
        li.active{
          background-color: $secprimart-color;
        }
      }

    }
  }
}
</style>
