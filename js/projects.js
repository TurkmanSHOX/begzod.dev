/**
 * BEGZOD.DEV — Projects Module
 * Contains verified public projects of Begzod Axmetov (TurkmanSHOX)
 * Includes filtering and dynamic rendering
 */

(function () {
  'use strict';

  // 100% Verified GitHub Public Projects of Begzod Axmetov
  const projectsData = [
    {
      id: 'atestatsiya-uz',
      title: 'atestatsiya.uz — Sinov Tizimi',
      category: 'test',
      categoryLabel: 'Sinov & Baholash',
      badgeClass: 'badge-test',
      description: 'Pedagoglar va soha mutaxassislari uchun attestatsiyaga tayyorgarlik ko\'rish, malaka va bilimlarni sinovdan o\'tkazish tizimi.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Test Engine'],
      githubUrl: 'https://github.com/TurkmanSHOX/atestatsiya.uz',
      liveUrl: null
    },
    {
      id: 'mbot-ai',
      title: 'mBot AI Controller',
      category: 'ai',
      categoryLabel: 'Robototexnika & AI',
      badgeClass: 'badge-ai',
      description: 'mBot ta\'lim robotini masofadan boshqarish, datchiklar bilan ishlash va sun\'iy intellekt elementlarini integratsiya qilish loyihasi.',
      tags: ['Dart', 'Flutter', 'Robotics', 'AI Control'],
      githubUrl: 'https://github.com/TurkmanSHOX/mBot_AI_Controller',
      liveUrl: null
    },
    {
      id: 'avtotex',
      title: 'Avtotex — Texnik Ko\'rik Portali',
      category: 'service',
      categoryLabel: 'Xizmat Ko\'rsatish',
      badgeClass: 'badge-service',
      description: 'Avtomobillarga texnik xizmat ko\'rsatish, diagnostika va onlayn ro\'yxatga olish xizmatlarini taqdim etuvchi zamonaviy veb-platforma.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      githubUrl: 'https://github.com/TurkmanSHOX/avtotex',
      liveUrl: 'https://avtotex.vercel.app'
    },
    {
      id: 'begzod-dev',
      title: 'begzod.dev — Shaxsiy Portfolio',
      category: 'web',
      categoryLabel: 'Web Platforma',
      badgeClass: 'badge-web',
      description: 'Zamonaviy shaxsiy vizitka va portfolio veb-sayti. Responsive dizayn, qulay to\'lov rekvizitlari va interaktiv elementlar bilan boyitilgan.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
      githubUrl: 'https://github.com/TurkmanSHOX/begzod.dev',
      liveUrl: 'https://www.begzod.dev/'
    },
    {
      id: 'informatika-platforma',
      title: 'Informatika Ta\'lim Platformasi',
      category: 'web',
      categoryLabel: 'Ta\'lim Portali',
      badgeClass: 'badge-web',
      description: 'Informatika fanidan interaktiv darsliklar, o\'quv topshiriqlari va amaliy mashg\'ulotlar uchun mo\'ljallangan ta\'limiy veb-tizim.',
      tags: ['Python', 'Web', 'Ta\'lim', 'Interaktiv'],
      githubUrl: 'https://github.com/TurkmanSHOX/informatika-platforma',
      liveUrl: null
    },
    {
      id: 'muazzamxon-tikuvchi',
      title: 'Muazzamxon Tikuvchilik Atelyesi',
      category: 'service',
      categoryLabel: 'Biznes & Atelye',
      badgeClass: 'badge-service',
      description: 'Milliy va zamonaviy liboslar tikish atelyesi uchun mahsulotlar taqdimoti va buyurtmalar katalogi veb-sayti.',
      tags: ['HTML', 'CSS', 'UI/UX', 'Vercel'],
      githubUrl: 'https://github.com/TurkmanSHOX/muazzamxon-tikuvchi.uz',
      liveUrl: 'https://muazzamxon-tikuvchi.vercel.app'
    },
    {
      id: 'saydana-gullari',
      title: 'Saydana Gullari — Floristika',
      category: 'service',
      categoryLabel: 'E-Commerce & Xizmat',
      badgeClass: 'badge-service',
      description: 'Gullar do\'koni, sovg\'alar va bayramona floristik kompozitsiyalar taqdimoti uchun zamonaviy katalog veb-sayti.',
      tags: ['HTML', 'CSS', 'Katalog', 'Vercel'],
      githubUrl: 'https://github.com/TurkmanSHOX/saydana-gullari.uz',
      liveUrl: 'https://saydana-gullari.vercel.app'
    },
    {
      id: 'sabohat-ateliya',
      title: 'Sabohat Atelye',
      category: 'service',
      categoryLabel: 'Biznes & Moda',
      badgeClass: 'badge-service',
      description: 'Maxsus dizayndagi liboslar va professional tikuvchilik xizmatlarini namoyish etuvchi portfolio veb-sayti.',
      tags: ['HTML', 'CSS', 'Responsive', 'Vercel'],
      githubUrl: 'https://github.com/TurkmanSHOX/sabohat-ateliya.uz',
      liveUrl: 'https://sabohat-ateliya.vercel.app'
    },
    {
      id: 'shoxnazar-sopol',
      title: 'Shoxnazar Kulolchilik & Sopol',
      category: 'service',
      categoryLabel: 'Hunarmandchilik',
      badgeClass: 'badge-service',
      description: 'Xorazm milliy kulolchilik san\'ati, nafis sopol buyumlari va milliy hunarmandchilik namunalarining veb-ekspozitsiyasi.',
      tags: ['HTML', 'CSS', 'Portfolio', 'Vercel'],
      githubUrl: 'https://github.com/TurkmanSHOX/sopol',
      liveUrl: 'https://shoxnazar-sopolchilik.vercel.app'
    },
    {
      id: 'a-test',
      title: 'A-Test — Onlayn Test Platformasi',
      category: 'test',
      categoryLabel: 'Ta\'lim & Test',
      badgeClass: 'badge-test',
      description: 'Test topshiriqlarini yaratish, foydalanuvchilar bilimini real vaqtda baholash va natijalarni avtomatlashtirilgan hisoblash tizimi.',
      tags: ['HTML', 'JavaScript', 'Sinov Portali'],
      githubUrl: 'https://github.com/TurkmanSHOX/a-test',
      liveUrl: null
    },
    {
      id: 'litsey-test',
      title: 'Litsey Test Tizimi',
      category: 'test',
      categoryLabel: 'Ta\'lim & Test',
      badgeClass: 'badge-test',
      description: 'Akademik litsey o\'quvchilari uchun fanlar kesimida test sinovlari o\'tkazishga ixtisoslashgan onlayn sinov platformasi.',
      tags: ['Python', 'Web', 'Test Tizimi', 'Vercel'],
      githubUrl: 'https://github.com/TurkmanSHOX/litsey_test',
      liveUrl: 'https://litsey-test.vercel.app'
    },
    {
      id: 'qovun-qr',
      title: 'QovunQR — Raqamli Identifikatsiya',
      category: 'web',
      categoryLabel: 'QR & Innovatsiya',
      badgeClass: 'badge-web',
      description: 'Poliz mahsulotlari sifat sertifikatlari va ma\'lumotlarini QR-kod yordamida tezkor tekshirish va identifikatsiya qilish tizimi.',
      tags: ['HTML', 'JavaScript', 'QR Kod', 'Innovatsiya'],
      githubUrl: 'https://github.com/TurkmanSHOX/qovunQR',
      liveUrl: null
    }
  ];

  function createProjectCardHTML(item) {
    const tagsHTML = item.tags
      .map(tag => `<span class="tag-badge">${escapeHTML(tag)}</span>`)
      .join('');

    const liveBtnHTML = item.liveUrl
      ? `<a href="${escapeHTML(item.liveUrl)}" target="_blank" rel="noopener noreferrer" class="btn-project btn-project-live" aria-label="${escapeHTML(item.title)} jonli saytini ko'rish">
          <i class="bi bi-box-arrow-up-right"></i> Ko'rish
        </a>`
      : '';

    return `
      <div class="col-lg-4 col-md-6 mb-4 project-item" data-category="${escapeHTML(item.category)}">
        <div class="project-card">
          <div>
            <span class="project-category-badge ${item.badgeClass}">${escapeHTML(item.categoryLabel)}</span>
            <h3 class="project-title font-heading">${escapeHTML(item.title)}</h3>
            <p class="project-description">${escapeHTML(item.description)}</p>
          </div>
          <div>
            <div class="project-tags">${tagsHTML}</div>
            <div class="project-actions">
              <a href="${escapeHTML(item.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-project btn-project-code" aria-label="${escapeHTML(item.title)} GitHub kodini ko'rish">
                <i class="bi bi-github"></i> GitHub
              </a>
              ${liveBtnHTML}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderProjects(filter = 'all') {
    const container = document.getElementById('projectsGrid');
    if (!container) return;

    const filtered = filter === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === filter);

    container.innerHTML = filtered.map(createProjectCardHTML).join('');
  }

  function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filterVal = this.getAttribute('data-filter') || 'all';
        renderProjects(filterVal);
      });
    });
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderProjects('all');
    initFilterButtons();
  });

  window.BegzodProjects = {
    getAll: () => projectsData,
    render: renderProjects
  };
})();
