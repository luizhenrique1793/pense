<script setup lang="ts">
withDefaults(defineProps<{ inner?: boolean }>(), { inner: false })

const open = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  open.value = false
})

watch(open, value => {
  if (import.meta.client) document.body.style.overflow = value ? 'hidden' : ''
})

onBeforeUnmount(() => {
  if (import.meta.client) document.body.style.overflow = ''
})
</script>

<template>
  <header :class="inner ? 'page-hero' : 'hero'">
    <nav class="nav site-nav container" aria-label="Navegação principal">
      <NuxtLink class="brand" to="/" aria-label="Pense Assim — início"><span>PEN</span><span>SE<i /></span></NuxtLink>
      <button class="menu-toggle" :class="{ open }" type="button" :aria-expanded="open" aria-controls="main-menu" @click="open = !open">
        <span />
        <span />
        <span />
        <span class="sr-only">{{ open ? 'Fechar menu' : 'Abrir menu' }}</span>
      </button>
      <div id="main-menu" class="nav-links" :class="{ open }">
        <span class="mobile-menu-label">Menu</span>
        <NuxtLink to="/cases" @click="open = false">Cases</NuxtLink>
        <NuxtLink to="/solucoes" @click="open = false">Soluções</NuxtLink>
        <NuxtLink to="/sobre" @click="open = false">Sobre</NuxtLink>
        <NuxtLink to="/#insights" @click="open = false">Insights</NuxtLink>
        <NuxtLink to="/#contato" @click="open = false">Contato</NuxtLink>
        <NuxtLink class="mobile-menu-cta" to="/#contato" @click="open = false">Faça um orçamento →</NuxtLink>
      </div>
      <button v-if="open" class="menu-backdrop" type="button" aria-label="Fechar menu" @click="open = false" />
      <NuxtLink class="nav-cta" to="/#contato"><span class="nav-cta-icon">◉</span>Faça um orçamento</NuxtLink>
    </nav>
    <slot />
  </header>
</template>
