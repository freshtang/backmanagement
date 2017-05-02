<template>
  <div class="ArticleList">
    <div class="listcontent">

        <article v-for='item in artlist'>
          <div class="everarticle">

            <header>
              <div id="articletitle">
                <router-link :to="{path:`/article/${item._id}`}" class="home_title">
                  {{item.title}}
                </router-link>
                <a class="littletag"><i class="tag"></i>{{item.tag}}</a>
              </div>
              <div>
                <p class="home_creatAt">{{item.createdAt.slice(0, 10)}}</p>
              </div>
            </header>

            <section v-html="item.mdcontent" class="home_main"></section>
            <footer id="articlefooter">
              <router-link class="home_readMore" :to="{path:`/article/${item._id}`}">阅读全文>></router-link>
            </footer>
          </div>
        </article>
      <div id="pagination">
        <button v-show="page!=count" class="paginationbutton" @click="next">下一页</button>
        <button v-show="page!=count" class="paginationbutton" @click="last">最后一页</button>
        <button v-show="page!=0" class="paginationbutton" @click="pre">上一页</button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'article',
    computed: {
      count: function () {
        return Math.floor(this.$store.getters.Getarticlecount / this.limit)
      }
    },
    data () {
      return {
        page: 0,
        limit: 4,
        artlist: []
      }
    },
    methods: {
      next () {
        this.handle(this.page + 1)
      },
      pre () {
        this.handle(this.page - 1)
      },
      last () {
        this.handle(this.count)
      },
      handle (val) {
        this.page = val
        console.log(this.page)
        console.log(this.count)
        this.itemss()
        console.log(this.page)
        console.log(this.count)
      },
      itemss () {
        this.$store.dispatch('Getarticlepage', {page: this.page, limit: this.limit}).then(
          data => { this.artlist = data }
        )
      }
    },
    mounted () {
      this.$store.dispatch('GetPastArticleList', {
        limit: this.limit,
        page: this.page
      }).then(data => {
        this.artlist = data.msg
        console.log(this.artlist)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .article-enter-active,.article-leave-active  {
    transition: all .4s ease;
  }
  .article-enter, .article-leave-active {
    opacity: 0;
  }
  .ArticleList{
    width: 100%;
    .listcontent{
      background-color: ghostwhite;
      width: 90%;
      height: 90%;
      color: #696969;
      border-radius: 10px;
      margin: auto;
      .everarticle:hover{
        box-shadow: 0 0 50px darkgrey;
        margin: 50px 30px;
        transition-duration: 0.8s;
      }
      .everarticle{
        padding: 40px;
        margin: 30px;
        border-radius: 15px;
        background-color: white;
        box-shadow: 0 0 20px darkgrey;
        transition-duration: 0.8s;
        section{
          overflow: hidden;
          padding: 5px 0 20px;
          height: 250px;
        }
        #articletitle{
          color: black;
          font-weight: bold;
        }
        .tag{
          background: url('../assets/blacktag.svg') no-repeat;
        }
        .littletag{
          float: right;
        }
        #articletitle a:hover{
          color: #4fb2d8;
          font-weight: bold;
          transition-duration: 0.8s;
        }
         a:link{
          color: black;
          font-size: 25px;
          text-decoration: none;
        }
        footer a:link{
          color: #b0a0aa;
          font-size: 15px;
          text-decoration: blink;
        }
        #articlefooter a:hover{
          color: #4fb2d8;
          font-size: 15px;
          transition-duration: 0.5s;
          text-decoration: underline;
        }
      }
      #pagination{
        button{
          float: right;
          margin: 0 50px 50px;
        }
      }
    }
  }

</style>
