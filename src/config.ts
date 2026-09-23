// 全站内容单一配置源：改这里即可更新整站，无需改动组件。

const t2i = (prompt: string, image_size: string) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=${image_size}`;

export const siteConfig = {
  name: "Alex Li",
  title: "运维开发工程师",
  jobObjective: "运维开发工程师",
  description:
    "Alex Li 的个人网站：运维开发工程师，专注 Go、Kubernetes、云原生基础设施、可观测性与自动化，把复杂系统变得稳定、可观测、可自动化。",
  siteUrl: "https://alexli-dev.github.io",
  accentColor: "#047857",
  heroStatement: "用自动化与可观测性，把复杂系统变得稳定、可观测、可自动化。",
  social: {
    email: "2119084416@qq.com",
    github: "https://github.com/AlexLi-Dev",
  },
  about: [
    "我是一名运维开发工程师，有 2 年工作经验。我关注的不只是服务能不能跑起来，更是系统为什么稳定、哪里会失败，以及如何让下一次故障不再重复发生。",
    "Go 与云原生是我的底座：用 Gin / GoFrame 构建运维平台与自动化工具，管理 Kubernetes 集群与 CI/CD 流水线，也为 MySQL、Redis、Kafka、RabbitMQ 等中间件建立可观测的运行边界。",
    "我习惯先观察、再变更；把重复的事情自动化，把重要的事情度量出来，把一次排障的经验沉淀成工具、监控、告警或文档——让系统被看见，让失败有迹可循。",
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
  hostChecker: {
    name: "HostChecker",
    chineseName: "主机巡检",
    tagline: "一个把 SSH / TCP 健康检查做成持续流水线的基础设施巡检系统",
    summary:
      "我没有把巡检停留在手动登录服务器敲命令，而是把它做成“发现—探测—采集—告警—观察”的持续流水线：定时调度自动发现主机清单，并发执行 TCP / SSH 探测，结果写入 InfluxDB，异常自动触发告警并沉淀到看板。",
    repo: "https://github.com/AlexLi-Dev/host-checker",
    caseStudy: "/hostchecker/",
    dashboard: t2i(
      "dark monitoring dashboard web UI screenshot, infrastructure host health status panels, SSH and TCP check results table, green and red status indicators, line charts and uptime metrics, Grafana style data visualization, high fidelity interface mockup, widescreen",
      "landscape_16_9"
    ),
    activeStep: 1,
    loop: ["Discover", "Probe", "Collect", "Alert", "Observe"],
    facts: [
      { value: "24/7", label: "持续自动巡检" },
      { value: "TCP/SSH", label: "双协议探测" },
      { value: "4", label: "核心流水线阶段" },
    ],
    capabilities: [
      {
        index: "01",
        title: "Scheduling & Discovery",
        description:
          "定时调度器驱动，从主机清单自动同步发现目标，新增与下线节点无需手工介入巡检任务。",
      },
      {
        index: "02",
        title: "TCP / SSH Probe",
        description:
          "并发执行端口连通性与 SSH 握手探测，配合超时、重试与并发预算，避免探测风暴和假阳性。",
      },
      {
        index: "03",
        title: "Metrics Pipeline",
        description:
          "探测结果统一聚合并写入 InfluxDB，带主机、区域、协议标签，支撑历史趋势与容量判断。",
      },
      {
        index: "04",
        title: "Alerting & Dashboard",
        description:
          "异常按分级规则触发告警，Grafana 看板呈现可用性、探测延迟与失败分布，让状态一目了然。",
      },
    ],
  },
  reliabilityPractice: [
    {
      index: "01",
      eyebrow: "Reliability",
      title: "让每一次故障都留下可复用的防线",
      description:
        "负责 Prometheus / Grafana / ELK 可观测性体系与告警规则建设，把故障响应拆成发现、定位、止损、复盘四步，并将复盘结论转成新的监控指标、告警阈值和自动化检查。",
      outcome: "同类故障的平均发现与恢复时间持续下降，复盘项可追踪、可回归",
    },
    {
      index: "02",
      eyebrow: "Automation",
      title: "把重复运维操作收敛成自动化流水线",
      description:
        "用 Go 开发巡检、安全扫描与网络检测工具，并通过 CI/CD、Ansible 与 Terraform 把配置变更、环境交付和中间件运维流水线化，减少人工操作窗口和漂移。",
      outcome: "常规交付与巡检从人工执行转为流水线自动运行",
    },
  ],
  aiHarness:
    "正在探索 AI × SRE：用 Agent 辅助日志分析、故障定位与运维知识检索——Agent 提供语义判断，自动化脚本负责确定性执行，关键操作仍需人工确认与可观测证据。",
  projects: [
    {
      name: "Kubernetes Lab",
      eyebrow: "Cloud Native",
      description:
        "集群部署、Service、Ingress、Calico、StatefulSet 与故障排查实践；具备 K8s 二次开发经验，理解 CRD、Operator、准入控制等核心机制。",
      proof: "集群部署 · 网络策略 · Operator / CRD 实践",
      link: "https://github.com/AlexLi-Dev/kubernetes-lab",
      icon: "/logos/k8s.svg",
      skills: ["K8s", "Calico", "Docker", "Operator"],
    },
    {
      name: "VPN Connectivity Checker",
      eyebrow: "Network Engineering",
      description:
        "使用 Go 自动检测 OpenVPN 配置、连接状态与网络可达性，支持并发探测、超时重试与结果上报。",
      proof: "Go 并发探测 · OpenVPN · 结果上报",
      link: "https://github.com/AlexLi-Dev/vpn-checker",
      icon: "/logos/vpn.svg",
      skills: ["Go", "OpenVPN", "Network"],
    },
    {
      name: "Server Security Scanner",
      eyebrow: "Security & Compliance",
      description:
        "服务器安全检查、Web 扫描与告警通知的自动化工具，集成 Webhook 与企业微信告警，覆盖基线核查与风险闭环。",
      proof: "基线扫描 · Webhook 告警 · 风险闭环",
      link: "https://github.com/AlexLi-Dev/security-scanner",
      icon: "/logos/security.svg",
      skills: ["Go", "Security", "Webhook"],
    },
    {
      name: "AI × SRE",
      eyebrow: "Emerging Practice",
      description:
        "探索 AI Agent 如何辅助日志分析、故障定位、运维知识检索与自动化执行，让 AI 从“回答问题”走向参与真实 SRE 工作流。",
      proof: "日志分析 · 故障定位 · 知识检索",
      link: "https://github.com/AlexLi-Dev/ai-sre",
      icon: "/logos/ai-sre.svg",
      skills: ["AI", "Agent", "SRE"],
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
        "负责 Kubernetes 集群管理、CI/CD 流水线建设与 Prometheus / Grafana / ELK 可观测性体系搭建。",
        "使用 Go（Gin / GoFrame）开发运维平台与自动化工具，支撑 MySQL、Redis、Kafka、RabbitMQ 等中间件稳定运行。",
        "通过自动化与平台化手段提升系统可靠性与运维效率，负责故障应急响应、根因分析与复盘改进。",
      ],
    },
  ],
  education: [] as Array<{ school: string; degree: string; dateRange: string }>,
  gallery: {
    intro:
      "机房是 SRE 的现场。数据中心的机架、网络设备的指示灯、监控大屏上跳动的曲线——稳定的系统，就藏在这些细节里。",
    images: [
      { image: t2i("modern data center server room, long corridor of glowing server racks with blue led lights, dark atmosphere, wide angle photograph", "landscape_16_9"), label: "数据中心", alt: "数据中心服务器机架走廊" },
      { image: t2i("rows of server racks in cloud data center, blinking led lights, glass floor reflection, cinematic lighting", "landscape_16_9"), label: "数据中心", alt: "云数据中心成排机架" },
      { image: t2i("close up of server rack hardware, blinking status leds and ventilation grilles, shallow depth of field, dark moody photo", "landscape_16_9"), label: "数据中心", alt: "服务器硬件指示灯特写" },
      { image: t2i("wide shot of cloud computing data center hall, illuminated server cabinets, cold aisle containment, blue ambient light", "landscape_16_9"), label: "数据中心", alt: "云计算数据中心机房" },
      { image: t2i("engineer hands typing on laptop keyboard in server room, server rack lights in background, night shift, cinematic photo", "landscape_16_9"), label: "数据中心", alt: "机房内笔记本操作现场" },
      { image: t2i("macro photo of ethernet network cables plugged into switch, glowing ports, shallow depth of field, blue green light", "landscape_16_9"), label: "网络与设备", alt: "交换机网线端口特写" },
      { image: t2i("network engineer hands connecting fiber optic cable with glowing red laser tip in dark server room", "landscape_16_9"), label: "网络与设备", alt: "光纤熔接现场" },
      { image: t2i("large network operations center wall screen showing monitoring dashboards and metrics, dark NOC room, wide photo", "landscape_16_9"), label: "网络与设备", alt: "NOC 监控大屏" },
      { image: t2i("close up of network switch panel with many patch cables, led indicators, rack mounted hardware, detailed photograph", "landscape_16_9"), label: "网络与设备", alt: "配线架与交换机设备" },
      { image: t2i("cloud server room interior seen through glass door, racks with warm and blue lights, modern tech facility photograph", "landscape_16_9"), label: "网络与设备", alt: "玻璃门后的数据中心" },
    ],
    highlight: {
      image: t2i("site reliability engineer sitting alone in dark server room at night working on laptop, emergency on-call incident response, server racks glowing in background, cinematic realistic photo", "landscape_16_9"),
      label: "夜间应急值守",
      caption: "稳定的系统背后，是有人在看不见的时候守着。",
    },
  },
};
