export interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

export interface SiteConfig {
  name: string;
  nameFa: string;
  role: string;
  roleFa: string;
  statementEn: string;
  statementFa: string;
  supportingEn: string;
  supportingFa: string;
  email: string;
  locationEn: string;
  locationFa: string;
  coordinates: string;
  timezone: string;
  socials: {
    github: SocialLink;
    linkedin: SocialLink;
    telegram: SocialLink;
  };
  services: {
    id: string;
    number: string;
    titleEn: string;
    titleFa: string;
    subtitleEn: string;
    subtitleFa: string;
    descriptionEn: string;
    descriptionFa: string;
    deliverablesEn: string[];
    deliverablesFa: string[];
  }[];
}

export const siteConfig: SiteConfig = {
  name: 'Mehdi Dehghan',
  nameFa: 'مهدی دهقان',
  role: 'Designer & Creative Developer',
  roleFa: 'طراح و توسعه‌دهنده خلاق',
  statementEn: 'Designing digital experiences with a point of view.',
  statementFa: 'طراحی تجربه‌های دیجیتال با نگاهی مستقل و خلاق.',
  supportingEn:
    'I combine visual design and creative development to build distinctive websites, digital storefronts, and interactive experiences.',
  supportingFa:
    'ترکیب طراحی بصری و توسعه خلاقانه برای ساخت وب‌سایت‌ها، فروشگاه‌های دیجیتال و تجربه‌های تعاملی متمایز.',
  email: 'mehdidehghan.services@gmail.com',
  locationEn: 'Karaj / Tehran, Iran',
  locationFa: 'کرج / تهران، ایران',
  coordinates: '35.8327° N, 50.9915° E',
  timezone: 'IRST (UTC+3:30)',
  socials: {
    github: {
      label: 'GitHub',
      url: 'https://github.com/mahdi-dehghan',
      handle: 'mahdi-dehghan',
    },
    linkedin: {
      label: 'LinkedIn',
      url: 'http://www.linkedin.com/in/mehdi-dehghan-205548260',
      handle: 'mehdi-dehghan-205548260',
    },
    telegram: {
      label: 'Telegram',
      url: 'https://t.me/Mehdii_dehghanm',
      handle: '@Mehdii_dehghanm',
    },
  },
  services: [
    {
      id: 'web-design',
      number: '01',
      titleEn: 'Web Design',
      titleFa: 'طراحی وب',
      subtitleEn: 'Art Direction & Editorial Systems',
      subtitleFa: 'کارگردانی هنری و سیستم‌های ادیتوریال',
      descriptionEn:
        'Crafting bespoke digital identities, asymmetric grid structures, expressive typography, and refined interfaces that cut through commercial sameness.',
      descriptionFa:
        'خلق هویت‌های بصری دیجیتال منحصربه‌فرد، ساختارهای شبکه‌ای نامتقارن، تایپوگرافی پرکشش و رابط‌های کاربری متمایز از قالب‌های تکراری.',
      deliverablesEn: [
        'Art Direction & Visual Strategy',
        'Custom Grid & Responsive Layouts',
        'Design Systems & Component Libraries',
        'Interactive Prototyping in Figma',
      ],
      deliverablesFa: [
        'کارگردانی هنری و استراتژی بصری',
        'شبکه‌بندی اختصاصی و چیدمان ریسپانسیو',
        'سیستم‌های طراحی و کتابخانه‌های کامپوننت',
        'پروتوتایپ تعاملی در فیگما',
      ],
    },
    {
      id: 'creative-dev',
      number: '02',
      titleEn: 'Creative Development',
      titleFa: 'توسعه خلاقانه',
      subtitleEn: 'Engineering & Fluid Interactions',
      subtitleFa: 'مهندسی فرانت‌اند و تعاملات روان',
      descriptionEn:
        'Translating ambitious visual ideas into lightweight, accessible, high-performance web applications using modern frontend tools, canvas experiments, and subtle motion.',
      descriptionFa:
        'تبدیل ایده‌های بصری جسورانه به وب‌اپلیکیشن‌های سبک، دسترس‌پذیر و پرسرعت با ابزارهای نوین، آزمایش‌های کانواس و انیمیشن‌های هدفمند.',
      deliverablesEn: [
        'Production React / TypeScript / Vite',
        'Kinetic Typography & Canvas Physics',
        'Bilingual LTR / RTL Architecture',
        'Accessible, Clean Web Standards',
      ],
      deliverablesFa: [
        'توسعه محصول با React / TypeScript / Vite',
        'تایپوگرافی کینتیک و فیزیک کانواس',
        'معماری دوزبانه دقیق LTR و RTL',
        'استانداردهای وب دسترس‌پذیر و کد تمیز',
      ],
    },
    {
      id: 'ecommerce',
      number: '03',
      titleEn: 'E-commerce',
      titleFa: 'تجارت الکترونیک',
      subtitleEn: 'Tactile Digital Storefronts',
      subtitleFa: 'فروشگاه‌های دیجیتال با حس لمسی',
      descriptionEn:
        'Designing seamless digital shopping experiences for jewelry, fashion, and lifestyle brands where product storytelling and tactile detail take center stage.',
      descriptionFa:
        'طراحی فروشگاه‌های آنلاین بی‌نقص برای برندهای طلا، مد و سبک زندگی؛ جایی که روایت هویت محصول و لمس بصری در اولویت است.',
      deliverablesEn: [
        'Editorial Product Catalogues',
        'Bespoke Mobile Checkout Journeys',
        'High-Resolution Visual Showcases',
        'Brand-Led Merchandising Flows',
      ],
      deliverablesFa: [
        'کاتالوگ‌های ادیتوریال و ژورنالی محصول',
        'مسیر خرید ارگونومیک در موبایل',
        'نمایش ماکرو و باکیفیت جزئیات محصول',
        'جریان‌های خرید منطبق بر هویت برند',
      ],
    },
    {
      id: 'landing-pages',
      number: '04',
      titleEn: 'Landing Pages',
      titleFa: 'صفحات فرود',
      subtitleEn: 'Focused Interactive Narratives',
      subtitleFa: 'روایت‌های تعاملی هدفمند',
      descriptionEn:
        'High-impact, single-purpose landing pages engineered for product drops, studio announcements, and campaigns with immediate visual clarity.',
      descriptionFa:
        'صفحات فرود متمرکز و پرتاثیر برای معرفی محصولات خاص، اعلامیه‌های استودیو و کمپین‌های تبلیغاتی با وضوح بصری و پیام‌رسانی فوری.',
      deliverablesEn: [
        'Product Launch Experiences',
        'Conversion-Focused Structure',
        'Micro-Interactions & Hover States',
        'Sub-Second Performance Optimization',
      ],
      deliverablesFa: [
        'تجربه رونمایی محصول و سرویس',
        'ساختار مهندسی‌شده جهت جذب و اقدام',
        'مایکرواینترکشن‌ها و حالت‌های هاور',
        'بهینه‌سازی عملکرد و بارگذاری زیر ثانیه',
      ],
    },
  ],
};
