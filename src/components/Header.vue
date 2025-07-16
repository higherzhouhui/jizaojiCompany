<template>
  <div class="container">
    <div class="content">
      <img src="@/assets/logo.png" class="logo" />
      <div class="menu">
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
        {title: '精选案例', link: '/cases'},
        {title: 'APP开发', link: '/app'},
        {title: '微信开发', link: '/wechat'},
        {title: '系统开发', link: '/system'},
        {title: '关于我们', link: '/about'}
      ]
    }
  },
  methods: {
    isActive(link) {
      // 精确匹配首页，其余以当前路由开头即可
      if (link === '/') {
        return this.$route.path === '/';
      }
      return this.$route.path.startsWith(link);
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
        .nav-link {
          color: #fff;
          text-decoration: none;
          margin-right: 32px;
          transition: color 0.2s, font-weight 0.2s;
        }
        .nav-link:hover {
          color: #078651;
          font-weight: bold;
          cursor: pointer!important;
        }
        .nav-link.active {
          color: #e6eeea;
          font-weight: bold;
          border-bottom: 2px solid #e6eeea;
          text-shadow: 1px 1px 2px #000, 0 0 1px #000;
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
