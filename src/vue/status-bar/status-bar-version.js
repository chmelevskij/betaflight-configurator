import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";

Vue.component("status-bar-version", {
    props: [
        "configuratorVersion",
        "firmwareVersion",
        "firmwareId",
        "hardwareId",
        "gitChangesetId",
    ],
    template: `
        <div class="version">
            {{ $t("versionLabelConfigurator.message") }}: {{ configuratorVersion }}
            <span v-if="firmwareVersion && firmwareId">
                , {{ $t("versionLabelFirmware.message") }}: {{ firmwareVersion }} {{ firmwareId }}
            </span>
            <span v-if="hardwareId">
                , {{ $t("versionLabelTarget.message") }}: {{ hardwareId }}
            </span>
            ({{ gitChangesetId }})
        </div>
    `,
});
