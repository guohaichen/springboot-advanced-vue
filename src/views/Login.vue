<template>
  <div>
    <h1>登录</h1>
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary">授权登录</el-button>
    <hr>
    <router-link to="/" style="vertical-align:center;margin-top:20px">MainPage</router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        pass: '',
        checkPass: ''
      },
    }
  }
}
</script>

<style scoped>

</style>
