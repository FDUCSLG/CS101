# 编辑器（Editor）和集成开发环境（IDE）

## 编辑器

### 什么是编辑器？
编辑器（或称文本编辑器）是用于创建与编辑纯文本的工具，主要用于编写或修改文档或者代码，例如 Windows 记事本、Vim、Sublime Text 等。为了方便编程，现代编辑器通过插件/扩展增加了许多面向开发者的功能，我们通常把具有这些扩展功能的编辑器称为代码编辑器（code editor），如 Visual Studio Code（VS Code）。

常见的代码编辑器功能包括：
- 语法高亮：根据编程语言的语法规则（如 `C`、`Python`、`C++`、`Java`）用不同颜色标注关键字、变量、函数等，提高可读性。
- 插件/扩展：支持通过插件添加语言支持、调试器、格式调整、版本控制等功能。
- 智能补全：基于语言规则和上下文自动提示代码片段、函数签名和标识符，提升编码效率。
- 其他便利功能：Snippets(代码片段)、多光标编辑、文件树/资源管理、集成终端等。

### 常见的编辑器
- Windows 记事本、macOS 文本编辑（TextEdit）、Linux 下的 `vim`/`nano` 等简单文本编辑器
- Visual Studio Code（VS Code）、Sublime Text、Cursor 等主流编辑器

有关 VS Code 的环境配置请移步至项目中对应的配置文档或官方文档。

## 集成开发环境（IDE）

### 什么是集成开发环境？
集成开发环境（Integrated Development Environment，IDE）是把编辑器、编译器/构建工具、调试器、项目/代码管理和其他开发工具集成到一个应用中的开发工具。IDE 通常为大型语言或复杂项目提供更完整的一体化支持，常见示例包括 Visual Studio、Code::Blocks、Dev-C++、Xcode、CLion 等。

IDE 的典型特点：
- 一键构建/运行项目，集成编译器和构建系统
- 可视化调试（断点、堆栈查看、变量监视）
- 项目/工程管理（多文件、多模块支持）
- 集成版本控制、终端和插件生态

优点：
- 提高开发效率（尤其是大型项目）
- 调试和构建流程更为便捷、直观

缺点：
- 通常体积较大、占用资源多，启动和运行可能较慢
- 配置复杂度可能高于轻量级编辑器

### 常见的 IDE（举例）
- Dev-C++（Windows）
- Code::Blocks（跨平台）
- Xcode（macOS）
- Visual Studio（Windows）
- CLion、NetBeans 等

### 下载
- JetBrains Toolbox（用于安装和管理 JetBrains 系列 IDE，例如 CLion、IntelliJ IDEA 等）：
  - https://www.jetbrains.com/toolbox-app/
  - https://zb.fudan.edu.cn/product.html?id=247 
- Cursor（现代 AI 辅助代码编辑器）：https://www.cursor.so/
- Visual Studio Code（VS Code）：https://code.visualstudio.com/

其他 Editor/IDE（例如 Dev-C++、Code::Blocks、Xcode 等）请优先从其官方渠道或知名镜像下载安装包，以保证软件来源可靠并获得安全更新。
