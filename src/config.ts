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
    { label: "Telegram: @hellen_stylist", target: "contact" },
    { label: "Email: hello@hellen-stylist.ru", target: "contact" },
    { label: "Instagram: @hellen_stylist", target: "contact" },
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
    "ВАШ СТИЛИСТ HELLEN",
  ],
}

// --- Particle Sculpture ---

export interface ParticleSlide {
  number: string
  subtitle: string
  text: string
  takeaway: string
}

export interface ParticleConfig {
  sectionLabel: string
  title: string
  slides: ParticleSlide[]
  quote: string
}

export const particleConfig: ParticleConfig = {
  sectionLabel: "02 / ФИЛОСОФИЯ",
  title: "Стиль — это язык, \nна котором говорит \nваша уверенность",
  slides: [
    {
      number: "01",
      subtitle: "Философия стиля",
      text: "Я верю, что каждый человек уже обладает уникальным стилем — он просто ждёт, когда его раскроют. Моя работа заключается не в том, чтобы навязать модные тренды, а в том, чтобы найти гармонию между вашим внутренним миром и внешним образом.",
      takeaway: "Стиль — это не маска, а продолжение вашей личности",
    },
    {
      number: "02",
      subtitle: "Опыт и экспертиза",
      text: "За 8 лет практики я помогла более чем 500 клиентам обрести свой стиль — от топ-менеджеров крупных компаний до творческих личностей. Каждая трансформация начинается с глубокого понимания: вашего образа жизни, профессии, характера и амбиций.",
      takeaway: "500+ клиентов, 8 лет, одна миссия — ваш идеальный образ",
    },
    {
      number: "03",
      subtitle: "Стиль как инструмент",
      text: "Стилистика для меня — это не только одежда. Это инструмент самовыражения, способ коммуникации без слов, ключ к уверенности в любой ситуации. От деловой встречи до светского раута — ваш образ работает на вас.",
      takeaway: "Одежда говорит раньше, чем вы откроете рот",
    },
    {
      number: "04",
      subtitle: "Индивидуальный подход",
      text: "Я работаю с клиентами индивидуально: составляю капсульные гардеробы, сопровождаю на шопинге, готовлю образы для важных событий. Каждая деталь продумана, каждый лук имеет смысл.",
      takeaway: "Ваш гардероб — ваши правила. И я помогу их написать",
    },
  ],
  quote: "Стиль — это способ сказать, кто вы есть, \nне произнося ни слова.",
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
  ctaText: "",
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
      description: "[ total transformation ]\n\nПолное переосмысление стиля с нуля. Разобрали цветотип, тип фигуры, образ жизни и собрали капсулу из 30+ готовых луков. Клиентка прошла путь от «не знаю, что надеть» до «мой гардероб — моя суперсила». <br/><br/><strong>От 45 000 ₽</strong>",
    },
    {
      src: "images/gallery/item2.jpg",
      caption: "Деловой стиль",
      description: "[ business power ]\n\nДеловой образ для женщины-лидера. Ставка на архитектурный крой, премиальные ткани и силуэт, который говорит громче слов. Никакой суеты — только статус, авторитет и безупречный вкус. <br/><br/><strong>От 35 000 ₽</strong>",
    },
    {
      src: "images/gallery/item3.jpg",
      caption: "Бохо-романтика",
      description: "[ boho romance ]\n\nВоздушный образ для свиданий, путешествий и творческих съёмок. Льняные фактуры, ручная вышивка, винтажные аксессуары — всё дышит свободой и нежностью. <br/><br/><strong>От 25 000 ₽</strong>",
    },
    {
      src: "images/gallery/item4.jpg",
      caption: "Мужской стиль",
      description: "[ masculine edge ]\n\nМужской гардероб нового поколения: от классики до smart casual. Продумали каждую деталь — посадку, сочетаемость, сезонность. Результат: 100% попаданий, 0 лишних вещей. <br/><br/><strong>От 40 000 ₽</strong>",
    },
    {
      src: "images/gallery/item5.jpg",
      caption: "Вечерний образ",
      description: "[ evening glow ]\n\nВечерний выход, где каждая деталь работает на вау-эффект. Ткань, аксессуары, макияж и укладка собраны в единую историю. Вы будете сиять — гарантированно. <br/><br/><strong>От 15 000 ₽</strong>",
    },
    {
      src: "images/gallery/item6.jpg",
      caption: "Уличный стиль",
      description: "[ street style ]\n\nГородской лук с характером. Миксуем премиум и масс-маркет, тренды и базу, дерзость и интеллигентность. Для тех, кто носит одежду, а не наоборот. <br/><br/><strong>От 30 000 ₽</strong>",
    },
    {
      src: "images/gallery/item7.jpg",
      caption: "Парный стиль",
      description: "[ couple sync ]\n\nПарный выход, где вы дополняете друг друга, но не копируете. Цветовые рифмы, стилистический диалог, общая ДНК без потери индивидуальности. <br/><br/><strong>От 50 000 ₽</strong>",
    },
    {
      src: "images/gallery/item8.jpg",
      caption: "Минимализм",
      description: "[ quiet luxury ]\n\nМинимализм, который кричит о вкусе шёпотом. Идеальная база из топовых материалов, безупречный крой, никаких логотипов — только чистая элегантность. <br/><br/><strong>От 35 000 ₽</strong>",
    },
    {
      src: "images/gallery/item9.jpg",
      caption: "Гламурный вечер",
      description: "[ glam night ]\n\nМаксимальный блеск для красной дорожки и не только. Платье, которое притягивает взгляды, ювелирные акценты и голливудский вайб. Для вечера, который запомнят все. <br/><br/><strong>От 25 000 ₽</strong>",
    },
  ],
  lightboxCloseHint: "Нажмите Esc или кликните вне изображения, чтобы закрыть",
}


