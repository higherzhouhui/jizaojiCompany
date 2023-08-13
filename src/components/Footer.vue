<template>
    <div class="container">
        <div class="content">
            <img src="@/assets/logo.png" />
            <div class="list">
                <div class="item">小程序</div>
                <div class="item">搭建网站</div>
                <div class="item">安卓开发</div>
                <div class="item">苹果开发</div>
                <div class="item">uniapp开发</div>
                <div class="item">H5开发</div>
                <div class="item">服务器托管</div>
            </div>
            <div class="title">商务合作</div>
            <div class="list">
                <div class="list">联系电话：18516010812</div>
                <div class="list">邮箱地址：782492184@qq.com</div>
                <div class="list">联系地址：重庆市观音桥</div>
            </div>
        </div>
        <div class="copyright">
        Copyright © 2021 - 2023 版权所有©重庆极造极信息科技有限公司 |
    <a href="https://beian.miit.gov.cn/" target="_blank">
      渝ICP备2022006347号-1
    </a></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'footer',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="less">
  .container {
    width: 100%;
    background-image: url('../assets/footer/bg.png');
    background-size: 100% 100%;
  }
  </style>