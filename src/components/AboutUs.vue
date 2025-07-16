<template>
  <div class="about-us">
    <h1 class="main-title">关于我们</h1>
    <div class="about-content">
      <div class="about-image">
        <img src="@/assets/about.jpg" alt="关于我们图片" />
      </div>
      <div class="about-info">
        <h2>极造极科技有限公司</h2>
        <p>
          极造极是一家专注于高端定制软件开发的技术公司，拥有多年行业经验，服务涵盖APP开发、微信开发、系统开发等多个领域。我们以专业的技术团队、严谨的项目管理和创新的解决方案，为客户提供一站式数字化转型服务。
        </p>
        <ul class="about-highlights">
          <li>● <b>专业团队：</b>核心成员均来自知名互联网企业，具备丰富的项目实战经验。</li>
          <li>● <b>高端定制：</b>根据客户需求量身打造专属解决方案，助力企业数字化升级。</li>
          <li>● <b>优质口碑：</b>累计服务客户超300家，客户满意度高，长期合作率达90%以上。</li>
          <li>● <b>技术实力：</b>精通主流开发技术，持续创新，保障项目高质量交付。</li>
        </ul>
        <div class="about-stats">
          <div class="stat-item">
            <div class="stat-num">300+</div>
            <div class="stat-label">服务客户</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">500+</div>
            <div class="stat-label">成功案例</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">10年+</div>
            <div class="stat-label">行业经验</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>

<style scoped>
.about-us {
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
.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;
}
.about-image img {
  width: 320px;
  max-width: 90vw;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(7,134,81,0.08);
}
.about-info {
  flex: 1 1 350px;
  min-width: 300px;
}
.about-info h2 {
  font-size: 1.6rem;
  color: #222;
  margin-bottom: 12px;
}
.about-info p {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 18px;
  line-height: 1.8;
}
.about-highlights {
  list-style: none;
  padding: 0;
  margin-bottom: 24px;
}
.about-highlights li {
  font-size: 1rem;
  color: #078651;
  margin-bottom: 8px;
}
.about-highlights b {
  color: #222;
}
.about-stats {
  display: flex;
  gap: 32px;
  margin-top: 12px;
}
.stat-item {
  background: #f6fef9;
  border-radius: 8px;
  padding: 18px 28px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(7,134,81,0.04);
}
.stat-num {
  font-size: 1.6rem;
  font-weight: bold;
  color: #078651;
}
.stat-label {
  font-size: 1rem;
  color: #333;
  margin-top: 4px;
}
@media (max-width: 900px) {
  .about-content {
    flex-direction: column;
    gap: 20px;
  }
  .about-image img {
    width: 90vw;
    max-width: 400px;
  }
}
</style> 