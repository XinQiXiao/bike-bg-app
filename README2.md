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

