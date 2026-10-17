/**
 * BEGZOD.DEV — Core Application Scripts
 * Features:
 * - Multilingual Switcher (UZ, EN, RU) with persistent state
 * - Light / Dark Theme Switcher with persistent state
 * - Anti-Spam Phone Reveal
 * - Dynamic Year Update (2026+)
 * - Toast Notification Utility
 * - Universal Copy to Clipboard
 * - Performance-Optimized Particle Network with prefers-reduced-motion check
 * - Accessible Keyboard Focus & Mobile Drawer Handling
 */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Multilingual Dictionary (UZ / EN / RU)
     ------------------------------------------------------------------------ */
  const i18nData = {
    uz: {
      nav_home: 'Bosh sahifa',
      nav_about: 'Men haqimda',
      nav_education: 'Ta\'lim & Trenerlik',
      nav_skills: 'Texnologiyalar',
      nav_projects: 'Loyihalar',
      nav_contact: 'Aloqa',
      nav_payment: 'To\'lov',
      nav_connect_btn: 'Bog\'lanish',

      hero_location: 'Urganch, O\'zbekiston',
      hero_greeting: 'Salom, men',
      hero_role: 'Full-Stack Web Dasturchi & IT Trener',
      hero_desc: 'Zamonaviy web-texnologiyalar, toza kod, qulay foydalanuvchi interfeyslari (UI/UX) va innovatsion IT yechimlar yaratuvchi dasturchi hamda yoshlar ustozi.',
      hero_btn_projects: 'Loyihalarni ko\'rish',
      hero_btn_contact: 'Bog\'lanish',
      hero_btn_pay: 'To\'lov sahifasi',

      stats_projects: 'Ochiq Loyihalar',
      stats_responsive: 'Responsive Dizayn',
      stats_architecture: 'Statik Arxitektura',
      stats_location: 'Xorazm, O\'zbekiston',

      about_badge: 'Men haqimda',
      about_title: 'Shaxsiy va Kasbiy Ma\'lumotlar',
      about_desc: 'Dasturlash, zamonaviy standartlar va amaliy loyihalarga bo\'lgan professional yondashuvim.',
      about_p1: 'Men Begzod Axmetov — Toshkent Axborot Texnologiyalari Universiteti (TATU) Urganch filiali Kompyuter injiniringi yo\'nalishi bitiruvchisiman. Dasturlash sohasida veb-saytlar, boshqaruv tizimlari, test platformalari va interaktiv IT yechimlar yaratish bilan shug\'ullanaman.',
      about_p2: 'Asosiy e\'tiborim toza arxitektura, tez yuklanish, yuqori xavfsizlik va foydalanuvchiga qulay interfeys (UX) yaratishga qaratilgan.',
      about_name_lbl: 'To\'liq ism',
      about_role_lbl: 'Mutaxassislik',
      about_loc_lbl: 'Manzil',
      about_status_lbl: 'Holat',
      about_status_val: 'Yangi loyihalar uchun ochiq',

      edu_badge: 'Ta\'lim & Tajriba',
      edu_title: 'IT Trenerlik va O\'qitish Faoliyati',
      edu_desc: 'Yoshlarga dasturlash va axborot texnologiyalarini o\'rgatish, amaliy mentorlik va dars berish tajribam.',
      edu_card1_title: 'Maxsus fan o\'qituvchisi & Trener',
      edu_card1_inst: 'Urganch Raqamli Texnologiyalar Texnikumi',
      edu_card1_desc: 'Talabalarga zamonaviy veb-dasturlash, algoritmlar, ma\'lumotlar tuzilmasi va kompyuter injiniringi fanlaridan amaliy darslar o\'tish.',
      edu_card2_title: 'IT Trener & Mentor',
      edu_card2_inst: 'Beruniy IT Park & O\'quv markazlari',
      edu_card2_desc: 'Yoshlarni frontend dasturlash, HTML/CSS/JavaScript, mBot robototexnika va zamonaviy IT ko\'nikmalariga o\'rgatish.',
      edu_card3_title: 'Kompyuter injiniringi (Bakalavr)',
      edu_card3_inst: 'TATU Urganch Filiali',
      edu_card3_desc: 'Dasturiy ta\'minot arxitekturasi, tarmoq xavfsizligi, mikrokontrollerlar va algoritmlarni chuqur o\'rganish.',

      skills_badge: 'Texnologiyalar',
      skills_title: 'Ko\'nikmalar va Vositalar',
      skills_desc: 'Loyihalarni ishlab chiqishda foydalaniladigan tekshirilgan vositalar va texnologiyalar.',

      projects_badge: 'Portfolio',
      projects_title: 'Ochiq Kodli Loyihalarim',
      projects_desc: 'GitHub profilimdagi real va amaliy loyihalar to\'plami.',
      filter_all: 'Barchasi',
      filter_web: 'Web platformalar',
      filter_service: 'Xizmatlar & Biznes',
      filter_ai: 'Robototexnika & AI',
      filter_test: 'Test tizimlari',

      contact_badge: 'Aloqa',
      contact_title: 'Men bilan Bog\'laning',
      contact_desc: 'Savollar, hamkorlik yoki yangi loyihalar bo\'yicha to\'g\'ridan-to\'g\'ri aloqaga chiqing.',
      contact_direct_title: 'To\'g\'ridan-to\'g\'ri Aloqa Kanallari',
      contact_phone_reveal: 'Raqamni ko\'rsatish',
      contact_form_title: 'Tezkor Xabar Qoldirish',
      contact_form_desc: 'Xabaringizni yozing va o\'zingizga qulay kanal (Telegram yoki Email) orqali jo\'nating. Server talab qilinmaydi.',
      contact_form_name: 'Ismingiz *',
      contact_form_email: 'Email yoki Telefoningiz',
      contact_form_msg: 'Xabaringiz *',
      contact_form_method: 'Qaysi usulda yuborasiz?',
      contact_form_submit: 'Xabarni yuborish',

      footer_desc: 'Full-Stack Web Dasturchi & IT Trener portfolio veb-sayti. Urganch, Xorazm, O\'zbekiston.'
    },
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_education: 'Education & Trainer',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_contact: 'Contact',
      nav_payment: 'Payment',
      nav_connect_btn: 'Get in Touch',

      hero_location: 'Urgench, Uzbekistan',
      hero_greeting: 'Hello, I\'m',
      hero_role: 'Full-Stack Web Developer & IT Instructor',
      hero_desc: 'Software engineer and IT trainer building fast, modern web applications, clean UI/UX designs, and mentoring future developers.',
      hero_btn_projects: 'View Projects',
      hero_btn_contact: 'Contact Me',
      hero_btn_pay: 'Payment Page',

      stats_projects: 'Open Projects',
      stats_responsive: 'Responsive UI',
      stats_architecture: 'Static Speed',
      stats_location: 'Khorezm, Uzbekistan',

      about_badge: 'About Me',
      about_title: 'Personal & Professional Background',
      about_desc: 'My engineering mindset, software standards, and dedication to craftsmanship.',
      about_p1: 'I am Begzod Axmetov — a Computer Engineering graduate from the Tashkent University of Information Technologies (TUIT) Urgench branch. I build web apps, testing platforms, robotic integrations, and interactive systems.',
      about_p2: 'My core focus is clean architecture, performance, accessibility, and intuitive UI/UX design.',
      about_name_lbl: 'Full Name',
      about_role_lbl: 'Specialization',
      about_loc_lbl: 'Location',
      about_status_lbl: 'Status',
      about_status_val: 'Open for projects & collaboration',

      edu_badge: 'Teaching & Background',
      edu_title: 'IT Mentorship & Teaching Activity',
      edu_desc: 'Empowering young talents with coding, web technologies, and robotics.',
      edu_card1_title: 'Specialized CS Teacher & Trainer',
      edu_card1_inst: 'Urgench Technical College of Digital Technologies',
      edu_card1_desc: 'Teaching web development, algorithms, data structures, and computer engineering to students.',
      edu_card2_title: 'IT Trainer & Mentor',
      edu_card2_inst: 'Beruni IT Park & Academy',
      edu_card2_desc: 'Mentoring youth in frontend programming, HTML/CSS/JavaScript, and mBot robotics.',
      edu_card3_title: 'Computer Engineering (B.Sc.)',
      edu_card3_inst: 'TUIT Urgench Branch',
      edu_card3_desc: 'In-depth study of software engineering, network systems, hardware design, and algorithms.',

      skills_badge: 'Tech Stack',
      skills_title: 'Skills & Tools',
      skills_desc: 'Core technologies and frameworks used across my open source work.',

      projects_badge: 'Portfolio',
      projects_title: 'Featured Open Source Projects',
      projects_desc: 'Authentic public repositories from my GitHub profile.',
      filter_all: 'All',
      filter_web: 'Web Platforms',
      filter_service: 'Services & Business',
      filter_ai: 'Robotics & AI',
      filter_test: 'Testing Systems',

      contact_badge: 'Contact',
      contact_title: 'Let\'s Connect',
      contact_desc: 'Reach out directly for project inquiries, consulting, or educational collaborations.',
      contact_direct_title: 'Direct Channels',
      contact_phone_reveal: 'Show Number',
      contact_form_title: 'Quick Client Message',
      contact_form_desc: 'Send a message directly via Telegram or Email client without any server delay.',
      contact_form_name: 'Your Name *',
      contact_form_email: 'Your Email or Phone',
      contact_form_msg: 'Your Message *',
      contact_form_method: 'Preferred dispatch channel:',
      contact_form_submit: 'Send Message',

      footer_desc: 'Full-Stack Web Developer & IT Instructor portfolio. Urgench, Khorezm, Uzbekistan.'
    },
    ru: {
      nav_home: 'Главная',
      nav_about: 'Обо мне',
      nav_education: 'Образование и Тренерство',
      nav_skills: 'Технологии',
      nav_projects: 'Проекты',
      nav_contact: 'Контакты',
      nav_payment: 'Оплата',
      nav_connect_btn: 'Связаться',

      hero_location: 'Ургенч, Узбекистан',
      hero_greeting: 'Привет, я',
      hero_role: 'Full-Stack Веб-разработчик и IT-тренер',
      hero_desc: 'Создаю современные быстрые веб-приложения, удобные интерфейсы (UI/UX) и обучаю будущих разработчиков.',
      hero_btn_projects: 'Посмотреть проекты',
      hero_btn_contact: 'Связаться',
      hero_btn_pay: 'Страница оплаты',

      stats_projects: 'Открытых проектов',
      stats_responsive: 'Адаптивный дизайн',
      stats_architecture: 'Быстрая статика',
      stats_location: 'Хорезм, Узбекистан',

      about_badge: 'Обо мне',
      about_title: 'Личная и Профессиональная Информация',
      about_desc: 'Мой инженерный подход, стандарты кода и практический опыт разработки.',
      about_p1: 'Я Бегзод Ахметов — выпускник Ургенчского филиала ТАТУ по специальности Компьютерный инжиниринг. Разрабатываю веб-платформы, системы тестирования и проекты с робототехникой.',
      about_p2: 'Мой приоритет — чистая архитектура, высокая производительность и доступный UX.',
      about_name_lbl: 'Полное имя',
      about_role_lbl: 'Профессия',
      about_loc_lbl: 'Локация',
      about_status_lbl: 'Статус',
      about_status_val: 'Открыт для новых проектов',

      edu_badge: 'Опыт и Преподавание',
      edu_title: 'IT-Тренерство и Образовательная Деятельность',
      edu_desc: 'Обучение молодежи веб-технологиям, программированию и робототехнике.',
      edu_card1_title: 'Преподаватель специальных дисциплин',
      edu_card1_inst: 'Ургенчский техникум цифровых технологий',
      edu_card1_desc: 'Преподавание веб-разработки, алгоритмов и основ компьютерного инжиниринга.',
      edu_card2_title: 'IT-тренер и ментор',
      edu_card2_inst: 'IT Park Беруни и образовательные центры',
      edu_card2_desc: 'Обучение основам frontend (HTML, CSS, JS) и робототехнике mBot.',
      edu_card3_title: 'Компьютерный инжиниринг (Бакалавр)',
      edu_card3_inst: 'Ургенчский филиал ТАТУ',
      edu_card3_desc: 'Углубленное изучение программной инженерии, сетей и алгоритмов.',

      skills_badge: 'Технологии',
      skills_title: 'Навыки и Инструменты',
      skills_desc: 'Проверенный стек технологий, применяемый в моих открытых проектах.',

      projects_badge: 'Портфолио',
      projects_title: 'Открытые Проекты на GitHub',
      projects_desc: 'Подборка моих реальных репозиториев с открытым исходным кодом.',
      filter_all: 'Все',
      filter_web: 'Веб-платформы',
      filter_service: 'Услуги и Бизнес',
      filter_ai: 'Робототехника и AI',
      filter_test: 'Системы тестирования',

      contact_badge: 'Контакты',
      contact_title: 'Свяжитесь со Мной',
      contact_desc: 'Напишите по поводу проектов, сотрудничества или обучения.',
      contact_direct_title: 'Прямые Каналы Связи',
      contact_phone_reveal: 'Показать номер',
      contact_form_title: 'Быстрое Сообщение',
      contact_form_desc: 'Отправьте сообщение напрямую через Telegram или Email без задержек.',
      contact_form_name: 'Ваше имя *',
      contact_form_email: 'Email или телефон',
      contact_form_msg: 'Ваше сообщение *',
      contact_form_method: 'Способ отправки:',
      contact_form_submit: 'Отправить сообщение',

      footer_desc: 'Портфолио Full-Stack разработчика и IT-тренера. Ургенч, Хорезм, Узбекистан.'
    }
  };

  /* ------------------------------------------------------------------------
     2. Language Switcher Engine
     ------------------------------------------------------------------------ */
  function setLanguage(lang) {
    if (!i18nData[lang]) lang = 'uz';
    localStorage.setItem('begzod_lang', lang);

    document.documentElement.lang = lang;

    // Update active class on language buttons
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      if (btn.getAttribute('data-set-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Translate DOM elements
    const dict = i18nData[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });
  }

  function initLanguage() {
    const savedLang = localStorage.getItem('begzod_lang') || 'uz';
    setLanguage(savedLang);

    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      btn.addEventListener('click', function () {
        const targetLang = this.getAttribute('data-set-lang');
        setLanguage(targetLang);
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. Light / Dark Theme Switcher Engine
     ------------------------------------------------------------------------ */
  function setTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('begzod_theme', 'light');
      updateThemeToggleIcon('light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('begzod_theme', 'dark');
      updateThemeToggleIcon('dark');
    }
  }

  function updateThemeToggleIcon(theme) {
    const icon = document.getElementById('themeToggleIcon');
    if (!icon) return;
    if (theme === 'light') {
      icon.className = 'bi bi-sun-fill text-warning';
    } else {
      icon.className = 'bi bi-moon-stars-fill text-white';
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('begzod_theme') || 'dark';
    setTheme(savedTheme);

    const toggleBtn = document.getElementById('themeToggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
      });
    }
  }

  /* ------------------------------------------------------------------------
     4. Anti-Spam Phone Reveal
     ------------------------------------------------------------------------ */
  function initPhoneShield() {
    const shieldBtn = document.getElementById('revealPhoneBtn');
    const phoneDisplay = document.getElementById('phoneDisplayVal');
    const phoneLink = document.getElementById('phoneLinkWrapper');

    if (shieldBtn && phoneDisplay && phoneLink) {
      shieldBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const fullNumber = '+998 91 425 85 86';
        phoneDisplay.textContent = fullNumber;
        phoneLink.setAttribute('href', 'tel:+998914258586');
        shieldBtn.style.display = 'none';
        showToast('Raqam ochildi!');
      });
    }
  }

  /* ------------------------------------------------------------------------
     5. Dynamic Year
     ------------------------------------------------------------------------ */
  function initDynamicYear() {
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.current-year').forEach(el => {
      el.textContent = currentYear;
    });
  }

  /* ------------------------------------------------------------------------
     6. Toast Utility & Universal Copy
     ------------------------------------------------------------------------ */
  function showToast(message, duration = 2500) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.className = 'toast-notice';
      toast.innerHTML = `<i class="bi bi-check-circle-fill"></i> <span id="toastText"></span>`;
      document.body.appendChild(toast);
    }
    const textSpan = toast.querySelector('#toastText');
    if (textSpan) textSpan.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  function copyTextToClipboard(text, successMessage = 'Nusxalandi!') {
    if (!navigator.clipboard) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand('copy');
        showToast(successMessage);
      } catch (err) {
        console.error('Nusxalashda xatolik:', err);
      }
      document.body.removeChild(textarea);
      return;
    }

    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(err => {
      console.error('Clipboard xatosi:', err);
    });
  }

  function initCopyButtons() {
    document.querySelectorAll('[data-copy]').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const textToCopy = this.getAttribute('data-copy');
        const customMsg = this.getAttribute('data-copy-msg') || 'Nusxalandi!';
        if (textToCopy) {
          copyTextToClipboard(textToCopy, customMsg);
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     7. Navbar Scroll & Keyboard Accessibility
     ------------------------------------------------------------------------ */
  function initNavbar() {
    const navbar = document.querySelector('.custom-navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    }, { passive: true });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap?.Collapse?.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          } else {
            navbarCollapse.classList.remove('show');
          }
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap?.Collapse?.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  }

  /* ------------------------------------------------------------------------
     8. Scroll to Top
     ------------------------------------------------------------------------ */
  function initScrollTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    });
  }

  /* ------------------------------------------------------------------------
     9. Client-Side Contact Form (Static Telegram / Email Dispatch)
     ------------------------------------------------------------------------ */
  function initContactForm() {
    const contactForm = document.getElementById('quickContactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const messageInput = document.getElementById('senderMessage');
      const sendMethod = document.querySelector('input[name="contactMethod"]:checked')?.value || 'telegram';

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !message) {
        showToast('Iltimos, ismingiz va xabarni kiriting!');
        return;
      }

      if (sendMethod === 'telegram') {
        const fullMessage = `Salom Begzod! Mening ismim: ${name}.\nEmail: ${email || 'ko\'rsatilmadi'}\n\nXabar:\n${message}`;
        const telegramUrl = `https://t.me/turkmanshox?text=${encodeURIComponent(fullMessage)}`;
        showToast('Telegram ochilmoqda...');
        window.open(telegramUrl, '_blank', 'noopener,noreferrer');
      } else {
        const mailSubject = `begzod.dev orqali xabar: ${name}`;
        const mailBody = `Ism: ${name}\nEmail: ${email}\n\nXabar:\n${message}`;
        const mailtoUrl = `mailto:turkmanshax@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
        showToast('Pochta dasturi ochilmoqda...');
        window.location.href = mailtoUrl;
      }

      contactForm.reset();
    });
  }

  /* ------------------------------------------------------------------------
     10. Particle Canvas
     ------------------------------------------------------------------------ */
  function initParticleCanvas() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let animationFrameId = null;
    let isTabVisible = true;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !animationFrameId) {
        loop();
      }
    });

    let mouseX = -1000;
    let mouseY = -1000;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 65);

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 10;
        this.size = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = -(Math.random() * 0.6 + 0.2);
        this.alpha = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.5 ? '#8b5cf6' : '#6366f1';
      }

      update() {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.y < -10) this.reset(false);
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    function connectParticles() {
      const maxDist = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const alpha = 0.15 * (1 - dist / maxDist);
            ctx.strokeStyle = '#a855f7';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      if (!isTabVisible) {
        animationFrameId = null;
        return;
      }
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      connectParticles();
      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(loop);
    }

    loop();
  }

  /* ------------------------------------------------------------------------
     11. Initialize Everything on DOM Ready
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initLanguage();
    initPhoneShield();
    initDynamicYear();
    initNavbar();
    initScrollTop();
    initCopyButtons();
    initContactForm();
    initParticleCanvas();
  });

  window.BegzodApp = {
    showToast: showToast,
    copyText: copyTextToClipboard,
    setLanguage: setLanguage,
    setTheme: setTheme
  };
})();
