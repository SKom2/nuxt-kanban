import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { useRouter } from "vue-router";
import { u as useAuthStore, a as useLoaderStore } from "./Loader-DhsX2-kj.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
const _sfc_main = defineComponent({
  name: "login",
  setup() {
    const username = ref("");
    const password = ref("");
    const router = useRouter();
    const authStore = useAuthStore();
    const loaderStore = useLoaderStore();
    const onSubmit = async () => {
      loaderStore.toggleIsLoading(true);
      const response = await authStore.authenticateUser(username.value, password.value);
      loaderStore.toggleIsLoading(false);
      if (!response)
        return;
      router.push("/");
    };
    return {
      username,
      password,
      onSubmit,
      authStore
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-12 text-white mx-auto w-4/5 2xl:w-2/4 mt-32" }, _attrs))}><div class="flex flex-col gap-6"><label class="flex flex-col gap-2"><span class="font-medium text-2xl"> User name: </span><input${ssrRenderAttr("value", _ctx.username)} class="border text-xl md:text-3xl bg-[#262626] border-gray-900 h-20 pl-2 rounded-2xl" type="text" placeholder="User name" required autocomplete="username"></label><label class="flex flex-col gap-2"><span class="font-medium text-2xl"> Password: </span><input${ssrRenderAttr("value", _ctx.password)} class="border text-xl md:text-3xl bg-[#262626] border-gray-900 h-20 pl-2 rounded-2xl" type="password" placeholder="********" required autocomplete="current-password"></label></div><button type="submit" class="mx-auto px-4 py-2 h-16 text-2xl font-medium text-white bg-blue-800 w-full hover:bg-blue-700 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-100"> Login </button>`);
  if (_ctx.authStore.errorMessage) {
    _push(`<div class="text-red-500">${ssrInterpolate(_ctx.authStore.errorMessage)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</form>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  login as default
};
//# sourceMappingURL=login-DN_B5GBy.js.map
