import {
  Code2,
  Database,
  Globe,
  Headphones,
  LayoutDashboard,
  Monitor,
  Server,
  Shield,
  type LucideIcon,
} from "lucide-react";

/* ─── Hero ─── */
export const HERO = {
  description:
    "Управляйте проектами с уверенностью. Полный контроль над данными, кодом и инфраструктурой — без зависимости от зарубежных вендоров. Уже используется крупнейшими госкорпорациями и предприятиями России.",
};

/* ─── Value Props ─── */
export const VALUE_PROPS = [
  {
    title: "Сертифицировано для госсектора",
    description:
      "ФЗ-152, ФСТЭК, Реестр отечественного ПО. Готов к работе с конфиденциальными данными и госзаказами.",
  },
  {
    title: "Ваша инфраструктура — ваши правила",
    description:
      "On-Premise, приватное облако или BareMetal. Полный контроль над данными без vendor lock-in.",
  },
  {
    title: "Производительность без компромиссов",
    description:
      "Архитектура, выдерживающая 10 000+ пользователей. ClickHouse-аналитика, Redis-кэширование, горизонтальное масштабирование.",
  },
];

/* ─── Product Sections ─── */
export interface ProductSection {
  number: string;
  label: string;
  title: string;
  description: string;
  subFeatures: { id: string; title: string; description: string }[];
}

export const PRODUCT_SECTIONS: ProductSection[] = [
  {
    number: "1.0",
    label: "Управление",
    title: "Управление проектами и задачами",
    description:
      "Полный набор инструментов для управления проектами любой сложности. От небольших команд до enterprise-масштабов.",
    subFeatures: [
      {
        id: "1.1",
        title: "Agile & Kanban",
        description:
          "Управляйте спринтами и досками так, как привыкла ваша команда. Полная поддержка Scrum, Kanban и гибридных методологий.",
      },
      {
        id: "1.2",
        title: "Service Desk",
        description:
          "Встроенный Service Desk с автоматизацией, SLA-контролем и клиентским порталом. Замените несколько инструментов одним.",
      },
      {
        id: "1.3",
        title: "Умные Workflow",
        description:
          "Настраиваемые бизнес-процессы с автоматическими переходами, валидацией и эскалацией. Автоматизируйте рутину.",
      },
    ],
  },
  {
    number: "2.0",
    label: "Аналитика",
    title: "Аналитика и отчётность",
    description:
      "Принимайте решения на основе данных. Живые дашборды и глубокая аналитика для каждого уровня управления.",
    subFeatures: [
      {
        id: "2.1",
        title: "Аналитика реального времени",
        description:
          "Живые дашборды, burndown-чарты и кастомные отчёты. Принимайте решения на основе данных, а не интуиции.",
      },
      {
        id: "2.2",
        title: "Молниеносный поиск",
        description:
          "Находите любую задачу, комментарий или файл за миллисекунды. Полнотекстовый поиск на базе OpenSearch.",
      },
      {
        id: "2.3",
        title: "SLA-контроль",
        description:
          "Автоматический контроль дедлайнов с эскалацией, уведомлениями и отчётами по выполнению SLA. Никогда не пропускайте сроки.",
      },
    ],
  },
  {
    number: "3.0",
    label: "Безопасность",
    title: "Безопасность и соответствие",
    description:
      "Enterprise-grade безопасность из коробки. Соответствие российским и международным стандартам.",
    subFeatures: [
      {
        id: "3.1",
        title: "Enterprise-безопасность",
        description:
          "Ролевая модель доступа, полный аудит действий, шифрование данных. Соответствие ФЗ-152 и ФСТЭК из коробки.",
      },
      {
        id: "3.2",
        title: "Экосистема плагинов",
        description:
          "Расширяйте возможности без ограничений. Открытый API, готовые интеграции и SDK для разработки своих плагинов.",
      },
      {
        id: "3.3",
        title: "Суверенитет данных",
        description:
          "Все данные — на территории РФ, на вашем оборудовании. Полное соответствие ФЗ-152 без дополнительных усилий.",
      },
    ],
  },
];

