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
        <div class="system-steps">
          <div class="step-item"><span>1</span> 需求沟通</div>
          <div class="step-item"><span>2</span> 方案设计</div>
          <div class="step-item"><span>3</span> 开发测试</div>
          <div class="step-item"><span>4</span> 上线交付</div>
        </div>
      </div>
    </div>
    <div class="system-cases">
      <h3>典型案例</h3>
      <div class="case-list">
        <div class="case-card">
          <img src="@/assets/home/b1.png" alt="ERP系统" />
          <div class="case-title">制造业ERP系统</div>
        </div>
        <div class="case-card">
          <img src="@/assets/home/b2.png" alt="智慧园区系统" />
          <div class="case-title">智慧园区管理系统</div>
        </div>
        <div class="case-card">
          <img src="@/assets/home/b3.png" alt="物流调度系统" />
          <div class="case-title">物流调度系统</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SystemDevelopment',
};
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
  margin-bottom: 24px;
}
.system-highlights li {
  font-size: 1rem;
  color: #078651;
  margin-bottom: 8px;
}
.system-highlights b {
  color: #222;
}
.system-steps {
  display: flex;
  gap: 18px;
  margin-top: 10px;
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
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px 12px 8px;
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
}
</style> 