<template>
  <battery-legend
    :voltage="FC.ANALOG.voltage"
    :vbatmaxcellvoltage="FC.BATTERY_CONFIG.vbatmaxcellvoltage"
  ></battery-legend>
</template>

<script>
import BatteryLegend from "./battery-legend.vue";
export default {
  components: {
    BatteryLegend,
  },
  props: ["CONFIGURATOR", "FC", "MSP", "PortUsage"],
};
</script>
