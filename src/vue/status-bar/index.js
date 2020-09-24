import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
import StatusBarVersion from "./status-bar-version.js";
import Stat from "./stat.js";
import PortUtilization from "./port-utilization.js";

Vue.component("status-bar", {
    props: [
        "portUsageDown",
        "portUsageUp",
        "packetError",
        "i2cError",
        "cycleTime",
        "cpuLoad",

        "configuratorVersion",
        "firmwareVersion",
        "firmwareId",
        "hardwareId",
        "gitChangesetId",
    ],
    components: {
        "port-utilization": PortUtilization,
        stat: Stat,
        "status-bar-version": StatusBarVersion,
    },
    // a bit of a hack here to get around the current translations.
    // vue i18n provides slightly different api for this. But
    // it's also possible to provide custom formatter
    filters: {
        stripEnd(value) {
            return value.replace(/\$1%/, "");
        },
    },
    template: `
        <div id="status-bar">
            <port-utilization
                :usage-down="portUsageDown"
                :usage-up="portUsageUp"
            ></port-utilization>
            <stat message="statusbar_packet_error" :value="packetError"></stat>
            <stat message="statusbar_i2c_error" :value="i2cError"></stat>
            <stat message="statusbar_cycle_time" :value="cycleTime"></stat>
            <stat message="statusbar_cpu_load" :value="cpuLoad" unit="%"></stat>
            <status-bar-version
                :configurator-version="configuratorVersion"
                :firmware-version="firmwareVersion"
                :firmware-id="firmwareId"
                :hardware-id="hardwareId"
                :git-changeset-id="gitChangesetId"
            ></status-bar-version>
        </div>
    `,
});
