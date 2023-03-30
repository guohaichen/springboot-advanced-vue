<template>
  <div>
    <DrawerModel :drawerVisible.sync="isVisible" :drawerTitle="drawerTitle"
                 @updateDrawer="isVisible=$event"></DrawerModel>
    <h4 style="border:1px solid #b13939;line-height: 50px">摄影分享</h4>

    <div class="tag-group">
      <el-tag style="margin-left:10px"
              v-for="item in items"
              :key="item.label"
              :type="item.type"
              @click="showByType(item.label)"
              effect="plain">
        {{ item.label }}
      </el-tag>
      <el-input v-model="search.tag" placeholder="请输入要搜索的标签"
                style="width:200px;margin:0 10px;height: 32px;line-height: 32px;">
        <i slot="prefix" class="el-input__icon el-icon-search" style="line-height: 32px"></i></el-input>
      <el-button type="primary" class="el-icon-search" style="padding:0;height: 32px;width: 80px">查找</el-button>
      <el-button @click="isVisible=!isVisible" type="success" class="el-icon-plus"
                 style="padding:0;height: 32px;width: 80px;">发日常
      </el-button>
      <el-button type="primary" class="el-icon-video-camera" @click="getPhotography">查询测试</el-button>
    </div>
    <!--    摄影分享页先设置8个布局存放照片，并加上分页标签，后续改造鼠标滑动加载更多-->
    <!--    <el-image style="width:348px;height:auto;border:1px;padding: 2px" v-for="(image, index) in pictures" :key="index"
                  :src="image.src" alt="图片"></el-image>-->
    <el-row>
      <el-col :span="8" v-for="index in pictures" :key="index">
        <el-card :body-style="{ padding: '10px'}">
          <img :src=pictures[2] class="image" alt="图片出错">
          <div style="padding: 2px;border:1px solid rebeccapurple;line-height: 24px">
            <div>
              <p style="float:left;font-size: 14px;">desc:....一段描述</p>
            </div>
            <el-row>
              <el-col :span="24">
                <p style="font-size: 14px;float:left">author:</p><a href="">xxx</a>
                <el-button type="primary" icon="el-icon-star-on" class="button"></el-button>
                <el-button type="primary" icon="el-icon-download" class="button"></el-button>
                <!--                <el-button type="primary" icon="el-icon-medal" class="button"></el-button>-->
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
import DrawerModel from "@/views/drawer/DrawerModel";
import p1 from '../../assets/20220115080115IMG0869.jpg'
import p2 from '../../assets/20220115080153IMG0879.jpg'
import p3 from '../../assets/20220115081015IMG0941.jpg'
import p4 from '../../assets/20220115084311IMG1010.jpg'
import p5 from '../../assets/20220115084312IMG1011.jpg'
import axios from "@/components/api/axios";

export default {
  components: {DrawerModel},
  data() {
    return {
      pictureIndex: 0,
      isVisible: false,
      drawerTitle: "分享照片",
      search: {
        tag: ''
      },
      pictures: [
        p1, p2, p3, p4, p5
      ],
      items: [
        {type: '', label: '风景'},
        {type: 'success', label: '人像'},
        {type: 'info', label: '大光圈'},
        {type: 'danger', label: '夜景'},
        {type: 'warning', label: '花花'}
      ]
    }
  },
  created() {
    this.pictureIndex = 0
  },
  methods: {
    //根据label 查找
    showByType(label) {
      console.log(label)
    },
    getPhotography() {
      axios.get('/share/photography')
          .then((resp) => {
            console.log(resp.data)
          })
    }
  }
}
</script>

<style scoped>
/*block并左排列*/
.tag-group {
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid #cccc4d;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

/* ::v-deep选择器是一种选择嵌套元素的css选择器，它可以选择任何深度的后代元素，而不仅仅是直接后代。 */
::v-deep .el-input__inner {
  height: 32px;
  line-height: 32px;
}

.el-input.el-input--prefix {
  height: 32px;
}

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
