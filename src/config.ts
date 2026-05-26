// ============================================================
// Site Configuration — Edit this file to customize your site
// ============================================================

// --- Site ---

export interface SiteConfig {
  language: string
  brandName: string
}

export const siteConfig: SiteConfig = {
  language: "ru",
  brandName: "HELLEN",
}

// --- Navigation ---

export interface NavigationConfig {
  menuLabel: string
  closeLabel: string
  fullscreenMenuLinks: { label: string; target: string }[]
  menuSideInfo: string[]
}

export const navigationConfig: NavigationConfig = {
  menuLabel: "МЕНЮ",
  closeLabel: "ЗАКРЫТЬ",
  fullscreenMenuLinks: [
    { label: "СТИЛИ", target: "hero" },
    { label: "ФИЛОСОФИЯ", target: "consciousness" },
    { label: "ПРОЦЕСС", target: "lighthouse" },
    { label: "ПОРТФОЛИО", target: "waves-gallery" },
    { label: "СВЯЗАТЬСЯ", target: "waves-video" },
  ],
  menuSideInfo: [
    "HELLEN",
    "ПЕРСОНАЛЬНЫЙ СТИЛИСТ",
    "МОСКВА · 2025",
  ],
}

// --- Hero Room Gallery ---

export interface RoomConfig {
  name: string
  className: string
  theme: "light" | "dark"
  images: {
    back: string[]
    left: string[]
    right: string[]
  }
}

export interface HeroConfig {
  mainTitle: string
  rooms: RoomConfig[]
  metaLines: string[]
}

export const heroConfig: HeroConfig = {
  mainTitle: "ВАШ СТИЛЬ",
  rooms: [
    {
      name: "Деловой стиль",
      className: "room--waves",
      theme: "dark",
      images: {
        back: ["images/rooms/room1-back.jpg"],
        left: ["images/rooms/room1-left.jpg"],
        right: ["images/rooms/room1-right.jpg"],
      },
    },
    {
      name: "Smart Casual",
      className: "room--monk",
      theme: "light",
      images: {
        back: ["images/rooms/room2-back.jpg"],
        left: ["images/rooms/room2-left.jpg"],
        right: ["images/rooms/room2-right.jpg"],
      },
    },
    {
      name: "Вечерний выход",
      className: "room--lighthouse",
      theme: "dark",
      images: {
        back: ["images/rooms/room3-back.jpg"],
        left: ["images/rooms/room3-left.jpg"],
        right: ["images/rooms/room3-right.jpg"],
      },
    },
    {
      name: "Тренды сезона",
      className: "room--orlando",
      theme: "light",
      images: {
        back: ["images/rooms/room4-back.jpg"],
        left: ["images/rooms/room4-left.jpg"],
        right: ["images/rooms/room4-right.jpg"],
      },
    },
  ],
  metaLines: [
    "Персональный стилист в Москве",
    "Деловой · Кэжуал · Вечерний · Тренды",
    "От 15 000 ₽",
  ],
}

// --- Particle Sculpture ---

export interface ParticleConfig {
  sectionLabel: string
  title: string
  paragraphs: string[]
  quote: string
}

export const particleConfig: ParticleConfig = {
  sectionLabel: "02 / ФИЛОСОФИЯ",
  title: "Стиль — это язык,\nна котором говорит\nваша уверенность",
  paragraphs: [
    "Я верю, что каждый человек уже обладает уникальным стилем — он просто ждёт, когда его раскроют. Моя работа заключается не в том, чтобы навязать модные тренды, а в том, чтобы найти гармонию между вашим внутренним миром и внешним образом.",
    "За 8 лет практики я помогла более чем 500 клиентам обрести свой стиль — от топ-менеджеров крупных компаний до творческих личностей. Каждая трансформация начинается с глубокого понимания: вашего образа жизни, профессии, характера и амбиций.",
    "Стилистика для меня — это не только одежда. Это инструмент самовыражения, способ коммуникации без слов, ключ к уверенности в любой ситуации. От деловой встречи до светского раута — ваш образ работает на вас.",
    "Я работаю с клиентами индивидуально: составляю капсульные гардеробы, сопровождаю на шопинге, готовлю образы для важных событий. Каждая деталь продумана, каждый лук имеет смысл.",
  ],
  quote: "Стиль — это способ сказать, кто вы есть,\nне произнося ни слова.",
}

// --- Lighthouse Video ---

export interface LighthouseVideoConfig {
  sectionLabel: string
  dataPoints: string[]
  description: string
  videoPath: string
}

export const lighthouseVideoConfig: LighthouseVideoConfig = {
  sectionLabel: "КАК Я РАБОТАЮ",
  dataPoints: [
    "ШАГ 1: КОНСУЛЬТАЦИЯ · АНАЛИЗ СТИЛЯ",
    "ШАГ 2: РАЗРАБОТКА КОНЦЕПЦИИ · ПОДБОР ОБРАЗОВ",
    "ШАГ 3: ШОПИНГ-СОПРОВОЖДЕНИЕ · ФИНАЛЬНЫЕ ЛУКИ",
  ],
  description: "Индивидуальный подход к каждому клиенту. От первой встречи до готового гардероба — полное погружение в ваш стиль.",
  videoPath: "videos/lighthouse.mp4",
}

