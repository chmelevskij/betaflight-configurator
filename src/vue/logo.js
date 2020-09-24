import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";

// components accept primitive values, the parent Vue instance will split them up accordingly.
Vue.component("logo", {
    props: [
        "configuratorVersion",
        "firmwareVersion",
        "firmwareId",
        "hardwareId",
    ],
    template: `
        <div id="logo">
            <div class="logo_text">
                <span>
                    {{ $t("versionLabelConfigurator.message") }}: {{ configuratorVersion }}
                    <br />
                    <span v-if="firmwareVersion && firmwareId">
                        {{ $t("versionLabelFirmware.message") }}: {{ firmwareVersion }} {{ firmwareId }}
                    </span>
                    <br />
                    <span v-if="hardwareId">
                        {{ $t("versionLabelTarget.message") }}: {{ hardwareId }}
                    </span>
                </span>
            </div>
        </div>
    `,
});
