<template>
  <div>
    <el-form :model="user" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="pass">
        <el-input v-model="user.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="login">授权登录</el-button>
    <hr>
    <router-link to="/" style="vertical-align:center;margin-top:20px">MainPage</router-link>
  </div>
</template>

<script>
import axios from "@/components/api/axios";

export default {
  name: "Login",
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
    }
  },
  methods: {
    login() {
      axios.post("/auth/login", {
        username: this.user.username,
        password: this.user.password
      })
          .then(response => {
            this.$message.success(JSON.stringify(response.data))
            localStorage.setItem('token',response.data.data)
          })
          .catch(response => {
            this.$message.error(JSON.stringify(response.data))
            // console.log(response);
          })
    }
  }
}
</script>

<style scoped>

</style>
