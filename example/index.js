import { config, start, componentFactory } from 'mk-meta-engine'
import * as mkComponents from 'mk-component'
import myConfig  from './config'

import mk_app_dashboard_analysis from './apps/mk-app-dashboard-analysis/index.js'
import mk_app_market_widget from './apps/mk-app-market-widget/index.js'
import mk_app_sale_trend_widget from './apps/mk-app-sale-trend-widget/index.js'
import mk_app_sale_widget from './apps/mk-app-sale-widget/index.js'
import mk_app_trade_widget from './apps/mk-app-trade-widget/index.js'
import mk_app_visit_widget from './apps/mk-app-visit-widget/index.js'

const apps = {
		
	[mk_app_dashboard_analysis.name]: mk_app_dashboard_analysis,	
	[mk_app_market_widget.name]: mk_app_market_widget,	
	[mk_app_sale_trend_widget.name]: mk_app_sale_trend_widget,	
	[mk_app_sale_widget.name]: mk_app_sale_widget,	
	[mk_app_trade_widget.name]: mk_app_trade_widget,	
	[mk_app_visit_widget.name]: mk_app_visit_widget,
}

apps.config = (options) => {
	Object.keys(options).forEach(key => {
		const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
		Object.keys(apps).forEach(appName => {
			if (appName != 'config') {
				if (reg.test(appName)) {
					apps[appName].config(options[key])
				}
			}
		})
	})
}

apps.config({ '*': { apps } })

config(myConfig({ apps }))

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	
start()