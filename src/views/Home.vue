<template>
  <div>
    <el-descriptions title="主页一个描述列表实例" direction="vertical" :column="4" border>
      <el-descriptions-item label="用户名">陈国海</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地" :span="2">上海市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址">四川轻化工大学</el-descriptions-item>
    </el-descriptions>
    <router-link to="/" tag="button" class="el-button el-button--primary is-round">Go back to MainPage</router-link>
  </div>
</template>

<script>
export default
{
  name: "Home"
}
</script>

<style scoped>

</style>
