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
        <a name="develop" class="title">我们将为您提供的服务</a>
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
      <a class="serviceContainer" name="anli">
        <div class="title">客户精选案例</div>
        <div class="desc">我们为乌镇微医、蓝光地产、成都电视台、遂宁市市场监督管理局等100+政府和企业，提供了不同行业的数字化产品开发</div>
      </a>
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
      <div class="chooseContainer">
        <div class="item" v-for="item in chooseList" :key="item.title">
          <img :src="item.logo" class="clogo" />
          <img :src="item.logoactive" class="clogoactive" />
          <div class="divider" />
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc  }}</div>
        </div>
      </div>

      <div class="serviceContainer">
        <div class="title">开发服务流程</div>
        <div class="desc">严格把控开发质量，敏捷项目研发流程，运筹帷幄，决胜千里</div>
      </div>
      <div class="developContainer">
        <img src="@/assets/home/develop.png" class="developImg" />
      </div>
      <div class="serviceContainer">
        <div class="title">长期合伙客户</div>
        <div class="desc">为客户创造价值，思客户所想，是相互认可、信赖选择的前提</div>
      </div>
      <div class="companyContainer">
        <div class="item" v-for="item in companyList" :key="item.logo">
          <img :src="item.logo" />
        </div>
      </div>
    </div>
    <div class="dividerBg helpBg">
      <div class="dcontent">
        <h2>马上行动，助力您的政府和企业简单快速数字化</h2>
        <h1>立即咨询</h1>
        <div class="zz">
          <div class="item">
            <img src="@/assets/home/gxqy.png" class="zzlogo"/>
            <span>国家高新技术企业</span>
          </div>
          <div class="item">
            <img src="@/assets/home/srqy.png" class="zzlogo"/>
            <span>国家双软认证企业</span>
          </div>
          <div class="item">
            <img src="@/assets/home/kj.png" class="zzlogo"/>
            <span>国家科技型中小企业</span>
          </div>
          <div class="item">
            <img src="@/assets/home/cx.png" class="zzlogo"/>
            <span>国家创新型中小企业</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import b1 from '@/assets/home/b1.png'
import b2 from '@/assets/home/b2.png'
import b3 from '@/assets/home/b3.png'
import b4 from '@/assets/home/b4.png'
import c1 from '@/assets/home/c1.png'
import c2 from '@/assets/home/c2.png'
import c5 from '@/assets/home/c5.png'

