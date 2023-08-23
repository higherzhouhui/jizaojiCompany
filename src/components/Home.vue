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
    <div class="infull">
      <div class="introduce">
        <div class="item">
          <div class="top">响应及时</div>
          <div class="bot">24小时客服在线</div>
        </div>
        <div class="item">
          <div class="top">数据安全</div>
          <div class="bot">阿里云托管保护</div>
        </div>
        <div class="item">
          <div class="top">研发快速</div>
          <div class="bot">本科率100%</div>
        </div>
        <div class="item">
          <div class="top">高企双软</div>
          <div class="bot">资质齐全</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="serviceContainer">
        <div class="title">我们将为您提供的服务</div>
        <div class="desc">成立以来，我们只专注一件事，“互联网软件开发及IT服务”，已助力100+政府和企业数字化转型升级</div>
      </div>
      <div class="productList">
        <div class="item" v-for="item in productList" :key="item.title">
          <img :src="item.logo" />
          <h2>{{ item.title }}</h2>
          <p>{{ item.detail }}</p>
          <button>立即咨询</button>
        </div>
      </div>
      <div class="serviceContainer">
        <div class="title">客户精选案例</div>
        <div class="desc">我们为乌镇微医、蓝光地产、成都电视台、遂宁市市场监督管理局等100+政府和企业，提供了不同行业的数字化产品开发</div>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tabTitle">
        <el-tab-pane label="小程序" name="first">
          <div class="tabContent">
            <div class="item" v-for="item in xcxList" :key="item.cover">
              <div class="top">
                <img :src="item.cover" class="cover"/>
                <div class="mask">
                  <div class="mcontnet">
                    <img :src="item.mcover" class="mcover" />
                    <p>打开微信“扫一扫”体验</p>
                  </div>
                </div>
              </div>
              <div class="bot">
                {{item.title}}
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="公众号" name="second">
          <div class="tabContent">
            <div class="item" v-for="item in gzList" :key="item.cover">
              <div class="top">
                <img :src="item.cover" class="cover"/>
                <div class="mask">
                  <div class="mcontnet">
                    <img :src="item.mcover" class="mcover" />
                    <p>打开微信“扫一扫”体验</p>
                  </div>
                </div>
              </div>
              <div class="bot">
                {{item.title}}
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="APP" name="third">
          <div class="tabContent">
            <div class="item" v-for="item in appList" :key="item.cover">
              <div class="top">
                <img :src="item.cover" class="cover"/>
                <div class="mask">
                  <div class="mcontnet">
                    <div>{{ item.desc }}</div>
                  </div>
                </div>
              </div>
              <div class="bot">
                {{item.title}}
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="管理系统" name="fourth">
          <div class="tabContent">
            <div class="item" v-for="item in glList" :key="item.cover">
              <div class="top">
                <img :src="item.cover" class="cover"/>
                <div class="mask">
                  <div class="mcontnet">
                    <div>{{ item.desc }}</div>
                  </div>
                </div>
              </div>
              <div class="bot">
                {{item.title}}
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="dividerBg">
      <div class="dcontent">
        <h2>数字经济时代来临，您的同行已经利用互联网、大数据、人工智能等，增加了客户，提高了收入，扩大了规模！</h2>
        <h1>您还在犹豫吗？政府和企业数字化转型、升级，我们可以帮到您！</h1>
        <h3>后疫情时代的业绩突破点</h3>
      </div>
    </div>
    <div class="main">
      <div class="serviceContainer">
        <div class="title">为什么选择我们？</div>
        <div class="desc">丰富经验，高效研发，优质服务，阿里云安全保障，超100家政企客户的共同选择</div>
      </div>
    </div>
  </div>
</template>

<script>
import c1 from "@/assets/home/c1.png"
import c2 from "@/assets/home/c2.png"
import c4 from "@/assets/home/c4.png"
import c5 from "@/assets/home/c5.png"
import c7 from "@/assets/home/c7.png"

