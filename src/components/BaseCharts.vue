<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-pie-chart"></i> EChart图表 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                ECharts图表组件库 访问地址：
                <a href="https://echarts.apache.org/examples/zh/index.html" target="_blank">ECharts</a>
            </div>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-card shadow="hover">
                        <div ref="chart" style="width: 100%; height: 320px"></div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card shadow="hover">
                        <div ref="chart2" style="width: 100%; height: 320px"></div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-card shadow="hover">
                        <div ref="chart3" style="width: 100%; height: 320px"></div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card shadow="hover">
                        <div ref="chart4" style="width: 100%; height: 320px"></div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'basecharts',
    data() {
        return {
            msg: ''
        };
    },
    mounted() {
        this.getChartData();
        this.getChartData2();
        this.getChartData3();
        this.getChartData4();
    },
    methods: {
        getChartData() {
            const chart = this.$refs.chart;
            if (chart) {
                const myChart = this.$echarts.init(chart);
                myChart.setOption({
                    series: [
                        {
                            type: 'gauge',
                            startAngle: 180,
                            endAngle: 0,
                            min: 0,
                            max: 240,
                            splitNumber: 12,
                            itemStyle: {
                                color: '#58D9F9',
                                shadowColor: 'rgba(0,138,255,0.45)',
                                shadowBlur: 10,
                                shadowOffsetX: 2,
                                shadowOffsetY: 2
                            },
                            progress: {
                                show: true,
                                roundCap: true,
                                width: 18
                            },
                            pointer: {
                                icon:
                                    'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                                length: '75%',
                                width: 16,
                                offsetCenter: [0, '5%']
                            },
                            axisLine: {
                                roundCap: true,
                                lineStyle: {
                                    width: 18
                                }
                            },
                            axisTick: {
                                splitNumber: 2,
                                lineStyle: {
                                    width: 2,
                                    color: '#999'
                                }
                            },
                            splitLine: {
                                length: 12,
                                lineStyle: {
                                    width: 3,
                                    color: '#999'
                                }
                            },
                            axisLabel: {
                                distance: 30,
                                color: '#999',
                                fontSize: 8
                            },
                            title: {
                                show: false
                            },
                            detail: {
                                backgroundColor: '#ffb',
                                borderColor: '#999',
                                borderWidth: 2,
                                width: '60%',
                                lineHeight: 20,
                                height: 20,
                                borderRadius: 8,
                                offsetCenter: [0, '35%'],
                                valueAnimation: true,
                                formatter: function (value) {
                                    return '{value|' + value.toFixed(0) + '}{unit|km/h}';
                                },
                                rich: {
                                    value: {
                                        fontSize: 15,
                                        fontWeight: 'bolder',
                                        color: '#777'
                                    },
                                    unit: {
                                        fontSize: 14,
                                        color: '#999',
                                        padding: [0, 0, 0, 10]
                                    }
                                }
                            },
                            data: [
                                {
                                    value: 100
                                }
                            ]
                        }
                    ]
                });
                window.addEventListener('resize', function () {
                    myChart.resize();
                });
            }
        },
        getChartData2() {
            const chart = this.$refs.chart2;
            if (chart) {
                const myChart = this.$echarts.init(chart);
                var dataAxis = [
                    '点',
                    '击',
                    '柱',
                    '子',
                    '或',
                    '者',
                    '两',
                    '指',
                    '在',
                    '触',
                    '屏',
                    '上',
                    '滑',
                    '动',
                    '能',
                    '够',
                    '自',
                    '动',
                    '缩',
                    '放'
                ];
                var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
                var yMax = 500;
                var dataShadow = [];

                for (var i = 0; i < data.length; i++) {
                    dataShadow.push(yMax);
                }

                myChart.setOption({
                    title: {
                        left: 'center',
                        text: '特性示例：渐变色 阴影 点击缩放',
                        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
                    },
                    xAxis: {
                        data: dataAxis,
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 10
                    },
                    yAxis: {
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#999'
                            }
                        }
                    },
                    dataZoom: [
                        {
                            type: 'inside'
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            showBackground: true,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: '#83bff6' },
                                    { offset: 0.5, color: '#188df0' },
                                    { offset: 1, color: '#188df0' }
                                ])
                            },
                            emphasis: {
                                itemStyle: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: '#2378f7' },
                                        { offset: 0.7, color: '#2378f7' },
                                        { offset: 1, color: '#83bff6' }
                                    ])
                                }
                            },
                            data: data
                        }
                    ]
                });
                window.addEventListener('resize', function () {
                    myChart.resize();
                });

                var zoomSize = 6;
                myChart.on('click', function (params) {
                    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
                    myChart.dispatchAction({
                        type: 'dataZoom',
                        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
                    });
                });
            }
        },
        getChartData3() {
            const chart = this.$refs.chart3;
            if (chart) {
                const myChart = this.$echarts.init(chart);
                myChart.setOption({
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '1%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '直接访问',
                            type: 'line',
                            stack: '总量',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                });
                window.addEventListener('resize', function () {
                    myChart.resize();
                });
            }
        },
        getChartData4() {
            const chart = this.$refs.chart4;
            if (chart) {
                const myChart = this.$echarts.init(chart);
                var category = [];
                var dottedBase = +new Date();
                var lineData = [];
                var barData = [];

                for (var i = 0; i < 20; i++) {
                    var date = new Date((dottedBase += 3600 * 24 * 1000));
                    category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));
                    var b = Math.random() * 200;
                    var d = Math.random() * 200;
                    barData.push(b);
                    lineData.push(d + b);
                }

                myChart.setOption({
                    backgroundColor: '#0f375f',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['line', 'bar'],
                        textStyle: {
                            color: '#ccc'
                        }
                    },
                    xAxis: {
                        data: category,
                        axisLine: {
                            lineStyle: {
                                color: '#ccc'
                            }
                        }
                    },
                    yAxis: {
                        splitLine: { show: false },
                        axisLine: {
                            lineStyle: {
                                color: '#ccc'
                            }
                        }
                    },
                    series: [
                        {
                            name: 'line',
                            type: 'line',
                            smooth: true,
                            showAllSymbol: true,
                            symbol: 'emptyCircle',
                            symbolSize: 15,
                            data: lineData
                        },
                        {
                            name: 'bar',
                            type: 'bar',
                            barWidth: 10,
                            itemStyle: {
                                barBorderRadius: 5,
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: '#14c8d4' },
                                    { offset: 1, color: '#43eec6' }
                                ])
                            },
                            data: barData
                        },
                        {
                            name: 'line',
                            type: 'bar',
                            barGap: '-100%',
                            barWidth: 10,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: 'rgba(20,200,212,0.5)' },
                                    { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                                    { offset: 1, color: 'rgba(20,200,212,0)' }
                                ])
                            },
                            z: -12,
                            data: lineData
                        },
                        {
                            name: 'dotted',
                            type: 'pictorialBar',
                            symbol: 'rect',
                            itemStyle: {
                                color: '#0f375f'
                            },
                            symbolRepeat: true,
                            symbolSize: [12, 4],
                            symbolMargin: 1,
                            z: -10,
                            data: lineData
                        }
                    ]
                });
                window.addEventListener('resize', function () {
                    myChart.resize();
                });
            }
        }
    }
};
</script>

<style lang="">
.el-row {
    margin-bottom: 20px;
}
.el-col {
    border-radius: 5px;
}
</style>