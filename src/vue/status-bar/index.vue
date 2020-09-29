<template>
  <status-bar
    :port-usage-down="PortUsage.port_usage_down"
    :port-usage-up="PortUsage.port_usage_up"
    :packet-error="MSP.packet_error"
    :i2c-error="FC.CONFIG.i2cError"
    :cycle-time="FC.CONFIG.cycleTime"
    :cpu-load="FC.CONFIG.cpuload"
    :configurator-version="CONFIGURATOR.version"
    :firmware-version="FC.CONFIG.flightControllerVersion"
    :firmware-id="FC.CONFIG.flightControllerIdentifier"
    :hardware-id="FC.CONFIG.hardwareName"
    :git-changeset-id="CONFIGURATOR.gitChangesetId"
  ></status-bar>
</template>

<script>
import StatusBar from "./status-bar.vue";
export default {
  components: {
    StatusBar,
  },
  props: ["CONFIGURATOR", "FC", "MSP", "PortUsage"],
};
</script>
