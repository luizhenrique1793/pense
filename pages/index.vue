<script setup lang="ts">
import type { Project } from '~/data/projects'
import { site } from '~/data/site'

const route = useRoute()
const router = useRouter()

useSeoMeta({
  title: 'Pense Assim | Comunicação 360° em Londrina',
  description: site.description,
  ogTitle: 'Pense Assim | Comunicação 360° em Londrina',
  ogDescription: site.description,
  ogType: 'website',
  ogUrl: `${site.url}/`,
  ogImage: site.defaultOgImage,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Pense Assim | Comunicação 360° em Londrina',
  twitterDescription: site.description,
  twitterImage: site.defaultOgImage
})

useHead({
  link: [{ rel: 'canonical', href: `${site.url}/` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ProfessionalService',
            '@id': `${site.url}/#organization`,
            name: site.name,
            url: site.url,
            image: site.defaultOgImage,
            description: site.description,
            telephone: site.phone,
            email: site.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Rua Dr. Elias Cesar, 55 - sala 501',
              addressLocality: 'Londrina',
              addressRegion: 'PR',
              addressCountry: 'BR'
            },
            areaServed: 'Brasil',
            serviceType: ['Comunicação 360°', 'Branding', 'Marketing digital', 'Audiovisual', 'Mídia']
          },
          {
            '@type': 'WebSite',
            '@id': `${site.url}/#website`,
            name: site.name,
            url: `${site.url}/`,
            inLanguage: 'pt-BR',
            publisher: { '@id': `${site.url}/#organization` }
          }
        ]
      })
    },
    {
      type: 'text/javascript',
      tagPosition: 'bodyClose',
      innerHTML: `
        document.documentElement.dataset.clientLogoControls = 'ready';

        var lastClientLogoPointer = 0;

        function moveClientLogos(event) {
          if (event.type === 'pointerdown') lastClientLogoPointer = Date.now();
          if (event.type === 'click' && Date.now() - lastClientLogoPointer < 500) return;

          var target = event.target;
          var button = target && target.closest ? target.closest('.client-strip > button') : null;
          if (!button) return;

          var row = document.querySelector('.clients .logo-row');
          if (!row) return;

          var isNext = button === button.parentElement.querySelector('button:last-child');
          var distance = Math.max(240, Math.round(row.clientWidth * 0.72));
          var left = row.scrollLeft + (distance * (isNext ? 1 : -1));
          row.scrollTo({ left: left, behavior: 'smooth' });
        }

        document.addEventListener('pointerdown', moveClientLogos, true);
        document.addEventListener('click', moveClientLogos, true);
      `
    }
  ]
})

const selectedProject = ref<Project | null>(null)
const sent = ref(false)
const analysisSent = ref(false)
const budgetName = ref('')
const budgetCompany = ref('')
const whatsapp = ref('')
const analysisName = ref('')
const analysisCompany = ref('')
const analysisWhatsapp = ref('')
const showVideo = ref(false)
const testimonialViewport = ref<HTMLElement | null>(null)
const testimonials = [
  { src: '/imagens/secao_falacliente/fala_cliente_01.png', alt: 'Depoimento de Wesley Carneiro' },
  { src: '/imagens/secao_falacliente/515373466_18064724948131794_2713327672872573015_n.png', alt: 'Depoimento de Gabriela Sanches' },
  { src: '/imagens/secao_falacliente/503942728_18061974323131794_5408323875126567480_n.png', alt: 'Depoimento de André Garcia' }
]
let stopClientLogoControls: (() => void) | null = null
let testimonialTimer: ReturnType<typeof setInterval> | null = null
let testimonialPosition = 0
const whatsappTarget = '5543991619048'
const youtubeEmbedUrl = 'https://www.youtube-nocookie.com/embed/Xn5I8aXe70w?autoplay=1&rel=0&modestbranding=1'

const floatingWhatsappUrl = computed(() => {
  const message = withAttribution('Olá, equipe Pense Assim! Vim pelo site e gostaria de conversar.')
  return `https://wa.me/${whatsappTarget}?text=${encodeURIComponent(message)}`
})

