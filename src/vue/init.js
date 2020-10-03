import Vue from "vue";
import vueI18n from "./vueI18n.js";
import BatteryLegend from "./quad-status/battery-legend.vue";
import Logo from "./logo/index.vue";
import StatusBar from "./status-bar/index.vue";

// a bit of a hack here to get around the current translations.
// vue i18n provides slightly different api for this. But
// it's also possible to provide custom formatter
Vue.filter(
    "stripEnd",
    (value) => value.replace(/\$1%/, "")
);

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

new Vue({
    i18n: vueI18n,
    data: betaflightModel,
    components: {
        BatteryLegend,
        Logo,
        StatusBar,
    },
    el: '#main-wrapper'
})

// Not strictly necessary here, but if needed
// it's always possible to modify this model in
// jquery land to trigger updates in vue
window.vm = betaflightModel;
