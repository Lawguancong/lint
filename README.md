# lint

## Eslint+Stylelint+Prettier+husky+commitlint+lint-staged+commitizen

## node 版本 >= v16.0.0
## package.json 相关配置
"scripts"
"lint-staged"
"config"
"devDependencies"

### 备注
yarn install 后自动配置husky
"prepare": "husky install",

## 根目录相关配置文件
.husky
.cz-config.js
.eslintignore
.eslintrc.js
.gitignore
.prettierrc
.stylelintignore
.stylelintrc.js
commitlint.config.js


## 如何提交commit
yarn commit

### 参考链接
https://juejin.cn/post/7041768022284976165
https://juejin.cn/post/6940127032932040735
https://www.cnblogs.com/ly0612/p/15545803.html

```js
// 在 package.json 中添加脚本以在启用 Git 挂钩时自动设置可执行权限。
package.json
"prepare": "husky install && chmod ug+x .husky/*",
https://stackoverflow.com/questions/68367259/husky-needs-to-make-executable-for-every-new-branch
```
