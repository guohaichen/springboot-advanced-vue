<template>
  <el-empty>
    <el-button type="primary" @click="goToMain">返回主页</el-button>
  </el-empty>
</template>

<script>
export default {
  methods:{
    goToMain(){
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

</style>