export default {
  name: 'Home',
  data () {
    return {
      carousel: [b1, b2, b3, b4, c1, c2, c5],
      activeName: 'first',
      productList: [
        {logo: require('@/assets/home/app.png'), title: '手机APP定制开发', detail: 'IOS/Android系统手机APP的全功能原生定制开发，打造极致客户体验，覆盖多种智能终端，便于品牌宣传和产品展示'},
        {logo: require('@/assets/home/xcx.png'), title: '微信小程序开发', detail: '火爆的微信小程序定制开发，商城/拼团/酒店/预约/会员卡小程序等应有尽有，让您的服务直达10亿+微信用户'},
        {logo: require('@/assets/home/wx.png'), title: '微信平台开发', detail: '基于微信公众平台订阅号/服务号的二次开发，预约下单、会员管理、物业服务、就医挂号、微信收款等全功能开发'},
        {logo: require('@/assets/home/sc.png'), title: '商城系统开发', detail: '基于APP、H5、公众号或小程序的零售商城、分销商城、积分商城、拼团商城等各类商城定制开发，把您的生意搬到互联网上来'},
        {logo: require('@/assets/home/gl.png'), title: '管理系统开发', detail: '智慧群宴、智慧工厂、CRM、OA、ERP等政府和企业数字化建设，丰富的系统开发经验积累，让我们成为您可靠的信息技术部'},
        {logo: require('@/assets/home/it.png'), title: 'IT信息技术服务', detail: '研发人手不够，技术人员招聘难，技术水平参差不齐，产品长期维护难，专业IT信息技术服务，让您省时省力，省钱省心'}
      ],
      xcxList: [
        {cover: require('@/assets/home/xcx1.png'), mcover: require('@/assets/home/xcx1active.png'), title: '生物城信息通'},
        {cover: require('@/assets/home/xcx2.png'), mcover: require('@/assets/home/xcx2active.png'), title: '“麦李”平台'},
        {cover: require('@/assets/home/xcx3.png'), mcover: require('@/assets/home/xcx3active.png'), title: '智慧麦客'},
        {cover: require('@/assets/home/xcx4.png'), mcover: require('@/assets/home/xcx4active.png'), title: '茜于海的婚礼'}
      ],
      gzList: [
        {cover: require('@/assets/home/gzh1.png'), mcover: require('@/assets/home/gzh1active.png'), title: '中国好演员2020年'},
        {cover: require('@/assets/home/gzh2.png'), mcover: require('@/assets/home/gzh2active.png'), title: '熊猫带你游'},
        {cover: require('@/assets/home/gzh3.png'), mcover: require('@/assets/home/gzh3active.png'), title: '蜜蜂接单'},
        {cover: require('@/assets/home/gzh4.png'), mcover: require('@/assets/home/gzh4active.png'), title: '中国好演员2019'}
      ],
      appList: [
        {cover: require('@/assets/home/app1.png'), title: '巴适公交APP', desc: '《巴适公交》是一款基于成都本地“实时公交查询”移动客户端，系成都公交集团官方移动应用。 《巴适公交》提供成都市内周边公交站台导航、公交换乘方式推荐、车辆实时位置查询'},
        {cover: require('@/assets/home/app2.png'), title: '移动OA', desc: '《移动OA》是成都工业投资集团有限公司打造的“移动互联网+办公”的内部管理运营手机APP，通过移动互联网模式下的轻办公、云办公'},
        {cover: require('@/assets/home/app3.png'), title: '零售电商APP', desc: '为了提高消费者购物的体验，市场上发展快速送达业务的平台也逐渐增多了，从运营商品转向“运营人”，从追求商品销售的规模转向提供极致的产品与服务体验上'},
        {cover: require('@/assets/home/app4.png'), title: '田螺阿姨APP', desc: '《田螺阿姨》预约保洁阿姨上门服务家政app，还在担心不知道线下在哪儿找阿姨靠谱？还在担心预约的阿姨不能准时过来？还在担心保洁工具不齐全？'}
      ],
      glList: [
        {cover: require('@/assets/home/gl1.png'), title: '麦李商城管理后台', desc: '类似“美团”本地生活服务、外卖、电商一站式SaaS服务平台——“麦李”商城平台管理系统，由用户端小程序、商家端/核销员端小程序、外卖配送员APP端、本地生活服务/外卖/物流商家PC端'},
        {cover: require('@/assets/home/gl2.png'), title: '遂宁市乡村群宴智慧管理', desc: '“互联网+农村群宴”数字化食安监管云平台——“遂宁市乡村群宴智慧管理SaaS平台”，由“成都奇微科技”携手“龙微数字科技”联合“遂宁市乡村厨师协会”打造，由APP、小程序、公众号、H5、WEB端、可视化平'},
        {cover: require('@/assets/home/gl3.png'), title: '密封微信辅助注册任务', desc: '类似“码帮平台/FZ辅助/码力平台/闪电接单/蜻蜓辅助/雏菊辅助”，第三方微信辅助注册任务管理平台——“蜜蜂”任务平台管理系统，帮助有大量微信注册需求的商家和想要0元投入月入过万的兼职'},
        {cover: require('@/assets/home/gl4.png'), title: 'ETC发行/客户服务综合', desc: '“数字化智能交通服务平台”——四川省ETC发行/客户服务综合管理平台，由APP、小程序、公众号、H5、WEB端、可视化平台、大数据平台等架构而成，依托于大数据、AI、物联网（IOT）、5G'}
      ],
      chooseList: [
        {logo: require('@/assets/home/choose1.png'), logoactive: require('@/assets/home/choose1active.png'), title: '丰富的开发经验', desc: '100+政企客户的信赖选择，1000+数字化产品案例的积累，10万+微信接口次数调用的经验。'},
        {logo: require('@/assets/home/choose2.png'), logoactive: require('@/assets/home/choose2active.png'), title: '优质的客户服务', desc: '优质的客户服务售前，售中，售后的优质客户服务，为您提供1小时内的技术响应，7x24小时的技术咨询。'},
        {logo: require('@/assets/home/choose3.png'), logoactive: require('@/assets/home/choose3active.png'), title: '高效的研发能力', desc: '新浪、凡客、巴适公交团队的核心研发人员，资深的技术实力，高效的Scrum敏捷研发流程保证。'},
        {logo: require('@/assets/home/choose4.png'), logoactive: require('@/assets/home/choose4active.png'), title: '阿里云安全保障', desc: '国内绝对行业第一的阿里云服务器保障，安全，高速，稳定，防攻击，防丢失，多备份。'}
      ],
      companyList: [
        {logo: require('@/assets/home/company10.png')},
        {logo: require('@/assets/home/company5.png')},
        {logo: require('@/assets/home/company6.png')},
        {logo: require('@/assets/home/company7.png')},
        {logo: require('@/assets/home/company8.png')},
        {logo: require('@/assets/home/company1.png')},
        {logo: require('@/assets/home/company2.png')},
        {logo: require('@/assets/home/company4.png')},
        {logo: require('@/assets/home/company9.png')},
        {logo: require('@/assets/home/company3.png')}
      ]
    }
  },
  methods: {
    handleClick () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  @media screen and (max-width: 1100px) {
    margin-top: 60px;
  }
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
      @media screen and (max-width: 1100px) {
        width: 100%;
        .top {
          font-size: 14px!important;
        }
        .bot {
          font-size: 12px!important;
        }
      }
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
    @media screen and (max-width: 1100px) {
      width: 100%;
      padding: 0 12px;
      box-sizing: border-box;
      .serviceContainer {
        margin: 12px 0!important;
        .title {
          font-size: 16px!important;
          line-height: 24px!important;
        }
        .desc {
          font-size: 13px!important;
          line-height: 21px!important;
        }
      }
    }
    .serviceContainer {
      margin: 36px 0;
      text-align: center;
      display: block;

      .title {
        font-size: 30px;
        color: #333;
        text-align: center;
        line-height: 60px;
        position: relative;
        display: block;
      }
      .title::after {
        content: '';
        width: 32px;
        height: 3px;
        background: #10c02e;
        display: block;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, -50%);
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
      @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(1, 1fr);
      }
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
      row-gap: 18px;
      column-gap: 2px;
      background: #333;
      @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(1, 1fr);
      }
      .item {
        position: relative;
        .cover {
          width: 100%;
          height: 500px;
          object-fit: fill;
        }
        .top {
          position: relative;
          overflow: hidden;
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
          background: rgba(255, 255, 255, 0.2);
          text-align: center;
          font-weight: bold;
          line-height: 32px;
          font-size: 16px;
          color: #fff;
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
    @media screen and (max-width: 1100px) {
      height: 250px;
      padding: 0 12px;
      h1 {
        font-size: 19px;
      }
      h2 {
        font-size: 17px;
      }
      h3 {
        font-size: 14px;
      }
    }
  }
}
.helpBg {
  background-image: url('../assets/home/helpbg.png');
  margin-bottom: 0;
  .dcontent {
    height: 214px;
    .zz {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      width: 100%;
      @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 12px;
        .zzlogo {
          height: 30px!important;
          margin-right: 6px!important;
        }
        span {
          font-size: 12px!important;
        }
      }
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        .zzlogo {
          height: 46px;
          margin-right: 22px;
        }
      }
    }
  }
}
.chooseContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #f5f5f5;
  margin-bottom: 32px;
  row-gap: 18px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .item {
    border-right: 1px solid #f5f5f5;
    padding: 24px 12px;
    text-align: center;
    transition: all 0.3s;
    background: #fff;
    .clogoactive {
      display: none;
    }
    &:hover {
      background: #078651;
      transform: scale(1.04);
      .clogoactive {
        display: inline-block;
      }
      .divider {
        background: #fff;
      }
      .clogo {
        display: none;
      }
      .title {
        color: #fff;
      }
      .desc {
        color: #f5f5f5;
      }
    }
    .divider {
      width: 32px;
      height: 4px;
      background: #078651;
      margin: 32px auto;
    }
    .title {
      font-size: 17px;
      font-weight: bold;
      margin: 12px 0;
    }
    .desc {
      font-size: 15px;
      color: #333;
      line-height: 21px;
    }
  }
  .item:last-child {
    border-right: none;
  }
}
.developContainer {
  margin-bottom: 32px;
  background: rgba(255, 255, 255, 0.6);
  img {
    width: 100%;
  }
}

.companyContainer {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 32px;
  border-bottom: 1px solid #f5f5f5;
  .item {
    border-top: 1px solid #f5f5f5;
    border-right: 1px solid #f5f5f5;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .item:first-child {
    border-left: 1px solid #f5f5f5;
  }
  .item:nth-child(6) {
    border-left: 1px solid #f5f5f5;
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
