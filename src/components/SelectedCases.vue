<template>
  <div class="selected-cases">
    <h1 class="main-title">精选案例</h1>
    
    <!-- 分类筛选 -->
    <div class="filter-section">
      <div class="filter-tabs">
        <div 
          v-for="category in categories" 
          :key="category.id"
          class="filter-tab"
          :class="{ active: activeCategory === category.id }"
          @click="activeCategory = category.id"
        >
          {{ category.name }}
        </div>
      </div>
    </div>

    <!-- 案例展示 -->
    <div class="cases-list">
      <div class="case-card" v-for="(item, idx) in filteredCases" :key="idx" @click="showDetail(item)">
        <div class="case-image">
          <img :src="item.img" :alt="item.title" />
          <div class="case-overlay">
            <div class="case-tech">
              <span v-for="tech in item.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
        <div class="case-info">
          <h2 class="case-title">{{ item.title }}</h2>
          <p class="case-desc">{{ item.desc }}</p>
          <div class="case-meta">
            <div class="case-industry">{{ item.industry }}</div>
            <div class="case-duration">{{ item.duration }}</div>
          </div>
          <div class="case-features">
            <div v-for="feature in item.features" :key="feature" class="feature-item">
              <span class="feature-icon">✓</span>
              {{ feature }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 案例详情弹窗 -->
    <div v-if="showDialog" class="case-dialog-mask" @click.self="showDialog = false">
      <div class="case-dialog">
        <h2>{{ dialogData.title }}</h2>
        <div class="case-meta">
          <span>{{ dialogData.industry }}</span>
          <span>{{ dialogData.duration }}</span>
        </div>
        <img :src="dialogData.img" :alt="dialogData.title" class="case-dialog-img" />
        <div class="case-dialog-desc">{{ dialogData.desc }}</div>
        <div class="case-dialog-section">
          <b>主要技术：</b>
          <span v-for="tech in dialogData.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
        </div>
        <div class="case-dialog-section">
          <b>项目亮点：</b>
          <ul>
            <li v-for="feature in dialogData.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
        <button class="close-btn" @click="showDialog = false">关闭</button>
      </div>
    </div>
    <!-- 客户logo墙 -->
    <div class="logo-wall">
      <h3>部分合作客户</h3>
      <div class="logo-list">
        <img v-for="(logo, idx) in logoList" :key="idx" :src="logo.src" :alt="logo.alt" class="logo-item" />
      </div>
    </div>
    <!-- 统计数据 -->
    <div class="stats-section">
      <div class="stats-item">
        <div class="stats-number">500+</div>
        <div class="stats-label">成功案例</div>
      </div>
      <div class="stats-item">
        <div class="stats-number">50+</div>
        <div class="stats-label">合作客户</div>
      </div>
      <div class="stats-item">
        <div class="stats-number">98%</div>
        <div class="stats-label">客户满意度</div>
      </div>
      <div class="stats-item">
        <div class="stats-number">5年+</div>
        <div class="stats-label">行业经验</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectedCases',
  data() {
    return {
      activeCategory: 'all',
      showDialog: false,
      dialogData: {},
      categories: [
        { id: 'all', name: '全部案例' },
        { id: 'app', name: 'APP开发' },
        { id: 'wechat', name: '微信开发' },
        { id: 'system', name: '系统开发' },
        { id: 'web', name: '网站建设' },
        { id: 'finance', name: '金融' },
        { id: 'energy', name: '能源' },
        { id: 'retail', name: '零售' },
        { id: 'gov', name: '政务' },
        { id: 'health', name: '健康险' }
      ],
      cases: [
        {
          id: 1,
          category: 'app',
          img: require('@/assets/home/company1.png'),
          title: '智慧医疗APP',
          desc: '为三甲医院定制开发的智慧医疗平台，支持预约挂号、在线问诊、健康档案、药品配送等功能，提升医疗服务效率30%。',
          industry: '医疗健康',
          duration: '3个月',
          technologies: ['Vue.js', 'Node.js', 'MySQL', '微信支付'],
          features: ['预约挂号系统', '在线问诊', '健康档案管理', '药品配送']
        },
        {
          id: 2,
          category: 'system',
          img: require('@/assets/home/company2.png'),
          title: '企业ERP管理系统',
          desc: '为大型制造企业打造的ERP系统，实现生产、库存、财务、人事一体化管理，助力企业数字化升级。',
          industry: '制造业',
          duration: '6个月',
          technologies: ['Vue.js', 'Spring Boot', 'Oracle', 'Redis'],
          features: ['生产管理', '库存管理', '财务管理', '人事管理']
        },
        {
          id: 3,
          category: 'wechat',
          img: require('@/assets/home/company3.png'),
          title: '新零售小程序',
          desc: '为连锁零售品牌开发的小程序商城，支持线上线下融合、会员营销、数据分析等功能。',
          industry: '零售电商',
          duration: '2个月',
          technologies: ['微信小程序', '云开发', '微信支付', '数据分析'],
          features: ['商品展示', '在线下单', '会员积分', '营销活动']
        },
        {
          id: 4,
          category: 'app',
          img: require('@/assets/home/company4.png'),
          title: '在线教育平台',
          desc: '为知名教育机构开发的在线学习平台，支持直播课程、题库练习、智能评测等。',
          industry: '教育培训',
          duration: '4个月',
          technologies: ['React Native', 'WebRTC', 'MongoDB', 'AI算法'],
          features: ['直播课程', '题库练习', '智能评测', '学习分析']
        },
        {
          id: 5,
          category: 'system',
          img: require('@/assets/home/company5.png'),
          title: '智慧园区管理系统',
          desc: '为科技园区定制的智慧管理系统，集成门禁、访客、能耗监控、停车管理等多种功能。',
          industry: '园区管理',
          duration: '5个月',
          technologies: ['Vue.js', 'IoT', '大数据', 'AI识别'],
          features: ['门禁管理', '访客登记', '能耗监控', '停车管理']
        },
        {
          id: 6,
          category: 'system',
          img: require('@/assets/home/company6.png'),
          title: '物流调度平台',
          desc: '为物流企业开发的智能调度平台，实现车辆、订单、路线的高效管理。',
          industry: '物流运输',
          duration: '4个月',
          technologies: ['Vue.js', '算法优化', 'GPS定位', '实时监控'],
          features: ['车辆调度', '路线优化', '实时监控', '数据分析']
        },
        {
          id: 7,
          category: 'wechat',
          img: require('@/assets/home/xcx1.png'),
          title: '政务服务小程序',
          desc: '为政府部门开发的便民服务小程序，提供政务查询、在线办理、进度跟踪等功能。',
          industry: '政务服务',
          duration: '3个月',
          technologies: ['微信小程序', '政务API', '身份认证', '电子签章'],
          features: ['政务查询', '在线办理', '进度跟踪', '便民服务']
        },
        {
          id: 8,
          category: 'web',
          img: require('@/assets/home/company7.png'),
          title: '企业官网建设',
          desc: '为多家企业定制开发的专业官网，包含品牌展示、产品介绍、在线咨询等功能。',
          industry: '企业服务',
          duration: '1个月',
          technologies: ['Vue.js', '响应式设计', 'SEO优化', '内容管理'],
          features: ['品牌展示', '产品介绍', '在线咨询', '新闻动态']
        },
        // 新增案例
        {
          id: 19,
          category: 'finance',
          img: require('@/assets/home/company8.png'),
          title: '银行智能风控平台',
          desc: '为大型银行定制的智能风控系统，实现实时风险监控与自动预警，提升金融安全。',
          industry: '金融',
          duration: '8个月',
          technologies: ['大数据', 'AI风控', 'Spring Boot', 'Kafka'],
          features: ['实时监控', '自动预警', '多维度数据分析', '合规管理']
        },
        {
          id: 20,
          category: 'energy',
          img: require('@/assets/home/company9.png'),
          title: '能源企业数据中台',
          desc: '为能源集团搭建统一数据中台，实现多业务系统数据整合与智能分析。',
          industry: '能源',
          duration: '10个月',
          technologies: ['数据中台', 'ETL', 'BI', '微服务'],
          features: ['数据整合', '智能分析', '多系统对接', '可视化报表']
        },
        {
          id: 21,
          category: 'retail',
          img: require('@/assets/home/company10.png'),
          title: '零售集团会员营销平台',
          desc: '为全国连锁零售集团开发会员营销平台，支持积分、优惠券、精准营销等功能。',
          industry: '零售',
          duration: '6个月',
          technologies: ['小程序', '大数据', '营销自动化'],
          features: ['会员管理', '积分系统', '营销活动', '数据分析']
        },
        {
          id: 22,
          category: 'gov',
          img: require('@/assets/home/company7.png'),
          title: '智慧政务一体化平台',
          desc: '为地方政府打造的政务服务平台，集成审批、办事、数据共享等功能，提升政务效率。',
          industry: '政务',
          duration: '12个月',
          technologies: ['Vue.js', 'Spring Cloud', '政务API'],
          features: ['在线审批', '数据共享', '智能办事', '移动端适配']
        },
        {
          id: 23,
          category: 'health',
          img: require('@/assets/home/company6.png'),
          title: '健康险核心业务系统',
          desc: '为保险公司开发的健康险核心系统，支持保单管理、理赔、智能核保等业务。',
          industry: '医疗健康保险',
          duration: '9个月',
          technologies: ['Java', 'Oracle', '规则引擎'],
          features: ['保单管理', '理赔管理', '智能核保', '客户服务']
        }
      ],
      logoList: [
        require('@/assets/home/company1.png'),
        require('@/assets/home/company2.png'),
        require('@/assets/home/company3.png'),
        require('@/assets/home/company4.png'),
        require('@/assets/home/company5.png'),
        require('@/assets/home/company6.png'),
        require('@/assets/home/company7.png'),
        require('@/assets/home/company8.png'),
        require('@/assets/home/company9.png'),
        require('@/assets/home/company10.png')
      ].map((src, i) => ({ src, alt: `客户logo${i+1}` }))
    }
  },
  computed: {
    filteredCases() {
      if (this.activeCategory === 'all') {
        return this.cases;
      }
      return this.cases.filter(case_item => case_item.category === this.activeCategory);
    }
  },
  methods: {
    showDetail(item) {
      this.dialogData = item;
      this.showDialog = true;
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

/* 筛选区域 */
.filter-section {
  margin-bottom: 32px;
}
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
.filter-tab {
  padding: 8px 20px;
  border-radius: 20px;
  background: #f5f5f5;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
}
.filter-tab:hover {
  background: #e8f5ee;
  color: #078651;
}
.filter-tab.active {
  background: #078651;
  color: #fff;
}

/* 案例列表 */
.cases-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}
.case-card {
  background: #f6fef9;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(7,134,81,0.06);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(7,134,81,0.12);
}
.case-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}
.case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.case-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(7,134,81,0.8);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.case-card:hover .case-overlay {
  opacity: 1;
}
.case-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}
.tech-tag {
  background: rgba(255,255,255,0.9);
  color: #078651;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}
.case-info {
  padding: 20px;
}
.case-title {
  font-size: 1.3rem;
  color: #078651;
  margin-bottom: 8px;
  font-weight: bold;
}
.case-desc {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 12px;
}
.case-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 0.85rem;
}
.case-industry {
  color: #078651;
  font-weight: bold;
}
.case-duration {
  color: #999;
}
.case-features {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.feature-item {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #555;
}
.feature-icon {
  color: #078651;
  margin-right: 6px;
  font-weight: bold;
}

/* 统计数据 */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid #eee;
}
.stats-item {
  text-align: center;
  padding: 20px;
  background: #f6fef9;
  border-radius: 8px;
}
.stats-number {
  font-size: 2rem;
  font-weight: bold;
  color: #078651;
  margin-bottom: 8px;
}
.stats-label {
  font-size: 0.9rem;
  color: #666;
}

