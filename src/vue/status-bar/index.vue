<template>
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
</template>
<script>
import StatusBarVersion from "./status-bar-version.vue";
import Stat from "./stat.vue";
import PortUtilization from "./port-utilization.vue";

export default {
  props: {
    portUsageDown: {
      type: Number,
    },
    portUsageUp: {
      type: Number,
    },
    packetError: {
      type: Number,
    },
    i2cError: {
      type: Number,
    },
    cycleTime: {
      type: Number,
    },
    cpuLoad: {
      type: Number,
    },

    configuratorVersion: {
      type: String,
    },
    firmwareVersion: {
      type: String,
    },
    firmwareId: {
      type: String,
    },
    hardwareId: {
      type: String,
    },
    gitChangesetId: {
      type: String,
    },
  },
  components: {
    PortUtilization,
    Stat,
    StatusBarVersion,
  },
};
</script>
