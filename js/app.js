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
      nav_services: 'Xizmatlar',
      nav_skills: 'Texnologiyalar',
      nav_contact: 'Aloqa',
      nav_payment: 'To\'lov',
      nav_connect_btn: 'Bog\'lanish',

      hero_location: 'Urganch, O\'zbekiston',
      hero_greeting: 'Salom, men',
      hero_role: 'Project Manager, Web Dasturchi & IT Mentor',
      hero_desc: 'LIMON DIGITAL AGENCY kompaniyasida Project Manager va mentor, "Al-Xorazmiy vorislari" Urganch tumani menejeri. Zamonaviy IT loyihalarni boshqarish, sifatli veb-yechimlar yaratish va yosh mutaxassislarni tayyorlash bilan shug\'ullanaman.',
      hero_btn_services: 'Xizmatlar',
      hero_btn_contact: 'Bog\'lanish',
      hero_btn_experience: 'Tajriba & Faoliyat',
      hero_btn_pay: 'To\'lov',

      stats_experience: 'Yillik Tajriba',
      stats_teams: 'Boshqarilgan Loyihalar',
      stats_agency: 'Limon Digital Agency',
      stats_location: 'Xorazm, O\'zbekiston',

      about_badge: 'Men haqimda',
      about_title: 'Shaxsiy va Kasbiy Ma\'lumotlar',
      about_desc: 'IT boshqaruvi, dasturlash va yoshlar ta\'limiga bo\'lgan professional yondashuvim.',
      about_p1: 'Men Begzod Axmetov — Toshkent Axborot Texnologiyalari Universiteti (TATU) Urganch filiali Kompyuter injiniringi yo\'nalishini bitirganman. Hozirda LIMON DIGITAL AGENCY agentligida Project Manager va mentor, shuningdek "Al-Xorazmiy vorislari" tizimining Urganch tumanida menejeri sifatida faoliyat yuritaman.',
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

      /* Xizmatlar Bo'limi */
      services_badge: 'Xizmatlar & Ta\'lim',
      services_title: 'Professional Xizmatlar',
      services_desc: 'G‘oyangizni zamonaviy veb va mobil yechimlarga aylantiring, ilmiy izlanishlarni esa puxta tahlil va dasturiy ta’minot bilan birlashtiring.',
      stats_sub_badge: 'Natijalarimiz',
      stats_sub_title: 'Ilmiy va Akademik Muvaffaqiyatlarimiz',
      stat_bachelor_title: 'Bakalavr Diplom Ishi',
      stat_bachelor_desc: 'Anti-plagiat 90%+ toza, dasturiy ta\'minot va to\'liq tahlil bilan',
      stat_masters_title: 'Magistrlik Ishi',
      stat_masters_desc: 'Ilmiy izlanishlar va amaliy dasturiy ishlanmalar tajribasi',
      stat_phd_title: 'PhD Ishi',
      stat_phd_desc: 'Dasturiy qism, amaliy modellar va tahliliy yechimlar tajribasi',
      stat_coursework_title: 'Kurs Ishi',
      stat_coursework_desc: 'Tartibli matn, hisob-kitoblar, jadvallar va o‘z vaqtida topshirilgan',

      srv1_chip: 'Web Development',
      srv1_title: 'Veb-sayt Ishlab Chiqish',
      srv1_slogan: 'G‘oyangizni zamonaviy veb-saytga aylantiring.',
      srv1_f1: 'Internet-do‘konlar (E-commerce) yaratish',
      srv1_f2: 'Kompaniya va tashkilotlar uchun korporativ saytlar',
      srv1_f3: 'Shaxsiy portfolio va vizitka saytlari',
      srv1_f4: 'Zamonaviy, barcha qurilmalarga mos interfeyslar',
      srv1_f5: 'Mavjud saytlarni yangilash va takomillashtirish',
      srv1_result: 'Zamonaviy, tezkor va foydalanishga qulay veb-sayt.',

      srv2_chip: 'Mobile Apps',
      srv2_title: 'Mobil Ilovalar Yaratish',
      srv2_slogan: 'Biznesingiz va g‘oyalaringizni mobil qurilmalarga olib chiqing.',
      srv2_f1: 'Android va iOS uchun mobil ilovalar',
      srv2_f2: 'Qulay va zamonaviy foydalanuvchi interfeysi (UI/UX)',
      srv2_f3: 'Buyurtma va xizmatlarni boshqarish ilovalari',
      srv2_f4: 'Mavjud mobil ilovalarni takomillashtirish',
      srv2_result: 'Foydalanuvchilar uchun qulay va ishonchli mobil yechimlar.',

      srv3_chip: 'Telegram Bots',
      srv3_title: 'Telegram Botlar Ishlab Chiqish',
      srv3_slogan: 'Takroriy ishlarni avtomatlashtiring va vaqtingizni tejang.',
      srv3_f1: 'Savdo va buyurtmalarni boshqarish botlari',
      srv3_f2: 'Mijozlarga xizmat ko‘rsatish va yordam botlari',
      srv3_f3: 'Test, viktorina va ta’lim botlari',
      srv3_f4: 'Avtomatik xabarlar va eslatmalar tizimi',
      srv3_f5: 'To‘lov va bildirishnoma tizimlari bilan integratsiya',
      srv3_result: 'Ish jarayonlarini soddalashtiruvchi va vaqtni tejovchi botlar.',

      srv4_chip: 'Desktop & Systems',
      srv4_title: 'Kompyuter Dasturlari & Avtomatlashtirish',
      srv4_slogan: 'Ish jarayonlaringizni raqamlashtiring va samaradorlikni oshiring.',
      srv4_f1: 'Windows operatsion tizimi uchun amaliy dasturlar',
      srv4_f2: 'Hisob-kitob va hisobotlarni avtomatlashtirish',
      srv4_f3: 'Ofis ishlarini yengillashtiruvchi vositalar',
      srv4_f4: 'Tashkilotlar uchun ichki boshqaruv tizimlari',
      srv4_f5: 'Mavjud dasturiy ta’minotlarni takomillashtirish',
      srv4_result: 'Kundalik vazifalarni bajarishni osonlashtiruvchi dasturiy yechimlar.',

      srv5_chip: 'Ilmiy & Akademik',
      srv5_title: 'Diplom, Magistrlik, PhD & Kurs Ishlari',
      srv5_slogan: 'Ilmiy izlanishlarni amaliy dasturiy yechimlar va puxta tahlil bilan birlashtiring.',
      srv5_f1: 'tajribasi',
      srv5_f2: 'Matn originalligini oshirish va manbalarni rasmiylashtirish',
      srv5_f3: 'Universitet talablari asosida hujjatlarni tayyorlash',
      srv5_f4: 'Dasturiy ta’minot va amaliy loyihalarni ishlab chiqish',
      srv5_f5: 'Grafiklar, jadvallar va himoya taqdimoti materiallari',
      srv5_f6: 'aniq hisob-kitoblar va muddatida topshirish',
      srv5_result: 'Universitet talablariga mos, himoyaga to‘liq tayyor ilmiy-amaliy ish.',

      srv6_chip: '100% Individual Ta\'lim',
      srv6_title: 'Individual «Kompyuter PRO» Kursi',
      srv6_slogan: 'Kompyuterdan oddiy foydalanishdan amaliy va professional ko‘nikmalargacha.',
      srv6_f1: 'Kompyuter savodxonligi va amaliy ko‘nikmalar',
      srv6_f2: 'Microsoft Word, Excel va PowerPoint (100% amaliy)',
      srv6_f3: 'Google Docs, Sheets, Forms va Drive bilan ishlash',
      srv6_f4: 'Internet xavfsizligi va asosiy tarmoq bilimlari',
      srv6_f5: 'ChatGPT yordamida ish jarayonlarini yengillashtirish',
      srv6_f6: 'Rezyume va HTML/CSS rezyume sayti (GitHub Pages/Netlify)',
      srv6_format: '15 ta dars (45 soat) · Sertifikat bilan',
      srv6_result: 'Ish va o‘qishda foydalanish mumkin bo‘lgan amaliy kompyuter ko‘nikmalari.',

      srv7_chip: 'AI & Media Trend',
      srv7_title: 'Individual «AI-Media Kompyuter PRO» Kursi',
      srv7_slogan: 'Sun’iy intellekt yordamida rasm, video va reklama kontentlari yarating.',
      srv7_f1: 'Sun’iy intellekt yordamida rasm va video yaratish',
      srv7_f2: 'Reklama va brendlar uchun kreativ materiallar',
      srv7_f3: 'Samarali so‘rovlar — professional promptlar yozish',
      srv7_f4: 'Kinematografik, surreal, ASMR va epik uslublar',
      srv7_f5: 'Gemini, Flow, Whisk, Kling, Grok va Veo vositalari',
      srv7_f6: 'Tayyor ishlar to‘plami va shaxsiy portfolio yaratish',
      srv7_format: '15 ta dars (45 soat) · Sertifikat bilan',
      srv7_result: 'Sun’iy intellekt yordamida vizual va reklama kontentlari yaratish amaliy ko‘nikmalari.',

      result_lbl: 'Natija:',
      btn_order: 'Buyurtma berish',
      btn_enroll: 'Kursga yozilish',

      prin_sub_badge: 'Ishonchli Hamkorlik',
      prin_title: 'Biz Bilan Ishlash Afzalliklari',
      prin1_title: 'Individual yondashuv',
      prin1_desc: 'Har bir buyurtma talablar asosida ko‘rib chiqiladi.',
      prin2_title: 'Aniq kelishuv',
      prin2_desc: 'Ish hajmi, narxi va muddati oldindan belgilanadi.',
      prin3_title: 'Amaliy natija',
      prin3_desc: 'Har bir loyiha uchun vazifaga mos yechim tanlanadi.',
      prin4_title: 'Zamonaviy texnologiyalar',
      prin4_desc: 'Loyihaning ehtiyojiga qarab vositalar tanlanadi.',
      prin5_title: 'Ishonchli aloqa',
      prin5_desc: 'Buyurtma jarayonida mijoz bilan muloqot olib boriladi.',

      cta_badge: 'Loyihangizni Boshlang',
      cta_title: 'G‘oyangizni amalga oshirishni bugun boshlang!',
      cta_desc: 'Sizga mos xizmatni tanlang va loyihangiz haqida bog‘laning. Qisqa vaqt ichida eng ma\'qul yechimni taklif qilamiz.',
      cta_btn_order: 'Buyurtma berish',
      cta_btn_tg: 'Telegram orqali bog‘lanish',

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
      nav_services: 'Services',
      nav_skills: 'Skills',
      nav_contact: 'Contact',
      nav_payment: 'Payment',
      nav_connect_btn: 'Get in Touch',

      hero_location: 'Urgench, Uzbekistan',
      hero_greeting: 'Hello, I\'m',
      hero_role: 'Project Manager, Web Developer & IT Mentor',
      hero_desc: 'Project Manager and Mentor at LIMON DIGITAL AGENCY, Manager of "Al-Khwarizmi Descendants" in Urgench district. Leading digital product delivery, web development, and mentoring future IT talents.',
      hero_btn_services: 'Services',
      hero_btn_contact: 'Contact Me',
      hero_btn_experience: 'Experience & Career',
      hero_btn_pay: 'Payment',

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

      /* Services Section */
      services_badge: 'Services & Education',
      services_title: 'Professional Services',
      services_desc: 'Transform your vision into cutting-edge web and mobile solutions, combining academic research with solid software and data analysis.',
      stats_sub_badge: 'Our Track Record',
      stats_sub_title: 'Academic & Scientific Results',
      stat_bachelor_title: 'Bachelor Theses',
      stat_bachelor_desc: '90%+ plagiarism-free, complete software code and thorough analysis',
      stat_masters_title: 'Master Dissertations',
      stat_masters_desc: 'Research, advanced data modeling, and practical software implementations',
      stat_phd_title: 'PhD Research',
      stat_phd_desc: 'Practical software modules, simulation models, and analytical solutions',
      stat_coursework_title: 'Coursework Projects',
      stat_coursework_desc: 'Well-structured, accurate computations, charts, and on-time delivery',

      srv1_chip: 'Web Development',
      srv1_title: 'Web Development',
      srv1_slogan: 'Turn your ideas into modern, high-performance websites.',
      srv1_f1: 'E-commerce and online store development',
      srv1_f2: 'Corporate websites for enterprises and organizations',
      srv1_f3: 'Personal portfolios and digital business cards',
      srv1_f4: 'Modern, fully responsive UI/UX for all screens',
      srv1_f5: 'Redesigning and modernizing existing websites',
      srv1_result: 'Modern, lightning-fast, and user-friendly website.',

      srv2_chip: 'Mobile Apps',
      srv2_title: 'Mobile App Development',
      srv2_slogan: 'Bring your business and ideas to mobile devices.',
      srv2_f1: 'Cross-platform mobile apps for Android and iOS',
      srv2_f2: 'Intuitive, modern UI/UX design',
      srv2_f3: 'Order management and service delivery apps',
      srv2_f4: 'Upgrading and optimizing existing mobile apps',
      srv2_result: 'Reliable, convenient mobile solutions for your users.',

      srv3_chip: 'Telegram Bots',
      srv3_title: 'Telegram Bot Development',
      srv3_slogan: 'Automate repetitive workflows and save valuable time.',
      srv3_f1: 'E-commerce, catalog, and order management bots',
      srv3_f2: 'Customer support and CRM assistant bots',
      srv3_f3: 'Interactive quizzes, test, and educational bots',
      srv3_f4: 'Automated notification and scheduled alert systems',
      srv3_f5: 'Seamless integration with payment gateways and APIs',
      srv3_result: 'Smart bots that streamline processes and save your time.',

      srv4_chip: 'Desktop & Systems',
      srv4_title: 'Desktop Software & Automation',
      srv4_slogan: 'Digitize your operations and boost business efficiency.',
      srv4_f1: 'Custom desktop software for Windows OS',
      srv4_f2: 'Automated accounting, calculations, and reporting',
      srv4_f3: 'Internal productivity tools for office workflows',
      srv4_f4: 'Internal management and operations systems (CRM/ERP)',
      srv4_f5: 'Enhancing and scaling existing software programs',
      srv4_result: 'Robust software tools simplifying everyday business tasks.',

      srv5_chip: 'Academic Solutions',
      srv5_title: 'Theses, Master, PhD & Coursework',
      srv5_slogan: 'Combine academic research with practical software solutions and deep analysis.',
      srv5_f1: 'proven practical experience',
      srv5_f2: 'Enhancing text originality and proper bibliographic citations',
      srv5_f3: 'Compliance with formal university academic standards',
      srv5_f4: 'Developing custom software modules and practical projects',
      srv5_f5: 'Analytical charts, statistical tables, and defense slide decks',
      srv5_f6: 'accurate calculations and punctuality',
      srv5_result: 'Defense-ready, high-standard academic and software project.',

      srv6_chip: '100% Individual Mentoring',
      srv6_title: 'Individual "Computer PRO" Course',
      srv6_slogan: 'From basic computer skills to practical, professional mastery.',
      srv6_f1: 'Computer literacy and strong practical skills',
      srv6_f2: 'Hands-on Microsoft Word, Excel, and PowerPoint (100% practical)',
      srv6_f3: 'Mastering Google Docs, Sheets, Forms, and Drive',
      srv6_f4: 'Cybersecurity essentials and networking basics',
      srv6_f5: 'Leveraging ChatGPT to boost daily office productivity',
      srv6_f6: 'Professional resume and HTML/CSS resume website deployment',
      srv6_format: '15 lessons (45 hours) · Official Certificate',
      srv6_result: 'Practical, immediately applicable computer skills for career and study.',

      srv7_chip: 'AI & Media Trends',
      srv7_title: 'Individual "AI-Media Computer PRO" Course',
      srv7_slogan: 'Create stunning images, videos, and marketing content using Artificial Intelligence.',
      srv7_f1: 'Generating professional images and videos with AI',
      srv7_f2: 'Creative content for advertising, branding, and social media',
      srv7_f3: 'Mastering prompt engineering and generative workflows',
      srv7_f4: 'Cinematic, surreal, ASMR, and epic visual styles',
      srv7_f5: 'Hands-on experience with Gemini, Flow, Whisk, Kling, Grok, and Veo',
      srv7_f6: 'Creating a polished personal portfolio with finished media assets',
      srv7_format: '15 lessons (45 hours) · Official Certificate',
      srv7_result: 'Practical expertise in creating visual and advertising media with AI.',

      result_lbl: 'Result:',
      btn_order: 'Order Service',
      btn_enroll: 'Enroll in Course',

      prin_sub_badge: 'Trusted Partnership',
      prin_title: 'Why Work With Us',
      prin1_title: 'Individual Approach',
      prin1_desc: 'Every project is tailored precisely to your specific requirements.',
      prin2_title: 'Clear Agreements',
      prin2_desc: 'Scope of work, pricing, and deadlines are transparently agreed upfront.',
      prin3_title: 'Practical Results',
      prin3_desc: 'We select the most effective solution for every unique task.',
      prin4_title: 'Modern Technologies',
      prin4_desc: 'Cutting-edge, battle-tested tools matched to your project needs.',
      prin5_title: 'Reliable Communication',
      prin5_desc: 'Direct, continuous communication throughout the entire process.',

      cta_badge: 'Start Your Project',
      cta_title: 'Turn your ideas into reality today!',
      cta_desc: 'Choose the right service and get in touch. We will craft the most optimal solution promptly.',
      cta_btn_order: 'Order Now',
      cta_btn_tg: 'Contact via Telegram',

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
      nav_services: 'Услуги',
      nav_skills: 'Навыки',
      nav_contact: 'Контакты',
      nav_payment: 'Оплата',
      nav_connect_btn: 'Связаться',

      hero_location: 'Ургенч, Узбекистан',
      hero_greeting: 'Привет, я',
      hero_role: 'Project Manager, Веб-разработчик и IT-ментор',
      hero_desc: 'Project Manager и ментор в LIMON DIGITAL AGENCY, менеджер проекта "Наследники Аль-Хорезми" в Ургенчском районе. Управление IT-проектами, веб-разработка и наставничество.',
      hero_btn_services: 'Услуги',
      hero_btn_contact: 'Связаться',
      hero_btn_experience: 'Опыт и Карьера',
      hero_btn_pay: 'Оплата',

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

      /* Секция услуг */
      services_badge: 'Услуги и Обучение',
      services_title: 'Профессиональные Услуги',
      services_desc: 'Превратите ваши идеи в современные веб и мобильные решения, совмещая научные исследования с надежным ПО и анализом данных.',
      stats_sub_badge: 'Наши Результаты',
      stats_sub_title: 'Научно-Академический Опыт',
      stat_bachelor_title: 'Бакалаврские дипломные работы',
      stat_bachelor_desc: 'Антиплагиат 90%+, программная часть и глубокий анализ',
      stat_masters_title: 'Магистерские диссертации',
      stat_masters_desc: 'Исследования, моделирование и практические программные разработки',
      stat_phd_title: 'PhD исследования',
      stat_phd_desc: 'Программная часть, прикладные модели и аналитические решения',
      stat_coursework_title: 'Курсовые работы',
      stat_coursework_desc: 'Структурированный текст, точные расчеты, таблицы и сдача в срок',

      srv1_chip: 'Web Development',
      srv1_title: 'Веб-разработка',
      srv1_slogan: 'Превратите вашу идею в современный веб-сайт.',
      srv1_f1: 'Создание интернет-магазинов (E-commerce)',
      srv1_f2: 'Корпоративные сайты для компаний и организаций',
      srv1_f3: 'Персональные портфолио и сайты-визитки',
      srv1_f4: 'Адаптивный интерфейс для всех типов устройств',
      srv1_f5: 'Обновление и оптимизация существующих сайтов',
      srv1_result: 'Современный, быстрый и удобный веб-сайт.',

      srv2_chip: 'Mobile Apps',
      srv2_title: 'Создание Мобильных Приложений',
      srv2_slogan: 'Перенесите ваш бизнес и идеи на мобильные устройства.',
      srv2_f1: 'Мобильные приложения для Android и iOS',
      srv2_f2: 'Удобный и современный пользовательский интерфейс (UI/UX)',
      srv2_f3: 'Приложения для управления заказами и сервисами',
      srv2_f4: 'Модернизация существующих приложений',
      srv2_result: 'Удобные и надежные мобильные решения для пользователей.',

      srv3_chip: 'Telegram Bots',
      srv3_title: 'Разработка Telegram-ботов',
      srv3_slogan: 'Автоматизируйте рутинные задачи и экономьте время.',
      srv3_f1: 'Боты для онлайн-продаж и управления заказами',
      srv3_f2: 'Боты для клиентской поддержки и сервиса',
      srv3_f3: 'Тестовые, викторинные и обучающие боты',
      srv3_f4: 'Системы автоматических уведомлений и рассылок',
      srv3_f5: 'Интеграция с платежными системами и API',
      srv3_result: 'Умные боты, упрощающие рабочие процессы и экономящие время.',

      srv4_chip: 'Desktop & Systems',
      srv4_title: 'Компьютерные Программы и Автоматизация',
      srv4_slogan: 'Цифровизируйте рабочие процессы и повышайте эффективность.',
      srv4_f1: 'Прикладные программы для ОС Windows',
      srv4_f2: 'Автоматизация расчетов и формирования отчетов',
      srv4_f3: 'Программы для упрощения офисной работы',
      srv4_f4: 'Внутренние системы управления для организаций (CRM/ERP)',
      srv4_f5: 'Доработка и масштабирование существующего ПО',
      srv4_result: 'Программные решения, упрощающие повседневные задачи.',

      srv5_chip: 'Наука и Академия',
      srv5_title: 'Дипломные, Магистерские, PhD и Курсовые',
      srv5_slogan: 'Объедините научные изыскания с программными решениями и тщательным анализом.',
      srv5_f1: 'богатый практический опыт выполнения работ',
      srv5_f2: 'Повышение оригинальности текста (Антиплагиат) и оформление источников',
      srv5_f3: 'Оформление документов по стандартам университетов',
      srv5_f4: 'Разработка программного обеспечения и практических моделей',
      srv5_f5: 'Графики, таблицы, диаграммы и презентации для защиты',
      srv5_f6: 'точные расчеты и сдача в установленные сроки',
      srv5_result: 'Полностью готовая к успешной защите научно-практическая работа.',

      srv6_chip: '100% Индивидуальное Обучение',
      srv6_title: 'Индивидуальный Курс «Компьютер PRO»',
      srv6_slogan: 'От уверенного пользователя до профессиональных практических навыков.',
      srv6_f1: 'Компьютерная грамотность и глубокие прикладные навыки',
      srv6_f2: 'Microsoft Word, Excel и PowerPoint (100% практика)',
      srv6_f3: 'Работа с Google Docs, Sheets, Forms и Drive',
      srv6_f4: 'Интернет-безопасность и основы сетевых технологий',
      srv6_f5: 'Эффективное применение ChatGPT в офисных процессах',
      srv6_f6: 'Составление резюме и создание сайта-резюме на HTML/CSS',
      srv6_format: '15 уроков (45 часов) · Сертификат',
      srv6_result: 'Практические компьютерные навыки для успешной работы и учебы.',

      srv7_chip: 'AI & Media Тренды',
      srv7_title: 'Индивидуальный Курс «AI-Media Компьютер PRO»',
      srv7_slogan: 'Создавайте изображения, видео и рекламный контент с помощью ИИ.',
      srv7_f1: 'Генерация профессиональных изображений и видео через ИИ',
      srv7_f2: 'Креативные материалы для рекламы, брендов и соцсетей',
      srv7_f3: 'Промпт-инжиниринг и правильная постановка задач ИИ',
      srv7_f4: 'Кинематографичные, сюрреалистичные, ASMR и эпичные стили',
      srv7_f5: 'Практика с Gemini, Flow, Whisk, Kling, Grok и Veo',
      srv7_f6: 'Создание готового портфолио с собственными медиа-кейсами',
      srv7_format: '15 уроков (45 часов) · Сертификат',
      srv7_result: 'Практические навыки создания визуального и рекламного контента с помощью ИИ.',

      result_lbl: 'Результат:',
      btn_order: 'Заказать услугу',
      btn_enroll: 'Записаться на курс',

      prin_sub_badge: 'Надежное Сотрудничество',
      prin_title: 'Преимущества Работы с Нами',
      prin1_title: 'Индивидуальный подход',
      prin1_desc: 'Каждый заказ рассматривается с учетом ваших конкретных требований.',
      prin2_title: 'Четкие договоренности',
      prin2_desc: 'Объем работ, стоимость и сроки фиксируются заранее.',
      prin3_title: 'Практический результат',
      prin3_desc: 'Для каждой задачи подбирается наиболее эффективное решение.',
      prin4_title: 'Современные технологии',
      prin4_desc: 'Используются передовые и проверенные на практике инструменты.',
      prin5_title: 'Надежная связь',
      prin5_desc: 'Постоянный диалог с клиентом на всех этапах выполнения заказа.',

      cta_badge: 'Начните Свой Проект',
      cta_title: 'Начните реализацию вашей идеи уже сегодня!',
      cta_desc: 'Выберите подходящую услугу и свяжитесь с нами для подбора лучшего решения.',
      cta_btn_order: 'Заказать услугу',
      cta_btn_tg: 'Связаться в Telegram',

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
     11. Number Counter Animation for Statistics
     ------------------------------------------------------------------------ */
  function initCounters() {
    const counterElements = document.querySelectorAll('.stat-big-number[data-count]');
    if (!counterElements.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10) || 0;
          const suffix = el.getAttribute('data-suffix') || '';

          if (prefersReducedMotion) {
            el.textContent = target + suffix;
            obs.unobserve(el);
            return;
          }

          const duration = 1400; // ms
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeOutProgress = 1 - (1 - progress) * (1 - progress);
            const currentCount = Math.floor(easeOutProgress * target);

            el.textContent = currentCount + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = target + suffix;
            }
          }

          requestAnimationFrame(updateCounter);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(el => observer.observe(el));
  }

  /* ------------------------------------------------------------------------
     12. Interactive Service Order Links
     ------------------------------------------------------------------------ */
  function initServiceOrderLinks() {
    document.querySelectorAll('[data-order-service]').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const serviceName = this.getAttribute('data-order-service');
        const contactSection = document.getElementById('contact');
        const msgField = document.getElementById('senderMessage');
        const nameField = document.getElementById('senderName');

        if (msgField) {
          msgField.value = `Salom Begzod! Men "${serviceName}" bo'yicha buyurtma bermoqchiman / ma'lumot olmoqchiman.`;
        }

        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }

        setTimeout(() => {
          if (nameField) nameField.focus();
          showToast(`"${serviceName}" tanlandi!`, 3000);
        }, 600);
      });
    });
  }

  /* ------------------------------------------------------------------------
     13. Initialize Everything on DOM Ready
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
    initCounters();
    initServiceOrderLinks();
    initParticleCanvas();
  });

  window.BegzodApp = {
    showToast: showToast,
    copyText: copyTextToClipboard,
    setLanguage: setLanguage,
    setTheme: setTheme
  };
})();
