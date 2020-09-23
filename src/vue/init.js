import "./logo.js";
import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
import VueI18n from "../../node_modules/vue-i18n/dist/vue-i18n.esm.browser.js";

Vue.use(VueI18n);

const vueI18n = new VueI18n(i18next);
i18next.on("initialized", () => {
    vueI18n.setLocaleMessage("en", i18next.getDataByLanguage("en").messages);
});

const vm = new Vue({
    el: "#my-logo",
    i18n: vueI18n,
    data: {
        CONFIGURATOR: CONFIGURATOR,
        firmwareVersion: '',
        firmwareId: '',
        hardwareId: '',
    },
});

window.vm = vm;
