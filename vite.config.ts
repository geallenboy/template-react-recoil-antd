import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import path from 'path';
import { type ConfigEnv, type UserConfig, loadEnv } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import { viteMockServe } from 'vite-plugin-mock';
import svgrPlugin from 'vite-plugin-svgr';
import WindiCSS from 'vite-plugin-windicss';

const CWD = process.cwd();

export default ({ command, mode }: ConfigEnv): UserConfig => {
  // 环境变量
  const { VITE_BASE_URL, VITE_DROP_CONSOLE } = loadEnv(mode, CWD);

  const isBuild = command === 'build';

  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    },
    server: {
      port: 8889,
      proxy: {
        '/api': {
          target: `http://175.24.200.3:7001`,
          // changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: { '@primary-color': '#13c2c2' }
        }
        // ....
      }
    },
    plugins: [
      WindiCSS(),
      legacy({
        targets: ['ie >= 11']
        // additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      react(),
      viteMockServe({
        ignore: /^_/,
        mockPath: 'mock',
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        logger: true,
        injectCode: `
          import { setupProdMockServer } from '../mock/_createProductionServer';
          setupProdMockServer();
          `
      }),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: name => `antd/es/${name}/style`
          }
        ]
      }),
      svgrPlugin({
        svgrOptions: {
          icon: true
          // ...svgr options (https://react-svgr.com/docs/options/)
        }
      })
    ],
    build: {
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: !!VITE_DROP_CONSOLE
        }
      }
    }
  };
};
