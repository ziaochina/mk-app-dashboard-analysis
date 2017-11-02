import React from 'react'
import { action as MetaAction, AppLoader } from 'mk-meta-engine'
import config from './config'
import moment from 'moment'
import utils from 'mk-utils'

class action {
    constructor(option) {
        this.metaAction = option.metaAction
        this.config = config.current
    }

    onInit = ({ component, injections }) => {
        this.component = component
        this.injections = injections
        injections.reduce('init', this.component.props.data)
    }

    getChartOption = (data) => {
        return {
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            grid: {
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            },
            series: [{
                type: 'gauge',
                detail: { formatter: '{value}%' },
                radius: '100%',
                startAngle: 180, 
                endAngle: 0,
                animation: false,
                axisLine:{
                    show: false,
                },
                axisTick:{
                    show:false,
                },
                axisLabel:{
                    show: false,
                },
                title:{
                    show: false,
                },
                pointer:{
                    width: 4,
                },
                data: [{
                    value: data.rate * 100,
                    name: '效果'
                }]
            }]
        }
    }

    numberFormat = utils.number.format
}

export default function creator(option) {
    const metaAction = new MetaAction(option),
        o = new action({ ...option, metaAction }),
        ret = { ...metaAction, ...o }

    metaAction.config({ metaHandlers: ret })

    return ret
}