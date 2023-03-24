<template>
<!--  <div>
    <el-radio-group v-model="isCollapse" style="">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
  </div>-->
  <el-menu
      router
      :default-active="this.$router.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      mode="horizontal"
      @close="handleClose"
      :collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-coffee-cup"></i>
        <span slot="title">AboutMe</span>
      </template>
      <el-menu-item index="/home">描述列表</el-menu-item>
      <el-menu-item index="/photographyBase">摄影基础</el-menu-item>
      <el-menu-item index="/photography">摄影分享</el-menu-item>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="/login">登录</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-loading"></i>
        <span slot="title">暂时测试</span>
      </template>
      <el-menu-item index="/helloWorld">HelloWorld</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">
      <i class="el-icon-reading"></i>
      <span slot="title">读书笔记</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-box"></i>
      <span slot="title">树洞</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /*width: 150px;*/
  /*min-height: 400px;*/
}
</style>
