<template>
  <div class="container">
    <div class="content">
      <el-menu
        default-active="home"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          v-for="item in routesConfig"
          :key="item.path"
          :index="item.path"
          >
          {{ item.name }}
        </el-menu-item>
        <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item
      > -->
      </el-menu>
    </div>
  </div>
</template>

<script>
import { routesConfig } from '../router'
export default {
  name: 'Header',
  data () {
    return {
      routesConfig: routesConfig
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.$router.push(key)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  background-color: #545c64;
  .el-menu-demo {
    border: none;
  }
  .content {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
