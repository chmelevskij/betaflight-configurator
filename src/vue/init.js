import "./logo.js";
import "./status-bar/status-bar-version.js";
import "./status-bar/stat.js";
import "./status-bar/port-utilization.js";
import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
import vueI18n from "./vueI18n.js";

// Most of the global objects can go here at first.
// It's a bit of overkill for simple components,
// but these instance would eventually have more children
// which would find the use for those extra properties.
const betaflightModel = {
    CONFIGURATOR,
    FC,
    MSP,
    PortUsage,
};

const statusBar = new Vue({
    el: "#main-wrapper",
    i18n: vueI18n,
    data: betaflightModel,
});

// Not strictly necessary here, but if needed
// it's always possible to modify this model in
// jquery land to trigger updates in vue
window.vm = betaflightModel;
