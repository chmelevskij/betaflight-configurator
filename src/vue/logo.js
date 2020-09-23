import Vue from '../../node_modules/vue/dist/vue.esm.browser.js';

Vue.component('logo', {
    props: ['versionConfigurator', 'firmwareVersion', 'firmwareId', 'hardwareId' ],
    template: `
        <div class="logo_text">
            <span>
                {{ $t("versionLabelConfigurator.message") }}: {{ versionConfigurator }}
            </span>
            <br />
            <span v-if="firmwareVersion && firmwareId">
                {{ $t("versionLabelFirmware.message") }}: {{ firmwareVersion }} {{ firmwareId }}
            </span>
            <br />
            <span v-if="hardwareId">
                {{ $t("versionLabelTarget.message") }}: {{ hardwareId }}
            </span>
        </div>
    `,
})