/* ─── Bento / Tech Stack ─── */
export interface BentoItem {
  title: string;
  icon: LucideIcon;
  items: string[];
  color: string;
}

export const BENTO_ITEMS: Record<string, BentoItem[]> = {
  Технологии: [
    {
      title: "Backend",
      icon: Code2,
      items: ["Java", "Spring Framework", "Tomcat", "Lucene", "OpenSearch"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Database",
      icon: Database,
      items: ["PostgreSQL", "ClickHouse", "Redis"],
      color: "from-emerald-500 to-teal-400",
    },
    {
      title: "Frontend",
      icon: Monitor,
      items: ["JavaScript", "TypeScript", "React", "CSS"],
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "Infrastructure",
      icon: Server,
      items: ["Docker", "Kubernetes", "BareMetal", "VPS"],
      color: "from-orange-500 to-amber-400",
    },
  ],
  Интеграции: [
    {
      title: "ERP & Документооборот",
      icon: LayoutDashboard,
      items: ["1С", "СБИС", "Госуслуги"],
      color: "from-indigo-500 to-blue-400",
    },
    {
      title: "Мессенджеры",
      icon: Headphones,
      items: ["Telegram", "VK Teams", "Email"],
      color: "from-sky-500 to-cyan-400",
    },
    {
      title: "Протоколы",
      icon: Globe,
      items: ["LDAP", "SSO", "REST API", "Webhooks"],
      color: "from-violet-500 to-purple-400",
    },
  ],
  Платформы: [
    {
      title: "Отечественные ОС",
      icon: Shield,
      items: ["Astra Linux", "РЕД ОС", "Альт"],
      color: "from-rose-500 to-pink-400",
    },
    {
      title: "Развёртывание",
      icon: Server,
      items: ["On-Premise", "Kubernetes", "Docker", "BareMetal"],
      color: "from-amber-500 to-yellow-400",
    },
  ],
};

/* ─── Comparison ─── */
export const COMPARISON_ROWS = [
  {
    feature: "Доступность лицензий в РФ",
    iractis: true,
    jira: false,
    details:
      "Jira прекратила продажу лицензий в России с 2022 года. Ирактис — полностью доступен, лицензии оформляются напрямую без посредников и ограничений.",
  },
  {
    feature: "Продажа и поддержка в РФ",
    iractis: true,
    jira: false,
    details:
      "Локальная команда поддержки на русском языке с SLA от 15 минут. Выделенный менеджер, приоритетная линия для enterprise-клиентов, база знаний и обучающие вебинары.",
  },
  {
    feature: "On-Premise развёртывание",
    iractis: true,
    jira: true,
    details:
      "Оба продукта поддерживают On-Premise, но только Ирактис продолжает выпускать обновления и патчи безопасности для российского рынка. Поддержка Astra Linux, РЕД ОС и Альт.",
  },
  {
    feature: "Регулярные обновления",
    iractis: true,
    jira: false,
    details:
      "Atlassian прекратил обновления для Data Center в РФ. Ирактис обновляется ежемесячно: новые функции, исправления безопасности, оптимизация производительности.",
  },
  {
    feature: "Соответствие ФЗ-152 / ФСТЭК",
    iractis: true,
    jira: false,
    details:
      "Полное соответствие законодательству РФ о персональных данных. Сертификация ФСТЭК, поддержка ГОСТ криптографии. Все данные хранятся на территории России.",
  },
  {
    feature: "Готовность к госзаказам",
    iractis: true,
    jira: false,
    details:
      "Включён в Единый реестр отечественного ПО Минцифры. Готов к участию в госзакупках по 44-ФЗ и 223-ФЗ. Используется крупнейшими госкорпорациями.",
  },
  {
    feature: "Миграция с Jira",
    iractis: true,
    jira: false,
    details:
      "Полный перенос проектов, задач, workflow, вложений и истории. Автоматизированные инструменты миграции, инженерное сопровождение и гарантия целостности данных.",
  },
  {
    feature: "Service Desk и ITSM",
    iractis: true,
    jira: true,
    details:
      "Встроенный Service Desk с клиентским порталом, SLA-контролем и автоматизацией. Не требует отдельной лицензии, в отличие от Jira Service Management.",
  },
  {
    feature: "Экосистема плагинов",
    iractis: true,
    jira: true,
    details:
      "Открытый API и SDK для разработки плагинов. Готовые интеграции с 1С, СБИС, Telegram и VK Teams. Jira Marketplace недоступен для российских пользователей.",
  },
  {
    feature: "Горизонтальное масштабирование",
    iractis: true,
    jira: true,
    details:
      "Кластерная архитектура для 10 000+ пользователей. ClickHouse для аналитики, Redis для кэширования. Автоматический балансировщик нагрузки и отказоустойчивость.",
  },
];

/* ─── Migration ─── */
export const MIGRATION_STEPS = [
  {
    number: "01",
    title: "Аудит",
    description:
      "Глубокий анализ вашей конфигурации Jira: проекты, workflow, пользователи, плагины и данные. Выявляем все зависимости.",
  },
  {
    number: "02",
    title: "Стратегия",
    description:
      "Составляем индивидуальный план миграции с учётом ваших бизнес-процессов. Нулевой downtime — наш стандарт.",
  },
  {
    number: "03",
    title: "Миграция",
    description:
      "Переносим всё: проекты, задачи, историю, вложения, пользователей. Без потери ни одного байта данных.",
  },
  {
    number: "04",
    title: "Гарантия",
    description:
      "Полное тестирование целостности. 30 дней инженерного сопровождения после миграции. Мы рядом, пока вы не будете уверены.",
  },
];

/* ─── Stats ─── */
export const STATS = [
  { value: "50+", label: "Инженеров" },
  { value: "10+", label: "Лет экспертизы" },
  { value: "100%", label: "Российская разработка" },
  { value: "24/7", label: "Поддержка" },
];

/* ─── Integrations ─── */
export const INTEGRATIONS = [
  { name: "1С" },
  { name: "СБИС" },
  { name: "Госуслуги" },
  { name: "Telegram" },
  { name: "Astra Linux" },
  { name: "РЕД ОС" },
  { name: "Альт" },
];

/* ─── Testimonials ─── */
export const TESTIMONIALS = [
  {
    quote:
      "Переход с Jira занял 2 недели вместо ожидаемых трёх месяцев. Команда поддержки была на связи круглосуточно.",
    name: "Алексей Петров",
    role: "CTO",
    company: "ТехноГрупп",
    variant: "light" as const,
  },
  {
    quote:
      "Наконец-то можем хранить данные на своих серверах и не переживать за compliance. Это то, что нам было нужно.",
    name: "Мария Сидорова",
    role: "VP of Engineering",
    company: "ФинТех Решения",
    variant: "accent" as const,
  },
];

/* ─── Footer Links ─── */
export const FOOTER_LINKS = [
  {
    title: "Продукт",
    links: [
      { label: "Обзор", href: "#features" },
      { label: "Сравнение с Jira", href: "#comparison" },
      { label: "Миграция", href: "#migration" },
      { label: "Технологии", href: "#features" },
    ],
  },
  {
    title: "Возможности",
    links: [
      { label: "Agile & Kanban", href: "#features" },
      { label: "Service Desk", href: "#features" },
      { label: "Аналитика", href: "#features" },
      { label: "Безопасность", href: "#features" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "#about" },
      { label: "Команда", href: "#about" },
      { label: "Карьера", href: "#about" },
      { label: "Партнёрство", href: "#about" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { label: "Запросить демо", href: "#cta" },
      { label: "Контакты", href: "#contacts" },
      { label: "sales@iractis.ru", href: "mailto:sales@iractis.ru" },
      { label: "Telegram", href: "https://t.me/RVTretyakov" },
    ],
  },
];
