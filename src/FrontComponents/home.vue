<template>
  <div id="home">
    <div id="main">
      <transition name="leftbar">
        <div id="leftbar" v-show="isShowLeft">
          <dib id="lefttop">
          </dib>
          <img src="../assets/logo.jpg"></img>
          <div id="imformation">
            <h2>Jean · 汤俊健</h2>
            <h4>自强不息，厚德载物</h4>
            <ul>
                <li @click="toHome" ><i class="home"></i>首页</li>
              <li @click="toArchive"><i class="archive"></i>归档</li>
              <li @click="toAbout"><i class="about"></i>关于</li>
            </ul>
            <a href="https://github.com/freshtang" class="content"><i class="github"></i></a>
            <a href="http://www.weibo.com/u/2208953612/" class="content"><i class="weibo"></i></a>
            <a href="mailto:me@11514376@qq.com" class="content"><i class="email"></i></a>
          </div>
        </div>
      </transition>

      <div id="maincontent">
        <div id="toggleleft">
          <i class="lgicon toggleicon" @click="toggleleftbar"></i>
        </div>

          <div id="router">
            <transition name="showarticle" mode="out-in">
             <router-view ></router-view>
            </transition>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
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
      toHome () {
        this.$router.push('/')
      },
      toArchive () {
        this.$router.push('/archive')
      },
      toAbout () {
        this.$router.push('/about')
      }
    }
  }
</script>

<style lang="scss">
  @import "../common/style/base.scss";

  $primary-color: #5c7990;
  $secprimart-color: #3e4e60;
  $hoverfontcolor:#4fb2d8;
  $hoverhomefontcolor:#b0a0aa;
  $fontcolor: #696969;
  $fronthomecolor: #4d4d4d;

  .leftbar-enter-active,.leftbar-leave-active  {
    transition: all .4s ease;
  }
  .leftbar-enter, .leftbar-leave-active {
    transform:translateX(-150px);
    opacity: 0;
  }

  .showarticle-enter-active,.showarticle-leave-active  {
    transition: all .4s ease;
  }
  .showarticle-enter, .showarticle-leave-active {
    opacity: 0;
  }
  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height:100%;
    width: 100%;
    color: #2c3e50;
    background-color: ghostwhite;
    #main{
      display: flex;
      height: 100%;
      #maincontent{
        width: 100%;
        background-color: ghostwhite;
        height: 100%;
        flex: 1;
        text-align: left;
        #toggleleft{
          margin: 10px;
          .toggleicon{
            background: url('../assets/toggle.svg') no-repeat;
          }

        }
        #router{
          height: 90%;
          width: 100%;
          background-color: ghostwhite;
          overflow: auto;
        }

      }
      #leftbar{
        flex:none;
        width: 300px;
        height: 100%;
        text-align: center;
        position: relative;
        background-color: white;
        #lefttop{
          height: 150px;
          width: 100%;
          padding:150px 300px;
          background-color: $fronthomecolor;
        }
        img{
          height: 150px;
          width: 150px;
          margin: 50px 0 20px;
          border-radius: 50%;
          padding: 5px;
          background-color: white;
        }
        #imformation{
          padding: 0;
          height: 60%;
          background-color: white;
          text-align: center;
          color: $fontcolor;
          h2:hover{
            color: $hoverhomefontcolor;
          }
          h4:hover{
            color: $hoverhomefontcolor;
          }
          .content:hover{
            background-color: darkgray;
          }
          .content{
            background-color: #e9e9e9;
            transition-duration: 0.3s;
            display:inline-block;
            vertical-align:middle;
            padding: 10px 13px;
            border-radius: 50%;
            i{
              vertical-align:middle;
            }
            .github{
              background: url('../assets/github.svg') no-repeat;
            }
            .weibo{
              background: url('../assets/weibo.svg') no-repeat;
            }
            .email{
              background: url('../assets/email.svg') no-repeat;
            }
          }
          ul{
            padding: 0;
            li{
              padding: 10px 0;
              width: 100%;
              background-color: transparent;
              color: $fontcolor;
              list-style-type: none;
              line-height: 15px;
              display:inline-block;
              vertical-align:middle;
              i{
                margin: 5px;
                padding: 2px;
                vertical-align:middle;
              }
              .home{
                background: url('../assets/home.svg') no-repeat;
              }
              .archive{
                background: url('../assets/archive.svg') no-repeat;
              }
              .about{
                background: url('../assets/about.svg') no-repeat;
              }
            }
            li:hover{
              color: $hoverhomefontcolor;
            }
            li.active{
              background-color: $secprimart-color;
            }
          }
        }

      }
    }
  }
</style>
