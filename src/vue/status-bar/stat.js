import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";

Vue.component("stat", {
    props: ["message", "value", "unit"],
    // a bit of a hack here to get around the current translations.
    // vue i18n provides slightly different api for this. But
    // it's also possible to provide custom formatter
    filters: {
        stripEnd(value) {
            return value.replace(/\$1%/, "");
        },
    },
    template: `
        <div>
            <span>{{ $t(message + ".message") | stripEnd }}</span>
            <span>{{ value }}</span>
            <span v-if="unit">{{ unit }}</span>
        </div>
    `,
});
