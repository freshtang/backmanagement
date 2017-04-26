<template>
  <div id="editor">
    <input v-model="article.title" placeholder="请在此处输入标题"/>
    </br>
    <textarea v-model="article.content"></textarea>
    <div id="showtext" v-html="compiledMarkdown"></div>
    </br>
    <button  class="btn btn-sm aabtn" @click="cancle">取消</button>
    <button  class="btn btn-sm aabtn" @click="create">发布</button>
  </div>
</template>

<script>
import Marked from 'marked'

export default {
  name: 'addarticle',
  data () {
    return {
      article: {
        classify: '', // 文章所属分类
        title: '', // 文章标题
        content: '# hello' // 文章内容
      }
    }
  },
  methods: {
    create () {
      console.log(this.article)
    },
    cancle () {
      this.$router.push('/')
    }
  },
  components: {
    Marked
  },
  computed: {
    compiledMarkdown: function () {
      return Marked(this.article.content, { sanitize: true })
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
  margin: 10px;
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
