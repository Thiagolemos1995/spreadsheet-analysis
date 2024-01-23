import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt3-vuex-module'],
  workspaceDir: '../',
  srcDir: 'src',
  buildDir: '../dist/analyzer-ui/.nuxt',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    host: 'localhost',
    port: 4200,
  },
  typescript: {
    typeCheck: true,
    tsConfig: {
      extends: './tsconfig.app.json',
    },
  },
  imports: {
    autoImport: false,
  },

  vite: {
    plugins: [nxViteTsPaths()],
  },
  nitro: {
    output: {
      dir: '../dist/analyzer-ui/.output',
    },
  },
});
