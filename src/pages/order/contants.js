/**
 * create at 08/21/18
 */

const orderColumns = [
	{
		title: '订单编号',
		dataIndex: 'order_code'
	},
	{
		title: '车辆编号',
		dataIndex: 'bike_code'
	},
	{
		title: '用户名',
		dataIndex: 'user_name'
	},
	{
		title: '手机号码',
		dataIndex: 'mobile'
	},
	{
		title: '里程',
		dataIndex: 'distance'
	},
	{
		title: '行程时长',
		dataIndex: 'total_time'
	},
	{
		title: '状态',
		dataIndex: 'status'
	},
	{
		title: '开始时间',
		dataIndex: 'start_time'
	},
	{
		title: '结束时间',
		dataIndex: 'end_time'
	},
	{
		title: '订单金额',
		dataIndex: 'total_fee'
	},
	{
		title: '实付金额',
		dataIndex: 'user_pay'
	},
]

export {
	orderColumns
}