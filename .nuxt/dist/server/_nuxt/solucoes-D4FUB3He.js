import { _ as __nuxt_component_0, a as __nuxt_component_3 } from "./SiteFooter-BzD3kxcn.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-B_alxpn5.js";
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "solucoes",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Soluções — Pense Assim",
      description: "Soluções integradas de marketing, design, conteúdo, tráfego pago e mídia."
    });
    const services = [
      ["Marketing 360°", "Planejamento estratégico, do branding à performance, integrando on e offline.", "strategy"],
      ["Design gráfico", "Criações visuais que reforçam a identidade da sua marca com impacto e coerência.", "design"],
      ["Gestão de conteúdo", "Produção de conteúdo estratégico para engajar, informar e fortalecer sua marca.", "content"],
      ["Marketing", "Campanhas sob medida para posicionar sua marca e gerar resultados reais.", "marketing"],
      ["Tráfego pago", "Gestão de anúncios para atrair, converter e escalar.", "traffic"],
      ["Mídia off e digital", "Planejamento para garantir presença nos canais certos, com eficiência.", "media"]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_SiteFooter = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inner-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, { inner: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container page-hero-copy"${_scopeId}><h1${_scopeId}>Soluções</h1><p${_scopeId}>Conheça como podemos auxiliar sua empresa<br${_scopeId}>em cada etapa do desenvolvimento.</p></div>`);
          } else {
            return [
              createVNode("div", { class: "container page-hero-copy" }, [
                createVNode("h1", null, "Soluções"),
                createVNode("p", null, [
                  createTextVNode("Conheça como podemos auxiliar sua empresa"),
                  createVNode("br"),
                  createTextVNode("em cada etapa do desenvolvimento.")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main><section class="service-showcase"><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<article class="service-row"><div class="service-copy"><h2>${ssrInterpolate(service[0])}</h2><i></i><p>${ssrInterpolate(service[1])}</p></div><div class="${ssrRenderClass([`service-visual--${service[2]}`, "service-visual"])}" role="img"${ssrRenderAttr("aria-label", service[0])}></div></article>`);
      });
      _push(`<!--]--></section><section class="page-cta"><div class="container"><h2>Somos especialistas<br>em comunicação</h2><p>Nosso time combina pensamento estratégico e execução para que cada canal conte a mesma história — e movimente o mesmo resultado.</p>`);
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
      _push(`</div></section></main>`);
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/solucoes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=solucoes-D4FUB3He.js.map
