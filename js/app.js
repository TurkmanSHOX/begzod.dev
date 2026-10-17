/**
 * BEGZOD.DEV — Core Application Scripts
 * Author: Begzod Axmetov
 * Roles: Project Manager, Web Developer & IT Mentor
 * Organizations: LIMON DIGITAL AGENCY | Al-Xorazmiy vorislari (Urganch) | Urganch Raqamli Texnologiyalar Texnikumi
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
      nav_experience: 'Tajriba & Faoliyat',
      nav_skills: 'Texnologiyalar',
      nav_contact: 'Aloqa',
      nav_payment: 'To\'lov',
      nav_connect_btn: 'Bog\'lanish',

      hero_location: 'Urganch, O\'zbekiston',
      hero_greeting: 'Salom, men',
      hero_role: 'Project Manager, Web Dasturchi & IT Mentor',
      hero_desc: 'LIMON DIGITAL AGENCY kompaniyasida Project Manager va mentor, "Al-Xorazmiy vorislari" Urganch tumani menejeri. Zamonaviy IT loyihalarni boshqarish, sifatli veb-yechimlar yaratish va yosh mutaxassislarni tayyorlash bilan shug\'ullanaman.',
      hero_btn_contact: 'Bog\'lanish',
      hero_btn_experience: 'Tajriba & Faoliyat',
      hero_btn_pay: 'To\'lov sahifasi',

      stats_experience: 'Yillik Tajriba',
      stats_teams: 'Boshqarilgan Loyihalar',
      stats_agency: 'Limon Digital Agency',
      stats_location: 'Xorazm, O\'zbekiston',

      about_badge: 'Men haqimda',
      about_title: 'Shaxsiy va Kasbiy Ma\'lumotlar',
      about_desc: 'IT boshqaruvi, dasturlash va yoshlar ta\'limiga bo\'lgan professional yondashuvim.',
      about_p1: 'Men Begzod Axmetov — Toshkent Axborot Texnologiyalari Universiteti (TATU) Urganch filiali Kompyuter injiniringi yo\'nalishi bitiruvchisiman. Hozirda LIMON DIGITAL AGENCY agentligida Project Manager va mentor, shuningdek "Al-Xorazmiy vorislari" tizimining Urganch tumanida menejeri sifatida faoliyat yuritaman.',
      about_p2: 'Faoliyatim IT loyihalarni samarali rejalashtirish, dasturchilar jamoasini boshqarish, texnik standartlar va zamonaviy veb-platformalar ishlab chiqishni o\'z ichiga oladi.',
      about_name_lbl: 'To\'liq ism',
      about_role_lbl: 'Lavozim',
      about_role_val: 'Project Manager & Mentor',
      about_loc_lbl: 'Manzil',
      about_status_lbl: 'Holat',
      about_status_val: 'Faol / Hamkorlikka ochiq',

      exp_badge: 'Tajriba & Martaba',
      exp_title: 'Professional Ish Tajribasi',
      exp_desc: 'Boshqaruv, mentorlik va ta\'lim sohasidagi asosiy faoliyat bosqichlarim.',

      exp_card1_title: 'Mentor & Project Manager',
      exp_card1_inst: 'LIMON DIGITAL AGENCY',
      exp_card1_desc: 'Raqamli loyihalarni boshqarish, mijozlar talablarini tahlil qilish, jamoani muvofiqlashtirish va dasturchilarga mentorlik qilish.',

      exp_card2_title: 'Menejer',
      exp_card2_inst: '"Al-Xorazmiy vorislari" (Urganch tumani)',
      exp_card2_desc: 'Iqtidorli yoshlar bilan ishlash, innovatsion g\'oyalar va IT loyihalarni qo\'llab-quvvatlash hamda jarayonlarni boshqarish.',

      exp_card3_title: 'Maxsus fan o\'qituvchisi',
      exp_card3_inst: 'Urganch Raqamli Texnologiyalar Texnikumi',
      exp_card3_desc: 'Veb-dasturlash, algoritmlar va axborot texnologiyalari yo\'nalishida talabalarga amaliy ta\'lim va kasbiy ko\'nikmalar berish.',

      exp_card4_title: 'Kompyuter injiniringi (Bakalavr)',
      exp_card4_inst: 'TATU Urganch Filiali',
      exp_card4_desc: 'Dasturiy ta\'minot arxitekturasi, ma\'lumotlar bazasi, tarmoq tizimlari va algoritmlarni chuqur o\'rganish.',

      skills_badge: 'Texnologiyalar & Boshqaruv',
      skills_title: 'Ko\'nikmalar va Metodologiyalar',
      skills_desc: 'Loyihalarni muvaffaqiyatli amalga oshirishda qo\'llaniladigan vositalar.',

      contact_badge: 'Aloqa',
      contact_title: 'Men bilan Bog\'laning',
      contact_desc: 'Savollar, loyihalar yoki hamkorlik takliflari bo\'yicha to\'g\'ridan-to\'g\'ri aloqaga chiqing.',
      contact_direct_title: 'To\'g\'ridan-to\'g\'ri Aloqa Kanallari',
      contact_phone_reveal: 'Raqamni ko\'rsatish',
      contact_form_title: 'Tezkor Xabar Qoldirish',
      contact_form_desc: 'Xabaringizni yozing va Telegram yoki Email orqali to\'g\'ridan-to\'g\'ri yo\'llang.',
      contact_form_name: 'Ismingiz *',
      contact_form_email: 'Email yoki Telefoningiz',
      contact_form_msg: 'Xabaringiz *',
      contact_form_method: 'Yuborish usuli:',
      contact_form_submit: 'Xabarni yuborish',

      footer_desc: 'Project Manager, Web Dasturchi & IT Mentor portfolio veb-sayti. Urganch, Xorazm, O\'zbekiston.'
    },
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_experience: 'Experience & Career',
      nav_skills: 'Skills',
      nav_contact: 'Contact',
      nav_payment: 'Payment',
      nav_connect_btn: 'Get in Touch',

      hero_location: 'Urgench, Uzbekistan',
      hero_greeting: 'Hello, I\'m',
      hero_role: 'Project Manager, Web Developer & IT Mentor',
      hero_desc: 'Project Manager and Mentor at LIMON DIGITAL AGENCY, Manager of "Al-Khwarizmi Descendants" in Urgench district. Leading digital product delivery, web development, and mentoring future IT talents.',
      hero_btn_contact: 'Contact Me',
      hero_btn_experience: 'Experience & Career',
      hero_btn_pay: 'Payment Page',

      stats_experience: 'Years Experience',
      stats_teams: 'Managed Projects',
      stats_agency: 'Limon Digital Agency',
      stats_location: 'Khorezm, Uzbekistan',

      about_badge: 'About Me',
      about_title: 'Personal & Professional Background',
      about_desc: 'My leadership approach, technical knowledge, and passion for mentoring.',
      about_p1: 'I am Begzod Axmetov — a Computer Engineering graduate from the Tashkent University of Information Technologies (TUIT) Urgench branch. I currently serve as Project Manager & Mentor at LIMON DIGITAL AGENCY and Manager of "Al-Khwarizmi Descendants" in Urgench district.',
      about_p2: 'My core expertise spans agile project management, guiding software engineering teams, delivering web platforms, and mentoring tech youth.',
      about_name_lbl: 'Full Name',
      about_role_lbl: 'Role',
      about_role_val: 'Project Manager & Mentor',
      about_loc_lbl: 'Location',
      about_status_lbl: 'Status',
      about_status_val: 'Active / Open to collaborations',

      exp_badge: 'Experience & Career',
      exp_title: 'Professional Career Timeline',
      exp_desc: 'Milestones across management, mentorship, and tech education.',

      exp_card1_title: 'Mentor & Project Manager',
      exp_card1_inst: 'LIMON DIGITAL AGENCY',
      exp_card1_desc: 'Leading digital products, overseeing client communications, sprint management, and mentoring developers.',

      exp_card2_title: 'Manager',
      exp_card2_inst: '"Al-Khwarizmi Descendants" (Urgench District)',
      exp_card2_desc: 'Fostering young tech talents, coordinating innovative IT initiatives and youth innovation programs.',

      exp_card3_title: 'Specialized CS Teacher',
      exp_card3_inst: 'Urgench Technical College of Digital Technologies',
      exp_card3_desc: 'Teaching web engineering, algorithms, and practical computing skills to college students.',

      exp_card4_title: 'Computer Engineering (B.Sc.)',
      exp_card4_inst: 'TUIT Urgench Branch',
      exp_card4_desc: 'Comprehensive engineering degree covering software architecture, databases, networks, and algorithms.',

      skills_badge: 'Skills & Tools',
      skills_title: 'Competencies & Methodologies',
      skills_desc: 'Technologies and agile methodologies utilized for successful project delivery.',

      contact_badge: 'Contact',
      contact_title: 'Let\'s Connect',
      contact_desc: 'Reach out for digital project management, IT mentorship, or consulting collaborations.',
      contact_direct_title: 'Direct Channels',
      contact_phone_reveal: 'Show Number',
      contact_form_title: 'Quick Message',
      contact_form_desc: 'Send a direct message via Telegram or Email client.',
      contact_form_name: 'Your Name *',
      contact_form_email: 'Your Email or Phone',
      contact_form_msg: 'Your Message *',
      contact_form_method: 'Preferred channel:',
      contact_form_submit: 'Send Message',

      footer_desc: 'Project Manager, Web Developer & IT Mentor portfolio. Urgench, Khorezm, Uzbekistan.'
    },
    ru: {
      nav_home: 'Главная',
      nav_about: 'Обо мне',
      nav_experience: 'Опыт и Карьера',
      nav_skills: 'Навыки',
      nav_contact: 'Контакты',
      nav_payment: 'Оплата',
      nav_connect_btn: 'Связаться',

      hero_location: 'Ургенч, Узбекистан',
      hero_greeting: 'Привет, я',
      hero_role: 'Project Manager, Веб-разработчик и IT-ментор',
      hero_desc: 'Project Manager и ментор в LIMON DIGITAL AGENCY, менеджер проекта "Наследники Аль-Хорезми" в Ургенчском районе. Управление IT-проектами, веб-разработка и наставничество.',
      hero_btn_contact: 'Связаться',
      hero_btn_experience: 'Опыт и Карьера',
      hero_btn_pay: 'Страница оплаты',

      stats_experience: 'Лет опыта',
      stats_teams: 'Успешных проектов',
      stats_agency: 'Limon Digital Agency',
      stats_location: 'Хорезм, Узбекистан',

      about_badge: 'Обо мне',
      about_title: 'Личная и Профессиональная Информация',
      about_desc: 'Мой управленческий подход, технические стандарты и менторство.',
      about_p1: 'Я Бегзод Ахметов — выпускник Ургенчского филиала ТАТУ по специальности Компьютерный инжиниринг. В настоящее время работаю Project Manager и ментором в LIMON DIGITAL AGENCY, а также менеджером проекта "Наследники Аль-Хорезми" в Ургенчском районе.',
      about_p2: 'Моя деятельность включает управление цифровыми проектами, координацию команды разработчиков и менторство.',
      about_name_lbl: 'Полное имя',
      about_role_lbl: 'Должность',
      about_role_val: 'Project Manager & Ментор',
      about_loc_lbl: 'Локация',
      about_status_lbl: 'Статус',
      about_status_val: 'Активен / Открыт к сотрудничеству',

      exp_badge: 'Опыт и Карьера',
      exp_title: 'Профессиональный Опыт',
      exp_desc: 'Ключевые этапы в управлении проектами, наставничестве и преподавании.',

      exp_card1_title: 'Ментор и Project Manager',
      exp_card1_inst: 'LIMON DIGITAL AGENCY',
      exp_card1_desc: 'Управление IT-продуктами, планирование спринтов, работа с клиентами и наставничество для разработчиков.',

      exp_card2_title: 'Менеджер',
      exp_card2_inst: '"Наследники Аль-Хорезми" (Ургенчский район)',
      exp_card2_desc: 'Координация талантливой молодежи, поддержка инновационных стартапов и развитие IT-инициатив.',

      exp_card3_title: 'Преподаватель специальных дисциплин',
      exp_card3_inst: 'Ургенчский техникум цифровых технологий',
      exp_card3_desc: 'Обучение веб-разработке, алгоритмам и информационным технологиям.',

      exp_card4_title: 'Компьютерный инжиниринг (Бакалавр)',
      exp_card4_inst: 'Ургенчский филиал ТАТУ',
      exp_card4_desc: 'Программная инженерия, архитектура баз данных, сетевая безопасность и алгоритмы.',

      skills_badge: 'Навыки и Инструменты',
      skills_title: 'Компетенции и Методологии',
      skills_desc: 'Инструменты управления проектами и проверенный стек разработки.',

      contact_badge: 'Контакты',
      contact_title: 'Свяжитесь со Мной',
      contact_desc: 'Напишите по вопросам управления проектами, менторства или сотрудничества.',
      contact_direct_title: 'Прямые Каналы Связи',
      contact_phone_reveal: 'Показать номер',
      contact_form_title: 'Быстрое Сообщение',
      contact_form_desc: 'Отправьте сообщение напрямую через Telegram или Email.',
      contact_form_name: 'Ваше имя *',
      contact_form_email: 'Email или телефон',
      contact_form_msg: 'Ваше сообщение *',
      contact_form_method: 'Способ отправки:',
      contact_form_submit: 'Отправить сообщение',

      footer_desc: 'Портфолио Project Manager, веб-разработчика и IT-ментора. Ургенч, Хорезм, Узбекистан.'
    }
  };

  /* ------------------------------------------------------------------------
     2. Language Switcher Engine
     ------------------------------------------------------------------------ */
  function setLanguage(lang) {
    if (!i18nData[lang]) lang = 'uz';
    localStorage.setItem('begzod_lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      if (btn.getAttribute('data-set-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

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
