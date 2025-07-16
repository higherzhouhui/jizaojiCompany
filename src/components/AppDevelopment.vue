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
        <div class="app-steps">
          <div class="step-item"><span>1</span> 需求沟通</div>
          <div class="step-item"><span>2</span> 方案设计</div>
          <div class="step-item"><span>3</span> 开发测试</div>
          <div class="step-item"><span>4</span> 上线交付</div>
        </div>
      </div>
    </div>
    <div class="app-cases">
      <h3>典型案例</h3>
      <div class="case-list">
        <div class="case-card">
          <img src="@/assets/home/app1.png" alt="医疗APP" />
          <div class="case-title">智慧医疗APP</div>
        </div>
        <div class="case-card">
          <img src="@/assets/home/app2.png" alt="教育APP" />
          <div class="case-title">在线教育APP</div>
        </div>
        <div class="case-card">
          <img src="@/assets/home/app3.png" alt="零售APP" />
          <div class="case-title">新零售APP</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDevelopment',
};
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
  margin-bottom: 24px;
}
.app-highlights li {
  font-size: 1rem;
  color: #078651;
  margin-bottom: 8px;
}
.app-highlights b {
  color: #222;
}
.app-steps {
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
}
</style> 