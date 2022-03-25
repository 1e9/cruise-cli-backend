const { defineConfig } = require('@midwayjs/hooks');

module.exports = defineConfig({
  source: './src',
  routes: [
    {
      baseDir: 'apis',
      basePath: '/api',
    },
  ],
  build: {
    outDir: './dist',
  },
});
