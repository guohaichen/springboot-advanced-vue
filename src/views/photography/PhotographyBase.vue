<template>
  <div>
    <h4 style="border:1px solid #b13939;line-height: 50px">摄影基础</h4>
    <!--      <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">-->

  </div>
</template>

<script>
import p1 from '../../assets/20220115084312IMG1011.jpg'

export default {
  data() {
    return {
      p1,
      currentDate: new Date()
    };
  }
}
</script>

<style scoped>

</style>
