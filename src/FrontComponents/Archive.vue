<template>
  <div id="Archive">
    <div class="listcontent">
      <ul>
        <li v-for="item in articlelist">
          <div id="everli" class="clearfix">
            <router-link :to="{path:`/article/${item._id}`}" class="home_title">
              <a id="articletitle" v-html="item.title"></a>
            </router-link>
            <a id="archivetime" class="home_creatAt">{{item.createdAt.slice(0, 10)}}</a>
            <a id="tag" class="littletag"><i class="tag"></i>{{item.tag}}</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Archive',
    computed: {
      articlelist: function () {
        return this.$store.state.articleList
      }
    }
  }
</script>

<style lang="scss" scoped>

  .listcontent{
    background-color: #f1f2f7;
    width: 90%;
    height: 90%;
    border-radius: 10px;
    margin: auto;
    overflow: auto;
    ul{
      list-style-type: none;
      padding: 50px;
      #everli{
        padding: 10px;
        margin: 10px 30px;
        #tag{
          margin: 0 20px;
          float: right;
          .tag{
            background: url('../assets/blacktag.svg') no-repeat;
          }
        }
        #archivetime{
          float: right;
        }
        #articletitle:hover{
          color: #4fb2d8;
          font-weight: bold;
          transition-duration: 0.8s;
        }
        a:link{
          color: black;
          font-size: 25px;
          text-decoration: none;
        }
      }
    }

  }
</style>
