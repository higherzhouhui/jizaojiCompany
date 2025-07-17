<template>
  <div class="app-development">
    <h1 class="main-title">APP开发</h1>
    <div class="app-content">
      <div class="app-image">
        <img src="@/assets/home/app.png" alt="APP开发" />
      </div>
      <div class="app-info">
        <h2>高端定制APP开发服务</h2>
        <p>
          我们为各行业客户提供从需求分析、UI设计、开发测试到上线运维的一站式APP开发服务，支持iOS、Android等多平台，助力企业实现移动互联网转型。
        </p>
        <ul class="app-highlights">
          <li>● <b>全流程服务：</b>需求梳理、原型设计、开发测试、上线运维全覆盖。</li>
          <li>● <b>多平台兼容：</b>原生/混合开发，适配主流手机系统。</li>
          <li>● <b>丰富案例：</b>医疗、教育、零售、政务等行业均有成功案例。</li>
        </ul>
        <!-- 服务类型 -->
        <div class="service-types">
          <div class="service-type">原生APP开发</div>
          <div class="service-type">混合APP开发</div>
          <div class="service-type">企业专属定制</div>
          <div class="service-type">APP上架运维</div>
        </div>
        <!-- 技术栈标签 -->
        <div class="tech-stack">
          <span class="tech-tag">Vue.js</span>
          <span class="tech-tag">React Native</span>
          <span class="tech-tag">Flutter</span>
          <span class="tech-tag">Node.js</span>
          <span class="tech-tag">Java</span>
          <span class="tech-tag">Swift</span>
          <span class="tech-tag">Kotlin</span>
        </div>
        <!-- 开发流程图 -->
        <div class="app-steps">
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
    <div class="app-cases">
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
        <div class="stats-number">100+</div>
        <div class="stats-label">APP项目交付</div>
      </div>
      <div class="stats-item">
        <div class="stats-number">30+</div>
        <div class="stats-label">服务行业</div>
      </div>
      <div class="stats-item">
        <div class="stats-number">95%</div>
        <div class="stats-label">客户复购率</div>
      </div>
      <div class="stats-item">
        <div class="stats-number">4.9分</div>
        <div class="stats-label">客户好评</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDevelopment',
  data() {
    return {
      cases: [
        {
          img: require('@/assets/home/app1.png'),
          title: '智慧医疗APP',
          desc: '为三甲医院打造的医疗服务平台，支持预约挂号、在线问诊、健康档案等功能。',
          tags: ['医疗', 'Vue.js', 'iOS', 'Android']
        },
        {
          img: require('@/assets/home/app2.png'),
          title: '在线教育APP',
          desc: '为教育机构开发的在线学习平台，支持直播课程、题库练习、智能评测。',
          tags: ['教育', 'React Native', '直播']
        },
        {
          img: require('@/assets/home/app3.png'),
          title: '新零售APP',
          desc: '为零售品牌开发的移动商城，支持会员营销、数据分析、线上线下融合。',
          tags: ['零售', 'Flutter', '大数据']
        },
        {
          img: require('@/assets/home/app4.png'),
          title: '政务服务APP',
          desc: '为政府部门开发的便民服务APP，提供政务查询、在线办理、进度跟踪等功能。',
          tags: ['政务', 'Java', 'Android']
        },
        {
          img: require('@/assets/home/app.png'),
          title: '企业管理APP',
          desc: '为企业定制开发的管理工具，支持OA、CRM、ERP等多种业务场景。',
          tags: ['企业', 'Kotlin', 'iOS']
        }
      ]
    }
  }
}
</script>

<style scoped>
.app-development {
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
.app-content {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;
}
.app-image img {
  width: 320px;
  max-width: 90vw;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(7,134,81,0.08);
}
.app-info {
  flex: 1 1 350px;
  min-width: 300px;
}
.app-info h2 {
  font-size: 1.6rem;
  color: #222;
  margin-bottom: 12px;
}
.app-info p {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 18px;
  line-height: 1.8;
}
.app-highlights {
  list-style: none;
  padding: 0;
  margin-bottom: 18px;
}
.app-highlights li {
  font-size: 1rem;
  color: #078651;
  margin-bottom: 8px;
}
.app-highlights b {
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
.app-steps {
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
.app-cases {
  margin-top: 40px;
}
.app-cases h3 {
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
  .app-content {
    flex-direction: column;
    gap: 20px;
  }
  .app-image img {
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