import vue from '@vitejs/plugin-vue';
import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { vueMarkdownPlugin } from '@vitebook/markdown-vue/node';
import { vuePlugin } from '@vitebook/vue/node';
import { defaultThemePlugin } from '@vitebook/theme-default/node';
import { shikiMarkdownPlugin } from '@vitebook/markdown-shiki/node';

export default defineConfig({
  // srcDir: 'src/components',
  include: ['src/**/*.md', 'src/**/*.story.vue'],
  plugins: [
    shikiMarkdownPlugin(),
    vueMarkdownPlugin(),
    vuePlugin({
      appFile: 'App.vue',
    }),
    clientPlugin(),
    defaultThemePlugin(),
    vue(),
  ],
  site: {
    title: 'betaflight-configurator',
    description: 'Betaflight configurator components',
    /** @type {(import('@vitebook/theme-default/node').DefaultThemeConfig} */
    theme: {
      sidebar: {
        style: 'docs',
        categories: true,
      },
    },
  },
});