/* 案例详情弹窗 */
.case-dialog-mask {
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.35);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.case-dialog {
  background: #fff;
  border-radius: 12px;
  max-width: 520px;
  width: 96vw;
  padding: 32px 24px 24px 24px;
  box-shadow: 0 8px 32px rgba(7,134,81,0.13);
  position: relative;
}
.case-dialog h2 {
  font-size: 1.3rem;
  color: #078651;
  margin-bottom: 8px;
}
.case-dialog .case-meta {
  margin-bottom: 12px;
  color: #999;
  font-size: 0.95rem;
  display: flex;
  gap: 18px;
}
.case-dialog-img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
}
.case-dialog-desc {
  font-size: 1rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 12px;
}
.case-dialog-section {
  margin-bottom: 12px;
  font-size: 0.98rem;
}
.close-btn {
  background: #078651;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 24px;
  font-size: 1rem;
  cursor: pointer;
  position: absolute;
  right: 24px;
  bottom: 18px;
  transition: background 0.2s;
}
.close-btn:hover {
  background: #055c38;
}
.logo-wall {
  margin: 48px 0 24px 0;
  text-align: center;
}
.logo-wall h3 {
  font-size: 1.1rem;
  color: #078651;
  margin-bottom: 18px;
  font-weight: bold;
}
.logo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}
.logo-item {
  width: 80px;
  height: 48px;
  object-fit: contain;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(7,134,81,0.04);
}
@media (max-width: 768px) {
  .cases-list {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .case-card {
    margin: 0 8px;
  }
  .filter-tabs {
    gap: 8px;
  }
  .filter-tab {
    padding: 6px 16px;
    font-size: 0.8rem;
  }
  .stats-section {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .logo-list {
    gap: 12px;
  }
  .logo-item {
    width: 60px;
    height: 36px;
    padding: 4px;
  }
}
</style> 