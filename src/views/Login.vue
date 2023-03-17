<template>
  <div>
    <h1>LoginPage!</h1>
    <div class="container">
      <el-form :model="model" label-width="80">
        <el-row>
          <el-col :span="24">
            <el-form-item label="用户名">
              <el-input v-model="model.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="密码">
              <el-input placeholder="请输入密码" v-model="model.password" show-password></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--   router-link tag属性可以设置成button     -->
        <router-link to="/home" tag="button" class="el-button el-button--primary is-round">登录</router-link>
        <el-button type="success" round>注册</el-button>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      model: {}
    }
  }
}
</script>

<style scoped>
.container {
  border: 2px solid #b1dbc8;
  width: auto;
  padding: 40px 40px 0 40px;
}
</style>
