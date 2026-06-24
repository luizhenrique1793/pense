export default defineNuxtConfig({
  srcDir: '.',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: title => title ? `${title}` : 'Pense Assim — Comunicação 360°',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#292928' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { property: 'og:site_name', content: 'Pense Assim' },
        { property: 'og:locale', content: 'pt_BR' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/obrigado',
        '/sobre',
        '/solucoes',
        '/cases',
        '/cases/punta',
        '/cases/jaecoo',
        '/cases/silomax',
        '/cases/sucatto',
        '/cases/queens',
        '/cases/lidermax',
        '/cases/nautico',
        '/cases/jandaia',
        '/cases/prime',
        '/cases/paris'
      ]
    }
  },
  compatibilityDate: '2026-06-22'
})
