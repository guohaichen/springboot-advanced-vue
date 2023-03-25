<template>
  <div>
    <h4 style="border:1px solid #b13939;line-height: 50px">摄影分享</h4>
    <div class="tag-group">
      <el-tag style="margin-right: 20px;"
              v-for="item in items"
              :key="item.label"
              :type="item.type"
              @click="showByType(item.label)"
              effect="plain">
        {{ item.label }}
      </el-tag>
    </div>
    <!--    摄影分享页先设置8个布局存放照片，并加上分页标签，后续改造鼠标滑动加载更多-->

    <el-image style="width:348px;height:auto;border:1px;padding: 2px" v-for="(image, index) in pictures" :key="index"
              :src="image.src" alt="图片"></el-image>
  </div>
</template>


<script>
import p1 from '../../assets/20220115080115IMG0869.jpg'
import p2 from '../../assets/20220115080153IMG0879.jpg'
import p3 from '../../assets/20220115081015IMG0941.jpg'
import p4 from '../../assets/20220115084311IMG1010.jpg'
import p5 from '../../assets/20220115084312IMG1011.jpg'

export default {
  data() {
    return {
      pictures: [
        {src: p1},
        {src: p2},
        {src: p3},
        {src: p4},
        {src: p5},
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
  methods:{
    //根据label 查找
    showByType(label){
      console.log(label)
    }
  }
}
</script>

<style scoped>
/*block并左排列*/
.tag-group {
  border: 1px solid #cccc4d;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
