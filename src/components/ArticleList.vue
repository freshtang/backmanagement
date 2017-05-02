<template>
  <div id="ArticleList">
  <div class="listcontent">
    <el-table
             style='width:100%' align="center" :data="artlist" >
              <el-table-column type='index' width="60" ></el-table-column>
              <el-table-column  prop="createdAt" min-width="200" label="创建时间" ></el-table-column>
              <el-table-column  prop="tag" min-width="150" label="所属分类" ></el-table-column>
              <el-table-column  prop="title" min-width="180" label="文章标题" ></el-table-column>
              <el-table-column  min-width="180" label="操作" >
                <template scope='scope'>
                  <!--这里点击查看进入具体页面但是路径中必须带有admin,这时具体页面里会出现评论的删除选项  -->
                  <!--<el-button size="small" @click="read(scope.row._id)">查看</el-button>-->
                  <el-button size="small" @click="toArticle(scope.row._id)">查看</el-button>
                  <el-button size="small" type='primary' @click="editArticle(scope.row._id)">编辑</el-button>
                  <el-button size="small" type='danger' @click="remove(scope.row._id)">删除</el-button>
                </template>
              </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="24" class="page">
        <el-pagination layout="prev,pager,next" @current-change="handle" :total="count" :page-size="limit" style="float:right;margin: 20px"></el-pagination>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
  name: 'ArticleList',
  computed: {
    count: function () {
      return this.$store.getters.Getarticlecount
    }
  },
  data () {
    return {
      page: 0,
      limit: 10,
      artlist: []
    }
  },
  methods: {
    remove: function (id) {
      this.$confirm('确认要删除吗?', '提醒', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'waring'
      }).then(() => id).then(id => {
        this.$store.dispatch('DeleteArticle', {
          _id: id
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
    handle (val) {
      this.page = val - 1
      this.itemss()
    },
    toArticle (id) {
      // 通过this.$route.params来获取数据
      this.$router.push({path: `/article/${id}`})
    },
    editArticle (id) {
      // 通过this.$route.params来获取数据
      this.$router.push({path: `/admin/editarticle/${id}`})
    },
    itemss () {
      this.$store.dispatch('Getarticlepage', {page: this.page, limit: this.limit}).then(
        data => { this.artlist = data }
      )
    }
  },
  mounted () {
    this.itemss()
  }
}
</script>

<style lang="scss" scoped>

.listcontent{
  background-color: #f1f2f7;
  width: 90%;
  height: 90%;
  color: red;
  border-radius: 10px;
  margin: auto;

}
</style>
