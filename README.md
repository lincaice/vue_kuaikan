# 仿快看漫画前端项目

## git的创建和提交过程
```
1.通过git初始化远超仓库与仓库之间的连接
    git remote add origin https://github.com/lincaice/vue_kuaikan.git
2.改名操作，将 master 分支改为main分支。
    git branch -M main
3.将本地的xxx分支推送到origin主机，同时指d定origin为默认主机，之后可直接使用git push命令
    git push -u origin xxx
4.查看在你上次提交之后是否有对文件进行再次修改。
    git status
5.将所有文件添加到暂存区
    git add .
6.将文件提交到本地仓库并设置提交事件
    git commit -m "xxxx"
7.查看分支
    git branch
8.切换分支
    git checkout 分支名
9.主分支合并其他分支
    git merge 分支名
10.创建新分支并切换至该分支(xxx)
    git checkout -b xxx
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
