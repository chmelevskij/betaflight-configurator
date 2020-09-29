<template>
  <span>
    <span>{{ $t(message + ".message") | stripEnd }}</span>
    <span>{{ value }}</span>
    <span v-if="unit">{{ unit }}</span>
  </span>
</template>
<script>
export default {
  props: ["message", "value", "unit"],
};
</script>
