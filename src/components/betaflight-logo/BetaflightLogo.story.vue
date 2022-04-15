<script>
export const __pageMeta = {
  title: 'BetaflightLogo',
  description: 'Main logo in nav',
};
</script>

<script setup >
import Logo from './BetaflightLogo.vue';
import {
  ControlsAddon,
  EventsAddon,
  eventCallback,
} from '@vitebook/vue/addons';
import { Variant } from '@vitebook/vue';


</script>

<template>
  <Variant name="Default" description="The default button.">
    <Logo configuratorVersion="x.x.x" />
  </Variant>
</template>