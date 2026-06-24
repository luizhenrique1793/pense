<script setup lang="ts">
import { caseTiles, projects } from '~/data/projects'
import { site } from '~/data/site'

const casesUrl = `${site.url}/cases`
const projectList = Object.values(projects)

useSeoMeta({
  title: 'Cases — Pense Assim',
  description: 'Conheça projetos de branding, campanhas, conteúdo, audiovisual e marketing digital desenvolvidos pela Pense Assim.',
  ogTitle: 'Cases — Pense Assim',
  ogDescription: 'Uma seleção de cases da Pense Assim em comunicação 360°, branding, campanhas, conteúdo e mídia.',
  ogType: 'website',
  ogUrl: casesUrl,
  ogImage: `${site.url}/imagens/cases/Base-1.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Cases — Pense Assim',
  twitterDescription: 'Projetos de comunicação 360°, branding, campanhas, conteúdo e mídia.',
  twitterImage: `${site.url}/imagens/cases/Base-1.png`
})

useHead({
  link: [{ rel: 'canonical', href: casesUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Cases — Pense Assim',
        description: 'Projetos selecionados de comunicação, branding, campanhas, conteúdo e mídia.',
        url: casesUrl,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: projectList.map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: project.title,
            url: `${site.url}/cases/${project.id}`
          }))
        }
      })
    }
  ]
})
</script>

<template>
  <div class="inner-page cases-page">
    <SiteHeader inner>
      <div class="container page-hero-copy cases-page-hero">
        <span>Cases</span>
        <h1>Projetos que mostram estratégia em movimento.</h1>
        <p>Uma seleção de campanhas, marcas, conteúdos e experiências digitais pensadas para conectar negócios a pessoas.</p>
      </div>
    </SiteHeader>

    <main>
      <section class="cases-archive" aria-labelledby="cases-page-title">
        <div class="container cases-archive-head">
          <span class="section-index">Portfólio</span>
          <h2 id="cases-page-title">Todos os cases</h2>
          <p>Explore alguns dos projetos que traduzem nosso jeito de pensar comunicação: estratégia, estética e execução trabalhando juntas.</p>
        </div>

        <div class="case-grid cases-archive-grid">
          <NuxtLink
            v-for="tile in caseTiles"
            :key="`${tile.projectId}-${tile.image}`"
            class="case-tile case-tile--link"
            :to="`/cases/${tile.projectId}`"
          >
            <img :src="tile.image" :alt="tile.alt" loading="lazy" decoding="async">
            <span class="case-overlay">
              <strong>{{ tile.title }}</strong>
              <small>{{ tile.summary }}</small>
              <i>Ver projeto →</i>
            </span>
          </NuxtLink>
        </div>
      </section>

      <section class="page-cta" aria-labelledby="cases-cta-title">
        <div class="container">
          <h2 id="cases-cta-title">Vamos criar o próximo case?</h2>
          <p>Se sua marca precisa de estratégia, campanha, conteúdo ou uma presença digital mais forte, a gente pode pensar junto.</p>
          <NuxtLink class="outline-button" to="/#contato">Fale com a gente <span>→</span></NuxtLink>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
