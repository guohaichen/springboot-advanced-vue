<template>
  <div>
    <el-container>
      <el-aside>
      </el-aside>
      <el-container>
        <el-header>
          <span style="font-size: 20px ;font-weight: bolder ;font-family: 宋体,serif;">小小的树洞</span>
          <!--          <router-link tag="button" to="/login" class="el-button el-button&#45;&#45;success">未登录</router-link>-->
        </el-header>
        <Menu/>
        <el-main style="padding: 0;height: auto">
          <div class="container">
            <router-view></router-view>
          </div>

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
* {
  margin: 0;
  padding: 0;
}
.el-aside{
  background: #c9f08e;
  max-width: 100px;
}
.el-header{
  background: #8e98f0;
  text-align: center;
  line-height: 60px;
}
.container{
  margin: 10px;
  background: #8de3c9;
}
.el-footer{
  background: #f0e68e;
  color: #fff;
}

</style>
