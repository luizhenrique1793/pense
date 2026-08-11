<script setup lang="ts">
import { site } from '~/data/site'

const pageDescription = 'Conheça a trajetória, a metodologia e a forma de trabalho da Pense Assim.'
const aboutUrl = `${site.url}/sobre/`

useSeoMeta({
  title: 'Sobre a Pense Assim | Comunicação 360°',
  description: pageDescription,
  ogTitle: 'Sobre a Pense Assim | Comunicação 360°',
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: aboutUrl,
  ogImage: site.defaultOgImage,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Sobre a Pense Assim | Comunicação 360°',
  twitterDescription: pageDescription,
  twitterImage: site.defaultOgImage
})

useHead({
  link: [{ rel: 'canonical', href: aboutUrl }]
})

const sent = ref(false)
const showVideo = ref(false)
const youtubeEmbedUrl = 'https://www.youtube-nocookie.com/embed/Xn5I8aXe70w?autoplay=1&rel=0&modestbranding=1'

function openVideo() {
  if (import.meta.client) {
    const payload = { event: 'video_play', video_name: 'showreel_sobre', page_path: window.location.pathname }
    window.dispatchEvent(new CustomEvent('pense:conversion', { detail: payload }))
    ;(window as Window & { dataLayer?: Record<string, string>[] }).dataLayer?.push(payload)
  }
  showVideo.value = true
}
</script>

<template>
  <div class="inner-page">
    <SiteHeader inner>
      <div class="container page-hero-copy">
        <h1>Sobre</h1>
        <p>Nossa história</p>
      </div>
    </SiteHeader>

    <main>
      <section class="content-section" aria-labelledby="story-title">
        <div class="container">
          <div class="story-grid">
            <div>
              <h2 id="story-title">Nossa trajetória</h2>
              <p>A Pense nasceu para aproximar estratégia e criação. Reunimos talentos de publicidade, design, fotografia, vídeo e marketing para construir marcas mais relevantes, consistentes e preparadas para crescer.</p>
              <p>Mais do que executar peças, mergulhamos nos negócios. Entendemos contextos e transformamos ideias em comunicação que as pessoas reconhecem, sentem e lembram.</p>
            </div>
            <div class="story-visual story-visual--image">
              <img src="/imagens/cases/Rectangle%206.png" alt="Aplicação de identidade visual criada pela Pense Assim" loading="lazy" decoding="async">
            </div>
          </div>

          <div class="story-grid">
            <div class="story-visual story-visual--image">
              <img src="/imagens/cases/Base-1.png" alt="Projeto de comunicação digital desenvolvido pela Pense Assim" loading="lazy" decoding="async">
            </div>
            <div>
              <h2>Por que 360°?</h2>
              <p>Porque uma marca não acontece em um único canal. Ela é construída em cada conversa, campanha, busca, embalagem, vídeo e experiência.</p>
              <p>Estratégia, branding, conteúdo, audiovisual e mídia trabalham juntos para fortalecer a identidade e fazer cada investimento colaborar com o próximo.</p>
            </div>
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

      <section class="method-section" aria-labelledby="method-title">
        <div class="container method-layout">
          <div class="method-copy">
            <span class="section-index">Nosso processo</span>
            <h2 id="method-title">Metodologia de<br>trabalho</h2>
            <p>Um processo colaborativo que transforma complexidade em decisões claras.</p>
            <ul>
              <li>Imersão no negócio, público e objetivos.</li>
              <li>Diagnóstico dos desafios prioritários.</li>
              <li>Estratégia criativa conectada a resultados.</li>
              <li>Produção e evolução contínua.</li>
            </ul>
          </div>
          <figure class="method-visual">
            <img src="/imagens/cases/Base-10.png" alt="Projeto digital desenvolvido pela Pense Assim" loading="lazy" decoding="async">
            <figcaption>
              <span>Processo integrado</span>
              <strong>Estratégia → criação → evolução</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section class="page-cta" aria-labelledby="about-cta-title">
        <div class="container">
          <h2 id="about-cta-title">Somos especialistas<br>em comunicação</h2>
          <p>Unimos marketing, publicidade, design, audiovisual e mídia para construir uma comunicação inteira.</p>
          <NuxtLink class="outline-button" to="/#contato">Vamos trabalhar juntos? <span>→</span></NuxtLink>
        </div>
      </section>

      <section class="newsletter" aria-labelledby="newsletter-title">
        <div class="container">
          <h2 id="newsletter-title">Receba nossos<br>conteúdos:</h2>
          <p>Ideias, referências e movimentos da comunicação.</p>
          <form class="newsletter-form" aria-label="Assinar conteúdos da Pense Assim" @submit.prevent="sent = true">
            <label class="sr-only" for="newsletter-name">Nome</label>
            <input id="newsletter-name" name="nome" placeholder="Nome" autocomplete="name" required>
            <label class="sr-only" for="newsletter-email">E-mail</label>
            <input id="newsletter-email" name="email" type="email" placeholder="E-mail" autocomplete="email" required>
            <button type="submit">Inscreva-se</button>
            <p class="form-status" :class="{ visible: sent }" role="status">{{ sent ? 'Inscrição recebida.' : '' }}</p>
          </form>
        </div>
      </section>
    </main>

    <SiteFooter />
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showVideo" class="video-modal" role="dialog" aria-modal="true" aria-label="Showreel Pense Assim" @click.self="showVideo = false">
          <div class="video-modal-panel">
            <button type="button" class="video-modal-close" aria-label="Fechar vídeo" @click="showVideo = false">×</button>
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
    <FloatingWhatsApp />
  </div>
</template>
