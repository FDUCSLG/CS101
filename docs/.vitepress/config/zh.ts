import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: 'FDUer 计算机入门指南',

  themeConfig: {
    nav: nav(),

    sidebar: sidebarGuide(),

    editLink: {
      pattern: '/edit-landing.md?path=FDUCSLG/CS101/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '关于我们',
      link: '/team',
      activeMatch: '/team'
    }
  ]
}

function sidebarGuide(): DefaultTheme.Sidebar {
  return [
    // {
    //   text: "课程",
    //   collapsible: true,
    //   collapsed: false,
    //   items: [
    //     { text: "计算机系统基础", link: "/courses/ICS" },
    //   ],
    // },
    {
      text: "实用工具",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "Markdown 入门", link: "/tools/markdown1" },
        { text: "Markdown 进阶", link: "/tools/markdown2" },
        { text: "LaTeX", link: "/tools/latex" },
        { text: "Git & GitHub", link: "/tools/git-and-github" },
        { text: "Docker", link: "/tools/docker" },
      ],
    },
    {
      text: "项目构建",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "Make 入门", link: "/tools/intro-make" },
        { text: "CMake 入门", link: "/tools/intro-cmake" },
      ],
    },
    {
       text: "Linux & Shell",
       collapsible: true,
       collapsed: false,
       items: [
         { text: "基本命令行常识", link: "/linux-and-shell/basic-command-line" },
         { text: "发行版相关", link: "/linux-and-shell/on-distros" },
        ],
    },
    { text: "贡献指南", link: "/project/contributing" },
    { text: "关于 CS101 项目", link: "/project/project" },
    { text: "关于我们", link: "/project/team" },
  ]
}
