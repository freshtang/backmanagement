<template>
  <div>
    <div style="text-align: center">
      <input v-model="tagname" style="padding: 5px" placeholder="输入分类名称">
      <button class="btn btn-sm"@click="addlabel" style="margin: 50px 0">添加标签</button>
    </div>
    <br/>
    <tag v-for="tag in tagList" v-bind:tag-name=tag.tag :key="tag._id" v-on:increment="deletetag(tag.tag, tag._id)"></tag>
  </div>

</template>

<script>
import tag from './tag'

export default {
  name: 'ClassifiedList',
  data () {
    return {
      tagname: ''
    }
  },
  computed: {
    tagList () {
      return this.$store.state.tagList
    }
  },
  components: {
    tag
  },
  methods: {
    deletetag: function (tagname, tagid) {
      this.$confirm('确认要删除' + tagname + '吗?', '提醒', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'waring'
      }).then(() => tagid).then(tagid => {
        this.$store.dispatch('DeleteLabel', {
          _id: tagid
        }).then(data => {
          if (data.code !== 200) {
            this.$notify({
              title: '删除失败',
              type: 'error'
            })
          } else {
            this.$notify({
              title: '删除成功',
              type: 'success'
            })
          }
        })
      })
    },
    addlabel: function () {
      this.$confirm('确认要添加吗?', '提醒', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'waring'
      }).then(() => this.$store.dispatch('CreateLabel', {
        tag: this.tagname
      }).then(data => {
        if (data.code !== 200) {
          this.$notify({
            title: '添加失败',
            type: 'error'
          })
        } else {
          this.$notify({
            title: '添加成功',
            type: 'success'
          })
        }
      }))
    }
  }
}
</script>

<style scoped>

</style>
