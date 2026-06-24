<script setup lang="ts">
import { site } from '~/data/site'

const pageDescription = 'Conheça a trajetória, a metodologia e a forma de trabalho da Pense Assim.'

useSeoMeta({
  title: 'Sobre — Pense Assim',
  description: pageDescription,
  ogTitle: 'Sobre — Pense Assim',
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: `${site.url}/sobre`,
  twitterCard: 'summary',
  twitterTitle: 'Sobre — Pense Assim',
  twitterDescription: pageDescription
})

useHead({
  link: [{ rel: 'canonical', href: `${site.url}/sobre` }]
})

const sent = ref(false)
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
            <div class="story-visual" aria-hidden="true" />
          </div>

          <div class="story-grid">
            <div class="story-visual story-visual--sphere" aria-hidden="true" />
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
          <button class="play-button" type="button" aria-label="Reproduzir showreel">
            <svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="39" /><path d="m33 27 22 13-22 13Z" /></svg>
          </button>
        </div>
      </section>

      <section class="method-section" aria-labelledby="method-title">
        <div class="container method-layout">
          <div class="method-copy">
            <h2 id="method-title">Metodologia de<br>trabalho</h2>
            <p>Um processo colaborativo que transforma complexidade em decisões claras.</p>
            <ul>
              <li>Imersão no negócio, público e objetivos.</li>
              <li>Diagnóstico dos desafios prioritários.</li>
              <li>Estratégia criativa conectada a resultados.</li>
              <li>Produção e evolução contínua.</li>
            </ul>
          </div>
          <div class="method-graphic" aria-hidden="true"><span v-for="i in 5" :key="i" /></div>
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
            <input name="nome" placeholder="Nome" autocomplete="name" required>
            <input name="email" type="email" placeholder="E-mail" autocomplete="email" required>
            <button type="submit">Inscreva-se</button>
            <p class="form-status" :class="{ visible: sent }" role="status">{{ sent ? 'Inscrição recebida.' : '' }}</p>
          </form>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
