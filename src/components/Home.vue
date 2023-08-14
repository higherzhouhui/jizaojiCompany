<template>
  <div class="container">
    <div class="carousel">
      <el-carousel trigger="click">
      <el-carousel-item v-for="item in carousel" :key="item">
        <div class="imgWrapper">
          <img :src="item" class="carouselImg"/>
        </div>
      </el-carousel-item>
    </el-carousel>
    </div>
  </div>
</template>

<script>
import c1 from '@/assets/home/c1.png'
import c2 from '@/assets/home/c2.png'
import c4 from '@/assets/home/c4.png'
import c5 from '@/assets/home/c5.png'
import c7 from '@/assets/home/c7.png'
export default {
  name: 'Home',
  data () {
    return {
      carousel: [c1, c2, c4, c5, c7]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  .carousel {
    .imgWrapper {
      width: 100%;
      height: 0;
      padding-bottom: 26%;
      position: relative;
    }
   .carouselImg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: fill;
   }
  }
}
  /deep/ .el-carousel__container {
      width: 100%;
      height: 0;
      padding-bottom: 26%;
  }
</style>
