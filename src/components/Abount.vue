<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <img src="@/assets/about.jpg" class="siteImg"/>
      </div>
      <div class="right">
          <p>
          重庆极造极科技有限公司（www.jizaoji.top）—— 政企数字化专家，荣获【国家高新技术企业】、【国家双软认证企业】、【国家科技型中小企业】、【国家创新型中小企业】、【四川省软件行业协会会员单位】等资质认证，是依托于互联网、物联网（IOT）、云计算、大数据、人工智能（AI）等新一代数字技术，专注于政府和企业数字化转型升级的“互联网软件开发及IT服务商”，由重庆公交集团官方APP《巴适公交》核心研发团队创立，电子科技大学、四川大学校企合作企业，“领先的数字科技服务商”——重庆龙微集团（www.cdlwg.com）旗下企业。
          </p>
          <p>
            公司服务过豪吉集团、重庆三泰控股、四川商通集团、重庆金控集团、中国人民银行四川省分行、箭牌卫浴、华耐家居、蓝光地产、新都智选假日酒店、华润置地、四川万宸地产、大竹县路灯管理所、绵阳利尔化学、深圳翔铭科技、珠海辉钰医疗、广州益车益路、遂宁市乡厨协会、重庆电视台等数百家政企事业单位客户，完成政府和企业数字化产品案例近1000个，帮助客户分享10亿+互联网用户的数字经济红利。
          </p>
          <p>
            公司现拥有25件注册商标、30余件软件著作权、2件作品著作权、1件专利证书等多项知识产权，我们怀抱着“让政企数字化更简单”的使命，多年来专注于网站、公众号、小程序、企业微信、钉钉、APP、CRM、OA、ERP等政府和企业数字化软件定制开发及IT信息技术服务，与电子科技大学、四川大学、巴适公交、四川汽车票务网、三泰控股、重庆实唯科技、四川巨象科技等软硬件合作伙伴形成长期战略合作，强强联合为广大客户提供优质的政企数字化软件定制开发及IT信息技术服务。
          </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Abount',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  margin-top: 90px;
  .content {
    width: 1100px;
    margin: 40px auto;
    background: #fff;
    display: flex;
    align-items: center;
  }
  .siteImg {
    width: 300px;
    object-fit: contain;
  }
  .right {
    margin-left: 60px;
    p {
      font-size: 15px;
      line-height: 21px;
      color: #333;
      margin-bottom: 12px;
    }
  }
}
</style>
