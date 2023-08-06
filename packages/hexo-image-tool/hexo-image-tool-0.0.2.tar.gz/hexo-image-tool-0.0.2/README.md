## 简介

Mac自定义命令行工具，简化工作流程,使用`Click`开发

该工具是帮助`Hexo&vscode&jsdelivr`用户简化图片管理，不使用工具正常的工作流是：

```text

复制图片到Hexo资源文件夹 --> 博客markdown文件中引用图片

```


## 打包发布 

由于很长时间没有时间使用python及相关工具，这里记录发布到`pypi`的步骤
```bash
# 创建一个分发源
python setup.py sdist

# 安装上传工具twine
pip install twine

# 上传包
twine upload dist/*

# 本地安装
pip install hexo-image-tool

```