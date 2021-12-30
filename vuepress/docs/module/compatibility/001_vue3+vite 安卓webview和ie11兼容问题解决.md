# vue3+vite 安卓webview和ie11兼容问题解决

### 解决方法
- 使用 @vitejs/plugin-legacy 包来解决， 此插件是vite官方兼容常规浏览器的一个插件

### 安装
```js
npm install @vitejs/plugin-legacy -D
```
### 使用

```js
// 在vite.config.ts 文件中引用
import legacyPlugin from '@vitejs/plugin-legacy';

export default defineConfig(({ command, mode }) =>{
  return {
    plugins: [
      vue(),
      legacyPlugin({
        targets: [ // 指定兼容版本
          'Android > 39',
          'Chrome >= 60',
          'Safari >= 10.1',
          'iOS >= 10.3',
          'Firefox >= 54',
          'Edge >= 15',
        ],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
      }),
      // // 或者
      // legacyPlugin({
      //   polyfills: ['es.promise.finally', 'es/map', 'es/set'],
      //   modernPolyfills: ['es.promise.finally']
      // })
    ],
  }
});

```

### 注意
ts环境中安装插件时可能安装完成后仍然报错，找不到这个包文件。建议使用删除 node_modules 包，多安装几次。