export default {
  name: "Home",
  data() {
    return {
      carousel: [c1, c2, c4, c5, c7],
      activeName: 'first',
      productList: [
        {logo: require('@/assets/home/app.png'), title: '手机APP定制开发', detail: 'IOS/Android系统手机APP的全功能原生定制开发，打造极致客户体验，覆盖多种智能终端，便于品牌宣传和产品展示'},
        {logo: require('@/assets/home/xcx.png'), title: '微信小程序开发', detail: '火爆的微信小程序定制开发，商城/拼团/酒店/预约/会员卡小程序等应有尽有，让您的服务直达10亿+微信用户'},
        {logo: require('@/assets/home/wx.png'), title: '微信平台开发', detail: '基于微信公众平台订阅号/服务号的二次开发，预约下单、会员管理、物业服务、就医挂号、微信收款等全功能开发'},
        {logo: require('@/assets/home/sc.png'), title: '商城系统开发', detail: '基于APP、H5、公众号或小程序的零售商城、分销商城、积分商城、拼团商城等各类商城定制开发，把您的生意搬到互联网上来'},
        {logo: require('@/assets/home/gl.png'), title: '管理系统开发', detail: '智慧群宴、智慧工厂、CRM、OA、ERP等政府和企业数字化建设，丰富的系统开发经验积累，让我们成为您可靠的信息技术部'},
        {logo: require('@/assets/home/it.png'), title: 'IT信息技术服务', detail: '研发人手不够，技术人员招聘难，技术水平参差不齐，产品长期维护难，专业IT信息技术服务，让您省时省力，省钱省心'},
      ],
      xcxList: [
        {cover: require('@/assets/home/xcx1.png'), mcover: require('@/assets/home/xcx1active.png'), title: '生物城信息通'},
        {cover: require('@/assets/home/xcx2.png'), mcover: require('@/assets/home/xcx2active.png'), title: '“麦李”平台'},
        {cover: require('@/assets/home/xcx3.png'), mcover: require('@/assets/home/xcx3active.png'), title: '智慧麦客'},
        {cover: require('@/assets/home/xcx4.png'), mcover: require('@/assets/home/xcx4active.png'), title: '茜于海的婚礼'},
      ],
      gzList: [
        {cover: require('@/assets/home/gzh1.png'), mcover: require('@/assets/home/gzh1active.png'), title: '中国好演员2020年'},
        {cover: require('@/assets/home/gzh2.png'), mcover: require('@/assets/home/gzh2active.png'), title: '熊猫带你游'},
        {cover: require('@/assets/home/gzh3.png'), mcover: require('@/assets/home/gzh3active.png'), title: '蜜蜂接单'},
        {cover: require('@/assets/home/gzh4.png'), mcover: require('@/assets/home/gzh4active.png'), title: '中国好演员2019'},
      ],
      appList: [
        {cover: require('@/assets/home/app1.png'), title: '巴适公交APP', desc: '《巴适公交》是一款基于成都本地“实时公交查询”移动客户端，系成都公交集团官方移动应用。 《巴适公交》提供成都市内周边公交站台导航、公交换乘方式推荐、车辆实时位置查询'},
        {cover: require('@/assets/home/app2.png'), title: '移动OA', desc: '《移动OA》是成都工业投资集团有限公司打造的“移动互联网+办公”的内部管理运营手机APP，通过移动互联网模式下的轻办公、云办公'},
        {cover: require('@/assets/home/app3.png'), title: '零售电商APP', desc: '为了提高消费者购物的体验，市场上发展快速送达业务的平台也逐渐增多了，从运营商品转向“运营人”，从追求商品销售的规模转向提供极致的产品与服务体验上'},
        {cover: require('@/assets/home/app4.png'), title: '田螺阿姨APP', desc: '《田螺阿姨》预约保洁阿姨上门服务家政app，还在担心不知道线下在哪儿找阿姨靠谱？还在担心预约的阿姨不能准时过来？还在担心保洁工具不齐全？'},
      ],
      glList: [
        {cover: require('@/assets/home/gl1.png'), title: '麦李商城管理后台', desc: '类似“美团”本地生活服务、外卖、电商一站式SaaS服务平台——“麦李”商城平台管理系统，由用户端小程序、商家端/核销员端小程序、外卖配送员APP端、本地生活服务/外卖/物流商家PC端'},
        {cover: require('@/assets/home/gl2.png'), title: '遂宁市乡村群宴智慧管理', desc: '“互联网+农村群宴”数字化食安监管云平台——“遂宁市乡村群宴智慧管理SaaS平台”，由“成都奇微科技”携手“龙微数字科技”联合“遂宁市乡村厨师协会”打造，由APP、小程序、公众号、H5、WEB端、可视化平'},
        {cover: require('@/assets/home/gl3.png'), title: '密封微信辅助注册任务', desc: '类似“码帮平台/FZ辅助/码力平台/闪电接单/蜻蜓辅助/雏菊辅助”，第三方微信辅助注册任务管理平台——“蜜蜂”任务平台管理系统，帮助有大量微信注册需求的商家和想要0元投入月入过万的兼职'},
        {cover: require('@/assets/home/gl4.png'), title: 'ETC发行/客户服务综合', desc: '“数字化智能交通服务平台”——四川省ETC发行/客户服务综合管理平台，由APP、小程序、公众号、H5、WEB端、可视化平台、大数据平台等架构而成，依托于大数据、AI、物联网（IOT）、5G'},
      ],
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
  .infull {
    background: #fff;
    box-shadow: 2px 2px 1px #fff;
  }
  .introduce {
      width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 12px 0;
      .item {
        text-align: center;
        border-right: 2px dotted #3d95a3;
        .top {
          font-size: 18px;
          font-weight: bold;
          color: #3d95a3;
          margin-bottom: 6px;
        }
        .bot {
          font-size: 13px;
          color: rgba(0, 0, 0, 0.7);
        }
      }
      .item:last-child {
        border: none;
      }
    }
  .main {
    margin: 0 auto;
    width: 1100px;
    .serviceContainer {
      margin: 34px 0;
      text-align: center;
      .title {
        font-size: 30px;
        color: #333;
        text-align: center;
        line-height: 60px;
      }
      .desc {
        color: #999999;
        line-height: 30px;
        text-align: center;
        font-size: 16px;
      }
    }
    .productList {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 18px;
      row-gap: 18px;
      .item {
        text-align: center;
        padding: 18px 12px;
        background: #fff;
        border: 2px solid transparent;
        &:hover {
          border: 2px solid #26b7ad;
          button {
            background: #26b7ad;
            color: #fff;
          }
        }
        img {
          width: 50px;
          height: 50px;
          margin-bottom: 18px;
        }
        h2 {
          font-weight: bold;
          font-size: 15px;
          margin-bottom: 12px;
        }
        p {
          word-break: break-all;
          font-size: 13px;
          line-height: 21px;
          margin-bottom: 24px;
        }
        button {
          background: #fff;
          color: #26b7ad;
          border: 1px solid #26b7ad;
          padding: 8px 18px;
          font-size: 14px;
          border-radius: 18px;
          cursor: pointer;
        }
      }
    }
    .tabTitle {
      margin-top: 24px;
    }
    .tabContent {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 18px;
      .item {
        position: relative;
        .cover {
          width: 100%;
          height: 500px;
          object-fit: fill;
        }
        .top {
          position: relative;
          &:hover {
            .mask {
              bottom: 0;
            }
          }
          .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            left: 0;
            bottom: -800px;
            transition: all 1.5s;
            display: flex;
            align-items: center;
            justify-content: center;
            .mcontnet {
              box-sizing: border-box;
              width: 90%;
              background: #fff;
              padding: 32px 8px;
              border-radius: 6px;
              text-align: center;
              .mcover {
                width: 90%;
              }
              p {
                line-height: 42px;
                color: #666;
                margin-top: 24px;
                text-align: center;
              }
            }
          }
        }
        .bot {
          background: rgba(0, 0, 0, 0.1);
          text-align: center;
          font-weight: bold;
          line-height: 32px;
          font-size: 16px;
        }
      }
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
.dividerBg {
  background-image: url('../assets/home/mbg.png');
  background-size: 100%;
  margin: 52px 0;
  .dcontent {
    margin: 0 auto;
    text-align: center;
    color: #fff;
    padding: 24px 0;
    background: rgba(0, 0, 0, 0.5);
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    h1 {
      font-size: 38px;
    }
    h2 {
      font-size: 22px;
    }
    h3 {
      font-size: 16px;
      letter-spacing: 4px;
      opacity: 0.8;
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
