import { _ as __nuxt_component_0, a as __nuxt_component_3 } from "./SiteFooter-BzD3kxcn.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-B_alxpn5.js";
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { a as useSeoMeta } from "./composables-G82adFvZ.js";
import "../server.mjs";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/hookable/dist/index.mjs";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/unctx/dist/index.mjs";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/defu/dist/defu.mjs";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/ufo/dist/index.mjs";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sobre",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Sobre — Pense Assim",
      description: "Conheça a trajetória e a metodologia da Pense Assim."
    });
    const sent = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_SiteFooter = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inner-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, { inner: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container page-hero-copy"${_scopeId}><h1${_scopeId}>Sobre</h1><p${_scopeId}>Nossa história</p></div>`);
          } else {
            return [
              createVNode("div", { class: "container page-hero-copy" }, [
                createVNode("h1", null, "Sobre"),
                createVNode("p", null, "Nossa história")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main><section class="content-section"><div class="container"><div class="story-grid"><div><h2>Nossa trajetória</h2><p>A Pense nasceu para aproximar estratégia e criação. Reunimos talentos de publicidade, design, fotografia, vídeo e marketing para construir marcas mais relevantes, consistentes e preparadas para crescer.</p><p>Mais do que executar peças, mergulhamos nos negócios. Entendemos contextos e transformamos ideias em comunicação que as pessoas reconhecem, sentem e lembram.</p></div><div class="story-visual"></div></div><div class="story-grid"><div class="story-visual story-visual--sphere"></div><div><h2>Por que 360°?</h2><p>Porque uma marca não acontece em um único canal. Ela é construída em cada conversa, campanha, busca, embalagem, vídeo e experiência.</p><p>Estratégia, branding, conteúdo, audiovisual e mídia trabalham juntos para fortalecer a identidade e fazer cada investimento colaborar com o próximo.</p></div></div></div></section><section class="showreel"><div class="showreel-content"><span>Ideias precisam<br>ser <em>sentidas.</em></span><button class="play-button" aria-label="Reproduzir showreel"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="39"></circle><path d="m33 27 22 13-22 13Z"></path></svg></button></div></section><section class="method-section"><div class="container method-layout"><div class="method-copy"><h2>Metodologia de<br>trabalho</h2><p>Um processo colaborativo que transforma complexidade em decisões claras.</p><ul><li>Imersão no negócio, público e objetivos.</li><li>Diagnóstico dos desafios prioritários.</li><li>Estratégia criativa conectada a resultados.</li><li>Produção e evolução contínua.</li></ul></div><div class="method-graphic"><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(`<span></span>`);
      });
      _push(`<!--]--></div></div></section><section class="page-cta"><div class="container"><h2>Somos especialistas<br>em comunicação</h2><p>Unimos marketing, publicidade, design, audiovisual e mídia para construir uma comunicação inteira.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "outline-button",
        to: "/#contato"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Vamos trabalhar juntos? <span${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode("Vamos trabalhar juntos? "),
              createVNode("span", null, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="newsletter"><div class="container"><h2>Receba nossos<br>conteúdos:</h2><p>Ideias, referências e movimentos da comunicação.</p><form class="newsletter-form"><input placeholder="Nome" required><input type="email" placeholder="E-mail" required><button>Inscreva-se</button><p class="${ssrRenderClass([{ visible: unref(sent) }, "form-status"])}">${ssrInterpolate(unref(sent) ? "Inscrição recebida." : "")}</p></form></div></section></main>`);
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sobre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sobre-B2-t2pnJ.js.map
