module.exports = {
  base:'/docs/',
  title: "技术占",
  description: "球球别卷了",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  host: "127.0.0.2",
  port: "8888",
  themeConfig: {
    logo: "/images/logo.png",
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "博客搭建",
        items: [{ text: "md语法", link: "/blog/grammer/" }],
      },
      {
        text: "前端学习",
        items: [{ text: "学习路线", link: "/web/" }],
      },
      {
        text: "有限元&&计算力学",
        items: [
          { text: "有限元", link: "/mpm/fem/" },
          { text: "物质点法", link: "/mpm/mpm/" },
        ],
      },
      { text: "npm外链", link: "https://www.npmjs.com/", target: "_blank" },
    ],
    displayAllHeaders: true, // 默认值：false
    // sidebar: {
    //   "/blog_face/md_grammer/": [""],
    // },
  },
};
