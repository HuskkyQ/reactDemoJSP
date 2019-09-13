## 跟着技术胖大哥的react视频教学做的demo
一个todolist 纯粹的基础练手

## 上传方法：
* 找到 _package.json_ 文件，在其末尾添加 ` "homepage": "./" `
* 使用命令行 ` npm run build ` 
* 在github上创建一个新的仓库，并把地址复制下来
* 在该项目下继续使用命令行 ` git init ` , ` git add . ` , ` git commit -m "first commit" `
* 接着使用 ` git remote add origin https://github.com/xxx/xxx ` 这里的xx就是上述复制的地址
* (ps: 提示需要输入用户名和密码就是github的登录账户和密码即可)
* 最后使用 ` git pull origin master ` 也可以用 ` git push -u origin master ` ,两者的区别是 -u 可以不先拉一下 建议前者
* 之后想要修改代码再上传 则可以使用 ` npm run build ` , ` git add . ` , ` git commit -m "xxxx" ` , ` git pull origin master `
