<template>
  <div id="logo">
    <div class="logo_text">
      <span>
        {{ $t("versionLabelConfigurator.message") }}: {{ configuratorVersion }}
        <br />
        <span v-if="firmwareVersion && firmwareId">
          {{ $t("versionLabelFirmware.message") }}: {{ firmwareVersion }}
          {{ firmwareId }}
        </span>
        <br />
        <span v-if="hardwareId">
          {{ $t("versionLabelTarget.message") }}: {{ hardwareId }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    configuratorVersion: {
      type: String,
      required: true,
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
  },
};
</script>
