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
        <div class="wechat-steps">
          <div class="step-item"><span>1</span> 需求沟通</div>
          <div class="step-item"><span>2</span> 方案设计</div>
          <div class="step-item"><span>3</span> 开发测试</div>
          <div class="step-item"><span>4</span> 上线交付</div>
        </div>
      </div>
    </div>
    <div class="wechat-cases">
      <h3>典型案例</h3>
      <div class="case-list">
        <div class="case-card">
          <img src="@/assets/home/xcx1.png" alt="零售小程序" />
          <div class="case-title">新零售小程序</div>
        </div>
        <div class="case-card">
          <img src="@/assets/home/xcx2.png" alt="教育小程序" />
          <div class="case-title">教育培训小程序</div>
        </div>
        <div class="case-card">
          <img src="@/assets/home/xcx3.png" alt="政务小程序" />
          <div class="case-title">政务服务小程序</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeChatDevelopment',
};
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
  margin-bottom: 24px;
}
.wechat-highlights li {
  font-size: 1rem;
  color: #078651;
  margin-bottom: 8px;
}
.wechat-highlights b {
  color: #222;
}
.wechat-steps {
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
}
</style> 