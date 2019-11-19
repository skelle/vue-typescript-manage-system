# vue-typescript-manage-system

## **项目说明**
* 本项目并非博主原创，原项目请前往[https://github.com/lin-xin/vue-manage-system](https://github.com/lin-xin/vue-manage-system)
* 本项目未对其源码做出过多修改，仅仅是修改添加了typescript支持
* **如果本项目侵犯了您的权益，请第一时间联系我，我会马上删除**

----
## **使用步骤**
### 安装依赖
```
npm install
```

### 测试环境
```
npm run serve
```

### 编译打包
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
----

# 备注
## 项目结构
```bash
├── public                     # 静态资源 (会被直接复制)
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源 (由 webpack 处理加载)
│   ├── components             # 全局组件
│   ├── plugins                # 第三方插件
│   ├── router                 # 路由
│   ├── store                  # 全局 vuex store
│   ├── utils                  # 全局工具方法
│   ├── views                  # 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.ts                # 入口文件 加载组件 初始化等
│   ├── shims-tsx.d.ts         # jsx注入
│   └── shims-vue.d.ts         # vue及第三方模块注入
├── .browserslistrc            # browserslistrc 配置文件 (用于支持 Autoprefixer)
├── .eslintrc.js               # eslint 配置
├── babel.config.js            # babel-loader 配置
├── package.json               # package.json 依赖
├── postcss.config.js          # postcss 配置
└── tsconfig.json              # typescript 配置
```

***如果需要webpack配置，请自行在根目录创建webpack.config.js文件***

* 目前拖拽列表功能会在火狐下有bug，会导致拖拽产生新的标签页
* 原作者的自定义图标已被我删除，个人建议使用[阿里的图标库](https://www.iconfont.cn/)自己定制图标，因为原作者也是用的阿里图标库的cdn
* 如果你引入第三方插件，或者自己写的组件找不到的话，请在shims-vue.d.ts里declare一下
  
# 参考资料
* **你可以在tsconfig.json里设置allowJs,来设置是否允许编译JS文件**，更多关于tsconfig.json配置信息请参考：[https://www.tslang.cn/docs/handbook/compiler-options.html](https://www.tslang.cn/docs/handbook/compiler-options.html)
* eslint的检测空格功能已经被我关闭，如果你希望恢复请在.eslintrc.js中设置'indent'，第一个参数可设置off、waring、error,第二个参数是你希望的空格数量，更多规则请参考[https://cn.eslint.org/docs/rules/](https://cn.eslint.org/docs/rules/)
* 关于vuex，我并没有使用vuex-class，而是使用了vuex-module-decorators，详细使用可以参考官方文档：[https://championswimmer.in/vuex-module-decorators/](https://championswimmer.in/vuex-module-decorators/)，本人也写过一篇[简单的使用方法](https://blog.csdn.net/SkelleBest/article/details/102971817)




