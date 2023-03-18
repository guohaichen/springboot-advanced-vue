<template>
  <div>
    <el-container>
      <el-aside>
        <Menu/>
      </el-aside>
      <el-container>
        <el-header>
          <span style="font-size: 20px ;font-weight: bolder ;font-family: 宋体,serif;">SeaLand's Tree Hole</span>
<!--          <router-link tag="button" to="/login" class="el-button el-button&#45;&#45;success">未登录</router-link>-->
        </el-header>
        <el-main>

          <router-view></router-view>

        </el-main>
        <el-footer>
          <el-link type="info">tree hole start on 2023-03-17</el-link>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "@/views/menu/Menu.vue";

export default {
  name: "Main.vue",
  components: {Menu}
}
</script>

<style scoped>

</style>
