import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, useSSRContext, nextTick } from "vue";
import { d as defineStore, _ as _export_sfc } from "../server.mjs";
import Draggable from "vuedraggable";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttrs } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
const useTablesStore = defineStore("tableStore", {
  state: () => ({
    tables: [
      {
        id: Date.now(),
        name: "On hold",
        color: "bg-orange-600",
        isShowingForm: false,
        tasks: []
      },
      {
        id: Date.now(),
        name: "In progress",
        color: "bg-blue-800",
        isShowingForm: false,
        tasks: []
      },
      {
        id: Date.now(),
        name: "Needs review",
        color: "bg-yellow-600",
        isShowingForm: false,
        tasks: []
      },
      {
        id: Date.now(),
        name: "Approved",
        color: "bg-green-800",
        isShowingForm: false,
        tasks: []
      }
    ]
  }),
  actions: {
    toggleFormState(tableId) {
      const table = this.tables.find((table2) => table2.id === tableId);
      if (!table)
        return;
      if (table.isShowingForm === void 0) {
        this.$patch(() => {
          table.isShowingForm = false;
        });
      } else {
        this.$patch(() => {
          table.isShowingForm = !table.isShowingForm;
        });
      }
    },
    onSubmit(tableId, task) {
      const tableIndex = this.tables.findIndex((table) => table.id === tableId);
      if (tableIndex === -1)
        return;
      this.tables[tableIndex].tasks.push(task);
    },
    onDeleteTask(tableId, taskId) {
      const tableIndex = this.tables.findIndex((table) => table.id === tableId);
      if (tableIndex === -1)
        return;
      const taskIndex = this.tables[tableIndex].tasks.findIndex((task) => task.id === taskId);
      if (taskIndex === -1)
        return;
      this.tables[tableIndex].tasks.splice(taskIndex, 1);
    },
    updateTasks(tableId, tasks) {
      const tableIndex = this.tables.findIndex((table) => table.id === tableId);
      if (tableIndex === -1)
        return;
      this.tables[tableIndex].tasks = tasks;
      localStorage.setItem("tables", JSON.stringify(this.tables));
    }
  }
});
const _sfc_main$3 = defineComponent({
  components: {
    Draggable
  },
  name: "Task",
  props: {
    table: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const tableStore = useTablesStore();
    const tasks = ref(props.table.tasks);
    const deleteTask = (tableId, taskId) => {
      console.log(tableStore);
      tableStore.onDeleteTask(tableId, taskId);
      localStorage.setItem("tables", JSON.stringify(tableStore.tables));
    };
    const onChange = () => {
      tableStore.updateTasks(props.table.id, tasks.value);
    };
    return { table: props.table, deleteTask, tasks, onChange };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Draggable = resolveComponent("Draggable");
  _push(ssrRenderComponent(_component_Draggable, mergeProps({
    modelValue: _ctx.tasks,
    "onUpdate:modelValue": ($event) => _ctx.tasks = $event,
    group: "tasks",
    "item-key": "id",
    class: "space-y-2 drag",
    tag: "ul",
    "drag-class": "drag-class",
    "ghost-class": "ghost-class",
    onChange: _ctx.onChange
  }, _attrs), {
    item: withCtx(({ element }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="h-32 bg-[#262626] cursor-pointer p-2 text-white rounded-md hover:bg-[#2F2F2F] transition ease-in-out duration-100" data-v-d779935a${_scopeId}><div class="flex justify-between items-start" data-v-d779935a${_scopeId}><span data-v-d779935a${_scopeId}> id: ${ssrInterpolate(element.id)}</span><button class="p-1 hover:bg-red-500/50 rounded-md transition ease-in-out duration-300" data-v-d779935a${_scopeId}><svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="red" data-v-d779935a${_scopeId}><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" data-v-d779935a${_scopeId}></path></svg></button></div><div class="mt-3" data-v-d779935a${_scopeId}>${ssrInterpolate(element.content)}</div></li>`);
      } else {
        return [
          createVNode("li", { class: "h-32 bg-[#262626] cursor-pointer p-2 text-white rounded-md hover:bg-[#2F2F2F] transition ease-in-out duration-100" }, [
            createVNode("div", { class: "flex justify-between items-start" }, [
              createVNode("span", null, " id: " + toDisplayString(element.id), 1),
              createVNode("button", {
                onClick: ($event) => _ctx.deleteTask(_ctx.table.id, element.id),
                class: "p-1 hover:bg-red-500/50 rounded-md transition ease-in-out duration-300"
              }, [
                (openBlock(), createBlock("svg", {
                  class: "w-4",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: "{1.5}",
                  stroke: "red"
                }, [
                  createVNode("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  })
                ]))
              ], 8, ["onClick"])
            ]),
            createVNode("div", { class: "mt-3" }, toDisplayString(element.content), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-d779935a"]]);
const _sfc_main$2 = defineComponent({
  name: "Tables",
  components: {
    Tasks: __nuxt_component_0$1
  },
  data() {
    return {
      content: "mario"
    };
  },
  setup() {
    const tableStore = useTablesStore();
    const textareaNameRef = ref();
    const showForm = async (tableId) => {
      tableStore.toggleFormState(tableId);
      await nextTick();
      textareaNameRef.value[0].focus();
    };
    const onSubmit = async (tableId, content) => {
      const table = tableStore.tables.find((table2) => table2.id === tableId);
      if (!table)
        return;
      const newTask = {
        id: Date.now(),
        content
      };
      tableStore.onSubmit(tableId, newTask);
      tableStore.toggleFormState(tableId);
      localStorage.setItem("tables", JSON.stringify(tableStore.tables));
    };
    return { tableStore, textareaNameRef, showForm, onSubmit };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Tasks = __nuxt_component_0$1;
  _push(`<!--[-->`);
  ssrRenderList(_ctx.tableStore.tables, (table) => {
    _push(`<article class="w-72 flex flex-col rounded-md gap-1"><div class="${ssrRenderClass(table.color + " px-3 py-2 rounded-md")}"><h3 class="text-sm font-semibold text-white uppercase">${ssrInterpolate(table.name)}(${ssrInterpolate(table.tasks.length)})</h3></div>`);
    _push(ssrRenderComponent(_component_Tasks, { table }, null, _parent));
    if (table.isShowingForm) {
      _push(`<form class="p-3 bg-[#262626] rounded-md"><textarea class="block text-white w-full pt-2 pl-2 text-sm rounded-md bg-[#191919] border-gray-300 shadow-sm focus:border-gray-300" rows="4" placeholder="Enter something...">${ssrInterpolate(_ctx.content)}</textarea><div class="mt-3 flex justify-between"><button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-blue-800 hover:bg-blue-700 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-100"> Add Task </button><button type="button" class="px-4 py-2 text-sm font-medium text-white bg-red-800 hover:bg-red-700 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-100"> Cancel </button></div></form>`);
    } else {
      _push(`<!---->`);
    }
    if (!table.isShowingForm) {
      _push(`<button class="text-[#555555] w-full p-2 hover:bg-[#262626] text-left rounded-md transition ease-in-out duration-300 cursor-pointer"><span> + Add new Card </span></button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</article>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tables.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Table = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({
  name: "Main",
  components: {
    Table
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Table = resolveComponent("Table");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1" }, _attrs))}><div class="flex flex-col h-full overflow-x-scroll"><div class="flex-1 px-4 mx-auto my-14"><div class="inline-flex h-full gap-2">`);
  _push(ssrRenderComponent(_component_Table, null, null, _parent));
  _push(`</div></div></div></main>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  middleware: "auth",
  components: {
    Main: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Main = __nuxt_component_0;
  _push(ssrRenderComponent(_component_Main, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-DDd9UT-4.js.map
