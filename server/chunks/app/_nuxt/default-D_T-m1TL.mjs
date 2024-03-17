import { _ as __nuxt_component_0$1 } from './nuxt-link-CgIPAz5u.mjs';
import { defineComponent, ref, computed, useSSRContext, unref, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { u as useAuthStore, a as useLoaderStore } from './Loader-DhsX2-kj.mjs';
import { useRouter, useRoute } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';

const _sfc_main$1 = defineComponent({
  name: "Header",
  setup() {
    const open = ref(false);
    const authStore = useAuthStore();
    const router = useRouter();
    const route = useRoute();
    const onToggleBurger = () => {
      open.value = !open.value;
    };
    const onLogout = () => {
      authStore.logout();
      router.push("/login");
    };
    const linkInfo = computed(() => {
      if (route.path === "/login") {
        return { path: "/register", text: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" };
      } else if (route.path === "/register") {
        return { path: "/login", text: "\u0412\u0445\u043E\u0434" };
      } else {
        return { path: "/login", text: "\u0412\u044B\u0445\u043E\u0434", logout: true };
      }
    });
    return { open, onToggleBurger, onLogout, linkInfo };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "shrink-0 flex justify-between px-4 py-3 items-center bg-[#262626]" }, _attrs))}><nav class="w-full justify-between items-center md:flex"><div class="flex justify-between items-center"><h1 class="font-bold py-4 text-white text-3xl"><a href="/" class="hover:text-gray-700 cursor-pointer">KanBoard</a></h1><button class="px-4 cursor-pointer md:hidden" id="burger"><svg class="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="#FFF" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"></path></svg></button></div><ul class="${ssrRenderClass([[_ctx.open ? "h-10" : "scale-y-0  h-0"], "flex justify-end items-center transition-all ease-in-out duration-200 md:scale-y-100"])}" id="menu"><li class="px-4">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.linkInfo.path,
    class: "font-medium text-white text-2xl",
    onClick: ($event) => _ctx.linkInfo.logout ? _ctx.onLogout() : null
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.linkInfo.text)}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.linkInfo.text), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const loaderStore = useLoaderStore();
    useAuthStore();
    useRouter();
    loaderStore.toggleIsLoading(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(loaderStore).isLoading) {
        _push(`<div class="flex justify-center items-center text-9xl text-white min-h-screen">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</div>`);
      } else {
        _push(`<div class="flex flex-col min-h-screen bg-[#191919] select-none">`);
        _push(ssrRenderComponent(_component_Header, null, null, _parent));
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-D_T-m1TL.mjs.map
