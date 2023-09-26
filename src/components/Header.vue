<template>
  <div class="container">
    <div class="content">
      <img src="@/assets/logo.png" class="logo" />
      <div class="menu">
        <div class="item" v-for="item in menuList" :key="item.title">
          <a :href="item.link">
            {{ item.title }}
          </a>
        </div>
      </div>
      <div class="contact">
        <img src="@/assets/phone.png" class="phone" />
        <span>185-1601-0812</span>
      </div>
    </div>
  </div>
</template>

<script>
import { routesConfig } from '../router'
export default {
  name: 'Header',
  data () {
    return {
      routesConfig: routesConfig,
      menuList: [
        {title: '首页', link: '/'},
        {title: '精选案例', link: '#anli'},
        {title: 'APP开发', link: '#develop'},
        {title: '微信开发', link: '#develop'},
        {title: '系统开发', link: '#develop'},
        {title: '关于我们', link: '/about'}
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.$router.push(key)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  &:hover {
    background: #333;
  }
  .logo {
    height: 50px;
  }
  .el-menu-demo {
    border: none;
  }
  .content {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    @media screen and (max-width: 1100px) {
      width: 100%;
      .menu {
        display: none!important;
      }
    }
    .menu {
      display: flex;
      align-items: center;
      .item {
        a {
          color: #fff;
          text-decoration: none;
          margin-right: 32px;
          &:hover {
            color: #078651;
            font-weight: bold;
            cursor: pointer!important;

          }
        }
      }
    }
    .contact {
      display: flex;
      align-items: center;
      color: #fff;
      .phone {
        height: 25px;
      }
      span {
        font-size: 18px;
        margin-left: 8px;
        line-height: 25px;
        font-weight: bold;
      }
    }
  }
}
</style>
