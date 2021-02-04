# v3ts-template

### 项目名称、文件名称

项目或者单文件的命名方面，常见规则：

1. `kebab-case`：横短线命名，也叫串式命名法，小写字母的词组，中间加 `- ` 拼接的方式，这种方式命名便于同类内容快速查找

```js
news-index;
news-list;
news-detail;
```

1. JavaScript

- 变量：常用小驼峰命名

```js
const userInfo;
const userAddressList;
const currentDate;
```

- 方法：小驼峰命名，并且推荐命名时添加一些动词类，可以帮助快速理解方法含义，例如以 handle 开头，中间 xxx 表示操作内容，show 表示具体操作， `handlexxxxChange`，`handlexxxxShow`，而比如数据获取可以用 get，fetch 这类

```js
// 小驼峰命名
function getUserInfo(){};
function addSuplierInfo(){};

// 添加一些操作类的辅助命名
function handleUserInfoChange(){};
function handleTitleClick(){};
function fetchPageData(){};
```

- 类名：大驼峰命名

```js
export class CommonLogo;
export class CartCenter;
```

### css

- 类名：大驼峰命名

  ```css
  .list-title{
    
  }
  
  ```

  

#### 常用 CSS 样式名称

这里引用一下掘金作者 `冷石Boy` 的 css 样式名称

**包裹类：** container, wrapper, outer, inner, box, header, footer, main, content, aside, page, section, block

**状态类：** primary, secondary, success, danger, warning, info, error, Link, light, dark, disabled, active, checked, loading

**尺寸类：** large, middle, small, bigger, smaller

**组件类：** card, list, picture, carousel, swiper, menu, navs, badge, hint, modal, dialog

**位置类：** first, last, current, prev, next, forward, back

**文本类：** title, desc, content, date, author, category,label,tag

**人物类：** avatar, name, age, post, intro

------



> [编写高质量可维护的代码：优雅命名]: https://juejin.cn/post/6922225108094287880
