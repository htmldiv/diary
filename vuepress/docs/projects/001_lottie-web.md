# lottie-web介绍

### 什么是lottie-web 
---
Lottie是一个用于Web和iOS的移动库，它可以使用Bodymovin（一个AE插件）解析以json格式导出的Adobe After Effects动画，并在移动设备上进行原生渲染！。做动画的时候，让设计同学先做好动画，导出json给开发同学，而开发同学只要拿着这一份json使用lottie进行解析，就可以渲染出动画了。

### 使用lottie-web

- 引入脚本
```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie.min.js" integrity="sha512-35O/v2b9y+gtxy3HK+G3Ah60g1hGfrxv67nL6CJ/T56easDKE2TAukzxW+/WOLqyGE7cBg0FR2KhiTJYs+FKrw==" crossorigin="anonymous"></script>

或者

$ <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie.min.js" integrity="sha512-35O/v2b9y+gtxy3HK+G3Ah60g1hGfrxv67nL6CJ/T56easDKE2TAukzxW+/WOLqyGE7cBg0FR2KhiTJYs+FKrw==" crossorigin="anonymous"></script>

```

- 使用npm
```js
npm install lottie-web
```

- 初始化动画方法
```js
lottie.loadAnimation({
  container: proxy.webpImg, // 包含动画的dom元素
  renderer: 'svg', // 渲染出来的是什么格式 还可以是 canvas
  loop: false, // 循环播放
  autoplay: true, // 自动播放
  // path: '../assets/data.json', // 自动播放
  animationData: datajson, // 动画json的路径
})


```

- 导出的json文件说明

```json
{
  "v": "5.6.10", // 使用bodymovie插件的版本
  "fr": 32, // 帧速率
  "ip": 0, // 合成开始时间
  "op": 64, // 合成持续时间
  "w": 750, // 合成宽度
  "h": 1334, // 合成高度
  "nm": "合成 1", // 合成名
  "ddd": 0, // 是否3d图层
  "assets": [ // 使用的资源
    {
      "id": "image_0", // 使用的资源id
      "w": 750, // 当前图片资源的宽
      "h": 1334, // 当前图片资源的高
      "u": "images/", // 当前图片导出后在使用bodymovie导出后的文件夹
      "p": "img_0.jpg", // 当前图片资源路径
      "e": 0 // e=0 后将拼接u+p作为图片路径，e=1 不使用u，直接使用p的路径。
    }
  ],
  "layers": [ // 图层
    {
      "ddd": 0, // 是否是3d图层
      "ind": 1, // 当前图层所在的索引
      "ty": 2, // 2代表图片图层
      "nm": "img_0.jpg", // 源名称
      "cl": "jpg", // 后缀
      "refId": "image_0", // 使用assets中的id
      "sr": 1, // 图层 =>时间=>时间伸缩
      "ks": { // 图层 => 变换
        "o": { // 透明度
          "a": 1, // 是否是关键帧
          "k":[ // 如果是关键帧时是数组
            { // 每一个关键帧位置的配置信息
                "i": { "x": [0.833], "y": [0.833] }, // 当前贝塞尔曲线的入值，这个是在lottie中写死的值
                "o": { "x": [0.167], "y": [0.167] }, // 当前贝塞尔曲线的出值，这个是在lottie中写死的值
                "t": 0, // 当前关键帧开始时间 
                "s": [60] // 开始的opacity 
            },
            { // 第二个关键帧的配置信息
                "i": { "x": [0.833], "y": [0.833] },
                "o": { "x": [0.167], "y": [0.167] },
                "t": 25,
                "s": [100]
            }, // 第三个关键帧的配置信息
            {
                "i": { "x": [0.833], "y": [0.833] },
                "o": { "x": [0.167], "y": [0.167] },
                "t": 30,
                "s": [100]
            }, // 第四个关键帧的配置信息
            { "t": 50, "s": [50] }
          ],
          "ix": 11 // Property Index. Used for expressions。表达式标记。还没研究到这个怎么用
      },
      "r": { // 旋转
        "a": 0, // 是否是关键帧， 0代表不是关键帧
        "k": 0, // 不是关键帧时为number，旋转角度为0
        "ix": 10 // Property Index. Used for expressions。表达式标记
      }, 
      "p": { // 位置
        "a": 1, // 是关键帧
        "k": [
            {
              "i": { "x": 0.833, "y": 0.833 }, // 当前贝塞尔曲线的入值，这个是在lottie中写死的值
              "o": { "x": 0.167, "y": 0.167 }, // 当前贝塞尔曲线的出值，这个是在lottie中写死的值
              "t": 0, // 开始时间
              "s": [-375, 675, 0], // 当前关键帧位置，横坐标-375，纵坐标675， 不是3d图层，z方向为0
              "to": [125, 0, 0], // In Spatial Tangent. Only for spatial properties. Array of numbers. 入值 还不知道空间切线在AE中是个什么鬼
              "ti": [-125, 0, 0] // Out Spatial Tangent. Only for spatial properties. Array of numbers. 出值 还不知道空间切线在AE中是个什么鬼
            },
            { 
              "i": { "x": 0.833, "y": 0.833 },
              "o": { "x": 0.167, "y": 0.167 },
              "t": 25,
              "s": [375, 675, 0],
              "to": [0, 0, 0],
              "ti": [0, 0, 0]
            },
            {
              "i": { "x": 0.833, "y": 0.833 },
              "o": { "x": 0.167, "y": 0.167 },
              "t": 30,
              "s": [375, 675, 0],
              "to": [125.167, 0, 0]
              "ti": [-125.167, 0, 0]
          },
          { "t": 50, "s": [1126, 675, 0] }
        ],
        "ix": 2 // Property Index. Used for expressions.
      },
      "a": { // 锚点
        "a": 0, // 不是关键帧
        "k": [375, 667, 0], // 锚点值
        "ix": 1 // Property Index. Used for expressions.
      }, 
      "s": { // 缩放比例
        "a": 0, // 不是关键帧
        "k": [100, 100, 100],  // // 缩放比例值
        "ix": 6 // Property Index. Used for expressions.
      } 
    },
      "ao": 0, // 是否自动跟踪
      "ip": 0, // 开始帧
      "op": 64, // 持续帧长
      "st": 0, // 开始时间
      "bm": 0 // 混合模式
    }
  ],
  "markers": []
}


```

### 注意
使用时注意json中的图片路径
```js
{
  "id": "image_0", // 使用的资源id
  "w": 750, // 当前图片资源的宽
  "h": 1334, // 当前图片资源的高
  "u": "images/", // 当前图片导出后在使用bodymovie导出后的文件夹
  "p": "img_0.jpg", // 当前图片资源路径
  "e": 0 // e=0 后将拼接u+p作为图片路径，e=1 不使用u，直接使用p的路径。
}
```
上面的 u 即为图片路径，我在vue多页面项目中使用时，图片是放在public文件下的，可以单独建一个文件夹放置类似的图片，项目打包更新时这些图片都是不会进行打包的，如果图片未更新，项目更新时可以忽略这一部分的更新。


[参考: https://juejin.cn/post/6992014666159357989#heading-13](https://juejin.cn/post/6992014666159357989)

