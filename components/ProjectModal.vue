<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{ project: Project | null }>()
const emit = defineEmits<{ close: [] }>()
const closeButton = ref<HTMLButtonElement | null>(null)
let savedScrollY = 0

function lockPageScroll() {
  if (!import.meta.client || document.body.classList.contains('modal-open')) return

  savedScrollY = window.scrollY
  document.body.style.top = `-${savedScrollY}px`
  document.documentElement.classList.add('modal-open')
  document.body.classList.add('modal-open')
}

function unlockPageScroll() {
  if (!import.meta.client || !document.body.classList.contains('modal-open')) return

  const scrollY = savedScrollY
  const previousScrollBehavior = document.documentElement.style.scrollBehavior

  document.documentElement.style.scrollBehavior = 'auto'
  document.documentElement.classList.remove('modal-open')
  document.body.classList.remove('modal-open')
  document.body.style.top = ''
  window.scrollTo(0, scrollY)

  requestAnimationFrame(() => {
    window.scrollTo(0, scrollY)
    document.documentElement.style.scrollBehavior = previousScrollBehavior
  })
}

function close() {
  emit('close')
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

watch(() => props.project, async value => {
  if (!import.meta.client) return

  if (value) {
    lockPageScroll()
    window.addEventListener('keydown', onKey)
    await nextTick()
    closeButton.value?.focus()
  } else {
    unlockPageScroll()
    window.removeEventListener('keydown', onKey)
  }
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  unlockPageScroll()
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="project"
        class="project-modal open"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        @click.self="close"
      >
        <article class="project-modal-panel">
          <header class="project-modal-header">
            <div class="project-intro">
              <span>{{ project.category }}</span>
              <h2 id="project-modal-title">{{ project.title }}</h2>
              <p>{{ project.description }}</p>
            </div>
            <button ref="closeButton" class="project-modal-close" type="button" aria-label="Fechar projeto" @click="close">×</button>
          </header>

          <aside class="project-meta">
            <span>Escopo do projeto</span>
            <ul>
              <li v-for="service in project.services" :key="service">{{ service }}</li>
            </ul>
            <NuxtLink class="project-page-link" :to="`/cases/${project.id}`" @click="close">Ver página completa do projeto →</NuxtLink>
          </aside>

          <div class="project-modal-gallery">
            <figure v-for="(image, index) in project.images" :key="image" :class="{ featured: index === 0 }">
              <img :src="image" :alt="`${project.title} — aplicação ${index + 1}`" :loading="index === 0 ? 'eager' : 'lazy'" decoding="async">
              <figcaption>Aplicação {{ String(index + 1).padStart(2, '0') }}</figcaption>
            </figure>
          </div>

          <div class="project-modal-cta">
            <h3>Vamos trabalhar juntos?</h3>
            <a href="#contato" @click="close">Fale com a gente →</a>
          </div>
        </article>
      </div>
    </Transition>
  </Teleport>
</template>
