<template>
  <logo
    :configurator-version="CONFIGURATOR.version"
    :firmware-version="FC.CONFIG.flightControllerVersion"
    :firmware-id="FC.CONFIG.flightControllerIdentifier"
    :hardware-id="FC.CONFIG.hardwareName"
  ></logo>
</template>

<script>
import Logo from "./logo.vue";
export default {
  components: {
    Logo,
  },
  props: ["CONFIGURATOR", "FC"],
};
</script>
