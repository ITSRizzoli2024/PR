// script.js - Multilanguage Support with RTL
const translations = {
  en: {
    companyName: "P.R. GENERAL TRADING LLC SPC",
    heroTitle: "Global Commodity Trading",
    heroSubtitle: "Specializing in industrial metals and Oil & Gas products with a global reach and decades of expertise.",
    contactBtn: "Contact Us",
    aboutUs: "About Us",
    aboutHeadline: "Leading the Way in Commodity Trading",
    aboutParagraph: "With decades of experience in the energy sector, we provide reliable solutions for your commodity needs.",
    featuredProducts: "Featured Products",
    nav: ["Home", "Services", "Map", "Team", "Contact", "AR"]
  },
  ar: {
    companyName: "بي.آر. جينيرال تريدينج ذ.م.م. إس بي سي",
    heroTitle: "تجارة السلع العالمية",
    heroSubtitle: "متخصصون في المعادن الصناعية ومنتجات النفط والغاز مع نطاق عالمي وخبرة تمتد لعقود.",
    contactBtn: "اتصل بنا",
    aboutUs: "عن الشركة",
    aboutHeadline: "الريادة في تجارة السلع",
    aboutParagraph: "مع عقود من الخبرة في قطاع الطاقة، نقدم حلولاً موثوقة لاحتياجاتكم السلعية.",
    featuredProducts: "المنتجات المميزة",
    nav: ["الرئيسية", "الخدمات", "الخريطة", "الفريق", "اتصل", "EN"]
  }
};

let currentLang = 'en';

function updateLanguage(lang) {
  const t = translations[lang];
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  document.getElementById('companyName').textContent = t.companyName;
  document.getElementById('heroTitle').textContent = t.heroTitle;
  document.getElementById('heroSubtitle').textContent = t.heroSubtitle;
  document.getElementById('contactBtn').textContent = t.contactBtn;
  document.getElementById('aboutUs').textContent = t.aboutUs;
  document.getElementById('aboutHeadline').textContent = t.aboutHeadline;
  document.getElementById('aboutParagraph').textContent = t.aboutParagraph;
  document.getElementById('featuredProducts').textContent = t.featuredProducts;

  const navItems = document.querySelectorAll('.nav-links a, .nav-links button');
  navItems.forEach((el, i) => {
    el.textContent = t.nav[i];
  });

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