function trackConversion(event: string, params: Record<string, string> = {}) {
  if (!import.meta.client) return

  const payload = {
    event,
    page_path: window.location.pathname,
    ...params
  }

  window.dispatchEvent(new CustomEvent('pense:conversion', { detail: payload }))
  ;(window as Window & { dataLayer?: Record<string, string>[] }).dataLayer?.push(payload)
}

function getAttributionLines() {
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid']
  return keys
    .map(key => {
      const value = route.query[key]
      return typeof value === 'string' && value ? `${key}: ${value}` : null
    })
    .filter(Boolean) as string[]
}

function withAttribution(message: string) {
  const attribution = getAttributionLines()
  return attribution.length ? `${message}\n\nOrigem da campanha:\n${attribution.join('\n')}` : message
}

function goToThanks(source: string) {
  const query: Record<string, string> = { origem: source }
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid']) {
    const value = route.query[key]
    if (typeof value === 'string' && value) query[key] = value
  }
  router.push({ path: '/obrigado/', query })
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  return digits.length > 7
    ? `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
    : digits.length > 2
      ? `(${digits.slice(0, 2)}) ${digits.slice(2)}`
      : digits
}

function maskPhone() {
  whatsapp.value = formatPhone(whatsapp.value)
}

function maskAnalysisPhone() {
  analysisWhatsapp.value = formatPhone(analysisWhatsapp.value)
}

function openWhatsApp(message: string, source: string) {
  if (!import.meta.client) return

  trackConversion('whatsapp_click', { source })
  const url = `https://wa.me/${whatsappTarget}?text=${encodeURIComponent(withAttribution(message))}`
  window.open(url, '_blank', 'noopener')
}

function submitBudgetForm() {
  sent.value = true
  trackConversion('form_submit_whatsapp', { form_name: 'orcamento_header' })
  openWhatsApp([
    'Olá, equipe Pense Assim!',
    'Gostaria de solicitar um orçamento.',
    '',
    `Nome: ${budgetName.value}`,
    `Empresa: ${budgetCompany.value}`,
    `WhatsApp: ${whatsapp.value}`
  ].join('\n'), 'orcamento_header')
  goToThanks('orcamento_header')
}

function submitAnalysisForm() {
  analysisSent.value = true
  trackConversion('form_submit_whatsapp', { form_name: 'analise_secao_4' })
  openWhatsApp([
    'Olá, equipe Pense Assim!',
    'Gostaria de solicitar uma análise de comunicação.',
    '',
    `Nome: ${analysisName.value}`,
    `Empresa: ${analysisCompany.value}`,
    `WhatsApp: ${analysisWhatsapp.value}`
  ].join('\n'), 'analise_secao_4')
  goToThanks('analise_secao_4')
}

function closeVideo() {
  showVideo.value = false
}

function openVideo() {
  trackConversion('video_play', { video_name: 'showreel_home' })
  showVideo.value = true
}

function trackFloatingWhatsApp() {
  trackConversion('whatsapp_click', { source: 'botao_flutuante' })
}

function scrollClients(direction: -1 | 1) {
  if (!import.meta.client) return

  const row = document.querySelector<HTMLElement>('.clients .logo-row')
  if (!row) return

  const distance = Math.max(240, Math.round(row.clientWidth * 0.72))
  row.scrollBy({ left: distance * direction, behavior: 'smooth' })
}

function scrollTestimonials(direction: -1 | 1) {
  const viewport = testimonialViewport.value
  const firstCard = viewport?.querySelector<HTMLElement>('.testimonial-card')
  if (!viewport || !firstCard) return

  const gap = Number.parseFloat(getComputedStyle(firstCard.parentElement!).gap) || 24
  const step = firstCard.getBoundingClientRect().width + gap
  const total = testimonials.length

  if (direction === 1) {
    if (testimonialPosition === total) {
      viewport.scrollTo({ left: 0, behavior: 'auto' })
      testimonialPosition = 0
    }
    testimonialPosition += 1
  } else {
    if (testimonialPosition === 0) {
      viewport.scrollTo({ left: step * total, behavior: 'auto' })
      testimonialPosition = total
    }
    testimonialPosition -= 1
  }

  requestAnimationFrame(() => viewport.scrollTo({ left: step * testimonialPosition, behavior: 'smooth' }))
}

