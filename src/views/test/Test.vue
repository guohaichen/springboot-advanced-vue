<template>
  <div>
<!--    <el-image-->
<!--        v-for="(image, index) in images"-->
<!--        :key="index"-->
<!--        :src="image.src"-->
<!--        :fit="image.fit"-->
<!--        :style="{ width: image.width + 'px', height: image.height + 'px' }"-->
<!--    ></el-image>-->
    <Comment></Comment>
  </div>
</template>


<script>
import Comment from "@/components/Comment";
export default {
  components:{Comment},
  data() {
    return {
      images: [
        {
          src: 'https://via.placeholder.com/150x150',
          fit: 'contain',
          width: 150,
          height: 150,
        },
        {
          src: 'https://via.placeholder.com/300x200',
          fit: 'cover',
          width: 300,
          height: 200,
        },
        {
          src: 'https://via.placeholder.com/200x300',
          fit: 'fill',
          width: 200,
          height: 300,
        },
      ],
    };
  },
};
</script>
