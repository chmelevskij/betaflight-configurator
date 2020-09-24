import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";
import VueI18n from "../../node_modules/vue-i18n/dist/vue-i18n.esm.browser.js";

Vue.use(VueI18n);

const vueI18n = new VueI18n(i18next);

i18next.on("initialized", () => {
    vueI18n.setLocaleMessage("en", i18next.getDataByLanguage("en").messages);
});

i18next.on("languageChanged", (lang) => {
    vueI18n.setLocaleMessage(lang, i18next.getDataByLanguage(lang).messages);
    vueI18n.locale = lang;
    document.querySelector("html").setAttribute("lang", lang);
});

export default vueI18n;
