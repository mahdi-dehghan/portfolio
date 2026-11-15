import { TranslationDictionary } from '../types/i18n';
import { siteConfig } from '../data/siteConfig';

export const translations: Record<'en' | 'fa', TranslationDictionary> = {
  en: {
    meta: {
      siteTitle: 'Mehdi Dehghan — Designer & Creative Developer',
      siteDescription:
        'Designing digital experiences with a point of view. A digital playground combining visual intelligence, creative experimentation, and precise frontend execution.',
      roleTagline: 'Designer & Creative Developer',
    },
    nav: {
      work: 'Selected Work',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      playground: 'Playground',
      availableBadge: 'Available for Select Commissions',
    },
    hero: {
      eyebrow: 'Portfolio & Experimental Lab // 2026',
      headlinePart1: 'MEHDI',
      headlinePart2: 'DEHGHAN',
      statement: siteConfig.statementEn,
      supporting: siteConfig.supportingEn,
      exploreArchive: 'Explore Selected Work',
      contactCta: 'Initiate Contact',
      telemetryLocation: '35.8327° N, 50.9915° E',
      telemetrySystem: 'SYS_STATUS: OPERATIONAL // VITE_REACT_TS',
      scrollHint: 'Scroll to explore archive',
    },
    playground: {
      title: 'Digital Playground // Interactive Node Canvas',
      subtitle:
        'A kinetic physics simulation demonstrating fluid vector interaction, gravitational springs, and real-time cursor dynamics.',
      modeInteractive: 'Interactive Drag',
      modePhysics: 'Kinetic Waves',
      modeGrid: 'Coordinate Matrix',
      reset: 'Reset Field',
      instructions: 'Move cursor across the field or drag nodes to perturb the grid.',
      activeNodes: 'Nodes Active',
    },
    work: {
      sectionIndex: '01 / ARCHIVE',
      title: 'Selected Work',
      subtitle:
        'An art-directed archive of design concepts, interface systems, and creative experiments.',
      filterAll: 'All Work',
      filterConcepts: 'Concepts',
      filterExperiments: 'Experiments',
      viewProject: 'View Study',
      exploreDetail: 'Explore Project In Depth',
      statusNotice:
        'Honest disclosure: Projects presented here reflect original design concepts, visual studies, and active technical experiments.',
    },
    projectDetail: {
      backToArchive: 'Back to Selected Work',
      statusTag: 'Project Classification',
      timeline: 'Year / Cycle',
      role: 'Role & Responsibilities',
      servicesDelivered: 'Disciplines & Stack',
      directionHeadline: 'Creative Direction & Concept',
      decisionsHeadline: 'Architectural & Design Decisions',
      visualStudies: 'Visual Studies & High-Resolution Details',
      nextProject: 'Next Project',
      prevProject: 'Previous Project',
      externalLink: 'Inspect Live Experiment',
      conceptDisclaimer:
        'This piece is an independent design study and creative technical experiment developed by Mehdi Dehghan.',
      closeModal: 'Close (Esc)',
    },
    about: {
      sectionIndex: '02 / IDENTITY',
      title: 'About the Practice',
      headline:
        'Visual intelligence meets technical precision. Bridging the gap between design thinking and frontend engineering.',
      paragraph1:
        'I am Mehdi Dehghan, an independent designer and creative developer based in Iran. I treat every digital project as both a curated editorial publication and a meticulously engineered software surface.',
      paragraph2:
        'Rather than separating aesthetic choices from technical constraints, I believe the most memorable digital experiences emerge when typography, layout, interaction, and code are conceived as one continuous discipline.',
      philosophyTitle: 'Core Tenets',
      philosophyBody:
        'Controlled asymmetry, typographic tension, honest communication, and lightweight web performance. No decorative fluff without functional intent.',
      disciplinesTitle: 'Disciplines',
      stackTitle: 'Technical Tools',
      locationLabel: 'Location & Base',
      locationValue: siteConfig.locationEn,
    },
    services: {
      sectionIndex: '03 / CAPABILITIES',
      title: 'Core Services',
      subtitle:
        'Four disciplined offerings tailored for brands, studios, and founders seeking distinctive digital presence.',
      items: siteConfig.services.map((s) => ({
        number: s.number,
        title: s.titleEn,
        subtitle: s.subtitleEn,
        description: s.descriptionEn,
        deliverables: s.deliverablesEn,
      })),
    },
    contact: {
      sectionIndex: '04 / DIALOGUE',
      title: 'Initiate Contact',
      headline: 'Have something interesting in mind?',
      subhead:
        'Whether you are developing a new brand identity, need a custom digital storefront, or want to collaborate on an experimental web experience, let’s talk.',
      emailLabel: 'Direct Electronic Mail',
      copyEmail: 'Copy Email Address',
      copied: 'Address Copied to Clipboard',
      openClient: 'Open in Mail Client',
      telegramLabel: 'Telegram Messenger',
      linkedinLabel: 'Professional Network',
      locationLabel: 'Studio Coordinates',
      locationValue: `${siteConfig.locationEn} (${siteConfig.coordinates})`,
      form: {
        title: 'Send a Message',
        nameLabel: 'Your Name or Studio',
        namePlaceholder: 'e.g. Elena Rostova',
        emailLabel: 'Contact Email',
        emailPlaceholder: 'name@studio.com',
        serviceLabel: 'Area of Interest',
        messageLabel: 'Brief Project Outline',
        messagePlaceholder:
          'Tell me about your project, timeline, and what you aim to achieve...',
        submitBtn: 'Transmit Message',
        successMsg: 'Thank you. Your message has been prepared.',
        errorMsg: 'Please complete all required fields with a valid email.',
      },
    },
    telemetry: {
      localTime: 'LOCAL TIME (IRST):',
      timeZone: siteConfig.timezone,
      precision: 'SYS//STABLE_60FPS',
      fps: '60 FPS',
      soundToggle: 'Audio Feedback',
      soundMuted: 'Muted',
      soundActive: 'Active',
    },
    footer: {
      tagline: 'EXPERIMENTAL DESIGN. PRECISE EXECUTION.',
      rights: 'All rights reserved.',
      backToTop: 'Return to Top',
      designedWith: 'Crafted with React, TypeScript & Vite by Mehdi Dehghan.',
    },
  },
  fa: {
    meta: {
      siteTitle: 'مهدی دهقان — طراح و توسعه‌دهنده خلاق',
      siteDescription:
        'طراحی تجربه‌های دیجیتال با نگاهی مستقل و خلاق. فضایی پویا برای ترکیب درک بصری، آزمایش‌های نوآورانه و پیاده‌سازی دقیق فنی.',
      roleTagline: 'طراح و توسعه‌دهنده خلاق',
    },
    nav: {
      work: 'پروژه‌های منتخب',
      about: 'درباره من',
      services: 'خدمات',
      contact: 'تماس',
      playground: 'زمین‌بازی',
      availableBadge: 'آماده همکاری برای پروژه‌های برگزیده',
    },
    hero: {
      eyebrow: 'پورتفولیو و آزمایشگاه تجربی // ۲۰۲۶',
      headlinePart1: 'مهدی',
      headlinePart2: 'دهقان',
      statement: siteConfig.statementFa,
      supporting: siteConfig.supportingFa,
      exploreArchive: 'مشاهده آرشیو پروژه‌ها',
      contactCta: 'آغاز گفت‌وگو',
      telemetryLocation: '۳۵.۸۳۲۷° شمالی، ۵۰.۹۹۱۵° شرقی',
      telemetrySystem: 'وضعیت سیستم: فعال // ری‌اکت و تایپ‌اسکریپت',
      scrollHint: 'برای مشاهده آثار به پایین بروید',
    },
    playground: {
      title: 'زمین‌بازی دیجیتال // بوم تعاملی ماتریس',
      subtitle:
        'شبیه‌سازی دینامیک برداری و فنرهای گرانشی با واکنش آنی و روان به حرکت نشانگر ماوس و لمس.',
      modeInteractive: 'درگ تعاملی',
      modePhysics: 'امواج حرکتی',
      modeGrid: 'ماتریس مختصات',
      reset: 'بازنشانی بوم',
      instructions: 'ماوس را روی صفحه حرکت دهید یا گره‌ها را بکشید تا فرم شبکه دگرگون شود.',
      activeNodes: 'گره فعال',
    },
    work: {
      sectionIndex: '۰۱ / آرشیو آثار',
      title: 'پروژه‌های منتخب',
      subtitle:
        'آرشیوی ادیتوریال از کانسپت‌های طراحی، سیستم‌های تعاملی و آزمایش‌های خلاقانه وب.',
      filterAll: 'همه آثار',
      filterConcepts: 'کانسپت‌ها',
      filterExperiments: 'آزمایش‌های تجربی',
      viewProject: 'مشاهده مطالعه موردی',
      exploreDetail: 'بررسی عمیق پروژه',
      statusNotice:
        'شفاف‌سازی صادقانه: پروژه‌های حاضر نمایانگر کانسپت‌های طراحی مستقل، مطالعات بصری و آزمایش‌های فنی فعال هستند.',
    },
    projectDetail: {
      backToArchive: 'بازگشت به آرشیو پروژه‌ها',
      statusTag: 'دسته‌بندی و وضعیت پروژه',
      timeline: 'سال / دوره ساخت',
      role: 'نقش و مسئولیت‌ها',
      servicesDelivered: 'حوزه‌ها و ابزارها',
      directionHeadline: 'جهت‌گیری خلاقانه و مفهوم طراحی',
      decisionsHeadline: 'تصمیمات ساختاری و معماری دیزاین',
      visualStudies: 'مطالعات بصری و جزئیات باکیفیت',
      nextProject: 'پروژه بعدی',
      prevProject: 'پروژه قبلی',
      externalLink: 'مشاهده آزمایش زنده',
      conceptDisclaimer:
        'این اثر یک مطالعه بصری مستقل و آزمایش فنی خلاقانه است که توسط مهدی دهقان توسعه یافته است.',
      closeModal: 'بستن (Esc)',
    },
    about: {
      sectionIndex: '۰۲ / هویت کاری',
      title: 'درباره رویکرد من',
      headline:
        'پیوند هوش بصری و دقت فنی. پر کردن شکاف میان تفکر دیزاین و مهندسی فرانت‌اند.',
      paragraph1:
        'من مهدی دهقان هستم؛ طراح و توسعه‌دهنده خلاق مستقل مستقر در ایران. من هر وب‌سایت را به عنوان یک نشریه هنری آراسته و هم‌زمان یک نرم‌افزار مهندسی‌شده با دقت بالا می‌بینم.',
      paragraph2:
        'به جای جدا کردن زیبایی‌شناسی از محدودیت‌های فنی، باور دارم ماندگارترین تجربه‌های دیجیتال زمانی خلق می‌شوند که تایپوگرافی، چیدمان، تعامل و کد به عنوان یک کل به‌هم‌پیوسته طراحی شوند.',
      philosophyTitle: 'اصول بنیادین',
      philosophyBody:
        'نامتقارنی مهارشده، کشش تایپوگرافیک، صداقت در ارتباط و سرعت فوق‌العاده در وب. بدون هیچ عنصر تزئینی زائد و بی‌هدف.',
      disciplinesTitle: 'تخصص‌ها',
      stackTitle: 'ابزارهای فنی',
      locationLabel: 'موقعیت و استودیو',
      locationValue: siteConfig.locationFa,
    },
    services: {
      sectionIndex: '۰۳ / توانمندی‌ها',
      title: 'خدمات تخصصی',
      subtitle:
        'چهار خدمت هدفمند و دقیق برای برندها، استودیوها و کسب‌وکارهایی که به دنبال حضوری متمایز هستند.',
      items: siteConfig.services.map((s) => ({
        number: s.number,
        title: s.titleFa,
        subtitle: s.subtitleFa,
        description: s.descriptionFa,
        deliverables: s.deliverablesFa,
      })),
    },
    contact: {
      sectionIndex: '۰۴ / گفت‌وگو',
      title: 'آغاز گفت‌وگو',
      headline: 'ایده‌ای برای ساختن داریم؟',
      subhead:
        'چه به دنبال خلق یک هویت دیجیتال متمایز باشید، چه یک فروشگاه اینترنتی باکیفیت بخواهید یا قصد همکاری در یک پروژه تجربی را داشته باشید، مشتاقانه آماده شنیدن هستم.',
      emailLabel: 'پست الکترونیکی مستقیم',
      copyEmail: 'کپی آدرس ایمیل',
      copied: 'آدرس ایمیل در حافظه کپی شد',
      openClient: 'باز کردن نرم‌افزار ایمیل',
      telegramLabel: 'پیام‌رسان تلگرام',
      linkedinLabel: 'شبکه حرفه‌ای لینکدین',
      locationLabel: 'مختصات جغرافیایی استودیو',
      locationValue: `${siteConfig.locationFa} (${siteConfig.coordinates})`,
      form: {
        title: 'ارسال پیام',
        nameLabel: 'نام شما یا مجموعه',
        namePlaceholder: 'مثال: علیرضا راد',
        emailLabel: 'ایمیل جهت پاسخ',
        emailPlaceholder: 'name@studio.com',
        serviceLabel: 'زمینه همکاری مدنظر',
        messageLabel: 'شرح مختصر پروژه',
        messagePlaceholder:
          'درباره ایده، زمان‌بندی و اهدافی که در نظر دارید بنویسید...',
        submitBtn: 'ارسال پیام',
        successMsg: 'سپاسگزارم. پیام شما آماده انتقال گردید.',
        errorMsg: 'لطفا تمامی فیلدهای ستاره‌دار را با ایمیل معتبر کامل نمایید.',
      },
    },
    telemetry: {
      localTime: 'زمان محلی (IRST):',
      timeZone: siteConfig.timezone,
      precision: 'سیستم//پایدار_۶۰ فریم',
      fps: '۶۰ FPS',
      soundToggle: 'بازخورد صوتی',
      soundMuted: 'بی‌صدا',
      soundActive: 'فعال',
    },
    footer: {
      tagline: 'طراحی تجربی. اجرای دقیق.',
      rights: 'تمامی حقوق محفوظ است.',
      backToTop: 'بازگشت به ابتدای صفحه',
      designedWith: 'ساخته‌شده با ری‌اکت، تایپ‌اسکریپت و ویت توسط مهدی دهقان.',
    },
  },
};
