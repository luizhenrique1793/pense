<script setup lang="ts">
import type { Project } from '~/data/projects'
import { site } from '~/data/site'

const route = useRoute()
const router = useRouter()

useSeoMeta({
  title: 'Pense Assim — Comunicação 360°',
  description: site.description,
  ogTitle: 'Pense Assim — Comunicação 360°',
  ogDescription: site.description,
  ogType: 'website',
  ogUrl: `${site.url}/`,
  ogImage: `${site.url}/imagens/cases/Base-1.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Pense Assim — Comunicação 360°',
  twitterDescription: site.description,
  twitterImage: `${site.url}/imagens/cases/Base-1.png`
})

useHead({
  link: [{ rel: 'canonical', href: `${site.url}/` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: site.name,
        url: site.url,
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
let stopClientLogoControls: (() => void) | null = null
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
  router.push({ path: '/obrigado', query })
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
})

onBeforeUnmount(() => {
  stopClientLogoControls?.()
})
</script>

<template>
  <div>
    <SiteHeader>
      <div class="hero-inner container">
        <div class="hero-copy">
          <span class="eyebrow">Estratégia que movimenta marcas</span>
          <h1>Comunicação <strong>360°</strong></h1>
          <p class="hero-services">Marketing <b>•</b> Branding <b>•</b> Audiovisual <b>•</b> Mídia</p>
          <p class="hero-description">Pensamos em estratégias, criamos campanhas, desenvolvemos conteúdos e conectamos marcas ao seu público-alvo.</p>
        </div>

        <form class="budget-form" aria-label="Solicite um orçamento" @submit.prevent="submitBudgetForm">
          <div class="form-heading"><span>Solicite um<br>orçamento</span><i /></div>
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
            <NuxtLink class="outline-button" to="/sobre">Conheça a Pense <span>→</span></NuxtLink>
          </div>
        </div>
      </section>

      <section class="showreel" aria-label="Showreel Pense Assim">
        <div class="showreel-content">
          <span>Ideias precisam<br>ser <em>sentidas.</em></span>
          <button type="button" class="play-button" aria-label="Reproduzir showreel" @click="openVideo">
            <svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="39" /><path d="m33 27 22 13-22 13Z" /></svg>
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
        <div class="testimonial-grid">
          <img src="/imagens/secao_falacliente/fala_cliente_01.png" alt="Depoimento de Wesley Carneiro" loading="lazy" decoding="async">
          <img src="/imagens/secao_falacliente/515373466_18064724948131794_2713327672872573015_n.png" alt="Depoimento de Gabriela Sanches" loading="lazy" decoding="async">
          <img src="/imagens/secao_falacliente/503942728_18061974323131794_5408323875126567480_n.png" alt="Depoimento de André Garcia" loading="lazy" decoding="async">
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
      <i>→</i>
    </a>
  </div>
</template>
