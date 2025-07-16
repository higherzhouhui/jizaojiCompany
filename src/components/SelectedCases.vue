<template>
  <div class="selected-cases">
    <h1 class="main-title">精选案例</h1>
    <div class="cases-list">
      <div class="case-card" v-for="(item, idx) in cases" :key="idx">
        <img :src="item.img" :alt="item.title" class="case-img" />
        <div class="case-info">
          <h2 class="case-title">{{ item.title }}</h2>
          <p class="case-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectedCases',
  data() {
    return {
      cases: [
        {
          img: require('@/assets/home/company1.png'),
          title: '智慧医疗APP',
          desc: '为三甲医院定制开发的智慧医疗平台，支持预约挂号、在线问诊、健康档案等功能，提升医疗服务效率。'
        },
        {
          img: require('@/assets/home/company2.png'),
          title: '企业管理系统',
          desc: '为大型制造企业打造的ERP系统，实现生产、库存、财务一体化管理，助力企业数字化升级。'
        },
        {
          img: require('@/assets/home/company3.png'),
          title: '新零售小程序',
          desc: '为连锁零售品牌开发的小程序商城，支持线上线下融合、会员营销、数据分析等功能。'
        },
        {
          img: require('@/assets/home/company4.png'),
          title: '教育培训平台',
          desc: '为知名教育机构开发的在线学习平台，支持直播课程、题库练习、智能评测等。'
        },
        {
          img: require('@/assets/home/company5.png'),
          title: '智慧园区系统',
          desc: '为科技园区定制的智慧管理系统，集成门禁、访客、能耗监控等多种功能。'
        },
        {
          img: require('@/assets/home/company6.png'),
          title: '物流调度平台',
          desc: '为物流企业开发的智能调度平台，实现车辆、订单、路线的高效管理。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.selected-cases {
  max-width: 1200px;
  margin: 40px auto 0 auto;
  padding: 32px 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}
.main-title {
  text-align: center;
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 32px;
  color: #078651;
  letter-spacing: 2px;
}
.cases-list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}
.case-card {
  background: #f6fef9;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(7,134,81,0.06);
  width: 340px;
  min-width: 260px;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 18px 18px 18px;
  transition: box-shadow 0.2s;
}
.case-card:hover {
  box-shadow: 0 6px 24px rgba(7,134,81,0.13);
}
.case-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
  background: #e8f5ee;
}
.case-info {
  text-align: left;
  width: 100%;
}
.case-title {
  font-size: 1.2rem;
  color: #078651;
  margin-bottom: 8px;
  font-weight: bold;
}
.case-desc {
  font-size: 1rem;
  color: #444;
  line-height: 1.7;
}
@media (max-width: 900px) {
  .cases-list {
    gap: 18px;
  }
  .case-card {
    width: 98vw;
    max-width: 400px;
    padding: 16px 8px 12px 8px;
  }
  .case-img {
    height: 120px;
  }
}
</style> 