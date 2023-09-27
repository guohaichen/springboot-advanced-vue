<template>
  <div>
    <h1>MainPage!</h1>
    <el-button type="success" @click="authTest">auth-test</el-button>
    <h2>{{ responseData }}</h2>
    <hr>
    <router-link to="/login">Go to LoginPage</router-link>

  </div>
</template>

<script>
import axios from '@/components/api/axios'

export default {
  name: "Main.vue",
  data() {
    return {
      responseData: ''
    }
  },
  methods: {
    authTest() {
      axios.get("user/auth-test")
          .then(
              response => {
                this.responseData = response.data
                this.$message.success(this.responseData)
              }
          ).catch(
              response => {
                if(response.code===401){
                  this.$message.warning("未登录")
                }
      }
      )
    }
  }
}
</script>

<style scoped>


</style>
