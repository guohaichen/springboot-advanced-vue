<template>
<div>
  <h2>照片</h2>
  <div v-for="(item ,index) in pictures" :key="index">
    <img :src="pictures" alt="">
  </div>
</div>
</template>


<script>
export default {
  data(){
    return{
      pictures:[
        require('../../assets/20220115080115_IMG_0869.JPG'),
        require('../../assets/20220115080115_IMG_0869.JPG'),
        require('../../assets/20220115080115_IMG_0869.JPG'),
        require('../../assets/20220115080115_IMG_0869.JPG'),
      ]
    }
  }
}
</script>

<style scoped>

</style>
