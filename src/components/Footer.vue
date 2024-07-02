<template>
  <div class="container">
    <div class="main">
      <img src="@/assets/footer/bg.png" class="bg" />
      <div class="content">
        <img src="@/assets/logo.png" class="logo" />
        <div class="list">
          <div :key="item.logo" class="item" v-for="item in productList">
            <img :src="item.logo" />
            <span>{{ item.title }}</span>
          </div>
        </div>
        <div class="title">
          <img src="@/assets/footer/hezuo.png" />
          商务合作
        </div>
        <div class="list plist">
          <div class="item">联系电话：18516010812</div>
          <div class="item">邮箱地址：782492184@qq.com</div>
          <div class="item">联系地址：重庆市观音桥红鼎国际C座29-12</div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span>Copyright © 2021 - 2052 版权所有©重庆极造极信息科技有限公司 |</span>
      <a href="https://beian.miit.gov.cn/" target="_blank">
        渝ICP备2023007595号-2 |
      </a>
      <a href="https://beian.miit.gov.cn/" target="_blank">
        渝公网安备50022302000762号
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      productList: [
        { logo: require('@/assets/footer/web.png'), title: '搭建网站' },
        { logo: require('@/assets/footer/xcx.png'), title: '小程序' },
        { logo: require('@/assets/footer/android.png'), title: '安卓开发' },
        { logo: require('@/assets/footer/apple.png'), title: '苹果开发' },
        { logo: require('@/assets/footer/h5.png'), title: 'H5开发' },
        { logo: require('@/assets/footer/uniapp.png'), title: 'uniapp开发' },
        { logo: require('@/assets/footer/server.png'), title: '服务器托管' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  width: 100%;
  .main {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 30%;
    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -1;
    }
    .content {
      width: 1100px;
      margin: 0 auto;
      @media screen and (max-width: 1100px) {
        display: none;
      }
      .logo {
        height: 60px;
        object-fit: contain;
        margin: 40px 0 30px 0;
        @media screen and (min-width: 1440px) {
          margin: 80px 0 50px 0;
        }
      }
      .list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        row-gap: 12px;
        .item {
          background: rgba(0, 0, 0, 0.6);
          color: #eee;
          width: fit-content;
          padding: 8px 12px;
          cursor: pointer;
          border-radius: 6px;
          display: flex;
          align-items: center;
          img {
            width: 20px;
            margin-right: 8px;
          }
          &:hover {
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
          }
        }
      }
      .plist {
        grid-template-columns: repeat(3, 1fr);
        .item {
          cursor: text;
        }
      }
      .title {
        background: rgba(0, 0, 0, 0.6);
        font-size: 17px;
        width: fit-content;
        color: #fff;
        margin: 24px 0;
        padding: 10px 16px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        img {
          width: 30px;
          margin-right: 10px;
        }
      }
    }
  }
  .copyright {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    @media screen and (max-width: 1100px) {
      font-size: 12px;
      display: flex;
      flex-direction: column;
      a {
        font-size: 12px;
      }
    }
    a {
      color: #fff;
    }
  }
}
</style>
