import { _ as __nuxt_component_0, a as __nuxt_component_3 } from './SiteFooter-BzD3kxcn.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-B_alxpn5.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/vue/server-renderer/index.mjs';
import { p as projects, c as caseTiles } from './projects-kL72p_0w.mjs';
import { u as useRoute, c as createError } from './server.mjs';
import { u as useSeoMeta } from './composables-G82adFvZ.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/conta/OneDrive/Documentos/GitHub/pense/node_modules/h3/dist/index.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = String(route.params.slug);
    const project = projects[slug];
    if (!project) {
      throw createError({
        statusCode: 404,
        statusMessage: "Projeto n\xE3o encontrado"
      });
    }
    useSeoMeta({
      title: `${project.title} \u2014 Case Pense Assim`,
      description: project.description,
      ogTitle: `${project.title} \u2014 Case Pense Assim`,
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
        _push(`<figure class="${ssrRenderClass({ featured: index === 0 })}"><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `${unref(project).title} \u2014 aplica\xE7\xE3o ${index + 1}`)}><figcaption>Aplica\xE7\xE3o ${ssrInterpolate(String(index + 1).padStart(2, "0"))}</figcaption></figure>`);
      });
      _push(`<!--]--></div></section><section class="related-cases" aria-label="Outros cases"><div class="container"><div class="section-head"><span class="section-index">Outros cases</span><h2>Veja tamb\xE9m</h2></div><div class="related-grid"><!--[-->`);
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
      _push(`<!--]--></div></div></section><section class="page-cta"><div class="container"><h2>Vamos trabalhar juntos?</h2><p>Se sua marca tamb\xE9m precisa transformar estrat\xE9gia em comunica\xE7\xE3o, a gente pode pensar junto.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "outline-button",
        to: "/#contato"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fale com a gente <span${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode("Fale com a gente "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cases/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BVmZ1lA6.mjs.map
