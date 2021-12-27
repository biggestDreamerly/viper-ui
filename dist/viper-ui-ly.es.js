import { openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {
  props: {
    type: String
  },
  setup(__props) {
    const props = __props;
    const getType = () => {
      var _a;
      console.log(props.type, "\u7C7B\u578B");
      return (_a = props == null ? void 0 : props.type) != null ? _a : "defalut";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["my-button", getType()]),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
};
var Button$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9bf61cbe"]]);
const ButtonPlugin$1 = {
  install(app) {
    app.component("v-button", Button$1);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _sfc_main$2 = {};
const _hoisted_1$1 = { class: "my-foo" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, " \u6211\u662F\u6D4B\u8BD5\u7EC4\u4EF6\u7EC4\u4EF6 ");
}
var Foo$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-3766bb62"]]);
const FooPlugin$1 = {
  install(app) {
    app.component("my-foo", Foo$1);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$1 = {
  props: {
    type: String
  },
  setup(__props) {
    const props = __props;
    const getType = () => {
      var _a;
      console.log(props.type, "\u7C7B\u578B");
      return (_a = props == null ? void 0 : props.type) != null ? _a : "defalut";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["my-button", getType()]),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
};
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-638e8dc1"]]);
const ButtonPlugin = {
  install(app) {
    app.component("v-button", Button);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {};
const _hoisted_1 = { class: "my-foo" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, " \u6211\u662F\u6D4B\u8BD5\u7EC4\u4EF6\u7EC4\u4EF6 ");
}
var Foo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-24c3f342"]]);
const FooPlugin = {
  install(app) {
    app.component("my-foo", Foo);
  }
};
const MYKitPlugin = {
  install(app) {
    var _a, _b;
    (_a = ButtonPlugin$1.install) == null ? void 0 : _a.call(ButtonPlugin$1, app);
    (_b = FooPlugin$1.install) == null ? void 0 : _b.call(FooPlugin$1, app);
  }
};
export { Button, ButtonPlugin, Foo, FooPlugin, MYKitPlugin as default };
