export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		children: [{
			name: 'left',
			component: 'Layout',
			children: [{
				name: 'chart',
				component: 'Echarts',
				option: '{{$getChartOption(data)}}',
				style: { height: '100%', width: '100%' }
			}]
		},{
			name: 'right',
			component: 'Layout',

		}]
	}
}

export function getInitState() {
	return {
		data: {
			content: 'hello world'
		}
	}
}