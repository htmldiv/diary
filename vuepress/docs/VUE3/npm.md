# npm 相关问题
### 一. npm安装插件
1. -g 表示全局安装 g是global的缩写。通常全局安装的插件都是放在node目录下的node_modules文件夹下。可以通过执行下面几条命令查看node、npm的安装目录和全局包的安装目录
 ```    
    npm config ls           // 查看npm和node的安装目录
    npm root -g             // 查看全局包的安装目录
    npm list -g --depth 0   // 查看全局安装过的包 
 ```
 2. --save 安装插件保存到生产依赖，即生产环境和开发环境都要用到的依赖
 3. --save-dev 安装插件保存到开发依赖，即开发环境用到的依赖，而生产环境用不到的依赖，例如一些调试插件。
 4. -D 应该是上面--save-dev的简写，这也太简了，第一次看到一脸懵~