import * as echarts from 'echarts';
import { useEffect } from 'react';
function WebTrafficChart() {
    useEffect(() => {
        echarts.init(document.querySelector("#trafficChart") as HTMLElement).setOption({
            tooltip: {
                trigger: 'item',
            },
            legend: {
                top: '5%',
                left: 'center',
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%,', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '18',
                            fontWeight: 'bold',
                        }
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [
                        {
                            value: 1048,
                            name: 'Seach Engine'
                        },
                        {
                            value: 735,
                            name: 'Direct',
                        },
                        {
                            value: 484,
                            name: 'Union Ads',
                        },
                        {
                            value: 300,
                            name: 'Video Ads',
                        },
                    ]
                }
            ]
        })
    }, [])

    return (
        <div className="echart" id="trafficChart" style={{ minHeight: '400px' }}>

        </div>
    )
}

export default WebTrafficChart