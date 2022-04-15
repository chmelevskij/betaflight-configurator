<script>
import VueI18Next from "@panter/vue-i18next";
import i18next from "i18next";

export async function configureApp(app) {
    i18next.init({
        lng: "de",
        resources: {},
    });

    app.use(VueI18Next);
    const i18n = new VueI18Next(i18next);
    app.i18n = i18n;
}
</script>

<script setup>
const { component } = defineProps({
    component: Object,
});
</script>

<template>
    <component :is="component" />
</template>
