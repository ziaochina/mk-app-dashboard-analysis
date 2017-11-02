export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'mk-app-trade-widget',
		children: [{
			name: 'header',
			component: 'Layout',
			className: 'mk-app-trade-widget-header',
			children: [{
				name: 'left',
				component: '::span',
				children: '支付比数'
			}, {
				name: 'right',
				component: 'Icon',
				showStyle: 'softly',
				type: 'info-circle',
				title: '指标说明'
			}]
		}, {
			name: 'text',
			component: '::p',
			className: 'mk-app-trade-widget-text',
			children: '{{$numberFormat(data.total)}}'
		}, {
			name: 'chart',
			component: '::div',
			className: 'mk-app-trade-widget-chart',
			children: {
				name: 'chart',
				component: 'Echarts',
				option: '{{$getChartOption(data)}}',
				style: { height: '100%', width: '100%' }
			}
		}, {
			name: 'footer',
			component: 'Layout',
			className: 'mk-app-trade-widget-footer',
			children: [{
				name: 'label',
				component: '::span',
				children: '转换率'
			},{
				name: 'value',
				component: '::h2',
				children: "{{data.conversionRate*100 + '%'}}"
			}]
		}]
	}
}

export function getInitState() {
	return {
		data: {
			x: [],
			y: [],
			total: 0,
			average: 0
		}
	}
}