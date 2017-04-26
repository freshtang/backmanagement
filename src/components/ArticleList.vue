<template>
  <div id="ArticleList">
  <div class="listcontent">
    <el-table
             style='width:100%' align="center" :data="items" >
              <el-table-column type='index' width="60" ></el-table-column>
              <el-table-column   prop="created_at" min-width="200" label="创建时间" ></el-table-column>
              <el-table-column  prop="classify" min-width="150" label="所属分类" ></el-table-column>
              <el-table-column  prop="title" min-width="180" label="文章标题" ></el-table-column>
              <el-table-column  min-width="180" label="操作" >
                <template scope='scope'>
                  <!--这里点击查看进入具体页面但是路径中必须带有admin,这时具体页面里会出现评论的删除选项  -->
                  <el-button size="small" @click="read(scope.row._id)">查看</el-button>
                  <el-button size="small" type='primary' @click="editArticle(scope.row._id)">编辑</el-button>
                  <el-button size="small" type='danger' @click="remove(scope.row._id)">删除</el-button>
                </template>
              </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
export default {
  name: 'ArticleList',
  computed: {
    items () {
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
  color: red;
  border-radius: 10px;
  margin: auto;

}
</style>
