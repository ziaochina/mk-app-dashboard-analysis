export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'mk-app-dashboard-analysis',
		children: [{
			name: 'gridLayout',
			component: 'GridLayout.WidthProviderGridLayout',
			cols: 12,
			rowHeight: 50,
			isResizable: false,
			isDraggable: false,
			layout: [
				{ i: 'sale', x: 0, y: 0, w: 3, h: 4 },
				{ i: 'visit', x: 3, y: 0, w: 3, h: 4 },
				{ i: 'trade', x: 6, y: 0, w: 3, h: 4 },
				{ i: 'market', x: 9, y: 0, w: 3, h: 4 },
				{ i: 'trend', x: 0, y: 3, w: 12, h: 7 }
			],
			children: [{
				name: 'sale',
				component: '::div',
				key: 'sale',
				children: {
					name: 'card',
					component: 'Card',
					children: [{
						name: 'app',
						component: 'AppLoader',
						appName: 'mk-app-sale-widget',
						data: "{{data.sale}}"
					}]
				}
			}, {
				name: 'visit',
				component: '::div',
				key: 'visit',
				children: {
					name: 'card',
					component: 'Card',
					children: [{
						name: 'app',
						component: 'AppLoader',
						appName: 'mk-app-visit-widget',
						data: "{{data.visit}}"
					}]
				}
			}, {
				name: 'trade',
				component: '::div',
				key: 'trade',
				children: {
					name: 'card',
					component: 'Card',
					children: [{
						name: 'app',
						component: 'AppLoader',
						appName: 'mk-app-trade-widget',
						data: "{{data.trade}}"
					}]
				}
			}, {
				name: 'market',
				component: '::div',
				key: 'market',
				children: {
					name: 'card',
					component: 'Card',
					children: [{
						name: 'app',
						component: 'AppLoader',
						appName: 'mk-app-market-widget',
						data: "{{data.market}}"
					}]
				}
			}, {
				name: 'trend',
				component: '::div',
				key: 'trend',
				children: [{
					name: 'card',
					component: 'Card',
					children: [{
						name: 'tabs',
						component: 'Tabs',
						children: [{
							name: 'saleTrend',
							component: 'Tabs.TabPane',
							tab: '销售额',
							key: 'saleTrend',
						}, {
							name: 'visitTrend',
							component: 'Tabs.TabPane',
							tab: '访问量',
							key: 'visitTrend',
						}]
					},{
						name: 'saleTrend',
						component: 'AppLoader',
						appName: 'mk-app-sale-trend-widget',
						data: '{{data.visit}}'
					}]
				}]



			}]
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