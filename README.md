js-file-reader 使用说明
===

最近做后台比较多，而且经常要用到文件上传和预览，写的有点烦 - -，所以弄了这个小玩意…

## 功能

通过 `input` 的 `file` 属性选择文件后，只需要一句代码，就可以通过这个小工具获取对应的 `base64` 和 `blob` 值。

适合原生、虚拟DOM和各种框架的上传控件使用。

## 预览

demo已集成了 `native`原生DOM 、 `vue`虚拟DOM，以及基于Vue生态的`vuetify` 、 `iview` 、 `element` 等UI框架的上传控件，可以按 `f12` 开启控制台查看文件选择后得到的转换结果（讲道理其他框架应该也都是可以的）。

点击预览：[js-file-reader demo](https://chengpeiquan.github.io/js-file-reader/demo/ "js-file-reader demo")

## 参数

### 传入的参数：

参数|是否必填|参数类型|参数说明
:-:|:-:|:-:|-
fileList|是|object|可以是一个文件对象，或者是对象数组（对应文件的单选和多选）

### 返回的参数：

参数|参数类型|参数说明
:-:|:-:|-
result|object array|不管传入单个还是多个，最终都是返回一个对象数组

其中每个item都包含2个字段：

`base64` 是base64编码格式的转换结果，可用于本地预览

`blob` 是二进制文件转换结果，可用于上传到服务端

## 安装

### 通过npm安装

```
npm install js-file-reader --save-dev
```

### 通过cdn安装

```html
<script src="https://cdn.jsdelivr.net/npm/js-file-reader/dist/js-file-reader.min.js"></script>
```

## 使用

通过npm安装的项目，需要先在 `main.js` 里引入插件（通过cdn则无需该步骤）。

```js
import readFile from 'js-file-reader'
```

安装插件后，通过cdn引入的可直接通过api `readFile` 操作。

如果是npm安装的，需要挂载到诸如Vue的原型上全局使用。

```js
// main.js in Vue 2.x
Vue.prototype.$readFile = readFile;
```

挂载后就可以通过 `this.$readFile` 来操作了。

## 方法

插件目前只有一个方法，就是 `readFile`。

推荐使用 `async/await` 来获取转换结果：

```js
async getFileInfo (e) {
  const FILE_LIST = [...e.target.files];
  const RESULT = await readFile(FILE_LIST);
  console.log(RESULT);
}
```

也可通过 `Promise` 来获取结果：

```js
readFile(fileList).then(function(result){
  console.log(result);
});
```
