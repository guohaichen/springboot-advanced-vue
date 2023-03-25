<template>
  <div>
    <el-row>
      <h4 style="border:1px solid #b13939;line-height: 50px">摄影基础</h4>
<!--      <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">-->
      <el-col :span="8" v-for="(o) in 4" :key="o" >
        <el-card :body-style="{ padding: '0px' }">
          <img :src=p1
               class="image" alt="2">
          <div style="padding: 14px;border:1px solid rebeccapurple;line-height: 20px" >
            <div class="bottom clearfix">
              <span style="float:left">文字描述</span>
              <el-button type="primary" icon="el-icon-star-on" class="button" ></el-button>
              <el-button type="primary" icon="el-icon-download" class="button" ></el-button>
              <el-button type="primary" icon="el-icon-download" class="button" ></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import p1 from '../../assets/20220115084312IMG1011.jpg'
export default {
  data(){
    return {
      p1,
      currentDate: new Date()
    };
  }
}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
