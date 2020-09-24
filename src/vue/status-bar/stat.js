import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";

Vue.component("stat", {
    props: ["message", "value", "unit"],
    template: `
        <div>
            <span>{{ $t(message + ".message") }}</span> <span>{{ value }}</span><span v-if="unit">{{ unit }}</span>
        </div>
    `,
});
