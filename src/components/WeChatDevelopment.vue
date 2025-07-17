<template>
  <div class="wechat-development">
    <h1 class="main-title">微信开发</h1>
    <div class="wechat-content">
      <div class="wechat-image">
        <img src="@/assets/home/wx.png" alt="微信开发" />
      </div>
      <div class="wechat-info">
        <h2>全场景微信开发服务</h2>
        <p>
          提供小程序、公众号、企业微信等全生态开发服务，助力企业实现高效获客、智能管理与品牌传播。
        </p>
        <ul class="wechat-highlights">
          <li>● <b>多端覆盖：</b>小程序、H5、公众号、企业微信一站式开发。</li>
          <li>● <b>深度定制：</b>满足不同行业和业务场景的个性化需求。</li>
          <li>● <b>丰富案例：</b>零售、教育、政务、医疗等行业均有成功项目。</li>
        </ul>
        <!-- 服务类型 -->
        <div class="service-types">
          <div class="service-type">微信小程序</div>
          <div class="service-type">微信公众号</div>
          <div class="service-type">企业微信</div>
          <div class="service-type">H5活动开发</div>
        </div>
        <!-- 技术栈标签 -->
        <div class="tech-stack">
          <span class="tech-tag">微信小程序</span>
          <span class="tech-tag">Taro</span>
          <span class="tech-tag">Uni-app</span>
          <span class="tech-tag">Node.js</span>
          <span class="tech-tag">云开发</span>
          <span class="tech-tag">API集成</span>
        </div>
        <!-- 开发流程图 -->
        <div class="wechat-steps">
          <div class="step-item"><span>1</span> 需求沟通</div>
          <div class="step-arrow">→</div>
          <div class="step-item"><span>2</span> 方案设计</div>
          <div class="step-arrow">→</div>
          <div class="step-item"><span>3</span> 开发测试</div>
          <div class="step-arrow">→</div>
          <div class="step-item"><span>4</span> 上线交付</div>
        </div>
      </div>
    </div>
    <!-- 典型案例 -->
    <div class="wechat-cases">
      <h3>典型案例</h3>
      <div class="case-list">
        <div class="case-card" v-for="item in cases" :key="item.title">
          <img :src="item.img" :alt="item.title" />
          <div class="case-title">{{ item.title }}</div>
          <div class="case-desc">{{ item.desc }}</div>
          <div class="case-tags">
            <span v-for="tag in item.tags" :key="tag" class="case-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 统计数据 -->
    <div class="stats-section">
      <div class="stats-item">
        <div class="stats-number">200+</div>
        <div class="stats-label">小程序/公众号项目</div>
      </div>
      <div class="stats-item">
        <div class="stats-number">20+</div>
        <div class="stats-label">服务行业</div>
      </div>
      <div class="stats-item">
        <div class="stats-number">97%</div>
        <div class="stats-label">客户满意度</div>
      </div>
      <div class="stats-item">
        <div class="stats-number">5年+</div>
        <div class="stats-label">微信开发经验</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeChatDevelopment',
  data() {
    return {
      cases: [
        {
          img: require('@/assets/home/xcx1.png'),
          title: '新零售小程序',
          desc: '为连锁零售品牌开发的小程序商城，支持线上线下融合、会员营销、数据分析等功能。',
          tags: ['零售', '微信小程序', '会员营销']
        },
        {
          img: require('@/assets/home/xcx2.png'),
          title: '教育培训小程序',
          desc: '为教育机构开发的在线学习小程序，支持直播课程、题库练习、智能评测。',
          tags: ['教育', 'Uni-app', '直播']
        },
        {
          img: require('@/assets/home/xcx3.png'),
          title: '政务服务小程序',
          desc: '为政府部门开发的便民服务小程序，提供政务查询、在线办理、进度跟踪等功能。',
          tags: ['政务', 'Taro', 'API集成']
        },
        {
          img: require('@/assets/home/xcx4.png'),
          title: '医疗健康小程序',
          desc: '为医疗机构开发的健康管理小程序，支持预约挂号、健康档案、在线问诊等功能。',
          tags: ['医疗', '微信小程序', '健康管理']
        },
        {
          img: require('@/assets/home/wx.png'),
          title: '企业微信办公平台',
          desc: '为企业定制开发的企业微信办公平台，支持OA、审批、考勤等功能。',
          tags: ['企业', '企业微信', 'OA']
        }
      ]
    }
  }
}
</script>

<style scoped>
.wechat-development {
  max-width: 1100px;
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
.wechat-content {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;
}
.wechat-image img {
  width: 320px;
  max-width: 90vw;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(7,134,81,0.08);
}
.wechat-info {
  flex: 1 1 350px;
  min-width: 300px;
}
.wechat-info h2 {
  font-size: 1.6rem;
  color: #222;
  margin-bottom: 12px;
}
.wechat-info p {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 18px;
  line-height: 1.8;
}
.wechat-highlights {
  list-style: none;
  padding: 0;
  margin-bottom: 18px;
}
.wechat-highlights li {
  font-size: 1rem;
  color: #078651;
  margin-bottom: 8px;
}
.wechat-highlights b {
  color: #222;
}
.service-types {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.service-type {
  background: #e8f5ee;
  color: #078651;
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 0.95rem;
  font-weight: bold;
}
.tech-stack {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}
.tech-tag {
  background: #078651;
  color: #fff;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: bold;
}
.wechat-steps {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.step-item {
  background: #f6fef9;
  border-radius: 8px;
  padding: 10px 18px;
  font-size: 1rem;
  color: #078651;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.step-item span {
  display: inline-block;
  background: #078651;
  color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  margin-right: 8px;
  font-size: 1rem;
}
.step-arrow {
  font-size: 1.2rem;
  color: #078651;
  font-weight: bold;
}
.wechat-cases {
  margin-top: 40px;
}
.wechat-cases h3 {
  font-size: 1.3rem;
  color: #078651;
  margin-bottom: 18px;
  font-weight: bold;
}
.case-list {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}
.case-card {
  background: #f6fef9;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(7,134,81,0.06);
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px 12px 8px;
  margin-bottom: 12px;
}
.case-card img {
  width: 100%;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  background: #e8f5ee;
}
.case-title {
  font-size: 1rem;
  color: #078651;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4px;
}
.case-desc {
  font-size: 0.92rem;
  color: #444;
  text-align: center;
  margin-bottom: 6px;
}
.case-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
}
.case-tag {
  background: #078651;
  color: #fff;
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 0.8rem;
  margin-bottom: 2px;
}
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
@media (max-width: 900px) {
  .wechat-content {
    flex-direction: column;
    gap: 20px;
  }
  .wechat-image img {
    width: 90vw;
    max-width: 400px;
  }
  .case-list {
    gap: 12px;
  }
  .case-card {
    width: 98vw;
    max-width: 260px;
  }
  .case-card img {
    height: 70px;
  }
  .stats-section {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}
</style> 