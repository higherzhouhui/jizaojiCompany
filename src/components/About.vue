<template>
  <div class="about-container">
    <!-- 公司简介 -->
    <div class="company-intro">
      <h1 class="main-title">关于我们</h1>
      <div class="intro-content">
        <div class="intro-image">
          <img src="@/assets/about.jpg" class="siteImg"/>
        </div>
        <div class="intro-text">
          <h2>重庆极造极科技有限公司</h2>
          <p class="company-tagline">政企数字化专家 · 让政企数字化更简单</p>
          <p>
            重庆极造极科技有限公司（www.jizaoji.top）—— 政企数字化专家，荣获【国家高新技术企业】、【国家双软认证企业】、【国家科技型中小企业】、【国家创新型中小企业】、【四川省软件行业协会会员单位】等资质认证，是依托于互联网、物联网（IOT）、云计算、大数据、人工智能（AI）等新一代数字技术，专注于政府和企业数字化转型升级的"互联网软件开发及IT服务商"。
          </p>
          <p>
            由重庆公交集团官方APP《巴适公交》核心研发团队创立，电子科技大学、四川大学校企合作企业，"领先的数字科技服务商"——重庆龙微集团（www.cdlwg.com）旗下企业。
          </p>
        </div>
      </div>
    </div>

    <!-- 公司荣誉 -->
    <div class="honors-section">
      <h3>公司荣誉</h3>
      <div class="honors-grid">
        <div class="honor-item">
          <div class="honor-icon">🏆</div>
          <h4>国家高新技术企业</h4>
          <p>获得国家高新技术企业认证，技术实力得到国家认可</p>
        </div>
        <div class="honor-item">
          <div class="honor-icon">💼</div>
          <h4>国家双软认证企业</h4>
          <p>软件企业认定和软件产品登记双重认证</p>
        </div>
        <div class="honor-item">
          <div class="honor-icon">🚀</div>
          <h4>国家科技型中小企业</h4>
          <p>被认定为国家科技型中小企业，享受政策支持</p>
        </div>
        <div class="honor-item">
          <div class="honor-icon">🌟</div>
          <h4>国家创新型中小企业</h4>
          <p>创新能力突出，获得国家创新型中小企业认定</p>
        </div>
        <div class="honor-item">
          <div class="honor-icon">🤝</div>
          <h4>四川省软件行业协会会员</h4>
          <p>成为四川省软件行业协会会员单位，行业地位得到认可</p>
        </div>
        <div class="honor-item">
          <div class="honor-icon">📚</div>
          <h4>校企合作企业</h4>
          <p>与电子科技大学、四川大学建立长期校企合作关系</p>
        </div>
      </div>
    </div>

    <!-- 发展历程 -->
    <div class="timeline-section">
      <h3>发展历程</h3>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-year">2018</div>
          <div class="timeline-content">
            <h4>公司成立</h4>
            <p>由重庆公交集团官方APP《巴适公交》核心研发团队创立</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">2019</div>
          <div class="timeline-content">
            <h4>技术积累</h4>
            <p>完成首个政府数字化项目，获得客户高度认可</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">2020</div>
          <div class="timeline-content">
            <h4>规模扩张</h4>
            <p>团队规模扩大，服务客户数量突破100家</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">2021</div>
          <div class="timeline-content">
            <h4>资质认证</h4>
            <p>获得国家高新技术企业、双软认证等重要资质</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">2022</div>
          <div class="timeline-content">
            <h4>技术突破</h4>
            <p>完成近1000个数字化项目，技术实力显著提升</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">2023</div>
          <div class="timeline-content">
            <h4>行业领先</h4>
            <p>成为政企数字化领域的领先服务商，品牌影响力扩大</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 办公环境 -->
    <div class="office-section">
      <h3>办公环境</h3>
      <div class="office-gallery">
        <div class="gallery-item" v-for="(image, index) in officeImages" :key="index">
          <img :src="image.url" :alt="image.title" />
          <div class="image-overlay">
            <h4>{{ image.title }}</h4>
            <p>{{ image.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 团队风采 -->
    <div class="team-section">
      <h3>团队风采</h3>
      <div class="team-intro">
        <p>我们拥有一支经验丰富、技术精湛的专业团队，致力于为客户提供最优质的数字化解决方案。</p>
      </div>
      <div class="team-stats">
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">专业技术人员</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">8+</div>
          <div class="stat-label">平均工作经验</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">25+</div>
          <div class="stat-label">注册商标</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">30+</div>
          <div class="stat-label">软件著作权</div>
        </div>
      </div>
      <div class="team-photos">
        <div class="team-photo" v-for="(member, index) in teamMembers" :key="index">
          <img :src="member.photo" :alt="member.name" />
          <div class="member-info">
            <h4>{{ member.name }}</h4>
            <p>{{ member.position }}</p>
            <p class="member-specialty">{{ member.specialty }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 服务客户 -->
    <div class="clients-section">
      <h3>服务客户</h3>
      <div class="clients-intro">
        <p>公司服务过数百家政企事业单位客户，完成政府和企业数字化产品案例近1000个，帮助客户分享10亿+互联网用户的数字经济红利。</p>
      </div>
      <div class="clients-grid">
        <div class="client-category">
          <h4>政府机构</h4>
          <ul>
            <li>中国人民银行四川省分行</li>
            <li>大竹县路灯管理所</li>
            <li>遂宁市乡厨协会</li>
          </ul>
        </div>
        <div class="client-category">
          <h4>知名企业</h4>
          <ul>
            <li>豪吉集团</li>
            <li>重庆三泰控股</li>
            <li>四川商通集团</li>
            <li>重庆金控集团</li>
          </ul>
        </div>
        <div class="client-category">
          <h4>品牌企业</h4>
          <ul>
            <li>箭牌卫浴</li>
            <li>华耐家居</li>
            <li>蓝光地产</li>
            <li>华润置地</li>
          </ul>
        </div>
        <div class="client-category">
          <h4>科技企业</h4>
          <ul>
            <li>深圳翔铭科技</li>
            <li>珠海辉钰医疗</li>
            <li>广州益车益路</li>
            <li>重庆电视台</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 技术实力 -->
    <div class="tech-section">
      <h3>技术实力</h3>
      <div class="tech-content">
        <div class="tech-intro">
          <p>我们现拥有25件注册商标、30余件软件著作权、2件作品著作权、1件专利证书等多项知识产权，专注于网站、公众号、小程序、企业微信、钉钉、APP、CRM、OA、ERP等政府和企业数字化软件定制开发及IT信息技术服务。</p>
        </div>
        <div class="tech-stack">
          <div class="tech-category">
            <h4>前端技术</h4>
            <div class="tech-tags">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">React</span>
              <span class="tech-tag">Angular</span>
              <span class="tech-tag">微信小程序</span>
            </div>
          </div>
          <div class="tech-category">
            <h4>后端技术</h4>
            <div class="tech-tags">
              <span class="tech-tag">Java</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Python</span>
              <span class="tech-tag">PHP</span>
            </div>
          </div>
          <div class="tech-category">
            <h4>移动开发</h4>
            <div class="tech-tags">
              <span class="tech-tag">React Native</span>
              <span class="tech-tag">Flutter</span>
              <span class="tech-tag">iOS</span>
              <span class="tech-tag">Android</span>
            </div>
          </div>
          <div class="tech-category">
            <h4>云服务</h4>
            <div class="tech-tags">
              <span class="tech-tag">阿里云</span>
              <span class="tech-tag">腾讯云</span>
              <span class="tech-tag">AWS</span>
              <span class="tech-tag">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Abount',
  data () {
    return {
      officeImages: [
        {
          url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
          title: '现代化办公环境',
          description: '宽敞明亮的办公空间，为团队提供舒适的工作环境'
        },
        {
          url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop',
          title: '会议室',
          description: '配备先进设备的会议室，支持远程会议和项目讨论'
        },
        {
          url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop',
          title: '休闲区',
          description: '温馨的休闲区域，让员工在工作之余得到放松'
        },
        {
          url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
          title: '技术研发区',
          description: '专业的研发环境，配备高性能开发设备'
        }
      ],
      teamMembers: [
        {
          photo: 'https://img0.baidu.com/it/u=154250722,3298211454&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
          name: '张总',
          position: '技术总监',
          specialty: '全栈开发专家，10年+开发经验'
        },
        {
          photo: 'https://img1.baidu.com/it/u=3576007136,3721020270&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=560',
          name: '李经理',
          position: '产品经理',
          specialty: '用户体验设计专家，专注产品规划'
        },
        {
          photo: 'https://img2.baidu.com/it/u=2430033801,2939610876&fm=253&fmt=auto&app=138&f=PNG?w=500&h=532',
          name: '王工程师',
          position: '高级开发工程师',
          specialty: '移动端开发专家，精通iOS/Android'
        },
        {
          photo: 'https://tvax4.sinaimg.cn/crop.0.0.721.721.1024/b515fc09ly8hty4ytn0shj20k10k13yy.jpg?KID=imgbed,tva&Expires=1736965956&ssig=4wgBFnbyI7',
          name: '陈设计师',
          position: 'UI/UX设计师',
          specialty: '视觉设计专家，注重用户体验'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.about-container {
  margin-top: 90px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

.main-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #078651;
  margin-bottom: 40px;
  letter-spacing: 2px;
}

/* 公司简介 */
.company-intro {
  background: #fff;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

.intro-content {
  display: flex;
  gap: 40px;
  align-items: center;
}

.intro-image {
  flex-shrink: 0;
}

.siteImg {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.intro-text {
  flex: 1;
}

.intro-text h2 {
  font-size: 1.8rem;
  color: #078651;
  margin-bottom: 8px;
  font-weight: bold;
}

.company-tagline {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
  font-style: italic;
}

.intro-text p {
  font-size: 1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 16px;
}

/* 公司荣誉 */
.honors-section {
  background: #fff;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

.honors-section h3 {
  font-size: 1.8rem;
  color: #078651;
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
}

.honors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.honor-item {
  background: #f6fef9;
  padding: 24px;
  border-radius: 10px;
  text-align: center;
  border-left: 4px solid #078651;
  transition: transform 0.3s ease;
}

.honor-item:hover {
  transform: translateY(-3px);
}

.honor-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.honor-item h4 {
  font-size: 1.2rem;
  color: #078651;
  margin-bottom: 12px;
  font-weight: bold;
}

.honor-item p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

/* 发展历程 */
.timeline-section {
  background: #fff;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

.timeline-section h3 {
  font-size: 1.8rem;
  color: #078651;
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.timeline-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.timeline-year {
  background: #078651;
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.timeline-content h4 {
  font-size: 1.2rem;
  color: #078651;
  margin-bottom: 8px;
  font-weight: bold;
}

.timeline-content p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

/* 办公环境 */
.office-section {
  background: #fff;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

.office-section h3 {
  font-size: 1.8rem;
  color: #078651;
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
}

.office-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.gallery-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: 200px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: #fff;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .image-overlay {
  transform: translateY(0);
}

.image-overlay h4 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  font-weight: bold;
}

.image-overlay p {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* 团队风采 */
.team-section {
  background: #fff;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

.team-section h3 {
  font-size: 1.8rem;
  color: #078651;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
}

.team-intro {
  text-align: center;
  margin-bottom: 30px;
}

.team-intro p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.team-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: #f6fef9;
  border-radius: 10px;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #078651;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
}

.team-photos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.team-photo {
  background: #f6fef9;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease;
}

.team-photo:hover {
  transform: translateY(-5px);
}

.team-photo img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.member-info {
  padding: 20px;
}

.member-info h4 {
  font-size: 1.1rem;
  color: #078651;
  margin-bottom: 8px;
  font-weight: bold;
}

.member-info p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 4px;
}

.member-specialty {
  font-size: 0.85rem;
  color: #888;
  font-style: italic;
}

/* 服务客户 */
.clients-section {
  background: #fff;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

.clients-section h3 {
  font-size: 1.8rem;
  color: #078651;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
}

.clients-intro {
  text-align: center;
  margin-bottom: 30px;
}

.clients-intro p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.client-category {
  background: #f6fef9;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #078651;
}

.client-category h4 {
  font-size: 1.1rem;
  color: #078651;
  margin-bottom: 12px;
  font-weight: bold;
}

.client-category ul {
  list-style: none;
  padding: 0;
}

.client-category li {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 6px;
  padding-left: 16px;
  position: relative;
}

.client-category li:before {
  content: "•";
  color: #078651;
  position: absolute;
  left: 0;
}

/* 技术实力 */
.tech-section {
  background: #fff;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

.tech-section h3 {
  font-size: 1.8rem;
  color: #078651;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
}

.tech-intro {
  text-align: center;
  margin-bottom: 30px;
}

.tech-intro p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.tech-category {
  background: #f6fef9;
  padding: 20px;
  border-radius: 10px;
}

.tech-category h4 {
  font-size: 1.1rem;
  color: #078651;
  margin-bottom: 12px;
  font-weight: bold;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: #078651;
  color: #fff;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .intro-content {
    flex-direction: column;
    gap: 20px;
  }
  
  .siteImg {
    width: 100%;
    max-width: 300px;
  }
  
  .honors-grid,
  .office-gallery,
  .team-photos,
  .clients-grid,
  .tech-stack {
    grid-template-columns: 1fr;
  }
  
  .timeline-item {
    flex-direction: column;
    text-align: center;
  }
  
  .team-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
