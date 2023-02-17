import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'asap-ui',
    nav: [],
    rules: [
      { maxWidth: 375, mode: 'vw', options: [100, 750] },
      { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
    ],
  },
});
