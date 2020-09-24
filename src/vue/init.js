import "./logo.js";
import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
import vueI18n from "./i18n.js";

// Most of the global objects can go here at first.
// It's a bit of overkill for simple components,
// but these instance would eventually have more children
// which would find the use for those extra properties.
const betaflightModel = {
    CONFIGURATOR,
    FC,
};

const logoVersionVM = new Vue({
    el: "#logo",
    i18n: vueI18n,
    data: betaflightModel,
});

const logoVersionTabsVM = new Vue({
    el: "#tab_logoversion",
    i18n: vueI18n,
    data: betaflightModel,
});

window.vm = betaflightModel;