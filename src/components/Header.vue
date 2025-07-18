<template>
  <div class="container">
    <div class="content">
      <img src="@/assets/logo.png" class="logo" />
      <div class="menu" :class="{ open: menuOpen }">
        <div class="item" v-for="item in menuList" :key="item.title">
          <router-link
            :to="item.link"
            class="nav-link"
            :class="{ active: isActive(item.link) }"
            exact
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>
      <div class="hamburger" @click="menuOpen = !menuOpen">
        <span :class="{ 'bar': true, 'open': menuOpen }"></span>
        <span :class="{ 'bar': true, 'open': menuOpen }"></span>
        <span :class="{ 'bar': true, 'open': menuOpen }"></span>
      </div>
      <div class="contact">
        <img src="@/assets/phone.png" class="phone" />
        <span>185-1601-0812</span>
      </div>
    </div>
    <!-- 移动端遮罩 -->
    <div v-if="menuOpen" class="menu-mask" @click="menuOpen = false"></div>
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
        {title: '精选案例', link: '/cases'},
        {title: 'APP开发', link: '/app'},
        {title: '微信开发', link: '/wechat'},
        {title: '系统开发', link: '/system'},
        {title: '新闻动态', link: '/news'},
        {title: '关于我们', link: '/about'}
      ],
      menuOpen: false
    }
  },
  methods: {
    isActive(link) {
      if (link === '/') {
        return this.$route.path === '/';
      }
      return this.$route.path.startsWith(link);
    }
  },
  watch: {
    $route() {
      this.menuOpen = false;
    }
  }
}
</script>

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
  .content {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    position: relative;
    @media screen and (max-width: 1100px) {
      width: 100%;
    }
    .menu {
      display: flex;
      align-items: center;
      transition: all 0.3s;
      .item {
        margin: 0 18px;
        .nav-link {
          color: #fff;
          text-decoration: none;
          transition: color 0.2s, font-weight 0.2s;
          padding: 0 2px;
        }
        .nav-link:last-child {
          margin-right: 0;
        }
        .nav-link:hover {
          color: #fff;
          font-weight: bold;
          cursor: pointer!important;
        }
        .nav-link.active {
          color: #fff;
          font-weight: bold;
          border-bottom: 2px solid #fff;
          text-shadow: 1px 1px 2px #000, 0 0 1px #000;
        }
      }
      @media screen and (max-width: 900px) {
        position: fixed;
        left: 0;
        top: 60px;
        width: 180px;
        max-width: 320px;
        height: 100vh;
        background: #222;
        flex-direction: column;
        align-items: flex-start;
        padding: 32px 24px 24px 24px;
        box-shadow: 2px 0 16px rgba(0,0,0,0.12);
        transform: translateX(-100%);
        z-index: 1001;
        border-radius: 0 12px 12px 0;
        .item {
          margin-bottom: 18px;
          .nav-link {
            margin-right: 0;
            font-size: 1.1rem;
            display: block;
          }
        }
        &.open {
          transform: translateX(0);
        }
      }
    }
    .hamburger {
      display: none;
      width: 32px;
      height: 32px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 1002;
      margin-left: 16px;
      span.bar {
        display: block;
        width: 26px;
        height: 3px;
        background: #fff;
        margin: 4px 0;
        border-radius: 2px;
        transition: all 0.3s;
      }
      &.open span.bar {
        background: #078651;
      }
      @media screen and (max-width: 900px) {
        display: flex;
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
      @media screen and (max-width: 900px) {
        display: none;
      }
    }
  }
  .menu-mask {
    display: none;
  }
  @media screen and (max-width: 900px) {
    .menu-mask {
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,0.3);
      z-index: 1000;
    }
  }
}
</style>
