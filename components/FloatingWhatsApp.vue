<script setup lang="ts">
const route = useRoute()
const whatsappTarget = '5543991619048'

const href = computed(() => {
  const attributionKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid']
  const attribution = attributionKeys
    .map(key => {
      const value = route.query[key]
      return typeof value === 'string' && value ? `${key}: ${value}` : null
    })
    .filter(Boolean)

  const message = ['Olá, equipe Pense Assim!', 'Vim pelo site e gostaria de conversar.']
  if (attribution.length) message.push('', 'Origem da campanha:', ...attribution)

  return `https://wa.me/${whatsappTarget}?text=${encodeURIComponent(message.join('\n'))}`
})

function trackClick() {
  if (!import.meta.client) return

  const payload = { event: 'whatsapp_click', source: 'botao_flutuante', page_path: window.location.pathname }
  window.dispatchEvent(new CustomEvent('pense:conversion', { detail: payload }))
  ;(window as Window & { dataLayer?: Record<string, string>[] }).dataLayer?.push(payload)
}
</script>

<template>
  <a class="floating-whatsapp" :href="href" target="_blank" rel="noopener" aria-label="Conversar pelo WhatsApp" @click="trackClick">
    <span>WhatsApp</span>
    <i aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M19.05 4.94A9.86 9.86 0 0 0 12.03 2C6.55 2 2.1 6.45 2.1 11.93c0 1.75.46 3.45 1.33 4.95L2 22l5.26-1.38a9.94 9.94 0 0 0 4.76 1.21h.01c5.47 0 9.92-4.45 9.92-9.93 0-2.65-1.03-5.14-2.9-6.96Zm-7.02 15.2a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.12.82.83-3.04-.2-.32a8.16 8.16 0 0 1-1.25-4.35c0-4.5 3.67-8.17 8.2-8.17 2.19 0 4.25.85 5.8 2.4a8.13 8.13 0 0 1 2.39 5.78c0 4.51-3.67 8.2-8.18 8.2Zm4.49-6.12c-.25-.13-1.49-.73-1.72-.81-.23-.08-.4-.13-.57.12-.16.24-.65.8-.79.97-.15.17-.3.19-.55.06-.25-.12-1.05-.38-2-1.22a7.5 7.5 0 0 1-1.38-1.72c-.14-.24-.01-.37.11-.49l.38-.44c.12-.13.16-.23.24-.39.08-.16.04-.3-.02-.43-.06-.12-.57-1.36-.78-1.86-.2-.48-.41-.42-.57-.42h-.48c-.16 0-.43.06-.65.3-.23.24-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.73 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.49-.6 1.7-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" /></svg>
    </i>
  </a>
</template>
