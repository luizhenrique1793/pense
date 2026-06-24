import { _ as __nuxt_component_0, a as __nuxt_component_3 } from './SiteFooter-BzD3kxcn.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-B_alxpn5.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/vue/server-renderer/index.mjs';
import { u as useSeoMeta } from './composables-G82adFvZ.mjs';
import './server.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/destr/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/devalue/index.js';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "solucoes",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Solu\xE7\xF5es \u2014 Pense Assim",
      description: "Solu\xE7\xF5es integradas de marketing, design, conte\xFAdo, tr\xE1fego pago e m\xEDdia."
    });
    const services = [
      ["Marketing 360\xB0", "Planejamento estrat\xE9gico, do branding \xE0 performance, integrando on e offline.", "strategy"],
      ["Design gr\xE1fico", "Cria\xE7\xF5es visuais que refor\xE7am a identidade da sua marca com impacto e coer\xEAncia.", "design"],
      ["Gest\xE3o de conte\xFAdo", "Produ\xE7\xE3o de conte\xFAdo estrat\xE9gico para engajar, informar e fortalecer sua marca.", "content"],
      ["Marketing", "Campanhas sob medida para posicionar sua marca e gerar resultados reais.", "marketing"],
      ["Tr\xE1fego pago", "Gest\xE3o de an\xFAncios para atrair, converter e escalar.", "traffic"],
      ["M\xEDdia off e digital", "Planejamento para garantir presen\xE7a nos canais certos, com efici\xEAncia.", "media"]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_SiteFooter = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inner-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, { inner: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container page-hero-copy"${_scopeId}><h1${_scopeId}>Solu\xE7\xF5es</h1><p${_scopeId}>Conhe\xE7a como podemos auxiliar sua empresa<br${_scopeId}>em cada etapa do desenvolvimento.</p></div>`);
          } else {
            return [
              createVNode("div", { class: "container page-hero-copy" }, [
                createVNode("h1", null, "Solu\xE7\xF5es"),
                createVNode("p", null, [
                  createTextVNode("Conhe\xE7a como podemos auxiliar sua empresa"),
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
      _push(`<!--]--></section><section class="page-cta"><div class="container"><h2>Somos especialistas<br>em comunica\xE7\xE3o</h2><p>Nosso time combina pensamento estrat\xE9gico e execu\xE7\xE3o para que cada canal conte a mesma hist\xF3ria \u2014 e movimente o mesmo resultado.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "outline-button",
        to: "/#contato"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Vamos trabalhar juntos? <span${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode("Vamos trabalhar juntos? "),
              createVNode("span", null, "\u2192")
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

export { _sfc_main as default };
//# sourceMappingURL=solucoes-D4FUB3He.mjs.map
