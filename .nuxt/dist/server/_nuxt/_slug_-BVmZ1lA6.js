import { _ as __nuxt_component_0, a as __nuxt_component_3 } from "./SiteFooter-BzD3kxcn.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-B_alxpn5.js";
import { defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { p as projects, c as caseTiles } from "./projects-kL72p_0w.js";
import { u as useRoute, c as createError } from "../server.mjs";
import { a as useSeoMeta } from "./composables-G82adFvZ.js";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/ufo/dist/index.mjs";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/defu/dist/defu.mjs";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/hookable/dist/index.mjs";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/unctx/dist/index.mjs";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
import "C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = String(route.params.slug);
    const project = projects[slug];
    if (!project) {
      throw createError({
        statusCode: 404,
        statusMessage: "Projeto não encontrado"
      });
    }
    useSeoMeta({
      title: `${project.title} — Case Pense Assim`,
      description: project.description,
      ogTitle: `${project.title} — Case Pense Assim`,
      ogDescription: project.description,
      ogImage: project.images[0]
    });
    const relatedCases = caseTiles.filter((tile) => tile.projectId !== project.id).slice(0, 6);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_SiteFooter = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inner-page project-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, { inner: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container page-hero-copy project-hero-copy"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(project).category)}</span><h1${_scopeId}>${ssrInterpolate(unref(project).title)}</h1><p${_scopeId}>${ssrInterpolate(unref(project).description)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "container page-hero-copy project-hero-copy" }, [
                createVNode("span", null, toDisplayString(unref(project).category), 1),
                createVNode("h1", null, toDisplayString(unref(project).title), 1),
                createVNode("p", null, toDisplayString(unref(project).description), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main><section class="project-page-meta"><div class="container"><span>Escopo do projeto</span><ul><!--[-->`);
      ssrRenderList(unref(project).services, (service) => {
        _push(`<li>${ssrInterpolate(service)}</li>`);
      });
      _push(`<!--]--></ul></div></section><section class="project-page-gallery"><div class="container"><!--[-->`);
      ssrRenderList(unref(project).images, (image, index) => {
        _push(`<figure class="${ssrRenderClass({ featured: index === 0 })}"><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `${unref(project).title} — aplicação ${index + 1}`)}><figcaption>Aplicação ${ssrInterpolate(String(index + 1).padStart(2, "0"))}</figcaption></figure>`);
      });
      _push(`<!--]--></div></section><section class="related-cases" aria-label="Outros cases"><div class="container"><div class="section-head"><span class="section-index">Outros cases</span><h2>Veja também</h2></div><div class="related-grid"><!--[-->`);
      ssrRenderList(unref(relatedCases), (tile) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: `${tile.projectId}-${tile.image}`,
          to: `/cases/${tile.projectId}`,
          class: "related-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", tile.image)}${ssrRenderAttr("alt", tile.alt)}${_scopeId}><strong${_scopeId}>${ssrInterpolate(tile.title)}</strong>`);
            } else {
              return [
                createVNode("img", {
                  src: tile.image,
                  alt: tile.alt
                }, null, 8, ["src", "alt"]),
                createVNode("strong", null, toDisplayString(tile.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="page-cta"><div class="container"><h2>Vamos trabalhar juntos?</h2><p>Se sua marca também precisa transformar estratégia em comunicação, a gente pode pensar junto.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "outline-button",
        to: "/#contato"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fale com a gente <span${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode("Fale com a gente "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cases/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-BVmZ1lA6.js.map
