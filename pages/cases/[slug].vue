<script setup lang="ts">
import { caseTiles, projects } from '~/data/projects'
import { site } from '~/data/site'

const route = useRoute()
const slug = String(route.params.slug)
const project = projects[slug]

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Projeto não encontrado'
  })
}

const caseUrl = `${site.url}/cases/${project.id}`
const coverImage = `${site.url}${project.images[0]}`

useSeoMeta({
  title: `${project.title} — Case Pense Assim`,
  description: project.description,
  ogTitle: `${project.title} — Case Pense Assim`,
  ogDescription: project.description,
  ogType: 'article',
  ogUrl: caseUrl,
  ogImage: coverImage,
  twitterCard: 'summary_large_image',
  twitterTitle: `${project.title} — Case Pense Assim`,
  twitterDescription: project.description,
  twitterImage: coverImage
})

useHead({
  link: [{ rel: 'canonical', href: caseUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: caseUrl,
        image: coverImage,
        creator: {
          '@type': 'Organization',
          name: site.name,
          url: site.url
        },
        about: project.services
      })
    }
  ]
})

const relatedCases = caseTiles.filter(tile => tile.projectId !== project.id).slice(0, 6)
</script>

<template>
  <div class="inner-page project-page">
    <SiteHeader inner>
      <div class="container page-hero-copy project-hero-copy">
        <span>{{ project.category }}</span>
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
      </div>
    </SiteHeader>

    <main>
      <section class="project-page-meta" aria-label="Escopo do projeto">
        <div class="container">
          <span>Escopo do projeto</span>
          <ul>
            <li v-for="service in project.services" :key="service">{{ service }}</li>
          </ul>
        </div>
      </section>

      <section class="project-page-gallery" aria-label="Imagens do projeto">
        <div class="container">
          <figure v-for="(image, index) in project.images" :key="image" :class="{ featured: index === 0 }">
            <img :src="image" :alt="`${project.title} — aplicação ${index + 1}`" :loading="index === 0 ? 'eager' : 'lazy'" decoding="async">
            <figcaption>Aplicação {{ String(index + 1).padStart(2, '0') }}</figcaption>
          </figure>
        </div>
      </section>

      <section class="related-cases" aria-labelledby="related-cases-title">
        <div class="container">
          <div class="section-head">
            <span class="section-index">Outros cases</span>
            <h2 id="related-cases-title">Veja também</h2>
          </div>
          <div class="related-grid">
            <NuxtLink v-for="tile in relatedCases" :key="`${tile.projectId}-${tile.image}`" :to="`/cases/${tile.projectId}`" class="related-card">
              <img :src="tile.image" :alt="tile.alt" loading="lazy" decoding="async">
              <strong>{{ tile.title }}</strong>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="page-cta" aria-labelledby="case-cta-title">
        <div class="container">
          <h2 id="case-cta-title">Vamos trabalhar juntos?</h2>
          <p>Se sua marca também precisa transformar estratégia em comunicação, a gente pode pensar junto.</p>
          <NuxtLink class="outline-button" to="/#contato">Fale com a gente <span>→</span></NuxtLink>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
