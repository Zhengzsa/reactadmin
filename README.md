# reactadmin

react 的一个后台管理系统

# react-vite 项目问题（已解决，问题原因个人猜测）

需要引入 react 相关的文件如果用.js，vite 就会报错让你用 jsx 语法。
解决方法：1.将.js 文件改为 jsx（报错提示的文件修改，没有提示不需要修改） 2.在 vite.config 文件 esbuildOptions 配置 loader: { '.js': 'jsx' }（没试过不确定） 3.使用转码插件@babel/plugin-transform-react-jsx
\*\*\*\*(2，3 解决办法网址为https://blog.csdn.net/weixin_48610566/article/details/127469520，具体可以去看)
