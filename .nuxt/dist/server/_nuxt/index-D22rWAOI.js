import { _ as __nuxt_component_0$1, a as __nuxt_component_3 } from "./SiteFooter-BzD3kxcn.js";
import { defineComponent, mergeProps, unref, useSSRContext, ref, watch, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, isRef, vModelText, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderTeleport, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { c as caseTiles } from "./projects-kL72p_0w.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-B_alxpn5.js";
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CaseGrid",
  __ssrInlineRender: true,
  emits: ["open"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "case-grid" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(caseTiles), (tile) => {
        _push(`<button class="case-tile" type="button"><img${ssrRenderAttr("src", tile.image)}${ssrRenderAttr("alt", tile.alt)}><span class="case-overlay"><strong>${ssrInterpolate(tile.title)}</strong><small>${ssrInterpolate(tile.summary)}</small><i>Ver projeto →</i></span></button>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CaseGrid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "CaseGrid" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectModal",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    ref(null);
    function close() {
      emit("close");
    }
    watch(() => props.project, async (value) => {
      return;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.project) {
          _push2(`<div class="project-modal open" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><article class="project-modal-panel"><header class="project-modal-header"><div class="project-intro"><span>${ssrInterpolate(__props.project.category)}</span><h2 id="project-modal-title">${ssrInterpolate(__props.project.title)}</h2><p>${ssrInterpolate(__props.project.description)}</p></div><button class="project-modal-close" type="button" aria-label="Fechar projeto">×</button></header><aside class="project-meta"><span>Escopo do projeto</span><ul><!--[-->`);
          ssrRenderList(__props.project.services, (service) => {
            _push2(`<li>${ssrInterpolate(service)}</li>`);
          });
          _push2(`<!--]--></ul>`);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            class: "project-page-link",
            to: `/cases/${__props.project.id}`,
            onClick: close
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`Ver página completa do projeto →`);
              } else {
                return [
                  createTextVNode("Ver página completa do projeto →")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</aside><div class="project-modal-gallery"><!--[-->`);
          ssrRenderList(__props.project.images, (image, index) => {
            _push2(`<figure class="${ssrRenderClass({ featured: index === 0 })}"><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `${__props.project.title} — aplicação ${index + 1}`)}><figcaption>Aplicação ${ssrInterpolate(String(index + 1).padStart(2, "0"))}</figcaption></figure>`);
          });
          _push2(`<!--]--></div><div class="project-modal-cta"><h3>Vamos trabalhar juntos?</h3><a href="#contato">Fale com a gente →</a></div></article></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "ProjectModal" });
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAAjCAYAAAD/nmRNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAADjpJREFUeAHtXd1y28YVPrugRSpNp0ysmd60E7Ctp+mVpU5sy85FwCewdN8ZUU8g+QlEPYHpm95aeoLIT2D0IpGdpGP6LjPNDOEmd7VreqaOSJrE9pwFSJHEYncJkJaT8JuRRRGLxWKx5+87Z2EGlmgV1jzg4F0SovWGwau//+G35X/9evWz9qXCOgjhArCybV/Y/hBKvQZ0i0/wL1ffdlD1H33jpx32Nq/VgPH7oEfgnz6ufF/8cC8Etv9R90UFlljiAlDQHWyVy+XCj4W9kLFayMQxlPqNv338cRmYoAXuyUaC/mEwExjbAyg3QHR2sa+H+rYOXStdQBg/ABP64XarVHZDwfZhiSUuEDztAFk0fuY8QUFDYXtTrXSe13evXHGBhWSVPMiHMnRfH/iPHvn42Te0db2bN5SC4t3aJGFztWczOPK//rrJQ6eOf+jbLrHEgqE0Td+X1g5CAXX82AxX+9VKu932NjdjYZvBdTQB3UUYsDYU+BNDyzYUVyu+77eHX0TjES0wXoNV7je/BS4KcVsRLF3KJS4KCQt3LmwiCFl/Wwqb55Uj12+OwkZgzgFZH/x0z9BSWsTJr8I6mICxIlrRwBHOXVhiiXcAExZuzLJBKMR2pffihD5L102IOiwCZOVK/SZ0V1pGge6HGySgltZNEiWtS5drnLMxUiWfhfOuXVsHR2RTPKX3m0MrTTElhtDudBN03X3ttdAjiJVUZsj5g74700ma60qF3PnfevJIISCFBxkwjz69zU881fc6Ei46L31+TOfqrktzOCJNKGYbChsT4mgobBJC1GBRkKTI+xsA3UMUc70lKnA6XsWfGpjAWV3+4mAmVSyAcSQSPaR0Mlv5AIVtJOgcnDpqux1Fu3MlWOCfw3SM6siYtwoZ4N26jooTMB4mIXZmOpfoNe/m9TYSXiewsnpn3L2HTmcdn6OC/BIBCs7GRFtbdM8+xz69ZJeDXfz3yHS6jr1GRbZhUFqu+n7kHNb9L786TDsR1wmtUTU557DKyKXkjhgNbhCy41EHm5semIiJfHCh8+O+f3rawM+Boa0ntUepg22F7iEG/hePjikNMA+iJCZnGrlc6mih6JswYXKtM8O7deM+XqCeLyzAcwUqu+7ZE2mBzHChdzazOx/Ptwd5oGOvHbYFGsRknvpZ4BymWTAp5GnCFoc30sKR23W+MEVQ6b/wxxquG1j/AAexGw8yH7AfuzSBwSIKVp1XGkC6F3ndaWJKT/WuiBBwZ2f9ygk8egHzhlwIwsIrsIdUkvi7bmyJ10Wt/xTd+wZYQLrROec7MhKUG04BpqVQYTR0lhfHu4/jvgoqwcc1OG254zBHLeQCfP/RV3X6KC3cuNuFieGnk50b4hUhjucibDDSLL6h2bhFTLalxY2aZH5pAAtyxtgFO0w/KIIBuog7G39qGpVNVnDKe84Z0aK1tZYHUpAMkIs2cqPzgQnT/SIJd1YDE8gAqD0pF8+fdFeZVP6uom2AB0feDW+V1ryJhSlgtoCczZm5FMzoeo0etlAsZFzckpBgbAfmAQ5X1QfECVlSSjuYftKCfMGgOYBBdXfjj1djYXNhERAsbbEHhnuoyvtUowyvX7tghzIJkllApXJzIQciwgO2LJreNjWQz03wOymHt4b54cgFTnFTkUsYf/4FtFBb+koRERgqSfbwwjiwwezMmYL5osHhpB2mmucIceL86zsYyJ+Mblb6yY8Dp7j2UMCcoF6syIB+tQ05EIZwAu/193f/8me6z4upgEGBMjB+dMxHouCJch5mY2vdOLWjXMARKQVzUJIktFaVT5IPMLGOOD9HODa6d5XVPMC12tS4wPeISxj/ouAAu6pfnI4f12/pcBf9WpgZ48xXODge3TyRIt2VPX2Az/dxwh5IDcRCD9u2yU+meFTkr4TRgxndXiN2/3qlidn4hzi1RldrIRDwwJqyHyCJxrXjDMAKnOKiZ9PxXGSVrAUlFXFxhsJykVuoWEuYBwaweJbFbh26RerXnTpS1oQBARRX69NfckGkyMQgJrVW/FB8WBhi5gtpWGLSaNJ8v4kT5ByaT3UOYrN/b95pgDEEiW8EuhOR65IDuMAuStgkhL1HwsI2ZAFT0vcHiblTFVUgNwAzY+ApBYvz/ZRYzLOJQ+V67IfbBmZ8EuQ9KEiZwnQMRhZPcfIxTooHi4YUPIGmfrNKpAhqQ9IqnuYMDy3kFhQ7DZqUOHHvwnxBC9Od+k5qNhwfuRNjJBO53/HvsST3OwnOPrJuy1i2+xBAc0P0+rg7VkY1T/GcXJBxUYU7dWaAA6xjB7O5mGmpgAH8A/u7NxmmoPCQou50yugy79FYMUxIi1dBFlzcvGnOFcuuo9BGdShR2kXuGO0SmLgY+rGwUCs3AVcuZql5bPJS7C49wxaUy+FCEvSpmtYFCs4ZOzj/wUSr/MGkaffsJVrsJ96n13dmYPPeTQiuFjju/EZ/nigTvY7Pc9KakmXHeC5KV0zHPyQITJPYZ67q2zgHljwWs9YTuVuyvH1RBY7qOaoPdnXCNkQqMz4x/PMUgArq3QJnhVqyI8keBvB20JbWgfGrFm1lmqAC7TYDFsCcET8IH7KAFlbIjmSiOJsLGsC7jDD8wK4dV7hj6OYxlrQW6P5lKgdjXG0N45SMdAsp3pfsK3otBfZwVAigTdtModjVkWXBeApABRS45CLlIPYUVi6INU8Ai4Zg2zMlnClNgO0HDOwnbhbQJGeKKUYYs9o5wcRPzlqm0+tT8RZZoylWzwaxMvMSB6S1mRDeICY5zquGaDP0YGA/p71Seo4v5hF04GwUd4yDuc7rQsIfpsFTQXCc/wpgERi6ALMlnCkuOKDC3zCfYChB2hHdhFqscMjN9SG6/+kfHVyrZKsR7CcncIQ4LNGFCAHVaEImpKwVDpINpcoTjLcfKnKd6Gq+15A5QtvEvCYFIGNFdFFTi5cRhQGIpxxYooHgsP9D6XLzd50XiQWMk1fHX3VJWETn2rh+KnhTfwdk3mVpDpsxYKYSos1PjqH5XR1C5/bcE/JgVwkTa9uaMo8o5P024JcKotd7K58pc3oprJ4JcUmVaq3QWnolBQ1SCD/JPJ5Fm5gLvAamfKgpBYChg1SIitKvIQoyByaUST0YCHaEQgcqoSPE8Y0x2EwDTlZ9YmHKMrHHQTRJGYBpgkqnXW2V1u5xMff0gBViF6aOzNftxMJimRXTzwLkKeAz305sZNawemZQKiDlxQW6UjkiThwHBUIMhYzIrXqa0Me7AFxlX+T59Dp7Y8eHpV+JeI9Dp0/UdqpmIaH7fmVtIYs3tpRDBMTupLJNdvCIFcR7aoDSVX6LEBmp9LcFyiVax5RhDeaESCGN5VgNrJ4R6bsC3PSTIk9qSiBT6ytNuwDktZKu5pbq1SCc2L2QMy39HjKoPytebv1w6fJOtHFyPphg7jhteyD3gOcT7pA1dj0kBwVkjAfyQxPEB2N/BXCxKNtsnfE+3dxJrUvl/CVkQEyv05oLTKyedmxZlDNZNrJIXJaRuVNHbyevoVmT58rCAzUSSf5oAypZhBVnTx/3MHfA4YiLAvy7uOYLjP1C1OIFEb7sO+EDdOUCOcAbN/atmDR5rXBHlvPQwJGdipKguRPXZZkm6L2oR+PMX+YVxwn3rRozvP509c4QfC5CVrZ2udmg4X/5zQOZB1PGTbR1RsbhzZQeXNRcLqThTfgMskKWS63igj0NICvSUgEqCIq92aF/Gu1siesjp5Gsr5S7AJiraBuMlIUsRSyqBLgcs9OjeE4KHFm5lvPhIQ+Z1WbBaBEzDylONCgcCULeQLez/vveczTT+PAYWMZgw9o5tmuZBgiiPXPh51q2LkoTHA2a3x1yMYe6yvHXApqgKzsNB/NgUMvWYxluJA45CV0KC8fs+5tEkOdVD1H5Xo74/9atdRAUvxkwFLTpLWSC0ZxsJdozh2IxP7qGrILZUvZLuwC+iFIOMja9dm1b5vaS63KiaHsUbVbO/tsIBcu8IMjtbBXX9i33tJ1jljTAcO8dleToQZrlrkwTQL5d1LHb4kFeyPu0eR9G3hrN8Wvy6OHLKot5u7D8wlx2ibC/b2gRoFDUkIypqvZrRmkKJXchY1tTCmA6Xxgpn7T6Xyravi4Fd5Le6b3Zn3k/3Hi3MNr499TylCgNQIMx718LRsG13QLakvmQ7qCuI4WMyBtTEig3mDnHlOu6UuCiKguMW5jI/GzHOm3LHf6np5mtU15ELn7aepHjO0SafsOYRE9T3GSRZtwFQNCXfjFZmD/x5mXpWvbKVafo3Begf+9DSqeu/EULnDFz81nSAGNZfGnCb17HBcz0u4MpTQCYJuDZ0gQyGZpnK04oMMbhGKc89iE5NnS9w6PE98XSuXII4QE4eSyTMxKwOF2xEb1+IPRmKl4mCHgFImxC6VcnCeq81GlDr3iku/7M0PVJxc6qnQghewal1YZ1Po8Ud6+omAfpGfjKc9BAaPunqqReMSU0E1upUoG5rPrsizR6BZ23eb0ui3n1kFUrVv83gGSDHicKWmNB9UCPO7T/iljWSCEsXwS7xMUh9VXn9GrzkPUrs5RKjWJAxj4zNp4pDZBCHQurotMD8slDlp1+XmKJeYHrDhLVj/R67Vzw0pPJJGyV3vO43MtodU6kfx297MXVthyRKkloX2d2jihNgAQKe3tbjJZYQomCTaM4x1ajz8M3BmP+7Wpf8A8KDPNwjD+tdP/jy8ZRoG6wPPwobvvK2FbEbdMg8zkrO4Y0wYFME/zz2zucO/q4b4klFggLZuPdR6ImUw0fY7kqpS4q3ecNWGKJC8DPQ+C89fI8/nPHJZZYNKxcyncdo0y/4RXW4PDZqPAllpgz/g9EWvyKXiNPpQAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "" + __buildAssetsURL("casa_grande_logo 1.DeSq7HUx.png");
const _imports_4 = "data:image/png;base64,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";
const _imports_5 = "" + __buildAssetsURL("Logo_Punta_Branca 1.Ck9skQgS.png");
const _imports_6 = "" + __buildAssetsURL("fala_cliente_01.DjTsLIRE.png");
const _imports_7 = "" + __buildAssetsURL("515373466_18064724948131794_2713327672872573015_n.BsTEcf0I.png");
const _imports_8 = "" + __buildAssetsURL("503942728_18061974323131794_5408323875126567480_n.CRWIMhKr.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Pense Assim — Comunicação 360°",
      description: "Comunicação 360°, branding, marketing, audiovisual e mídia para marcas que querem crescer com estratégia."
    });
    const selectedProject = ref(null);
    const sent = ref(false);
    const analysisSent = ref(false);
    const whatsapp = ref("");
    function maskPhone() {
      const digits = whatsapp.value.replace(/\D/g, "").slice(0, 11);
      whatsapp.value = digits.length > 7 ? `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}` : digits.length > 2 ? `(${digits.slice(0, 2)}) ${digits.slice(2)}` : digits;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0$1;
      const _component_CaseGrid = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_SiteFooter = __nuxt_component_3;
      const _component_ProjectModal = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SiteHeader, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hero-inner container"${_scopeId}><div class="hero-copy"${_scopeId}><span class="eyebrow"${_scopeId}>Estratégia que movimenta marcas</span><h1${_scopeId}>Comunicação <strong${_scopeId}>360°</strong></h1><p class="hero-services"${_scopeId}>Marketing <b${_scopeId}>•</b> Branding <b${_scopeId}>•</b> Audiovisual <b${_scopeId}>•</b> Mídia</p><p class="hero-description"${_scopeId}>Pensamos em estratégias, criamos campanhas, desenvolvemos conteúdos e conectamos marcas ao seu público-alvo.</p></div><form class="budget-form"${_scopeId}><div class="form-heading"${_scopeId}><span${_scopeId}>Solicite um<br${_scopeId}>orçamento</span><i${_scopeId}></i></div><label${_scopeId}><span${_scopeId}>Nome</span><input type="text" placeholder="Como podemos te chamar?" required${_scopeId}></label><label${_scopeId}><span${_scopeId}>Empresa</span><input type="text" placeholder="Qual é a sua empresa?" required${_scopeId}></label><label${_scopeId}><span${_scopeId}>WhatsApp</span><input${ssrRenderAttr("value", unref(whatsapp))} type="tel" placeholder="(00) 00000-0000" required${_scopeId}></label><button type="submit"${_scopeId}>Quero conversar <span${_scopeId}>→</span></button><p class="${ssrRenderClass([{ visible: unref(sent) }, "form-status"])}" role="status"${_scopeId}>${ssrInterpolate(unref(sent) ? "Recebemos seus dados. Em breve entraremos em contato." : "")}</p></form></div><a class="scroll-cue" href="#cases"${_scopeId}><span${_scopeId}>Role para descobrir</span><i${_scopeId}></i></a>`);
          } else {
            return [
              createVNode("div", { class: "hero-inner container" }, [
                createVNode("div", { class: "hero-copy" }, [
                  createVNode("span", { class: "eyebrow" }, "Estratégia que movimenta marcas"),
                  createVNode("h1", null, [
                    createTextVNode("Comunicação "),
                    createVNode("strong", null, "360°")
                  ]),
                  createVNode("p", { class: "hero-services" }, [
                    createTextVNode("Marketing "),
                    createVNode("b", null, "•"),
                    createTextVNode(" Branding "),
                    createVNode("b", null, "•"),
                    createTextVNode(" Audiovisual "),
                    createVNode("b", null, "•"),
                    createTextVNode(" Mídia")
                  ]),
                  createVNode("p", { class: "hero-description" }, "Pensamos em estratégias, criamos campanhas, desenvolvemos conteúdos e conectamos marcas ao seu público-alvo.")
                ]),
                createVNode("form", {
                  class: "budget-form",
                  onSubmit: withModifiers(($event) => sent.value = true, ["prevent"])
                }, [
                  createVNode("div", { class: "form-heading" }, [
                    createVNode("span", null, [
                      createTextVNode("Solicite um"),
                      createVNode("br"),
                      createTextVNode("orçamento")
                    ]),
                    createVNode("i")
                  ]),
                  createVNode("label", null, [
                    createVNode("span", null, "Nome"),
                    createVNode("input", {
                      type: "text",
                      placeholder: "Como podemos te chamar?",
                      required: ""
                    })
                  ]),
                  createVNode("label", null, [
                    createVNode("span", null, "Empresa"),
                    createVNode("input", {
                      type: "text",
                      placeholder: "Qual é a sua empresa?",
                      required: ""
                    })
                  ]),
                  createVNode("label", null, [
                    createVNode("span", null, "WhatsApp"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => isRef(whatsapp) ? whatsapp.value = $event : null,
                      type: "tel",
                      placeholder: "(00) 00000-0000",
                      required: "",
                      onInput: maskPhone
                    }, null, 40, ["onUpdate:modelValue"]), [
                      [vModelText, unref(whatsapp)]
                    ])
                  ]),
                  createVNode("button", { type: "submit" }, [
                    createTextVNode("Quero conversar "),
                    createVNode("span", null, "→")
                  ]),
                  createVNode("p", {
                    class: ["form-status", { visible: unref(sent) }],
                    role: "status"
                  }, toDisplayString(unref(sent) ? "Recebemos seus dados. Em breve entraremos em contato." : ""), 3)
                ], 40, ["onSubmit"])
              ]),
              createVNode("a", {
                class: "scroll-cue",
                href: "#cases"
              }, [
                createVNode("span", null, "Role para descobrir"),
                createVNode("i")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main><section id="cases" class="cases section"><div class="cases-title">Conheça alguns de nossos cases</div>`);
      _push(ssrRenderComponent(_component_CaseGrid, {
        onOpen: ($event) => selectedProject.value = $event
      }, null, _parent));
      _push(`<div class="center-link"><a href="#contato">Ver todos <span>◆</span></a></div></section><section id="sobre" class="about"><div class="about-inner container"><span class="section-index section-index--light">02 / Sobre</span><div><h2>Somos especialistas<br>em <em>comunicação.</em></h2><p>Atuamos de forma integrada. Unimos estratégias de marketing digital com expertise em publicidade, design e inovação em produção de vídeos e fotografia. Sua comunicação inteira, pensando junto.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "outline-button",
        to: "/sobre"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Conheça a Pense <span${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode("Conheça a Pense "),
              createVNode("span", null, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="showreel" aria-label="Showreel Pense Assim"><div class="showreel-content"><span>Ideias precisam<br>ser <em>sentidas.</em></span><button type="button" class="play-button" aria-label="Reproduzir showreel"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="39"></circle><path d="m33 27 22 13-22 13Z"></path></svg></button></div></section><section id="solucoes" class="solutions section"><div class="container solutions-layout"><div class="solutions-intro"><span class="section-index">03 / Soluções</span><h2>Estratégia sem<br>execução é só<br><em>uma boa ideia.</em></h2></div><div class="solution-list"><!--[-->`);
      ssrRenderList([
        ["Branding", "Posicionamento, identidade visual e narrativas que transformam percepção em valor."],
        ["Marketing digital", "Conteúdo, mídia e performance conectados para gerar atenção e conversão."],
        ["Audiovisual", "Filmes, campanhas e fotografia com direção criativa."],
        ["Mídia & performance", "Planejamento orientado por dados e oportunidades reais."]
      ], (item, index) => {
        _push(`<article class="${ssrRenderClass([{ open: index === 0 }, "solution-item"])}"><div class="solution-static"><span>0${ssrInterpolate(index + 1)}</span><strong>${ssrInterpolate(item[0])}</strong></div><div class="solution-detail"><p>${ssrInterpolate(item[1])}</p></div></article>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "solutions-more",
        to: "/solucoes"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver todas as soluções →`);
          } else {
            return [
              createTextVNode("Ver todas as soluções →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section id="contato" class="analysis"><div class="container analysis-layout"><div class="analysis-copy"><span class="section-index section-index--light">04 / Vamos conversar</span><h2>Solicite uma análise<br>de sua <em>comunicação.</em></h2><p>Descubra em que caminho sua empresa está. Realizamos um diagnóstico inicial, sem compromisso.</p></div><form class="analysis-form"><label><span>Nome</span><input required></label><label><span>E-mail</span><input type="email" required></label><label class="full"><span>Mensagem</span><textarea rows="3" required></textarea></label><button type="submit">Solicitar análise <span>→</span></button><p class="${ssrRenderClass([{ visible: unref(analysisSent) }, "form-status"])}">${ssrInterpolate(unref(analysisSent) ? "Solicitação recebida. Em breve entraremos em contato." : "")}</p></form></div></section><section class="clients" aria-label="Alguns de nossos clientes"><div class="client-strip"><button type="button" aria-label="Clientes anteriores">‹</button><div class="logo-row"><img${ssrRenderAttr("src", _imports_0)} alt="Silomax"><img${ssrRenderAttr("src", _imports_1)} alt="Intermidia"><img${ssrRenderAttr("src", _imports_2)} alt="Café Jandaia"><img${ssrRenderAttr("src", _imports_3)} alt="Casa Grande"><img${ssrRenderAttr("src", _imports_4)} alt="Escritório Ipiranga"><img${ssrRenderAttr("src", _imports_5)} alt="Punta del Este"></div><button type="button" aria-label="Próximos clientes">›</button></div></section><section id="insights" class="testimonials"><div class="testimonial-grid"><img${ssrRenderAttr("src", _imports_6)} alt="Depoimento de Wesley Carneiro"><img${ssrRenderAttr("src", _imports_7)} alt="Depoimento de Gabriela Sanches"><img${ssrRenderAttr("src", _imports_8)} alt="Depoimento de André Garcia"></div></section></main>`);
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_ProjectModal, {
        project: unref(selectedProject),
        onClose: ($event) => selectedProject.value = null
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-D22rWAOI.js.map
