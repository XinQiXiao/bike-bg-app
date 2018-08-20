/**
 * create at 08/20/18
 */
const cityColumns = [
	{
		title: '城市ID',
		dataIndex: 'id'
	},
	{
		title: '城市名称',
		dataIndex: 'name'
	},
	{
		title: '用车模式',
		dataIndex: 'mode'
	},
	{
		title: '运营模式',
		dataIndex: 'op_mode'
	},
	{
		title: '城市管理员',
		dataIndex: 'city_admins',
		render(arr){
			return arr.map((item)=>{
				return item.user_name
			}).join(',')
		}
	},
	{
		title: '城市开通时间',
		dataIndex: 'open_time'
	},
	{
		title: '操作时间',
		dataIndex: 'update_time'
	},
	{
		title: '操作人',
		dataIndex: 'sys_user_name'
	},
]

export {
	cityColumns
}