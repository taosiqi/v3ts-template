# v3ts-template

> 基于Vue3.0、TypeScript、Element Plus的项目模版，提供开箱即用的开发体验。

## 命名规划

项目或者单文件

`kebab-case`：横短线命名，也叫串式命名法，小写字母的词组，中间加 `- ` 拼接的方式，这种方式命名便于同类内容快速查找

```js
news-index;
news-list;
news-detail;
```

JavaScript

变量：常用小驼峰命名

```js
const userInfo;
const userAddressList;
const currentDate;
```

方法：小驼峰命名，并且推荐命名时添加一些动词类，可以帮助快速理解方法含义，例如以 handle 开头，中间 xxx 表示操作内容，show 表示具体操作， `handlexxxxChange`，`handlexxxxShow`，而比如数据获取可以用 get，fetch 这类

```js
// 小驼峰命名
function getUserInfo(){};
function addSuplierInfo(){};

// 添加一些操作类的辅助命名
function handleUserInfoChange(){};
function handleTitleClick(){};
function fetchPageData(){};
```

类名：大驼峰命名

```js
export class CommonLogo;
export class CartCenter;
```

### css

类名：大驼峰命名

```css
.list-title{}
```
