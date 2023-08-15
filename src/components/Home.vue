<template>
  <div class="container">
    <div class="carousel">
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in carousel" :key="item">
          <div class="imgWrapper">
            <img :src="item" class="carouselImg" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tabTitle">
        <el-tab-pane label="做网站" name="first">
          <div class="tabContent">
            <div class="title">全球门户——全行业全场景的建站解决方案</div>
            <ul class="feature">
              <li>专属定制方案，一对一服务</li>
              <li>网站AI营销自动化，解决流量到获客难题</li>
              <li>搜索引擎优化，精准抓住用户</li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="做小程序/公众号" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="APP开发" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="域名/服务器" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import c1 from "@/assets/home/c1.png";
import c2 from "@/assets/home/c2.png";
import c4 from "@/assets/home/c4.png";
import c5 from "@/assets/home/c5.png";
import c7 from "@/assets/home/c7.png";

export default {
  name: "Home",
  data() {
    return {
      carousel: [c1, c2, c4, c5, c7],
      activeName: 'first'
    };
  },
  methods: {
    handleClick() {
      
    }
  }
};
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
  .main {
    margin: 0 auto;
    width: 1100px;
    .tabTitle {
      margin-top: 24px;
    }
    .tabContent {
      .title {
        font-size: 18px;
        font-weight: bold;
        line-height: 32px;
      }
      .feature {
        li {
          list-style: inside;
          line-height: 24px;
          color: #666;
          width: fit-content;
          &:hover {
            background: rgba(0, 0, 0, 0.1);
            color: #000;
            cursor: pointer;
          }
        }
      }
    }
  }
}
/deep/ .el-carousel__container {
  width: 100%;
  height: 0;
  padding-bottom: 26%;
}

/deep/ .el-tabs__item {
  font-size: 18px;
}
</style>