// --- Contact Form ---

export interface ContactConfig {
  sectionLabel: string
  title: string
  subtitle: string
  namePlaceholder: string
  phonePlaceholder: string
  buttonText: string
  successMessage: string
}

export const contactConfig: ContactConfig = {
  sectionLabel: '06 / СВЯЗЬ',
  title: "Запишитесь на консультацию",
  subtitle: 'Оставьте контакты — я свяжусь с вами в течение часа',
  namePlaceholder: 'Ваше имя',
  phonePlaceholder: '+7 (___) ___-__-__',
  buttonText: 'ЗАПИСАТЬСЯ',
  successMessage: 'Спасибо! Я свяжусь с вами в ближайшее время',
}


// --- Services Pricing ---

export interface ServiceSubItem {
  name: string
  price: string
}

export interface ServiceCard {
  title: string
  tag: string
  description: string
  items: ServiceSubItem[]
  highlight?: string
}

export interface ServicesConfig {
  sectionLabel: string
  title: string
  subtitle: string
  cards: ServiceCard[]
  footnote: string
}

export const servicesConfig: ServicesConfig = {
  sectionLabel: '07 / УСЛУГИ',
  title: 'Прайс-лист',
  subtitle: 'Выберите формат работы',
  cards: [
    {
      title: 'Базовый',
      tag: '[ start ]',
      description: 'Для тех, кто хочет навести порядок в гардеробе и понять свой стиль',
      items: [
        { name: 'Консультация по стилю', price: '10 000 ₽' },
        { name: 'Разбор гардероба', price: '25 000 ₽' },
        { name: 'Lookbook на сезон', price: '15 000 ₽' },
      ],
    },
    {
      title: 'Оптимальный',
      tag: '[ optimal ]',
      description: 'Полное сопровождение: от анализа до готовых образов',
      items: [
        { name: 'Шопинг-сопровождение', price: '50 000 ₽' },
        { name: 'Создание образа под ключ', price: '35 000 ₽' },
        { name: 'Ревизия гардероба', price: '20 000 ₽' },
      ],
      highlight: 'Популярный',
    },
    {
      title: 'Премиум',
      tag: '[ premium ]',
      description: 'Максимальное погружение и персональный стиль на год',
      items: [
        { name: 'Капсульный гардероб', price: '75 000 ₽' },
        { name: 'Стилизация фотосессии', price: '45 000 ₽' },
        { name: 'Персональный стилист на год', price: '150 000 ₽' },
      ],
    },
  ],
  footnote: '* Все цены индивидуальны и уточняются на консультации',
}

// --- Footer ---

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
  linkColumns: [],
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
