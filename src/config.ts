// 全站内容单一配置源：改这里即可更新整站，无需改动组件。

const t2i = (prompt: string, image_size: string) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=${image_size}`;

export const siteConfig = {
  name: "李路通",
  title: "运维开发工程师 · Go / Kubernetes 平台开发",
  jobObjective: "Go 开发 / 运维开发 / SRE 工程师",
  description:
    "Alex Li：用 Go 造平台的运维开发工程师。从 0 到 1 独立交付 TRM 云原生智能研运平台（九大模块），擅长 Kubernetes 二次开发、Go 后端、Vue 3 前端、可观测性与自动化。",
  siteUrl: "https://alexli-dev.github.io",
  accentColor: "#2563EB",
  heroBadges: ["GO", "KUBERNETES", "PLATFORM ENGINEERING", "VUE 3", "AIOPS", "FINOPS"],
  heroStatement:
    "我不做手工运维，我用 Go 把运维能力沉淀成平台——从 0 到 1 独立交付覆盖九大模块的云原生智能研运平台，让复杂系统稳定、可观测、可自动化。",
  social: {
    email: "2119084416@qq.com",
    github: "https://github.com/AlexLi-Dev",
    zsxq: "https://wx.zsxq.com/group/48888212411248",
  },
  about: [
    "我是一名用 Go 造平台的运维开发工程师。两年时间，我从 0 到 1 设计并开发了 TRM——一个覆盖多集群、边缘云、AIOps、FinOps 的云原生智能研运平台：九大模块，前后端全部独立交付，代码与架构完全公开。",
    "我的差异化是全栈交付：Go + Gin 写后端服务与自动化工具，client-go 做 Kubernetes 二次开发（CRD / Operator / Webhook），Vue 3 + TypeScript 独立完成前端；Prometheus / Grafana、ELK 建立可观测边界，Ansible、Terraform、Argo CD 把环境交付全部流水线化。",
    "我相信稳定性是工程化的结果，不是人守出来的运气：重复的事情自动化，重要的事情度量出来，每一次故障都沉淀成监控、告警或工具——让系统被看见，让失败有迹可循，让下一次故障不再重复发生。",
  ],
  capabilityGroups: [
    {
      name: "编程语言与开发能力",
      skills: ["Go", "Goroutine / Channel", "Gin", "GoFrame", "设计模式", "Shell"],
      details: [
        "深厚的 Go 开发与并发编程功底，深入理解 Slice、Map、Channel、Goroutine 底层实现原理，高效编写高并发、高性能后端服务。",
        "熟练使用 Gin、GoFrame 框架开发 Web 服务与微服务，快速构建稳定后端。",
        "熟练应用多种设计模式优化代码结构，提高可维护性、可扩展性与复用性。",
        "具备 Shell 日常运维脚本开发能力，编写高效自动化运维脚本。",
      ],
    },
    {
      name: "容器编排与云原生",
      skills: ["Kubernetes", "CRD / Operator", "Webhook", "RBAC", "K8s 二次开发", "Docker"],
      details: [
        "具备 Kubernetes 集群管理平台开发、容器编排与资源调度能力，深入理解 Pod 生命周期、调度策略、CRD、Operator、准入控制（Webhook）、RBAC 等核心机制。",
        "具有 K8s 二次开发经验。",
        "熟悉 Docker 容器技术，能够编写 Dockerfile 构建镜像，具备容器化服务部署与镜像仓库管理能力。",
      ],
    },
    {
      name: "IaC 与自动化运维",
      skills: ["Ansible", "Terraform", "GitLab CI", "Jenkins", "ArgoCD", "Crossplane", "GitOps"],
      details: [
        "熟练使用 Ansible、Terraform 实现基础设施代码化、批量运维与多环境统一管理。",
        "熟悉 GitLab CI 与 Jenkins 流水线建设，具备云原生 CI/CD 流程设计、质量门禁及自动化部署能力。",
        "具备基于 GitLab + ArgoCD + Crossplane 的 GitOps 经验，实现云资源声明式定义与版本化管控。",
      ],
    },
    {
      name: "可观测性体系建设",
      skills: ["Prometheus", "Grafana", "Zabbix", "ELK", "eBPF", "Cilium Hubble", "Falco"],
      details: [
        "熟练配置与优化 Prometheus + Grafana 监控体系，具备 Zabbix 等传统监控使用经验，实现性能监控与故障预警。",
        "熟练掌握 ELK（Elasticsearch + Logstash + Kibana）日志收集、存储、分析与可视化，支撑运维与故障排查。",
        "了解 eBPF 技术生态，熟悉 Cilium Hubble 网络监控与 Falco 安全检测应用场景。",
      ],
    },
    {
      name: "中间件与基础设施",
      skills: ["MySQL", "Redis", "Kafka", "RabbitMQ", "Nginx", "HAProxy", "Keepalived"],
      details: [
        "熟悉 MySQL 存储引擎、事务隔离级别、索引优化与慢查询分析，具备主从复制 / 读写分离等高可用方案落地经验。",
        "熟悉 Redis 数据结构优化与缓存穿透 / 雪崩 / 击穿解决方案，了解哨兵 / Cluster 高可用架构与持久化机制。",
        "掌握 RabbitMQ 与 Kafka 底层原理（分区 / 副本 / ISR / 消费组），能解决消息积压、重复消费、顺序消息等问题。",
        "具备 Nginx、HAProxy、Keepalived 配置优化能力，可搭建高可用反向代理与负载均衡层。",
      ],
    },
  ],
  trm: {
    name: "TRM",
    chineseName: "云原生智能研运平台",
    tagline: "从 0 到 1 独立设计开发：一个人，交付九大模块与前后端全栈",
    summary:
      "TRM 是我独立设计并开发的云原生智能研运平台。围绕“多集群接入—统一管控—智能运维—成本治理”主线，覆盖集群与节点管理、智驾边缘云、应用工作负载、CICD、AIOps、FinOps、告警中心与系统设置九大模块——它不是教程 Demo，而是按真实生产场景设计、代码与架构全部公开的完整工程。",
    repo: "https://github.com/AlexLi-Dev/Trm",
    caseStudy: "/trm/",
    logo: "/trm/logo.svg",
    console:
      "https://raw.githubusercontent.com/AlexLi-Dev/Trm/main/does/img.png",
    consoleSecondary:
      "https://raw.githubusercontent.com/AlexLi-Dev/Trm/main/does/img_1.png",
    architecture: "/trm/architecture.svg",
    activeStep: 3,
    loop: ["多集群接入", "工作负载", "CICD", "AIOps", "FinOps"],
    facts: [
      { value: "9", label: "大功能模块，前后端全栈独立交付" },
      { value: "20+", label: "核心技术组件（Go/Vue/K8s…）" },
      { value: "多集群", label: "K8s / 边缘云统一纳管" },
    ],
    capabilities: [
      {
        index: "01",
        title: "多集群与边缘云",
        description:
          "集群总览、添加集群、健康巡检与版本升级；节点列表、节点池、节点维护；边缘站点、设备接入与边缘网络统一纳管。",
      },
      {
        index: "02",
        title: "工作负载与 GitOps",
        description:
          "Deployment、Service / Ingress 统一管理，CI 对接 GitLab、CD 对接 Argo CD，配合流水线模板与制品管理。",
      },
      {
        index: "03",
        title: "AIOps 智能运维",
        description:
          "可观测性、根因分析、自动治理与弹性垂直伸缩，让异常从被动响应走向主动发现和自动恢复。",
      },
      {
        index: "04",
        title: "FinOps 成本治理",
        description:
          "成本总览、成本分摊、资源优化与预算告警，把资源用量与成本归属变成可度量、可管控的对象。",
      },
    ],
    modules: [
      { title: "集群管理", detail: "集群总览、列出集群、添加集群、健康巡检、版本升级" },
      { title: "节点管理", detail: "节点列表、节点池、节点维护" },
      { title: "智驾边缘云", detail: "边缘站点、设备接入、边缘网络" },
      { title: "应用工作负载", detail: "Deployment、Service / Ingress、GitOps 发布" },
      { title: "CICD", detail: "CI / GitLab、CD / Argo CD、流水线模板、制品管理" },
      { title: "AIOps 智能运维", detail: "可观测性、根因分析、自动治理、弹性垂直伸缩" },
      { title: "FinOps 成本治理", detail: "成本总览、成本分摊、资源优化、预算告警" },
      { title: "告警中心", detail: "告警规则、告警事件、通知渠道" },
      { title: "系统设置", detail: "权限管理、审计日志、平台集成" },
    ],
    stack: [
      { layer: "前端", items: "Vue 3 + TypeScript + Vite + Element Plus + ECharts" },
      { layer: "后端", items: "Go + Gin + GORM + client-go" },
      { layer: "数据", items: "PostgreSQL + Redis" },
      { layer: "监控", items: "Prometheus + Grafana" },
      { layer: "K8s 交互", items: "client-go + controller-runtime" },
      { layer: "CI/CD", items: "GitLab CI + Argo CD" },
      { layer: "消息", items: "RabbitMQ / Kafka" },
      { layer: "权限", items: "Casbin + JWT" },
    ],
  },
  reliabilityPractice: [
    {
      index: "01",
      eyebrow: "Reliability",
      title: "让每一次故障都留下可复用的防线",
      description:
        "负责 Prometheus / Grafana / ELK 可观测性体系与告警规则建设，把故障响应拆成发现、定位、止损、复盘四步，并将每一项复盘结论转成新的监控指标、告警阈值或自动化检查。",
      outcome: "故障发现从“用户先报”变为“系统先感知”，复盘项可追踪、可回归、不二次发生",
    },
    {
      index: "02",
      eyebrow: "Automation",
      title: "把重复运维操作收敛成自动化流水线",
      description:
        "用 Go 开发巡检、安全扫描与网络检测工具，并通过 CI/CD、Ansible 与 Terraform 把配置变更、环境交付和中间件运维流水线化，减少人工操作窗口和漂移。",
      outcome: "巡检与环境交付脱离人肉操作窗口，全部沉淀为可重复运行、可审计的流水线",
    },
  ],
  aiHarness:
    "我把 AI 当同事而不是神：让 Agent 负责日志聚类、故障假设与运维知识检索，自动化脚本负责确定性执行，关键操作保留人工确认与可观测证据——先用 AI 提升判断效率，再逐步谈自治。",
  projects: [
    {
      name: "front-scaffold",
      eyebrow: "Frontend Engineering",
      description:
        "为团队快速起步而设计的 Vue 3 后台管理脚手架：登录认证、权限化路由、Mock 开发链路与可复用布局，内置用户、产品、订单三个参考模块，开箱即可 Docker + Nginx 部署——让新业务第一天就专注功能，而不是重搭基建。",
      proof: "Pinia · Vue Router · vite-plugin-mock · Vitest · Docker + Nginx 部署",
      link: "https://github.com/AlexLi-Dev/front-scaffold",
      icon: "/logos/vue.svg",
      skills: ["Vue 3", "Vite", "Element Plus", "Pinia", "Axios"],
    },
    {
      name: "ala-city",
      eyebrow: "Backend Project",
      description:
        "Python / Django 全栈商城实践：独立完成 API 设计、数据建模与页面渲染。在 Go 与云原生主线之外，它证明我具备快速切换语言栈、独立打通前后端的能力。",
      proof: "Python · Django · 独立全栈实践",
      link: "https://github.com/AlexLi-Dev/ala-city",
      icon: "/logos/django.svg",
      skills: ["Python", "Django", "SQLite"],
    },
  ],
  notes: {
    intro:
      "工程笔记是我的第二套基础设施：把踩过的坑、读过的源码、排查过的网络故障，沉淀成下一次可以复用的知识。",
    impactFacts: ["Go Runtime", "Kubernetes Internals", "Linux Network"],
    featured: {
      name: "工程笔记 / Engineering Notes",
      tagline: "Think · Write · Share",
      title: "Go GMP 调度模型到底是怎么工作的？",
      flow: ["现象与问题", "源码与机制", "复盘成文"],
      description:
        "从一次高并发服务的调度延迟出发，沿 G、M、P 与 work stealing 机制读源码，理解 goroutine 如何被调度、何时阻塞、系统调用如何处理，再回到服务设计。",
      proof:
        "同系列还包括 Pod 从创建到 Running 的完整链路，以及一次覆盖 DNS、TCP、路由、iptables 的 Linux 网络故障排查。",
      repoLink: "https://github.com/AlexLi-Dev/notes",
    },
  },
  experience: [
    {
      company: "基础设施 / 运维平台团队",
      title: "运维开发工程师 · 2 年经验",
      logo: "/logos/company.svg",
      bullets: [
        "负责 Kubernetes 集群管理与 CI/CD 流水线建设，搭建 Prometheus / Grafana / ELK 全链路可观测体系，让故障从被动响应变为主动感知。",
        "用 Go（Gin / GoFrame）从 0 到 1 开发运维平台与自动化工具，覆盖集群管理、巡检与中间件运维，把重复操作沉淀为平台能力。",
        "保障 MySQL、Redis、Kafka、RabbitMQ 等中间件稳定运行并负责故障应急，坚持“故障必有复盘、复盘必产出防线”，同类问题不重复发生。",
      ],
    },
  ],
  education: [] as Array<{ school: string; degree: string; dateRange: string }>,
  gallery: {
    intro:
      "机房是 SRE 的现场。数据中心的机架、网络设备的指示灯、监控大屏上跳动的曲线——稳定的系统，就藏在这些细节里。",
    images: [
      // { image: t2i("modern data center server room, long corridor of glowing server racks with blue led lights, dark atmosphere, wide angle photograph", "landscape_16_9"), label: "数据中心", alt: "数据中心服务器机架走廊" },
      // { image: t2i("rows of server racks in cloud data center, blinking led lights, glass floor reflection, cinematic lighting", "landscape_16_9"), label: "数据中心", alt: "云数据中心成排机架" },
      // { image: t2i("close up of server rack hardware, blinking status leds and ventilation grilles, shallow depth of field, dark moody photo", "landscape_16_9"), label: "数据中心", alt: "服务器硬件指示灯特写" },
      // { image: t2i("wide shot of cloud computing data center hall, illuminated server cabinets, cold aisle containment, blue ambient light", "landscape_16_9"), label: "数据中心", alt: "云计算数据中心机房" },
      // { image: t2i("engineer hands typing on laptop keyboard in server room, server rack lights in background, night shift, cinematic photo", "landscape_16_9"), label: "数据中心", alt: "机房内笔记本操作现场" },
      // { image: t2i("macro photo of ethernet network cables plugged into switch, glowing ports, shallow depth of field, blue green light", "landscape_16_9"), label: "网络与设备", alt: "交换机网线端口特写" },
      // { image: t2i("network engineer hands connecting fiber optic cable with glowing red laser tip in dark server room", "landscape_16_9"), label: "网络与设备", alt: "光纤熔接现场" },
      // { image: t2i("large network operations center wall screen showing monitoring dashboards and metrics, dark NOC room, wide photo", "landscape_16_9"), label: "网络与设备", alt: "NOC 监控大屏" },
      // { image: t2i("close up of network switch panel with many patch cables, led indicators, rack mounted hardware, detailed photograph", "landscape_16_9"), label: "网络与设备", alt: "配线架与交换机设备" },
      // { image: t2i("cloud server room interior seen through glass door, racks with warm and blue lights, modern tech facility photograph", "landscape_16_9"), label: "网络与设备", alt: "玻璃门后的数据中心" },
    ],
    highlight: {
      image: t2i("site reliability engineer sitting alone in dark server room at night working on laptop, emergency on-call incident response, server racks glowing in background, cinematic realistic photo", "landscape_16_9"),
      label: "夜间应急值守",
      caption: "稳定的系统背后，是有人在看不见的时候守着。",
    },
  },
};
