const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

document.querySelectorAll('.solution-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.solution-item');
    const wasOpen = item.classList.contains('open');

    document.querySelectorAll('.solution-item').forEach((current) => {
      current.classList.remove('open');
      current.querySelector('button').setAttribute('aria-expanded', 'false');
      current.querySelector('button i').textContent = '+';
    });

    if (!wasOpen) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('i').textContent = '−';
    }
  });
});

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) {
      status.textContent = 'Recebemos seus dados. Em breve entraremos em contato.';
      status.classList.add('visible');
    }
    form.reset();
  });
});

const phoneInput = document.querySelector('input[name="whatsapp"]');
if (phoneInput) {
  phoneInput.addEventListener('input', (event) => {
    const digits = event.target.value.replace(/\D/g, '').slice(0, 11);
    let value = digits;
    if (digits.length > 2) value = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length > 7) value = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    event.target.value = value;
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const playButton = document.querySelector('.play-button');
if (playButton) {
  playButton.addEventListener('click', () => {
    const copy = document.querySelector('.showreel-content > span');
    if (copy) copy.innerHTML = 'Showreel em breve.<br><em>Boas ideias pedem movimento.</em>';
  });
}

const projects = {
  punta: { title: 'PUNTA DEL ESTE', category: 'Cases • Branding e conteúdo', description: 'Identidade, campanha e presença digital para transformar a experiência náutica em uma marca desejada.', images: ['Rectangle 6.png', 'Base-6.png', 'Base-7.png'] },
  jaecoo: { title: 'JAECOO', category: 'Cases • Comunicação de marca', description: 'Uma presença visual de alto impacto para apresentar tecnologia, sofisticação e performance.', images: ['Base.png'] },
  silomax: { title: 'SILOMAX', category: 'Cases • Marketing digital', description: 'Estratégia e conteúdo que aproximam inovação industrial, agronegócio e oportunidades reais.', images: ['Base-1.png', 'Base-12.png'] },
  sucatto: { title: 'SUCATTO', category: 'Cases • Campanha institucional', description: 'Posicionamento visual para comunicar eficiência, tecnologia e confiança no campo.', images: ['Base-2.png'] },
  queens: { title: "QUEEN'S", category: 'Cases • Branding e produto', description: 'Campanhas, embalagens e arquitetura de linha construídas para uma marca cheia de personalidade.', images: ['Base-3.png', 'Base-4.png', 'Base-11.png'] },
  lidermax: { title: 'LIDERMAX', category: 'Cases • Campanhas', description: 'Campanha publicitária “Onde os Sonhos Acontecem”: conceito e direção criativa para uma comunicação leve e memorável.', images: ['Campanha Publicitária Onde os Sonhos Acontecem.png'] },
  nautico: { title: '30 ANOS NO MUNDO NÁUTICO', category: 'Cases • Campanha comemorativa', description: 'Uma trajetória celebrada por meio de uma campanha elegante, humana e institucional.', images: ['Base-5.png'] },
  jandaia: { title: 'CAFÉ JANDAIA', category: 'Cases • Digital e conteúdo', description: 'Conteúdo, website e campanhas que levam o sabor e a proximidade da marca a diferentes pontos de contato.', images: ['Base-8.png', 'Base-10.png'] },
  prime: { title: 'COLÉGIO PRIME', category: 'Cases • Mídia OOH', description: 'Campanha de lançamento do Ensino Fundamental com mensagem clara, presença urbana e alta visibilidade.', images: ['Base-9.png'] },
  paris: { title: 'RESIDENCIAL PARIS', category: 'Cases • Campanha de lançamento', description: 'Comunicação imobiliária orientada a desejo, localização e oportunidade de investimento.', images: ['Base-13.png'] }
};

const modal = document.querySelector('#project-modal');
const modalTitle = document.querySelector('#project-modal-title');
const modalCategory = document.querySelector('#project-modal-category');
const modalDescription = document.querySelector('#project-modal-description');
const modalGallery = document.querySelector('#project-modal-gallery');
let lastProjectTrigger = null;

function closeProjectModal() {
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  window.setTimeout(() => { modal.hidden = true; }, 250);
  lastProjectTrigger?.focus();
}

if (modal) {
  document.querySelectorAll('.case-tile[data-project]').forEach((tile) => {
    tile.addEventListener('click', () => {
      const project = projects[tile.dataset.project];
      if (!project) return;
      lastProjectTrigger = tile;
      modalTitle.textContent = project.title;
      modalCategory.textContent = project.category;
      modalDescription.textContent = project.description;
      modalGallery.innerHTML = project.images.map((image, index) => `<figure class="${index === 0 ? 'featured' : ''}"><img src="imagens/cases/${encodeURI(image)}" alt="${project.title} — aplicação ${index + 1}"></figure>`).join('');
      modal.hidden = false;
      document.body.classList.add('modal-open');
      requestAnimationFrame(() => modal.classList.add('open'));
      modal.querySelector('.project-modal-close').focus();
    });
  });

  modal.querySelector('.project-modal-close').addEventListener('click', closeProjectModal);
  modal.addEventListener('click', (event) => { if (event.target === modal) closeProjectModal(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.hidden) closeProjectModal(); });
}
