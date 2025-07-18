<template>
  <div class="news-page">
    <h1 class="main-title">新闻动态 / 公司资讯</h1>
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
    <!-- 新闻列表 -->
    <div class="news-list">
      <div class="news-card" v-for="item in filteredNews" :key="item.id" @click="showDetail(item)">
        <img :src="item.img" :alt="item.title" class="news-img" />
        <div class="news-info">
          <h2 class="news-title">{{ item.title }}</h2>
          <div class="news-meta">
            <span>{{ item.date }}</span>
            <span>{{ item.categoryName }}</span>
          </div>
          <p class="news-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
    <!-- 新闻详情弹窗 -->
    <div v-if="showDialog" class="news-dialog-mask" @click.self="showDialog = false">
      <div class="news-dialog">
        <h2>{{ dialogData.title }}</h2>
        <div class="news-meta">
          <span>{{ dialogData.date }}</span>
          <span>{{ dialogData.categoryName }}</span>
        </div>
        <img :src="dialogData.img" :alt="dialogData.title" class="news-dialog-img" />
        <div class="news-content">{{ dialogData.content }}</div>
        <button class="close-btn" @click="showDialog = false">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      activeCategory: 'all',
      showDialog: false,
      dialogData: {},
      categories: [
        { id: 'all', name: '全部' },
        { id: 'company', name: '公司新闻' },
        { id: 'industry', name: '行业动态' },
        { id: 'tech', name: '技术分享' }
      ],
      news: [
        {
          id: 1,
          category: 'company',
          categoryName: '公司新闻',
          img: require('@/assets/home/company1.png'),
          title: '极造极荣获高新技术企业认证',
          date: '2024-04-10',
          desc: '近日，极造极信息科技有限公司顺利通过高新技术企业认定，标志着公司创新能力和技术实力再上新台阶。',
          content: '近日，极造极信息科技有限公司顺利通过高新技术企业认定，标志着公司创新能力和技术实力再上新台阶。公司将继续加大研发投入，推动技术创新，为客户提供更优质的数字化解决方案。',
          source: '极造极',
          link: ''
        },
        {
          id: 2,
          category: 'industry',
          categoryName: '行业动态',
          img: require('@/assets/home/company2.png'),
          title: '2024年软件行业发展趋势分析',
          date: '2024-03-28',
          desc: '随着AI、大数据、云计算等技术的普及，软件行业正迎来新一轮变革。',
          content: '2024年，软件行业将更加注重智能化、定制化和安全性。企业数字化转型需求持续增长，SaaS、低代码平台等新模式不断涌现。极造极将紧跟行业趋势，持续创新。',
          source: '极造极',
          link: ''
        },
        {
          id: 3,
          category: 'tech',
          categoryName: '技术分享',
          img: require('@/assets/home/company3.png'),
          title: 'Vue3+Vite企业级项目最佳实践',
          date: '2024-03-15',
          desc: '本文分享了极造极团队在Vue3+Vite企业级项目中的架构设计、性能优化等经验。',
          content: '在Vue3+Vite企业级项目中，合理的模块拆分、按需加载、状态管理和自动化测试是提升项目质量的关键。极造极团队积累了丰富的实战经验，欢迎交流。',
          source: '极造极',
          link: ''
        },
        {
          id: 4,
          category: 'company',
          categoryName: '公司新闻',
          img: require('@/assets/home/company4.png'),
          title: '极造极与知名高校达成产学研合作',
          date: '2024-02-20',
          desc: '公司与多所高校签署产学研合作协议，共同推动技术创新与人才培养。',
          content: '极造极信息科技有限公司与多所知名高校签署产学研合作协议，双方将在技术研发、人才培养、项目孵化等方面深入合作，助力企业和高校共同发展。',
          source: '极造极',
          link: ''
        },
        {
          id: 5,
          category: 'tech',
          categoryName: '技术分享',
          img: require('@/assets/home/company5.png'),
          title: '企业如何高效推进数字化转型',
          date: '2024-01-30',
          desc: '数字化转型已成为企业发展的必由之路，本文分享极造极的实践经验。',
          content: '企业数字化转型需从顶层设计、流程优化、技术选型等多方面协同推进。极造极为众多企业提供了定制化数字化解决方案，助力客户高效转型。',
          source: '极造极',
          link: ''
        },
        {
          id: 6,
          category: 'industry',
          categoryName: '行业动态',
          img: require('@/assets/home/company6.png'),
          title: 'OpenAI发布GPT-4 Turbo，支持128k上下文',
          date: '2024-04-08',
          desc: 'OpenAI正式发布GPT-4 Turbo，支持128k上下文窗口，推理速度更快，API价格更低。',
          content: '据36氪报道，OpenAI发布了GPT-4 Turbo，支持128k上下文窗口，推理速度更快，API价格更低。该模型将进一步推动AI应用落地。',
          source: '36氪',
          link: 'https://36kr.com/p/1234567890'
        },
        {
          id: 7,
          category: 'tech',
          categoryName: '技术分享',
          img: require('@/assets/home/company7.png'),
          title: '苹果发布全新M3芯片，性能大幅提升',
          date: '2024-03-30',
          desc: '苹果公司在春季发布会上推出M3芯片，采用3nm工艺，性能和能效大幅提升。',
          content: '据IT之家报道，苹果M3芯片采用3nm工艺，CPU和GPU性能均有大幅提升，未来将应用于Mac、iPad等多款产品。',
          source: 'IT之家',
          link: 'https://www.ithome.com/0/123/456.htm'
        },
        {
          id: 8,
          category: 'industry',
          categoryName: '行业动态',
          img: require('@/assets/home/company8.png'),
          title: '华为发布盘古大模型3.0，赋能千行百业',
          date: '2024-03-25',
          desc: '华为正式发布盘古大模型3.0，聚焦行业落地，助力企业智能化升级。',
          content: '据雷锋网报道，华为盘古大模型3.0在NLP、CV等多领域实现突破，已在金融、制造、政务等行业落地应用。',
          source: '雷锋网',
          link: 'https://www.leiphone.com/category/industrynews/abcdefg'
        },
        {
          id: 9,
          category: 'tech',
          categoryName: '技术分享',
          img: require('@/assets/home/company9.png'),
          title: '前端趋势：2024年Web开发新技术盘点',
          date: '2024-03-18',
          desc: '2024年Web开发领域涌现出许多新技术，包括Server Components、边缘渲染等。',
          content: 'CSDN专栏分析，2024年Web开发将更加关注性能优化、用户体验和AI集成。Server Components、边缘渲染、低代码平台等成为新趋势。',
          source: 'CSDN',
          link: 'https://blog.csdn.net/column/details/web2024.html'
        },
        {
          id: 10,
          category: 'company',
          categoryName: '公司新闻',
          img: require('@/assets/home/company10.png'),
          title: '极造极签约多家知名企业，深化行业合作',
          date: '2024-03-10',
          desc: '极造极信息科技有限公司与多家知名企业达成战略合作，推动行业数字化升级。',
          content: '2024年3月，极造极与多家知名企业签署战略合作协议，双方将在数字化转型、智能制造等领域展开深度合作。',
          source: '极造极',
          link: ''
        },
        {
          id: 11,
          category: 'industry',
          categoryName: '行业动态',
          img: require('@/assets/home/company2.png'),
          title: '微软发布Copilot for Microsoft 365，AI助力办公新体验',
          date: '2024-03-05',
          desc: '微软正式推出Copilot for Microsoft 365，将AI深度集成到Word、Excel、Outlook等办公软件。',
          content: '据36氪报道，微软Copilot for Microsoft 365可自动生成文档、分析数据、智能回复邮件，大幅提升办公效率。',
          source: '36氪',
          link: 'https://36kr.com/p/6543210987'
        },
        {
          id: 12,
          category: 'tech',
          categoryName: '技术分享',
          img: require('@/assets/home/company3.png'),
          title: '大模型落地：企业如何选择AI平台',
          date: '2024-02-28',
          desc: 'AI大模型成为企业数字化转型新引擎，如何选择合适的平台？',
          content: 'CSDN专栏分析，企业应关注大模型平台的开放性、生态、数据安全和定制能力，结合自身业务场景选择最优方案。',
          source: 'CSDN',
          link: 'https://blog.csdn.net/column/details/ai-platform.html'
        },
        {
          id: 13,
          category: 'company',
          categoryName: '公司新闻',
          img: require('@/assets/home/company4.png'),
          title: '极造极亮相2024中国软件大会，展示创新成果',
          date: '2024-02-15',
          desc: '极造极受邀参加中国软件大会，展示AI+软件开发、智慧园区等创新解决方案。',
          content: '在2024中国软件大会上，极造极展示了AI+软件开发、智慧园区、企业数字化等创新成果，获得业界广泛关注。',
          source: '极造极',
          link: ''
        },
        {
          id: 14,
          category: 'industry',
          categoryName: '行业动态',
          img: require('@/assets/home/company5.png'),
          title: '阿里云发布通义千问2.0，开放大模型能力',
          date: '2024-02-10',
          desc: '阿里云正式发布通义千问2.0，开放API接口，助力企业智能化升级。',
          content: '据雷锋网报道，通义千问2.0在多模态理解、推理能力等方面实现突破，支持企业定制专属大模型。',
          source: '雷锋网',
          link: 'https://www.leiphone.com/category/industrynews/hijklmn'
        },
        {
          id: 15,
          category: 'tech',
          categoryName: '技术分享',
          img: require('@/assets/home/company6.png'),
          title: '低代码平台助力企业敏捷开发',
          date: '2024-01-25',
          desc: '低代码平台成为企业数字化转型利器，极大提升开发效率。',
          content: 'IT之家报道，低代码平台可视化拖拽、自动生成代码，适合快速搭建业务系统，降低开发门槛。',
          source: 'IT之家',
          link: 'https://www.ithome.com/0/654/321.htm'
        },
        {
          id: 16,
          category: 'company',
          categoryName: '公司新闻',
          img: require('@/assets/home/company7.png'),
          title: '极造极通过ISO 27001信息安全认证',
          date: '2024-01-18',
          desc: '公司顺利通过ISO 27001信息安全管理体系认证，保障客户数据安全。',
          content: '极造极高度重视信息安全，已通过ISO 27001认证，持续为客户提供安全可靠的数字化服务。',
          source: '极造极',
          link: ''
        },
        {
          id: 17,
          category: 'industry',
          categoryName: '行业动态',
          img: require('@/assets/home/company8.png'),
          title: '百度文心一言升级，支持多语言对话',
          date: '2024-01-10',
          desc: '百度文心一言大模型升级，支持中英等多语言对话，拓展海外市场。',
          content: '据36氪报道，百度文心一言大模型升级，支持多语言对话和多模态理解，助力企业全球化。',
          source: '36氪',
          link: 'https://36kr.com/p/9876543210'
        },
        {
          id: 18,
          category: 'tech',
          categoryName: '技术分享',
          img: require('@/assets/home/company9.png'),
          title: 'Serverless架构在企业中的应用实践',
          date: '2023-12-28',
          desc: 'Serverless架构正被越来越多企业采用，提升弹性和运维效率。',
          content: 'CSDN专栏介绍，Serverless架构可按需弹性扩展，降低运维成本，适合高并发场景。',
          source: 'CSDN',
          link: 'https://blog.csdn.net/column/details/serverless.html'
        }
      ]
    }
  },
  computed: {
    filteredNews() {
      if (this.activeCategory === 'all') {
        return this.news;
      }
      return this.news.filter(item => item.category === this.activeCategory);
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
.news-page {
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
.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}
.news-card {
  background: #f6fef9;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(7,134,81,0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(7,134,81,0.12);
}
.news-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  background: #e8f5ee;
}
.news-info {
  flex: 1;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.news-title {
  font-size: 1.2rem;
  color: #078651;
  margin-bottom: 8px;
  font-weight: bold;
}
.news-meta {
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 8px;
  display: flex;
  gap: 18px;
}
.news-desc {
  font-size: 0.98rem;
  color: #444;
  line-height: 1.6;
  word-break: break-all;
  white-space: normal;
}
/* 新闻详情弹窗 */
.news-dialog-mask {
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.35);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.news-dialog {
  background: #fff;
  border-radius: 12px;
  max-width: 520px;
  width: 96vw;
  padding: 32px 24px 24px 24px;
  box-shadow: 0 8px 32px rgba(7,134,81,0.13);
  position: relative;
}
.news-dialog h2 {
  font-size: 1.3rem;
  color: #078651;
  margin-bottom: 8px;
}
.news-dialog .news-meta {
  margin-bottom: 12px;
}
.news-dialog-img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
}
.news-content {
  font-size: 1rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 18px;
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
@media (max-width: 768px) {
  .news-list {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .news-img {
    width: 100%;
    height: 160px;
    border-radius: 12px 12px 0 0;
  }
  .news-info {
    padding: 14px 12px;
  }
}
</style> 