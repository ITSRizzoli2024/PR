// script.js - Enhanced Multilanguage Support with Full i18n
const translations = {
  en: {
    companyName: "P.R. GENERAL TRADING LLC SPC",
    heroTitle: "Global Commodity Trading",
    heroSubtitle: "Specializing in industrial metals and Oil & Gas products with a global reach and decades of expertise.",
    contactBtn: "Contact Us",
    aboutUs: "About Us",
    aboutHeadline: "Leading the Way in Commodity Trading",
    aboutStoryTitle: "Our Story",
    aboutStoryText: "Founded in Abu Dhabi, P.R. GENERAL TRADING LLC SPC has grown to become a trusted name in global commodity markets.",
    aboutExpertiseTitle: "Our Expertise",
    aboutExpertiseText: "We specialize in trading of industrial metals and petroleum derivatives with a focus on quality and reliability.",
    aboutNetwork: "Our global network ensures on-time delivery and responsive partnerships.",
    networkBtn: "Global Network",
    featuredProducts: "Key Commodities We Trade",
    productTitles: [
      "Industrial Metals Trading",
      "Diesel (EN590 10 PPM)",
      "Urea (Fertilizer)",
      "Jet Fuel A1",
      "Crude Oil"
    ],
    productDescriptions: [
      "We trade a wide range of industrial metals from reliable international suppliers.",
      "Ultra-low sulfur diesel conforming to EN590 specifications.",
      "High-grade urea suitable for agricultural and industrial use.",
      "Aviation-grade kerosene meeting international safety standards.",
      "Crude oil from select suppliers in Kazakhstan, Oman, and Azerbaijan."
    ],
    productBtn: "Learn more",
    ctaText: "Ready to work with us? Get in touch today.",
    footerCopyright: "All rights reserved."
  },
  ar: {
    companyName: "بي.آر. جينيرال تريدينج ذ.م.م. إس بي سي",
    heroTitle: "تجارة السلع العالمية",
    heroSubtitle: "متخصصون في المعادن الصناعية ومنتجات النفط والغاز مع نطاق عالمي وخبرة تمتد لعقود.",
    contactBtn: "اتصل بنا",
    aboutUs: "عن الشركة",
    aboutHeadline: "الريادة في تجارة السلع",
    aboutStoryTitle: "قصتنا",
    aboutStoryText: "تأسست في أبو ظبي ونمت لتصبح اسمًا موثوقًا في أسواق السلع العالمية.",
    aboutExpertiseTitle: "خبرتنا",
    aboutExpertiseText: "نتخصص في تجارة المعادن الصناعية ومشتقات النفط بجودة وموثوقية عالية.",
    aboutNetwork: "شبكتنا العالمية تضمن التسليم في الوقت المناسب وشراكات فعالة.",
    networkBtn: "الشبكة العالمية",
    featuredProducts: "السلع الرئيسية التي نتداول بها",
    productTitles: [
      "تجارة المعادن الصناعية",
      "الديزل (EN590 10 PPM)",
      "اليوريا (الأسمدة)",
      "وقود الطائرات A1",
      "النفط الخام"
    ],
    productDescriptions: [
      "نتداول مجموعة واسعة من المعادن الصناعية من موردين عالميين موثوقين.",
      "ديزل منخفض الكبريت مطابق لمواصفات EN590.",
      "يوريا عالية الجودة للاستخدام الزراعي والصناعي.",
      "كيروسين للطيران يفي بمعايير السلامة الدولية.",
      "نفط خام من موردين مختارين في كازاخستان وعُمان وأذربيجان."
    ],
    productBtn: "اقرأ المزيد",
    ctaText: "هل أنت مستعد للعمل معنا؟ تواصل معنا اليوم.",
    footerCopyright: "جميع الحقوق محفوظة."
  }
};

let currentLang = 'en';

function updateLanguage(lang) {
  const t = translations[lang];
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  const mappings = [
    'companyName','heroTitle','heroSubtitle','contactBtn','aboutUs','aboutHeadline',
    'aboutStoryTitle','aboutStoryText','aboutExpertiseTitle','aboutExpertiseText','aboutNetwork','networkBtn','featuredProducts','ctaText','footerCopyright'
  ];

  mappings.forEach(key => {
    const el = document.querySelector(`[data-i18n="${key}"]`);
    if (el) el.textContent = t[key];
  });

  const productTitles = document.querySelectorAll('[data-i18n^="productTitle-"]');
  const productDescs = document.querySelectorAll('[data-i18n^="productDesc-"]');
  const productBtns = document.querySelectorAll('[data-i18n^="productBtn"]');

  productTitles.forEach((el, i) => el.textContent = t.productTitles[i]);
  productDescs.forEach((el, i) => el.textContent = t.productDescriptions[i]);
  productBtns.forEach((el) => el.textContent = t.productBtn);

  currentLang = lang;
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  updateLanguage(savedLang);

  document.getElementById('langToggle').addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage(nextLang);
  });
});
