<template>
  <div class="system-development">
    <h1 class="main-title">系统开发</h1>
    <div class="system-content">
      <div class="system-image">
        <img src="@/assets/home/develop.png" alt="系统开发" />
      </div>
      <div class="system-info">
        <h2>企业级系统开发服务</h2>
        <p>
          提供ERP、CRM、OA、智慧园区等各类企业级系统定制开发，支持Web、移动端多端协同，助力企业数字化升级。
        </p>
        <ul class="system-highlights">
          <li>● <b>全流程定制：</b>从需求分析到系统上线，专属团队全程服务。</li>
          <li>● <b>高可扩展性：</b>模块化设计，支持后期灵活扩展与集成。</li>
          <li>● <b>丰富案例：</b>制造、物流、园区、政务等行业均有成熟系统交付。</li>
        </ul>
        <!-- 服务类型 -->
        <div class="service-types">
          <div class="service-type">ERP系统</div>
          <div class="service-type">CRM系统</div>
          <div class="service-type">OA办公系统</div>
          <div class="service-type">智慧园区系统</div>
          <div class="service-type">定制业务系统</div>
        </div>
        <!-- 技术栈标签 -->
        <div class="tech-stack">
          <span class="tech-tag">Vue.js</span>
          <span class="tech-tag">Spring Boot</span>
          <span class="tech-tag">Node.js</span>
          <span class="tech-tag">MySQL</span>
          <span class="tech-tag">Redis</span>
          <span class="tech-tag">Docker</span>
          <span class="tech-tag">微服务</span>
        </div>
        <!-- 开发流程图 -->
        <div class="system-steps">
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
    <div class="system-cases">
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
        <div class="stats-number">80+</div>
        <div class="stats-label">系统项目交付</div>
      </div>
      <div class="stats-item">
        <div class="stats-number">15+</div>
        <div class="stats-label">服务行业</div>
      </div>
      <div class="stats-item">
        <div class="stats-number">99%</div>
        <div class="stats-label">系统稳定性</div>
      </div>
      <div class="stats-item">
        <div class="stats-number">6年+</div>
        <div class="stats-label">系统开发经验</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SystemDevelopment',
  data() {
    return {
      cases: [
        {
          img: require('@/assets/home/b1.png'),
          title: '制造业ERP系统',
          desc: '为制造企业定制的ERP系统，实现生产、库存、财务、人事等一体化管理。',
          tags: ['ERP', 'Vue.js', 'Spring Boot']
        },
        {
          img: require('@/assets/home/b2.png'),
          title: '智慧园区管理系统',
          desc: '为科技园区开发的智慧管理平台，集成门禁、访客、能耗监控等多种功能。',
          tags: ['园区', 'IoT', '大数据']
        },
        {
          img: require('@/assets/home/b3.png'),
          title: '物流调度系统',
          desc: '为物流企业开发的智能调度系统，实现车辆、订单、路线的高效管理。',
          tags: ['物流', 'Node.js', '算法优化']
        },
        {
          img: require('@/assets/home/company2.png'),
          title: '企业CRM系统',
          desc: '为企业定制开发的客户关系管理系统，支持客户跟进、销售管理、数据分析等。',
          tags: ['CRM', 'Vue.js', 'MySQL']
        },
        {
          img: require('@/assets/home/company5.png'),
          title: 'OA办公系统',
          desc: '为企业打造的OA办公系统，支持流程审批、考勤、公告等功能。',
          tags: ['OA', 'Spring Boot', 'Redis']
        }
      ]
    }
  }
}
</script>

<style scoped>
.system-development {
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
.system-content {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;
}
.system-image img {
  width: 320px;
  max-width: 90vw;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(7,134,81,0.08);
}
.system-info {
  flex: 1 1 350px;
  min-width: 300px;
}
.system-info h2 {
  font-size: 1.6rem;
  color: #222;
  margin-bottom: 12px;
}
.system-info p {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 18px;
  line-height: 1.8;
}
.system-highlights {
  list-style: none;
  padding: 0;
  margin-bottom: 18px;
}
.system-highlights li {
  font-size: 1rem;
  color: #078651;
  margin-bottom: 8px;
}
.system-highlights b {
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
.system-steps {
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
.system-cases {
  margin-top: 40px;
}
.system-cases h3 {
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
  .system-content {
    flex-direction: column;
    gap: 20px;
  }
  .system-image img {
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