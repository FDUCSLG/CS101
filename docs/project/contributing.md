# 贡献指南
CS101 项目采用 GitHub 进行协作。您可以参考 [Git & GitHub](../tools/git-and-github.md) 这篇文档来学会基本操作。

要参与贡献，您需要一个 GitHub 账号（可以前往 [GitHub 的账号注册页面](https://github.com/signup) 注册），但不需要高超的 GitHub 技巧，即使你是一名新手，只要按照下面所述的步骤操作，也能够非常出色地完成编辑。

## 编辑的基本步骤
简单来说，是这么几步：

1. 找到您想要编辑的页面；
2. 滚动到最下方，点击 “在 GitHub 上编辑本页”，您会来到我们的编辑准备页面；
3. 准备好后，点击 “开始编辑” 按钮跳转到 GitHub 的编辑器页面，您可在此进行编辑，编辑完后，在 Commit Message 框中，用以下的格式简要概括您的修改
    ```
    type: brief summary of what you did
    ```
    其中 `type` 为您此次所做的修改的类别。例如，如果是写作了新的内容，`type` 为 `feat`；如果是修复了过去的一个问题，`type` 为 `fix`。
    >[!INFO] 提示
    > 这是 Semantic/Conventional Commit Message 的要求。如果您想要了解更多的话，可以参考 [这个规范文档](https://www.conventionalcommits.org/en/v1.0.0/)。
4. 点击 Propose Changes 按钮提交修改；
5. 在下一个页面中，点击 Create Pull Request 按钮，在弹出的 Pull Request 详情页面中，简要叙述修改的内容；
6. 大功告成！您只需要等待管理员审核并合并到主仓库中即可。

## 在本地进行编辑
如果您想要在本地进行编辑的话，就需要一定的 `git` 相关知识。您可以参考 [Git & GitHub](../tools/git-and-github.md) 这篇文档。

不过，简单说来，您只需要做以下这些事情：

### 准备工作
您应该先安装好 Node.js 环境。请参考 [Node官网](https://nodejs.org) 上的指南。

接着，fork 并 clone 本仓库，并配置环境
```shell
git clone https://github.com/<your-username>/CS101
cd CS101
npm install
npm run docs:dev
```

这样就可以在[http://localhost:5173](http://localhost:5173)实时预览您的编辑了。

### 修改工作
每次修改前，您应当创建一个新的 branch，并在那里修改。

```shell
git checkout -b my-branch-name
git add .
git commit -m "<type>: <brief commit message>"
git push -u origin my-branch-name
```

修改完后，将您的工作 commit 并 push 回上游，并开启一个 Pull Request 即可。