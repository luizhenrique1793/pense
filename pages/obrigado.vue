<script setup lang="ts">
import { site } from '~/data/site'

const route = useRoute()

useSeoMeta({
  title: 'Obrigado — Pense Assim',
  description: 'Recebemos sua solicitação e abrimos o WhatsApp com a mensagem pronta.',
  robots: 'noindex, nofollow'
})

useHead({
  link: [{ rel: 'canonical', href: `${site.url}/obrigado` }]
})

const sourceLabel = computed(() => {
  const source = route.query.origem
  if (source === 'orcamento_header') return 'orçamento'
  if (source === 'analise_secao_4') return 'análise de comunicação'
  return 'contato'
})
</script>

<template>
  <div class="inner-page thanks-page">
    <SiteHeader inner>
      <div class="container page-hero-copy">
        <h1>Obrigado</h1>
        <p>Sua solicitação de {{ sourceLabel }} está pronta no WhatsApp.</p>
      </div>
    </SiteHeader>

    <main>
      <section class="thanks-section">
        <div class="container thanks-card">
          <span class="section-index">Mensagem preparada</span>
          <h2>Agora é só enviar no WhatsApp.</h2>
          <p>Se a janela do WhatsApp não abriu automaticamente, clique no botão abaixo para falar com a Pense Assim.</p>
          <a class="outline-button thanks-button" href="https://wa.me/5543991619048" target="_blank" rel="noopener">Abrir WhatsApp <span>→</span></a>
          <NuxtLink class="thanks-back" to="/">Voltar para o site</NuxtLink>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