function startTestimonialsAutoplay() {
  if (!import.meta.client || window.matchMedia('(prefers-reduced-motion: reduce)').matches || testimonialTimer) return
  testimonialTimer = window.setInterval(() => scrollTestimonials(1), 6500)
}

function stopTestimonialsAutoplay() {
  if (!testimonialTimer) return
  window.clearInterval(testimonialTimer)
  testimonialTimer = null
}

onMounted(() => {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.client-strip > button')
  const previous = buttons[0]
  const next = buttons[1]

  if (!previous || !next) return

  const goPrevious = () => scrollClients(-1)
  const goNext = () => scrollClients(1)

  previous.addEventListener('click', goPrevious)
  next.addEventListener('click', goNext)

  stopClientLogoControls = () => {
    previous.removeEventListener('click', goPrevious)
    next.removeEventListener('click', goNext)
  }

  startTestimonialsAutoplay()
})

onBeforeUnmount(() => {
  stopClientLogoControls?.()
  stopTestimonialsAutoplay()
})
</script>

<template>
  <div>
    <SiteHeader>
      <div class="hero-inner container">
        <div class="hero-copy">
          <span class="eyebrow">Estratégia que movimenta marcas</span>
          <h1>ANTES DE COMUNICAR,<br>A GENTE <strong>PENSA.</strong></h1>
          <p class="hero-services">Marketing <b>•</b> Branding <b>•</b> Audiovisual <b>•</b> Mídia</p>
          <p class="hero-description">Estratégias, planejamento e produção audiovisual para construir marcas mais fortes.</p>
        </div>

        <form class="budget-form" aria-label="Solicite um orçamento" @submit.prevent="submitBudgetForm">
          <div class="form-heading">
            <span>Solicite um<br>orçamento</span>
            <small>Vamos conversar</small>
          </div>
          <label><span>Nome</span><input v-model="budgetName" name="nome" type="text" placeholder="Como podemos te chamar?" autocomplete="name" required></label>
          <label><span>Empresa</span><input v-model="budgetCompany" name="empresa" type="text" placeholder="Qual é a sua empresa?" autocomplete="organization" required></label>
          <label><span>WhatsApp</span><input v-model="whatsapp" name="whatsapp" type="tel" placeholder="(00) 00000-0000" autocomplete="tel" required @input="maskPhone"></label>
          <button type="submit">Enviar no WhatsApp <span>→</span></button>
          <p class="form-status" :class="{ visible: sent }" role="status">{{ sent ? 'Abrimos o WhatsApp com sua mensagem pronta para envio.' : '' }}</p>
        </form>
      </div>
      <a class="scroll-cue" href="#cases"><span>Role para descobrir</span><i /></a>
    </SiteHeader>

    <main>
      <section id="cases" class="cases section" aria-labelledby="cases-title">
        <h2 id="cases-title" class="cases-title">Conheça alguns de nossos cases</h2>
        <CaseGrid @open="selectedProject = $event" />
        <div class="center-link"><NuxtLink to="/cases">Ver todos <span>◆</span></NuxtLink></div>
      </section>

      <section id="sobre" class="about" aria-labelledby="home-about-title">
        <div class="about-inner container">
          <span class="section-index section-index--light">02 / Sobre</span>
          <div>
            <h2 id="home-about-title">Somos especialistas<br>em <em>comunicação.</em></h2>
            <p>Atuamos de forma integrada. Unimos estratégias de marketing digital com expertise em publicidade, design e inovação em produção de vídeos e fotografia. Sua comunicação inteira, pensando junto.</p>
            <NuxtLink class="outline-button" to="/sobre">Saiba mais <span>→</span></NuxtLink>
          </div>
        </div>
      </section>

      <section class="showreel" aria-label="Showreel Pense Assim">
        <div class="showreel-content">
          <span>Ideias precisam<br>ser <em>sentidas.</em></span>
          <button type="button" class="play-button" aria-label="Assistir ao showreel da Pense Assim" @click="openVideo">
            <span class="play-button-circle">
              <svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="39" /><path d="m33 27 22 13-22 13Z" /></svg>
            </span>
            <span class="play-button-label">Assistir ao showreel</span>
          </button>
        </div>
      </section>

      <section id="solucoes" class="solutions section" aria-labelledby="home-solutions-title">
        <div class="container solutions-layout">
          <div class="solutions-intro">
            <span class="section-index">03 / Soluções</span>
            <h2 id="home-solutions-title">Estratégia sem<br>execução é só<br><em>uma boa ideia.</em></h2>
          </div>
          <div class="solution-list">
            <article
              v-for="(item, index) in [
                ['Branding', 'Posicionamento, identidade visual e narrativas que transformam percepção em valor.'],
                ['Marketing digital', 'Conteúdo, mídia e performance conectados para gerar atenção e conversão.'],
                ['Audiovisual', 'Filmes, campanhas e fotografia com direção criativa.'],
                ['Design gráfico', 'Criações visuais que reforçam a identidade da sua marca com impacto e coerência.'],
                ['Gestão de conteúdo', 'Conteúdo estratégico para engajar, informar e fortalecer sua marca.'],
                ['Tráfego pago', 'Gestão de anúncios para atrair, converter e escalar resultados.'],
                ['Mídia & performance', 'Planejamento orientado por dados e oportunidades reais.']
              ]"
              :key="item[0]"
              class="solution-item"
              :class="{ open: index === 0 }"
            >
              <div class="solution-static"><span>0{{ index + 1 }}</span><strong>{{ item[0] }}</strong></div>
              <div class="solution-detail"><p>{{ item[1] }}</p></div>
            </article>
            <NuxtLink class="solutions-more" to="/solucoes">Ver todas as soluções →</NuxtLink>
          </div>
        </div>
      </section>

      <section id="contato" class="analysis" aria-labelledby="analysis-title">
        <div class="container analysis-layout">
          <div class="analysis-copy">
            <span class="section-index section-index--light">04 / Vamos conversar</span>
            <h2 id="analysis-title">Solicite uma análise<br>de sua <em>comunicação.</em></h2>
            <p>Descubra em que caminho sua empresa está. Realizamos um diagnóstico inicial, sem compromisso.</p>
          </div>
          <form class="analysis-form" aria-label="Solicitar análise de comunicação" @submit.prevent="submitAnalysisForm">
            <div class="analysis-form-head">
              <span>Diagnóstico rápido</span>
              <strong>Receba o retorno pelo WhatsApp</strong>
            </div>
            <label><span>Nome</span><input v-model="analysisName" name="nome" autocomplete="name" required></label>
            <label><span>Empresa</span><input v-model="analysisCompany" name="empresa" autocomplete="organization" required></label>
            <label class="full"><span>WhatsApp</span><input v-model="analysisWhatsapp" name="whatsapp" type="tel" placeholder="(00) 00000-0000" autocomplete="tel" required @input="maskAnalysisPhone"></label>
            <button type="submit">Enviar no WhatsApp <span>→</span></button>
            <p class="form-status" :class="{ visible: analysisSent }" role="status">{{ analysisSent ? 'Abrimos o WhatsApp com sua mensagem pronta para envio.' : '' }}</p>
          </form>
        </div>
      </section>

      <section class="clients" aria-label="Alguns de nossos clientes">
        <div class="client-strip">
          <button type="button" aria-label="Clientes anteriores">‹</button>
          <div class="logo-row">
            <img src="/imagens/secao_logoclientes/Logo%20Silomax.png" alt="Silomax" loading="lazy" decoding="async">
            <img src="/imagens/secao_logoclientes/intermidia.png" alt="Intermidia" loading="lazy" decoding="async">
            <img src="/imagens/secao_logoclientes/cafe%20jandaia.png" alt="Café Jandaia" loading="lazy" decoding="async">
            <img src="/imagens/secao_logoclientes/casa_grande_logo%201.png" alt="Casa Grande" loading="lazy" decoding="async">
            <img src="/imagens/secao_logoclientes/ipiranga.png" alt="Escritório Ipiranga" loading="lazy" decoding="async">
            <img src="/imagens/secao_logoclientes/Logo_Punta_Branca%201.png" alt="Punta del Este" loading="lazy" decoding="async">
          </div>
          <button type="button" aria-label="Próximos clientes">›</button>
        </div>
      </section>

      <section id="insights" class="testimonials" aria-label="Fala cliente">
        <div class="testimonial-carousel">
          <button class="testimonial-arrow" type="button" aria-label="Depoimentos anteriores" @click="scrollTestimonials(-1)">‹</button>
          <div ref="testimonialViewport" class="testimonial-viewport" @pointerenter="stopTestimonialsAutoplay" @pointerleave="startTestimonialsAutoplay">
            <div class="testimonial-track">
              <img v-for="(testimonial, index) in [...testimonials, ...testimonials]" :key="`${testimonial.src}-${index}`" class="testimonial-card" :src="testimonial.src" :alt="testimonial.alt" loading="lazy" decoding="async">
            </div>
          </div>
          <button class="testimonial-arrow" type="button" aria-label="Próximos depoimentos" @click="scrollTestimonials(1)">›</button>
        </div>
      </section>
    </main>

    <SiteFooter />
    <ProjectModal :project="selectedProject" @close="selectedProject = null" />
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showVideo" class="video-modal" role="dialog" aria-modal="true" aria-label="Showreel Pense Assim" @click.self="closeVideo">
          <div class="video-modal-panel">
            <button type="button" class="video-modal-close" aria-label="Fechar vídeo" @click="closeVideo">×</button>
            <iframe
              :src="youtubeEmbedUrl"
              title="Showreel Pense Assim"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
      </Transition>
    </Teleport>
    <a class="floating-whatsapp" :href="floatingWhatsappUrl" target="_blank" rel="noopener" aria-label="Conversar pelo WhatsApp" @click="trackFloatingWhatsApp">
      <span>WhatsApp</span>
      <i aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M19.05 4.94A9.86 9.86 0 0 0 12.03 2C6.55 2 2.1 6.45 2.1 11.93c0 1.75.46 3.45 1.33 4.95L2 22l5.26-1.38a9.94 9.94 0 0 0 4.76 1.21h.01c5.47 0 9.92-4.45 9.92-9.93 0-2.65-1.03-5.14-2.9-6.96Zm-7.02 15.2a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.12.82.83-3.04-.2-.32a8.16 8.16 0 0 1-1.25-4.35c0-4.5 3.67-8.17 8.2-8.17 2.19 0 4.25.85 5.8 2.4a8.13 8.13 0 0 1 2.39 5.78c0 4.51-3.67 8.2-8.18 8.2Zm4.49-6.12c-.25-.13-1.49-.73-1.72-.81-.23-.08-.4-.13-.57.12-.16.24-.65.8-.79.97-.15.17-.3.19-.55.06-.25-.12-1.05-.38-2-1.22a7.5 7.5 0 0 1-1.38-1.72c-.14-.24-.01-.37.11-.49l.38-.44c.12-.13.16-.23.24-.39.08-.16.04-.3-.02-.43-.06-.12-.57-1.36-.78-1.86-.2-.48-.41-.42-.57-.42h-.48c-.16 0-.43.06-.65.3-.23.24-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.73 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.49-.6 1.7-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" /></svg>
      </i>
    </a>
  </div>
</template>