// --- Waves Video ---

export interface WavesVideoConfig {
  sectionLabel: string
  title: string
  ctaText: string
  videoPath: string
}

export const wavesVideoConfig: WavesVideoConfig = {
  sectionLabel: "05 / НАЧНЁМ",
  title: "Ваш новый образ\nначинается здесь",
  ctaText: "ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ",
  videoPath: "videos/waves.mp4",
}

// --- Image Gallery ---

export interface GalleryItem {
  src: string
  caption: string
  description: string
}

export interface GalleryConfig {
  sectionLabel: string
  sectionTitle: string
  items: GalleryItem[]
  lightboxCloseHint: string
}

export const galleryConfig: GalleryConfig = {
  sectionLabel: "04 / ПОРТФОЛИО",
  sectionTitle: "Трансформации",
  items: [
    {
      src: "images/gallery/item1.jpg",
      caption: "Полная трансформация",
      description: "Клиентка пришла с запросом на полное обновление имиджа. Разработали новый стиль с нуля: от цветотипа до готовых луков. Результат — уверенная женщина, которая знает, что надеть на любой случай. Стоимость проекта: от 45 000 ₽.",
    },
    {
      src: "images/gallery/item2.jpg",
      caption: "Деловой стиль",
      description: "Создание профессионального образа для руководителя крупной компании. Акцент на силуэте, качестве тканей и деталях. Получился выразительный, запоминающийся лук, который подчёркивает статус и авторитет. Стоимость: от 35 000 ₽.",
    },
    {
      src: "images/gallery/item3.jpg",
      caption: "Бохо-романтика",
      description: "Разработка нежного, воздушного образа для творческой натуры. Подбор цветовой палитры, фактур и аксессуаров, создающих гармоничный и запоминающийся стиль. Идеально для фотосессий и особых моментов. Стоимость: от 25 000 ₽.",
    },
    {
      src: "images/gallery/item4.jpg",
      caption: "Мужской стиль",
      description: "Комплексный подход к созданию мужского гардероба: от базовых вещей до акцентных элементов. Результат — продуманный, функциональный гардероб на все случаи жизни. Стоимость: от 40 000 ₽.",
    },
    {
      src: "images/gallery/item5.jpg",
      caption: "Вечерний образ",
      description: "Подготовка элегантного вечернего образа для важного события. Внимание к деталям: ткань, посадка, аксессуары, макияж и причёска в единой концепции. Стоимость разового образа: от 15 000 ₽.",
    },
    {
      src: "images/gallery/item6.jpg",
      caption: "Уличный стиль",
      description: "Создание дерзкого, современного городского образа. Яркие акценты, смелые сочетания, трендовые элементы — всё в меру и со вкусом. Для тех, кто не боится выделяться. Стоимость: от 30 000 ₽.",
    },
    {
      src: "images/gallery/item7.jpg",
      caption: "Парный стиль",
      description: "Разработка гармоничных образов для пары на важное мероприятие. Цветовая связка, стилистическая единость и индивидуальность каждого — всё учтено. Стоимость: от 50 000 ₽.",
    },
    {
      src: "images/gallery/item8.jpg",
      caption: "Минимализм",
      description: "Создание элегантного минималистичного гардероба из качественных базовых вещей. Идеально для ценителей чистых линий и безупречного кроя. Стоимость: от 35 000 ₽.",
    },
    {
      src: "images/gallery/item9.jpg",
      caption: "Гламурный вечер",
      description: "Максимально эффектный образ для светского мероприятия: вечернее платье, украшения, макияж и причёска в единой гламурной концепции. Стоимость: от 25 000 ₽.",
    },
  ],
  lightboxCloseHint: "Нажмите Esc или кликните вне изображения, чтобы закрыть",
}

// --- Footer ---

export interface FooterLinkColumn {
  heading: string
  links: string[]
}

export interface FooterConfig {
  linkColumns: FooterLinkColumn[]
  tickerWords: string[]
  copyright: string
}

export const footerConfig: FooterConfig = {
  linkColumns: [
    {
      heading: "УСЛУГИ",
      links: [
        "Разбор гардероба — от 25 000 ₽",
        "Шопинг-сопровождение — от 50 000 ₽",
        "Создание образа — от 25 000 ₽",
        "Капсульный гардероб — от 75 000 ₽",
        "Стилизация фотосессии — от 45 000 ₽",
      ],
    },
    {
      heading: "КОНТАКТЫ",
      links: [
        "Telegram: @hellen_stylist",
        "WhatsApp: +7 (916) 555-44-33",
        "Email: hello@hellen-stylist.ru",
        "Instagram: @hellen_stylist",
        "Москва, ЦАО",
      ],
    },
  ],
  tickerWords: [
    "СТИЛЬ",
    "ОБРАЗ",
    "МОДА",
    "ЛУК",
    "ГАРДЕРОБ",
    "ТРЕНД",
    "ШОПИНГ",
    "ЭЛЕГАНТ",
    "ГЛАМУР",
  ],
  copyright: "© 2025 Hellen · Персональный стилист · Москва",
}
