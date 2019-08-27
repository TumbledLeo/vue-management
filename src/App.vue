<template>
  <div id="app">
    <!-- 其他页 -->
    <el-container v-if="$route.meta.keepAlive" >
      <el-header>
        <!-- 导航栏 -->
          <Header></Header>
      </el-header>
      <el-container>
        <!-- <el-aside width="250px">         
        </el-aside> -->
        <el-main>
          <!-- Body -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    
    <!-- 登录页 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'App',
   components: {
       Header,
  },
}
</script>
<style>
body{
  margin:0;
}
</style>

