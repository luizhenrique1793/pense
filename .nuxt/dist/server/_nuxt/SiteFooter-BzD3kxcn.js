import { _ as __nuxt_component_0$1 } from "./nuxt-link-B_alxpn5.js";
import { defineComponent, ref, watch, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { u as useRoute, _ as _export_sfc } from "../server.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  props: {
    inner: { type: Boolean, default: false }
  },
  setup(__props) {
    const open = ref(false);
    const route = useRoute();
    watch(() => route.fullPath, () => {
      open.value = false;
    });
    watch(open, (value) => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: __props.inner ? "page-hero" : "hero"
      }, _attrs))}><nav class="nav site-nav container" aria-label="Navegação principal">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "brand",
        to: "/",
        "aria-label": "Pense Assim — início"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>PEN</span><span${_scopeId}>SE<i${_scopeId}></i></span>`);
          } else {
            return [
              createVNode("span", null, "PEN"),
              createVNode("span", null, [
                createTextVNode("SE"),
                createVNode("i")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="menu-toggle" type="button"${ssrRenderAttr("aria-expanded", unref(open))} aria-controls="main-menu"><span></span><span></span><span class="sr-only">Abrir menu</span></button><div id="main-menu" class="${ssrRenderClass([{ open: unref(open) }, "nav-links"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/#cases" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cases`);
          } else {
            return [
              createTextVNode("Cases")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/solucoes" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Soluções`);
          } else {
            return [
              createTextVNode("Soluções")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/sobre" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sobre`);
          } else {
            return [
              createTextVNode("Sobre")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/#insights" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Insights`);
          } else {
            return [
              createTextVNode("Insights")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/#contato" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contato`);
          } else {
            return [
              createTextVNode("Contato")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-cta",
        to: "/#contato"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nav-cta-icon"${_scopeId}>◉</span>Faça um orçamento`);
          } else {
            return [
              createVNode("span", { class: "nav-cta-icon" }, "◉"),
              createTextVNode("Faça um orçamento")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "SiteHeader" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="container footer-main"><div class="footer-about"><h2>Pense Assim</h2><p>Transformamos conteúdo em design, fotografia, vídeo, publicidade e comunicação de resultados por meio do engajamento online. Pensamos o seu negócio para que seus potenciais clientes se lembrem dele em suas decisões de consumo.</p><div class="social-links" aria-label="Redes sociais"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="YouTube">▶</a><a href="#" aria-label="LinkedIn">in</a></div></div><div class="footer-contact"><h2>Contatos</h2><dl><div><dt>WhatsApp</dt><dd>+55 43 9161-9048</dd></div><div><dt>Email</dt><dd>fabio@penseassim.com.br</dd></div><div><dt>Endereço</dt><dd>Rua Dr. Elias Cesar, 55 -<br>sala 501, Londrina - PR</dd></div></dl></div></div><div class="footer-legal"><div class="container footer-bottom"><span>© Copyright 2025 by <strong>Pense</strong></span><span class="developed">Desenvolvido por: <b class="mini-brand">PEN<br>SE</b></span><span>Política de Privacidade · Relatório de Transparência e Igualdade Salarial</span></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "SiteFooter" });
export {
  __nuxt_component_0 as _,
  __nuxt_component_3 as a
};
//# sourceMappingURL=SiteFooter-BzD3kxcn.js.map
