import { ProjectItem } from '../types/project';

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-01',
    slug: 'the-vand',
    index: '01',
    title: 'The Vand',
    titleFa: 'وند',
    category: 'Spatial Design & E-Commerce Concept',
    categoryFa: 'هویت بصری و کانسپت فروشگاهی',
    year: '2026',
    status: 'concept',
    statusLabelEn: 'Concept Project',
    statusLabelFa: 'پروژه کانسپت',
    summary:
      'An architectural fashion e-commerce study exploring deliberate negative space, restrained earth-tone palettes, and non-linear product exploration.',
    summaryFa:
      'مطالعه‌ای در حوزه تجارت الکترونیک مد مینیمال و معماری‌محور؛ با تاکید بر فضای منفی هدایت‌شده، پالت رنگی خنثی و تجربه مرور غیرخطی محصولات.',
    role: 'Visual Design & Interaction Architecture',
    roleFa: 'طراحی بصری و معماری تعامل',
    services: ['Web Design', 'Creative Development', 'E-commerce'],
    servicesFa: ['طراحی وب', 'توسعه خلاقانه', 'تجارت الکترونیک'],
    creativeDirection:
      'The Vand explores what happens when retail interfaces adopt the discipline of architectural monographs. Instead of high-density promotional banners, each viewport prioritizes silhouette, tactile texture, and deliberate breathing room.',
    creativeDirectionFa:
      'پروژه وند به این پرسش پاسخ می‌دهد که اگر فروشگاه‌های آنلاین از انضباط کتاب‌های معماری الهام بگیرند چه شکلی خواهند داشت. به جای بنرهای شلوغ تبلیغاتی، هر قاب به فرم، بافت پارچه و فضای تنفس اختصاص یافته است.',
    designDecisions: [
      {
        title: 'Asymmetric Editorial Grid',
        titleFa: 'شبکه نامتقارن ادیتوریال',
        description:
          'Staggered column offsets create visual rhythm without sacrificing navigation speed or mobile legibility.',
        descriptionFa:
          'ستون‌بندی نامتقارن و پلکانی، بدون کاهش سرعت مرور یا خوانایی در تلفن همراه، ریتمی بصری و مجله‌ای خلق می‌کند.',
      },
      {
        title: 'Tactile Micro-Details',
        titleFa: 'جزئیات حسی و لمسی',
        description:
          'Subtle coordinate annotations and fabric spec tags provide an authentic craft aesthetic.',
        descriptionFa:
          'برچسب‌های مختصات و مشخصات فنی پارچه، حسی از اصالت و دقت مهندسی در طراحی لباس القا می‌کنند.',
      },
    ],
    coverImage: './images/projects/vand/hero.webp',
    gallery: [
      {
        url: './images/projects/vand/look.jpg',
        caption: 'Lookbook exploration: Sand linen shirt silhouette in natural light',
        captionFa: 'کاوش لوک‌بوک: فرم پیراهن کتان شنی در نور طبیعی',
        aspectRatio: 'portrait',
      },
      {
        url: './images/projects/vand/story.jpg',
        caption: 'Brand narrative composition balancing oversized serif with minimal captions',
        captionFa: 'ترکیب‌بندی روایت برند با تعادل میان تایپ سریف درشت و زیرنویس‌های ظریف',
        aspectRatio: 'landscape',
      },
      {
        url: './images/projects/vand/detail-1.jpg',
        caption: 'Macro crop highlighting textured weave and seam construction',
        captionFa: 'کراپ ماکرو برای نمایش بافت تار و پود پارچه و کیفیت دوخت',
        aspectRatio: 'square',
      },
      {
        url: './images/projects/vand/studio.jpg',
        caption: 'Spatial backdrop grounding the garment within raw architectural concrete',
        captionFa: 'پس‌زمینه فضایی برای تثبیت لباس در بستری از بتن معماری خام',
        aspectRatio: 'landscape',
      },
    ],
    featured: true,
    theme: {
      primary: '#2E2D29',
      accent: '#C6F36A',
      surface: '#EAE7E0',
      glow: 'rgba(198, 243, 106, 0.16)',
    },
  },
  {
    id: 'proj-02',
    slug: 'kronomatik-horology',
    index: '02',
    title: 'Kronomatik',
    titleFa: 'کرنوماتیک',
    category: 'Haute Horology & Telemetry Lab',
    categoryFa: 'ساعت‌سازی پیشرفته و آزمایشگاه تله‌متری',
    year: '2026',
    status: 'in-development',
    statusLabelEn: 'In Development',
    statusLabelFa: 'در حال توسعه',
    summary:
      'A precision digital interface for an avant-garde utilitarian timepiece concept, featuring live dual-timezone telemetry and ISO 6425 diving instrument graphics.',
    summaryFa:
      'رابط دیجیتال دقیق برای کانسپت ساعت ابزارمحور آوانگارد؛ همراه با نمایشگر تله‌متری زنده دو زمانه، شاخص‌های عمق‌سنجی ISO 6425 و مقیاس‌های تایپوگرافیک مهندسی‌شده.',
    role: 'Design System & Frontend Prototyping',
    roleFa: 'سیستم دیزاین و پروتوتایپ فرانت‌اند',
    services: ['Creative Development', 'Web Design'],
    servicesFa: ['توسعه خلاقانه', 'طراحی وب'],
    creativeDirection:
      'Rooted in the utilitarian aesthetics of Milan and Tehran industrial design. The interface behaves like calibrated dive instrumentation: high-contrast dark dials, luminescent typography, and live telemetry tracking.',
    creativeDirectionFa:
      'ریشه در زیبایی‌شناسی صنعتی میلان و تهران. این رابط همانند یک ابزار غواصی کالیبره‌شده عمل می‌کند: صفحات تیره با کنتراست بالا، تایپوگرافی شب‌نما و پایش زنده تله‌متری.',
    designDecisions: [
      {
        title: 'Calibrated Telemetry Header',
        titleFa: 'نوار فوقانی تله‌متری',
        description:
          'Live dual clocks running IRST and CET synchronized in real time to emphasize cross-border engineering.',
        descriptionFa:
          'ساعت‌های دوگانه زنده برای منطقه زمانی تهران و میلان جهت تاکید بر پیوند مهندسی فرامرزی.',
      },
      {
        title: 'Dynamic Watch Dial Construct',
        titleFa: 'سازه صفحه ساعت تعاملی',
        description:
          'Vector dial rendering reacting smoothly to cursor coordinates with mechanical precision.',
        descriptionFa:
          'رندر وکتوری صفحه ساعت با واکنش آنی و نرم به مختصات ماوس و انضباط مکانیکی.',
      },
    ],
    coverImage: './images/projects/kronomatik/hero.svg',
    gallery: [
      {
        url: './images/projects/kronomatik/hero.svg',
        caption: 'Calibre KM-8902 vector dial blueprint with 300M certification telemetry',
        captionFa: 'نقشه فنی کالیبر KM-8902 با شاخص‌های تله‌متری غواصی تا عمق ۳۰۰ متر',
        aspectRatio: 'landscape',
      },
    ],
    featured: true,
    theme: {
      primary: '#0C0D0E',
      accent: '#C6F36A',
      surface: '#16181B',
      glow: 'rgba(198, 243, 106, 0.22)',
    },
  },
  {
    id: 'proj-03',
    slug: 'xav-specialty-coffee',
    index: '03',
    title: 'Xav Coffee',
    titleFa: 'قهوه ژاو',
    category: 'Brand Identity & Coffee Journal',
    categoryFa: 'هویت بصری و ژورنال تخصصی قهوه',
    year: '2026',
    status: 'concept',
    statusLabelEn: 'Concept Project',
    statusLabelFa: 'پروژه کانسپت',
    summary:
      'An artisanal digital journal and bean selection experience built around sensory brewing notes, origin terroir stories, and quiet editorial pacing.',
    summaryFa:
      'ژورنال دیجیتال تجربی و تجربه انتخاب دان قهوه بر پایه یادداشت‌های طعم‌شناسی حسی، داستان خاستگاه دانه‌ها و ریتم آرام ادیتوریال.',
    role: 'Editorial Web Design & Visual Identity',
    roleFa: 'طراحی وب ادیتوریال و هویت بصری',
    services: ['Web Design', 'Landing Pages'],
    servicesFa: ['طراحی وب', 'صفحات فرود'],
    creativeDirection:
      'Coffee as a meditative ritual. Warm terracotta notes, unbleached kraft paper textures, and structured taste-wheel data cards replace conventional noisy e-commerce patterns.',
    creativeDirectionFa:
      'قهوه به عنوان یک آیین آرامش‌بخش. رنگ‌های گرم سفالی، بافت کاغذ کرافت و کارت‌های ساختاریافته طعم‌شناسی جایگزین الگوهای شلوغ فروشگاهی شده‌اند.',
    designDecisions: [
      {
        title: 'Sensory Data Mapping',
        titleFa: 'نقشه‌برداری داده‌های طعم‌شناسی',
        description:
          'Structured presentation of acidity, body, and processing methods alongside evocative tasting notes.',
        descriptionFa:
          'نمایش ساختاریافته اسیدیته، بدنه و روش فرآوری در کنار نت‌های طعمی توصیفی.',
      },
      {
        title: 'Warm Earth Palette',
        titleFa: 'پالت رنگی خاک و برشته‌کاری',
        description:
          'Restrained warm tones evoke roasted beans, natural parchment, and morning steam.',
        descriptionFa:
          'رنگ‌های گرم و کنترل‌شده که حس دانه‌های برشته، کاغذ پارچمنت و بخار صبحگاهی را تداعی می‌کنند.',
      },
    ],
    coverImage: './images/projects/xav/hero.jpg',
    gallery: [
      {
        url: './images/projects/xav/a-series.jpg',
        caption: 'Single-origin roast curve notes and elevation markers',
        captionFa: 'نمودار برشته‌کاری تک‌خاستگاه و نشانگرهای ارتفاع مزرعه',
        aspectRatio: 'landscape',
      },
      {
        url: './images/projects/xav/workshop.jpg',
        caption: 'Cupping laboratory and barista brewing table in natural afternoon light',
        captionFa: 'میز کاپینگ و آزمایشگاه عصاره‌گیری در نور ملایم بعدازظهر',
        aspectRatio: 'landscape',
      },
      {
        url: './images/projects/xav/article.jpg',
        caption: 'Editorial article layout with large quotation typography and margin annotations',
        captionFa: 'صفحه‌آرایی مقاله ادیتوریال با نقل‌قول‌های درشت و یادداشت‌های حاشیه‌ای',
        aspectRatio: 'portrait',
      },
    ],
    featured: true,
    theme: {
      primary: '#2B2521',
      accent: '#E28D48',
      surface: '#ECE4DC',
      glow: 'rgba(226, 141, 72, 0.16)',
    },
  },
  {
    id: 'proj-04',
    slug: 'void-atelier',
    index: '04',
    title: 'VØID Atelier',
    titleFa: 'آتلیه ووید',
    category: 'Avant-Garde Jewelry & Interactive Playground',
    categoryFa: 'جواهرات آوانگارد و زمین‌بازی تعاملی',
    year: '2026',
    status: 'experiment',
    statusLabelEn: 'Visual Experiment',
    statusLabelFa: 'آزمایش بصری',
    summary:
      'An experimental digital runway combining dark sculptural brutalism, raw sterling silver silhouettes, fluid typography, and kinetic interaction design.',
    summaryFa:
      'ران‌وی تعاملی و تجربی با ترکیب بروتالیسم تند و مجسمه‌گون، سیلوئت‌های نقره خام، تایپوگرافی سیال و تعاملات کینتیک.',
    role: 'Experimental Direction & Creative Prototyping',
    roleFa: 'کارگردانی تجربی و پروتوتایپ تعاملی',
    services: ['Creative Development', 'Web Design'],
    servicesFa: ['توسعه خلاقانه', 'طراحی وب'],
    creativeDirection:
      'Engineered silence. Heavy architectural jewelry carved in solid 925 sterling silver, set against a void of deep ink and pure typographic tension.',
    creativeDirectionFa:
      'سکوت مهندسی‌شده. جواهرات سنگین و معماری‌گونه تراشیده‌شده از نقره استرلینگ ۹۲۵، در بستری از تاریکی مطلق و کشش عمیق تایپوگرافیک.',
    designDecisions: [
      {
        title: 'Brutalist Monogram Study',
        titleFa: 'مطالعه مونوگرام بروتالیست',
        description:
          'Sharp geometric incisions and chrome reflection gradients that break convention.',
        descriptionFa:
          'برش‌های هندسی تیز و گرادیان‌های کروم که مرزهای طراحی متعارف را جابجا می‌کنند.',
      },
      {
        title: 'Kinetic Coordinate System',
        titleFa: 'دستگاه مختصات کینتیک',
        description:
          'Micro-annotations marking piece weight and atelier locations across London, Paris, and Berlin.',
        descriptionFa:
          'نشانه‌گذاری‌های ظریف برای ثبت وزن قطعات و مکان‌های آتلیه در لندن، پاریس و برلین.',
      },
    ],
    coverImage: './images/projects/void/hero.svg',
    gallery: [
      {
        url: './images/projects/void/hero.svg',
        caption: 'Monochrome sculptural typography and raw metal atelier manifesto',
        captionFa: 'تایپوگرافی مجسمه‌گون مونوکروم و بیانیه آتلیه فلزات خام',
        aspectRatio: 'landscape',
      },
    ],
    featured: false,
    theme: {
      primary: '#0E0E10',
      accent: '#F0EFF4',
      surface: '#1A1A1E',
      glow: 'rgba(240, 239, 244, 0.16)',
    },
  },
  {
    id: 'proj-05',
    slug: 'arshia-gold-gallery',
    index: '05',
    title: 'Arshia Gold Gallery',
    titleFa: 'طلا و جواهر عرشیا',
    category: 'High Jewelry Digital Storefront',
    categoryFa: 'فروشگاه دیجیتال طلا و جواهرات فاخر',
    year: '2024',
    status: 'personal',
    statusLabelEn: 'Personal Project',
    statusLabelFa: 'پروژه شخصی',
    summary:
      'A digital redesign concept for an established gold gallery, focusing on high-definition macro jewelry photography, weight-to-karat calculation tools, and effortless mobile browsing.',
    summaryFa:
      'بازطراحی دیجیتال برای گالری طلای لوکس با تاکید بر عکاسی ماکرو باکیفیت، ابزار تعاملی محاسبه عیار و وزن و تجربه روان در موبایل.',
    role: 'E-Commerce Design & Frontend Redesign',
    roleFa: 'طراحی فروشگاه و بازطراحی فرانت‌اند',
    services: ['E-commerce', 'Web Design'],
    servicesFa: ['تجارت الکترونیک', 'طراحی وب'],
    creativeDirection:
      'High luxury with zero friction. Gold craftsmanship demands extreme clarity: diamond facets, hallmark engravings, and real-time weight calculations are brought forward seamlessly.',
    creativeDirectionFa:
      'تجمل فاخر بدون هیچ‌گونه پیچیدگی اضافه. هنر زرگری نیازمند وضوح بی‌نقص است: تراش‌های برلیان، نشان‌های عیارسنجی و محاسبات وزن زنده به ساده‌ترین شکل ممکن ارائه شده‌اند.',
    designDecisions: [
      {
        title: 'Macro Photographic Immersion',
        titleFa: 'غوطه‌وری در عکاسی ماکرو',
        description:
          'High-resolution imagery revealing diamond clarity and gold luster without heavy load times.',
        descriptionFa:
          'تصاویر بسیار باکیفیت برای نمایش درخشش الماس و جلای طلا بدون ایجاد کندی در بارگذاری.',
      },
      {
        title: 'Streamlined Mobile Purchasing',
        titleFa: 'ساده‌سازی خرید در موبایل',
        description:
          'Thumb-friendly navigation and clear karat metadata designed specifically for mobile shoppers.',
        descriptionFa:
          'ناوبری ارگونومیک با دسترسی آسان به مشخصات عیار و وزن برای کاربران گوشی‌های هوشمند.',
      },
    ],
    coverImage: './images/projects/arshia/hero.jpg',
    gallery: [
      {
        url: './images/projects/arshia/ring.webp',
        caption: 'Engagement ring solitaire craftsmanship in platinum and pavé diamonds',
        captionFa: 'حلقه نامزدی تک‌نگین با پایه پلاتین و الماس‌های مخراجی‌شده',
        aspectRatio: 'square',
      },
      {
        url: './images/projects/arshia/detail.webp',
        caption: 'Hallmarking verification badge and 18K purity guarantee details',
        captionFa: 'نشان‌های تضمین اصالت و خلوص طلای ۱۸ عیار استاندارد',
        aspectRatio: 'landscape',
      },
    ],
    featured: false,
    theme: {
      primary: '#242220',
      accent: '#D4AF37',
      surface: '#ECE7E0',
      glow: 'rgba(212, 175, 55, 0.16)',
    },
  },
  {
    id: 'proj-06',
    slug: 'sepahan-baft-zagros',
    index: '06',
    title: 'Sepahan Baft Zagros',
    titleFa: 'سپاهان بافت زاگرس',
    category: 'Industrial Engineering & B2B Portal',
    categoryFa: 'مهندسی نساجی صنعتی و پورتال B2B',
    year: '2026',
    status: 'concept',
    statusLabelEn: 'Concept Project',
    statusLabelFa: 'پروژه کانسپت',
    summary:
      'A technical B2B digital platform presenting industrial bulk packaging systems (Bitubag & Jumbobag) with structured engineering specifications and direct catalog access.',
    summaryFa:
      'پلتفرم تخصصی صنعتی B2B برای معرفی سیستم‌های بسته‌بندی بیتوبگ و جامبوبگ با مشخصات فنی دقیق و دسترسی مستقیم به کاتالوگ مهندسی.',
    role: 'UI Architecture & Technical Information Structure',
    roleFa: 'معماری رابط کاربری و ساختار اطلاعات فنی',
    services: ['Web Design', 'Landing Pages'],
    servicesFa: ['طراحی وب', 'صفحات فرود'],
    creativeDirection:
      'Industrial utility elevated to digital excellence. Clear typographic hierarchy, high-contrast engineering spec tables, and clean technical diagrams replace outdated corporate brochures.',
    creativeDirectionFa:
      'ارتقای کاربردپذیری صنعتی به استانداردهای برتر دیجیتال. سلسله‌مراتب تایپوگرافی شفاف، جداول مشخصات مهندسی با کنتراست بالا و دیاگرام‌های فنی دقیق جایگزین کاتالوگ‌های سنتی شده‌اند.',
    designDecisions: [
      {
        title: 'Engineered Specification Tables',
        titleFa: 'جداول مشخصات فنی مهندسی',
        description:
          'Structured load ratings (SWL 5:1 / 6:1), UV resistance metrics, and multi-layer polymer specs.',
        descriptionFa:
          'نمایش ساختارمند ضرایب ایمنی بار، مقاومت در برابر پرتو UV و مشخصات لایه‌های پلیمری.',
      },
      {
        title: 'Instant Catalog Access',
        titleFa: 'دسترسی بی‌واسطه به کاتالوگ',
        description:
          'Frictionless inquiry channels for export managers and chemical procurement teams.',
        descriptionFa:
          'مسیرهای سریع ثبت استعلام و استعلام قیمت برای مدیران بازرگانی و خریداران عمده.',
      },
    ],
    coverImage: './images/projects/sepahan/hero.jpg',
    gallery: [
      {
        url: './images/projects/sepahan/bitubag.jpg',
        caption: 'Bitubag specialized bulk packaging for hot bitumen export',
        captionFa: 'بسته‌بندی تخصصی بیتوبگ برای حمل و صادرات قیر گرم',
        aspectRatio: 'landscape',
      },
      {
        url: './images/projects/sepahan/jumbobag.jpg',
        caption: 'Heavy-duty woven polypropylene jumbo container bag stress testing',
        captionFa: 'آزمون مقاومت کششی کیسه‌های جامبوبگ پلی‌پروپیلن سنگین‌بافت',
        aspectRatio: 'portrait',
      },
    ],
    featured: false,
    theme: {
      primary: '#1E2633',
      accent: '#38BDF8',
      surface: '#E2E8F0',
      glow: 'rgba(56, 189, 248, 0.16)',
    },
  },
];
