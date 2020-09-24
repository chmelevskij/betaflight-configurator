import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";

Vue.component("port-utilization", {
    props: ["usageDown", "usageUp"],
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
            <span >{{ $t("statusbar_port_utilization.message") }}</span>
            <stat message="statusbar_usage_download" :value="usageDown" unit="%"></stat>
            <stat message="statusbar_usage_upload" :value="usageUp" unit="%"></stat>
        </div>
    `,
});
