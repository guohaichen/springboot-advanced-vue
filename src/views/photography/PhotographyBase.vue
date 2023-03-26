<template>
  <div>
    <h4 style="border:1px solid #b13939;line-height: 50px">摄影基础</h4>
    <!--      <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">-->
    <el-row>
      <el-col :span="8" v-for="(o) in 9" :key="o">
        <el-card :body-style="{ padding: '10px'}">
          <img :src=p1 class="image" alt="2">
          <div style="padding: 2px;border:1px solid rebeccapurple;line-height: 24px">
            <div>
              <p style="float:left;font-size: 14px;">desc:</p>
            </div>
            <el-row>
              <el-col :span="24">
                <p style="font-size: 14px;float:left">author:</p>
                <el-button type="primary" icon="el-icon-star-on" class="button"></el-button>
                <el-button type="primary" icon="el-icon-download" class="button"></el-button>
                <el-button type="primary" icon="el-icon-medal" class="button"></el-button>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
        background
        style="float:right;margin-top:10px"
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>
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
.button {
  padding: 5px;
  float: right;
  margin-left: 10px;
}

.image {
  width: 100%;
  display: block;
}
</style>
