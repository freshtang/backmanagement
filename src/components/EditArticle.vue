<template>
  <div id="editarticle">
    <input v-model="article.title" placeholder="请在此处输入标题"/>
    <el-col :span="10" :push="3" >
      <el-select v-model="article.tag" placeholder="请选择标签">
        <el-option v-for="item in classifyList" :label="item.tag" :value="item.tag"></el-option>
      </el-select>
    </el-col>
    </br>
    <textarea v-model="article.content"></textarea>
    <div id="showtext" v-html="compiledMarkdown"></div>
    </br>
    <button  class="btn btn-sm aabtn" @click="cancle">取消</button>
    <button  class="btn btn-sm aabtn" @click="updatearticle">更新</button>
  </div>
</template>

<script>
  import marked from 'marked'
  import hlj from 'highlight.js'
  import 'highlight.js/styles/hybrid.css'

  export default {
    name: 'editarticle',
    data () {
      return {
        article: {
          tag: '', // 文章所属分类
          title: '', // 文章标题
          content: '', // 文章内容
          _id: ''
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
        this.$router.push('/admin')
      },
      initial () {
        console.log(this.$route.params.postId)
        this.$store.dispatch('GetOneArticle', {_id: this.$route.params.postId}).then(
          data => {
            console.log(data.msg)
            this.article._id = data.msg[0]._id
            this.article.tag = data.msg[0].tag
            this.article.content = data.msg[0].content
            this.article.title = data.msg[0].title
          }
        )
      }
    },
    components: {
      marked
    },
    computed: {
      compiledMarkdown: function () {
        marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function (code) {
            return hlj.highlightAuto(code).value
          }
        })
        return marked(this.article.content)
      },
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

  #editor {
    margin-left: 10px;
    text-align: left;
    height: 70%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
  }
  .aabtn{
    float: right;
    margin-right: 50px;
  }
  input{
    margin: 0 100px 10px;
    padding: 8px;
    width: 200px;
    border-radius: 5px;
    font-size: 18px;
  }
  #showtext{
    overflow-y:auto;
  }

  textarea, #showtext {
    display: inline-block;
    width: 45%;
    height: 80%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }
  textarea {
    margin: 0 10px;
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  code {
    color: #f66;
  }
</style>
