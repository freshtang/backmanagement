<template>
  <div id="editor">
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
    <button  class="btn btn-sm aabtn" @click="createarticle">发布</button>
  </div>
</template>

<script>
import Marked from 'marked'

export default {
  name: 'addarticle',
  data () {
    return {
      article: {
        tag: '', // 文章所属分类
        title: '', // 文章标题
        content: '# hello' // 文章内容
      }
    }
  },
  methods: {
    createarticle () {
      this.$confirm('确认要发布文章吗?', '提醒', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'waring'
      }).then(() => this.$store.dispatch('CreateArticle', {
        mdcontent: this.compiledMarkdown,
        ...this.article
      }).then(data => {
        this.$notify({
          title: '发布成功',
          type: 'success'
        })
        console.log(data)
        this.$router.push({path: '/admin'})
      }, err => {
        console.log(err)
        this.$notify({
          title: '发布失败',
          type: 'error'
        })
      }))
    },
    cancle () {
      this.$router.push('/admin')
    }
  },
  components: {
    Marked
  },
  computed: {
    compiledMarkdown: function () {
      return Marked(this.article.content, { sanitize: true })
    },
    classifyList () {
      return this.$store.state.tagList
    }
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
