---
sidebarDepth: 2
---

# 博客搭建基础语法
## 二级菜单
### 三级菜单
## 常用md语法

**加粗文本**
*斜体*
***加粗斜体***
~~删除~~
[链接](https://www.npmjs.com/)
- 无序列表
- 2
- 3

1. 有序列表
2. 2
3. 3

表格：分别是左对齐，居中对齐，右对齐
ID|姓名|性别
:--|:-:|--:
1|阿占|男
2|欢欢|女
左对齐|居中对齐|右对齐

> 区块
> > 二级
> > > 三级

```js
const sum=0;
for(let i=0;i<10;i++){
    sum+=i;
}
console.log(sum);
```

将md语法显示
````markdown
```js
const sum=0;
for(let i=0;i<10;i++){
    sum+=i;
}
console.log(sum);
```
````
图片
![logo](/public/images/logo.png)

## makdown拓展
表情-
:tada: :100:

目录
[[toc]]

::: tip 提示
这是提示
:::

:::warning 警告
警告
:::

:::danger 危险
危险警告
:::

:::details 详情
细节
:::
代码块高亮
```js{4,5}
const sum=0;
for(let i=0;i<10;i++){
    sum+=i;
}
console.log(sum);
```
