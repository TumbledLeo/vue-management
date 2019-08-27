<template>
<div class="div">
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <el-tabs type="border-card">
    <el-tab-pane label="用户管理">1</el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="任务管理">任务管理</el-tab-pane>
  </el-tabs>
</div>

</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to index'
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
