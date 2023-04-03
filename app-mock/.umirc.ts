import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  proxy:{
    '/mockapi/':{
      target:'http://localhost:10001',
      changeOrigin:true,
    }
  }
});
