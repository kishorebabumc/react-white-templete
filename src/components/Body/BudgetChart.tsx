import * as echarts from 'echarts';
import { useEffect } from 'react';

function BudgetChart() {
    useEffect(() => {
        const chart = echarts.init(document.getElementById('budgetChart') as HTMLElement);
        if (chart) {
            chart.setOption({
                legend: {
                    data: ['Allocated Budget', 'Actual Spending']
                },
                radar: {
                    shape: 'circle',
                    indicator: [
                        {
                            name: 'Sales',
                            max: 6500,
                        },
                        {
                            name: 'Administration',
                            max: 16000,
                        },
                        {
                            name: 'Information Technology',
                            max: 30000,
                        },
                        {
                            name: 'Customer Support',
                            max: 38000,
                        },
                        {
                            name: 'Development',
                            max: 52000,
                        },
                        {
                            name: 'Marketing',
                            max: 25000,
                        },
                    ]
                },
                series: [
                    {
                        name: 'Budget vs spending',
                        type: 'radar',
                        data: [
                            {
                                value: [4200, 3000, 20000, 35000, 50000, 18000],
                                name: 'Allocated Budget',
                            },
                            {
                                value: [5000, 14000, 28000, 26000, 42000, 21000],
                                name: 'Actual Spending',
                            },
                        ]
                    }
                ]
            });
        }
    }, []);

    return (
        <div id="budgetChart" className="echart" style={{ minHeight: '400px' }}>
        </div>
    )
}

export default BudgetChart;
