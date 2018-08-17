####
	基于react + antd 写的 单车后台管理项目
		项目相关资料补充截图
			简书“单车后台项目”章节， 提纲url:https://www.jianshu.com/p/98a0fef6aabf
	### create && init 插件

		1.项目构建
			create-react-app *(project name)

			补充： 需要安装node、npm(yarn)，
			react github官网可找到 create-react-app脚手架安装

	### branch & tag

		##
		t0.2.0 项目构建及 2章 react基础完成

		##
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

		t0.3.10 底部组件功能实现2
			1.home UI 布局
			2.css 实现箭头图标

		##
		t0.4.2 react-router 4.0路由demo 演示1
			1.混合路由组件化
			2. switch 和 exact区别

		t0.4.3 react-router 4.0 路由demo演示2
			1.配置路由, 
			2.路由嵌套

		t0.4.4 react-router 4.0 路由demo2 演示
			1.路由传值, match.prams
			2.不存在页面，返回404页面

		t0.4.5 react-router 4.0 在项目当中的运用
			1.项目访问统一router, App 组件包裹多个router;
			2.Admin 组件render subRouter (content 下 {this.props.children});
			3.NavLeft 里配置 NavLink
			4.构建，ui-buttons页面，构建404页面

		##
		t0.5.1 Button按钮使用讲解1
			1.antd buttons 组件使用, 引入 Card, Button组件
			2.基础按钮、图形按钮、loading按钮

		t0.5.2 Button按钮使用讲解2
			1.按钮组、按钮大小 size属性
			2.引入radio
			3.设置 页面 ”main“ 部分自动滚动 (overflow: auto)

		t0.5.3 Modal组件使用讲解1

		t0.5.4 Modal组件使用讲解2
			1.顶部20px, 是antd api 没有支撑的，需要在 ui.less 中引入resource中 ui.less几个样式,然后在style中做修改(top: 20), 【经测试，只有添加 top: x，起作用】
			2. Modal.method 应用

		t0.5.5 Loading组件使用
			1. Spin 加载中组件

		t0.5.6 Notification组件使用
			1.通知提醒框

		t0.5.7 Message 组件使用

		t0.5.8 Tabs 组件使用

		t0.5.10 制作Gallery图片画廊1
			1.导入 resource 中的图片到 public
			2.Card Meta 应用

		t0.5.11 制作Gallery图片画廊2
			1.通过 modal 制作 弹出效果

		t0.5.12 Carousel轮播
			1.导入 public carousel img.

		##
		t0.6.1 登录表单组件1
			1.form 表单使用

		t0.6.2 登录表单组件2

		t0.6.3 注册表单组件1

		t0.6.4 注册表单组件2

		##
		t0.7.1 表格基础讲解
			基础表格
			columns/dataSource/bordered/pagination 属性

		t0.7.2 表格动态渲染
			数据动态表格
			1.easy-mock 使用
				easy-mock 网站：https://www.easy-mock.com/login
				mock创建接口(截图， 简书url: )

				mock规范 mockjs.com url: https://github.com/nuysoft/Mock/wiki/Getting-Started
				
				easy-mock 是基于 mockjs 应用的一个平台
				使用 easy-mock 创建接口

			2.使用axios 插件
				请求 easy-mock 建立的 table/list 接口数据

		t0.7.3 表格动态渲染2
			在 axios 里封装 axios 插件
			页面调试接口

		t0.7.4 表格动态渲染3
			1.请求loading封装
				导入 loading.html public/ index.html 引入 “ajax-loading” class div
				导入 loaing.less style/ common import 
			2. columns 中 render 字段使用，
				sex 1|2 转 男女 ； state ...

		t0.7.5 表格动态渲染4 (表格嵌套单选按钮讲解)
			1.处理bug,天气接口出了问题，暂时显示静态的天气

			2.table 
				rowSelection 属性
					type/selectedRowKeys
						type 类型有rowItem 单选还是多选
				onRow 属性
					selectedRowKeys 和 onRow 中 onClick 配合，选中一行

		t0.7.6 表格嵌套多选按钮
			1.rowSelection 属性
				type / selectedRowKeys

			2.复选后删除操作
				（假筛选，数据没有删除，有数据刷新和提示）

		t0.7.7 表格分页
			自定义分页函数 pagination
			属性
				onChange, current, pageSize, total, showTotal, showQuickJumper,

		t0.7.8 高级表格讲解1	
			1.创建 highTable  page 
			2.提取表格公共数据部分 
				columns, dataSource

			头部固定
				table scroll属性， 指定 scroll y 长度
				bug: 发现表头和 表每列内容不一致，需要在columns里设定，每列宽度

			左侧固定
				计算 columns 宽度方法
				fixed 固定columns某一列
					左右固定

		t0.7.9 高级表格讲解2
				高级表格 easy-mock 新建接口

			排序-本地排序
				属性 sorter, sortOrder, onChange
				
			操作按钮
				antd Badge 组件使用 徽标

				columns 操作 item 直接 render

	##
		t0.8.1 城市管理模块