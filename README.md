node 文件处理
===

关键词： *node* *File System* *md* *jade* *gulp*

使用 *node* *File System* 自动提取 md 项目文档内容替换 jade 文件内容，然后采用 *gulp* 自动化生成页面。

使用教程

1. 检查
```
    node -v         检查 node 版本号
    gulp -v         检查 gulp 版本号
```

2. 安装
```
    2.1 markdown-js 配合 jade，在生成 html 文件时可以引入 md 文件

```

3. 使用
```
    cd bin
    ./read
```

4. 说明
```
    该工具是为了自动化生成页面左侧目录，避免页面调整时重复修改独立页面引入的链接问题，在性能和效率方面没有过多考虑，在后续
    修改中会慢慢增加新的功能。
```

