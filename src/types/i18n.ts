export type Language = 'en' | 'fa';
export type Direction = 'ltr' | 'rtl';

export interface TranslationDictionary {
  meta: {
    siteTitle: string;
    siteDescription: string;
    roleTagline: string;
  };
  nav: {
    work: string;
    about: string;
    services: string;
    contact: string;
    playground: string;
    availableBadge: string;
  };
  hero: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    statement: string;
    supporting: string;
    exploreArchive: string;
    contactCta: string;
    telemetryLocation: string;
    telemetrySystem: string;
    scrollHint: string;
  };
  playground: {
    title: string;
    subtitle: string;
    modeInteractive: string;
    modePhysics: string;
    modeGrid: string;
    reset: string;
    instructions: string;
    activeNodes: string;
  };
  work: {
    sectionIndex: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterConcepts: string;
    filterExperiments: string;
    viewProject: string;
    exploreDetail: string;
    statusNotice: string;
  };
  projectDetail: {
    backToArchive: string;
    statusTag: string;
    timeline: string;
    role: string;
    servicesDelivered: string;
    directionHeadline: string;
    decisionsHeadline: string;
    visualStudies: string;
    nextProject: string;
    prevProject: string;
    externalLink: string;
    conceptDisclaimer: string;
    closeModal: string;
  };
  about: {
    sectionIndex: string;
    title: string;
    headline: string;
    paragraph1: string;
    paragraph2: string;
    philosophyTitle: string;
    philosophyBody: string;
    disciplinesTitle: string;
    stackTitle: string;
    locationLabel: string;
    locationValue: string;
  };
  services: {
    sectionIndex: string;
    title: string;
    subtitle: string;
    items: {
      number: string;
      title: string;
      subtitle: string;
      description: string;
      deliverables: string[];
    }[];
  };
  contact: {
    sectionIndex: string;
    title: string;
    headline: string;
    subhead: string;
    emailLabel: string;
    copyEmail: string;
    copied: string;
    openClient: string;
    telegramLabel: string;
    linkedinLabel: string;
    locationLabel: string;
    locationValue: string;
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      serviceLabel: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      successMsg: string;
      errorMsg: string;
    };
  };
  telemetry: {
    localTime: string;
    timeZone: string;
    precision: string;
    fps: string;
    soundToggle: string;
    soundMuted: string;
    soundActive: string;
  };
  footer: {
    tagline: string;
    rights: string;
    backToTop: string;
    designedWith: string;
  };
}
