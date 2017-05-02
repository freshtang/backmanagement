<template>
  <div id="selectarticle">
    <article>

      <header>
        <div id="articletitle">
          {{article.title}}
        </div>
        <div>
          <p class="createdAt">{{article.createdAt.slice(0, 10)}}</p>
        </div>
      </header>
      <section v-html="article.mdcontent" class="home_main"></section>
      <footer id="articlefooter">
        <button @click="toNextArticle(article._id)" class="paginationbutton">下一篇</button>
        <button @click="toPreArticle(article._id)" class="paginationbutton">上一篇</button>
      </footer>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'selectarticle',
    data () {
      return {
        article: {
          tag: '', // 文章所属分类
          title: '', // 文章标题
          content: '', // 文章内容
          _id: '',
          mdcontent: '',
          createdAt: ''
        }
      }
    },
    methods: {
      updatearticle () {
        this.$store.dispatch('UpdateArticle', {
          mdcontent: this.compiledMarkdown,
          ...this.article
        }).then(data => {
          this.$notify({
            title: '更新成功',
            type: 'success'
          })
          this.$router.push({path: '/admin'})
        }, err => {
          console.log(err)
          this.$notify({
            title: '更新失败',
            type: 'error'
          })
        })
      },
      cancle () {
        this.$router.push('/')
      },
      initial () {
        this.$store.dispatch('GetOneArticle', {_id: this.$route.params.id}).then(
          data => {
            console.log(data)
            this.article._id = data.msg[0]._id
            this.article.tag = data.msg[0].tag
            this.article.content = data.msg[0].content
            this.article.title = data.msg[0].title
            this.article.mdcontent = data.msg[0].mdcontent
            this.article.createdAt = data.msg[0].createdAt
          }
        )
      },
      toNextArticle (id) {
        this.$store.dispatch('ToNextOrPreArticle', {
          _id: id,
          action: 1
        }).then(data => {
          console.log(data)
          this.article._id = data._id
          this.article.tag = data.tag
          this.article.content = data.content
          this.article.title = data.title
          this.article.mdcontent = data.mdcontent
          this.article.createdAt = data.createdAt
        }, data => {
          if (data === 0) {
            this.$notify({
              title: '这是最新的文章',
              type: 'error'
            })
          }
          if (data === 1) {
            this.$notify({
              title: '这是最后一篇文章',
              type: 'error'
            })
          }
          if (data === -1) {
            this.$notify({
              title: '错误',
              type: 'error'
            })
          }
        })
      },
      toPreArticle (id) {
        this.$store.dispatch('ToNextOrPreArticle', {
          _id: id,
          action: 0
        }).then(data => {
          console.log(data)
          this.article._id = data._id
          this.article.tag = data.tag
          this.article.content = data.content
          this.article.title = data.title
          this.article.mdcontent = data.mdcontent
          this.article.createdAt = data.createdAt
        }, data => {
          if (data === 0) {
            this.$notify({
              title: '这是最新的文章',
              type: 'error'
            })
          }
          if (data === 1) {
            this.$notify({
              title: '这是最后一篇文章',
              type: 'error'
            })
          }
          if (data === -1) {
            this.$notify({
              title: '错误',
              type: 'error'
            })
          }
        })
      }
    },
    computed: {
      classifyList () {
        return this.$store.state.tagList
      }
    },
    mounted () {
      this.initial()
    }
  }
</script>

<style lang="scss" scoped>
  #selectarticle{
    height: 500px;
    background-color: ghostwhite;
    article{
      background-color: white;
      padding: 20px 30px 60px ;
      margin: 0 50px 50px;
      border-radius: 15px;
      #articletitle {
        font-weight: bold;
        font-size: 25px;
      }
      .createdAt{
        color: darkgray;
      }
      #articlefooter button.paginationbutton{
        float: right;
        margin: 0 50px 50px;
      }
    }
  }
</style>
