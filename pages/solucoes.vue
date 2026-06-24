<script setup lang="ts">
import { site } from '~/data/site'

const pageDescription = 'Soluções integradas de marketing, design, conteúdo, tráfego pago e mídia para marcas que precisam crescer com consistência.'

useSeoMeta({
  title: 'Soluções — Pense Assim',
  description: pageDescription,
  ogTitle: 'Soluções — Pense Assim',
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: `${site.url}/solucoes`,
  twitterCard: 'summary',
  twitterTitle: 'Soluções — Pense Assim',
  twitterDescription: pageDescription
})

useHead({
  link: [{ rel: 'canonical', href: `${site.url}/solucoes` }]
})

const services = [
  ['Marketing 360°', 'Planejamento estratégico, do branding à performance, integrando on e offline.', 'strategy'],
  ['Design gráfico', 'Criações visuais que reforçam a identidade da sua marca com impacto e coerência.', 'design'],
  ['Gestão de conteúdo', 'Produção de conteúdo estratégico para engajar, informar e fortalecer sua marca.', 'content'],
  ['Marketing', 'Campanhas sob medida para posicionar sua marca e gerar resultados reais.', 'marketing'],
  ['Tráfego pago', 'Gestão de anúncios para atrair, converter e escalar.', 'traffic'],
  ['Mídia off e digital', 'Planejamento para garantir presença nos canais certos, com eficiência.', 'media']
]
</script>

<template>
  <div class="inner-page">
    <SiteHeader inner>
      <div class="container page-hero-copy">
        <h1>Soluções</h1>
        <p>Conheça como podemos auxiliar sua empresa<br>em cada etapa do desenvolvimento.</p>
      </div>
    </SiteHeader>

    <main>
      <section class="service-showcase" aria-label="Soluções de comunicação">
        <article v-for="service in services" :key="service[0]" class="service-row">
          <div class="service-copy">
            <h2>{{ service[0] }}</h2>
            <i aria-hidden="true" />
            <p>{{ service[1] }}</p>
          </div>
          <div class="service-visual" :class="`service-visual--${service[2]}`" role="img" :aria-label="service[0]" />
        </article>
      </section>

      <section class="page-cta" aria-labelledby="solutions-cta-title">
        <div class="container">
          <h2 id="solutions-cta-title">Somos especialistas<br>em comunicação</h2>
          <p>Nosso time combina pensamento estratégico e execução para que cada canal conte a mesma história — e movimente o mesmo resultado.</p>
          <NuxtLink class="outline-button" to="/#contato">Vamos trabalhar juntos? <span>→</span></NuxtLink>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
