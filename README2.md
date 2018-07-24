####
	基于react + antd 写的 单车后台管理项目

	### create && init 插件

		1.项目构建
			create-react-app *(project name)

			补充： 需要安装node、npm(yarn)，
			react github官网可找到 create-react-app脚手架安装

	### branch & tag

		t0.2.0 项目构建及 2章 react基础完成

		t0.3.1 基础插件安装
			（参考慕课网章节 3-1基础插件安装1）
			1.安装 react-router-dom axios less loader
				yarn add react-router-dom axios less-loader

			2.暴露配置，修改webpack, 使用less
				在项目已经提交完成的情况下 执行 yarn eject 命令 选择 yes

			3.less 文件加载
				1).修改 config.dev 复制 css module 部分改为 less 细节请参照代码
				2).重新执行 yarn start 
					遇到问题，(1).babel-loader not found , 使用yarn 重新加载 babel-loader
									(2).less not found, yarn add less

		t0.3.2 基础插件安装2
			1.安装 antd 
				yarn add antd

				LifeComponent 引入Button antd样式

			2.使用 babel-plugin-import 实现按需加载
				改webpack.config配置
				less 报错
					https://github.com/ant-design/ant-motion/issues/44
				.bezierEasingMixin();
				需降级 less 版本到 2.7.3

				yarn add less@^2.7.3未识别 改为 yarn add less@2.7.3
			
			3.更换主题 -> @primary-color

			4.可以去npm 官网搜具体插件 查询如何使用

		t0.3.3 页面结构开发1
			1.footer, header, navleft 组件建立;
			2.admin page 建立;
			3.components demo life 组件迁移
			4. antd design Grid 栅格系统调研

		t0.3.4 页面结构开发2	
			1.页面开发补充;
			2.calc计算方法使用， url:http://www.css88.com/book/css/values/functional/calc().htm

		t0.3.5 菜单组件开发1
			1.在 生成menuConfig 文件;
			2.渲染 navLeft logo ;
			3.引入antd Menu

		t0.3.6 菜单组件开发2
			1.遍历 menuConfig 渲染 MenuList

		t0.3.7 头部组件的实现1
			1.header UI 布局
			2.实现一些公共基础类(utils ) 获取时间格式
			3.实现动态获取本地时间
			4.resource doc（百度天气 api 地址）


		t0.3.8 头部组件的实现2
			1.jsonp add (yarn add jsonp --save)
			2.axios 封装 jsop 请求
			3.引入lodash (yarn add lodash --save)
			4.引入moment (yarn add moment --save)
			5.实现显示天气

		t0.3.9 底部组件功能实现1
			1.底部组件布局, 完善footer组件
			2.home页面实现 UI