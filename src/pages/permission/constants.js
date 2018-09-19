/**
 * create at 09/19/18
 */

const permissonColumns = [
	{
		title: '角色ID',
		dataIndex: 'id',
		width: 80,
	},
	{
		title: '角色名称',
		dataIndex: 'role_name',
		width: 120,
	},
	{
		title: '创建时间',
		dataIndex: 'create_time',
		width: 160,
	},
	{
		title: '使用状态',
		dataIndex: 'status',
		width: 160,
		render(status){
			return status === 1 ? '启用' : '停用'
		}
	},
	{
		title: '授权时间',
		dataIndex: 'authorize_time',
		width: 160,
	},
	{
		title: '授权人',
		dataIndex: 'authorize_user_name',
		width: 100,
	},
]

export {
	permissonColumns
}
