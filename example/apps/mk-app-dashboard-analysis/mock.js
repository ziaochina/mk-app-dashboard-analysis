/**
 * mock.js 提供应用截获ajax请求，为脱离后台测试使用
 * 模拟查询更改内存中mockData,并返回数据
 */

import { fetch } from 'mk-utils'
import moment from 'moment'

const mockData = fetch.mockData

function initMockData() {
    if (!mockData.visit) {

        const x = []
        const y = []
        var total = 0

        for (let i = 0; i < 30; i++) {
            x.push(moment().add(i, 'days').format('YYYY-MM-DD'))
            let v = Math.floor(Math.random() * 100) + 10
            y.push(v)
            total += v
        }

        mockData.visit = {
            total,
            x,
            y,
            average: Math.round(total / 30)
        }
    }

    if (!mockData.trade) {
        const x = []
        const y = []
        var total = 0

        for (let i = 0; i < 30; i++) {
            x.push(moment().add(i, 'days').format('YYYY-MM-DD'))
            let v = Math.floor(Math.random() * 100) + 10
            y.push(v)
            total += v
        }

        mockData.trade = {
            total,
            x,
            y,
            conversionRate: 0.65
        }
    }

    if (!mockData.market) {
        mockData.market = {
            rate: 0.88,
            WoW: 0.12,
            DoD: -0.11
        }
    }

    if( !mockData.sale){
        mockData.sale = {
            total: 8181818,
            WoW: 0.12,
            DoD: -0.11,
            average: 12345
        }
    }
}

fetch.mock('/v1/analysis/query', (option) => {
    initMockData()
    return {
        result: true,
        value: {
            visit: mockData.visit,
            trade: mockData.trade,
            market: mockData.market,    
            sale: mockData.sale
        }
    }
})
