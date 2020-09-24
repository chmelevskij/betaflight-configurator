import "./logo.js";
import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
import vueI18n from "./i18n.js";

const logoModel = {
    CONFIGURATOR: CONFIGURATOR,
    firmwareVersion: "",
    firmwareId: "",
    hardwareId: "",
};

const logoVersionVM = new Vue({
    el: "#logo",
    i18n: vueI18n,
    data: logoModel,
});

const logoVersionTabsVM = new Vue({
    el: "#tab_logoversion",
    i18n: vueI18n,
    data: logoModel,
});

window.vm = logoModel;
