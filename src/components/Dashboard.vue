<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height: 252px">
                    <div class="user-info">
                        <img
                            src="../assets/logo.png"
                            alt=""
                            class="user-avator"
                        />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{ name }}</div>
                            <div>{{ role }}</div>
                        </div>
                    </div>
                </el-card>
                <el-card shadow="hover" style="height: 252px">
                    <div slot="header" class="clearfix">
                        <span>语言详情</span>
                    </div>
                    Vue
                    <el-progress
                        :percentage="71.3"
                        color="#42b983"
                    ></el-progress
                    >JavaScript
                    <el-progress
                        :percentage="24.1"
                        color="#f1e05a"
                    ></el-progress
                    >CSS <el-progress :percentage="13.7"></el-progress>HTML
                    <el-progress
                        :percentage="5.9"
                        color="#f56c6c"
                    ></el-progress>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card
                            shadow="hover"
                            :body-style="{ padding: '0px' }"
                        >
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">1234</div>
                                    <div>用户访问量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card
                            shadow="hover"
                            :body-style="{ padding: '0px' }"
                        >
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">321</div>
                                    <div>系统消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card
                            shadow="hover"
                            :body-style="{ padding: '0px' }"
                        >
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-card shadow="hover" style="height: 403px">
                    <div slot="header" class="clearfix">
                        <span>待办事项</span>
                        <el-button
                            style="float: right; padding: 3px 0"
                            type="text"
                            >添加</el-button
                        >
                    </div>
                    <el-table
                        :show-header="false"
                        :data="todoList"
                        border
                        style="width: 100%"
                    >
                        <el-table-column type="index" width="50">
                        </el-table-column>
                        <el-table-column width="40">
                            <template slot-scope="scope">
                                <el-checkbox
                                    v-model="scope.row.status"
                                ></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template slot-scope="scope">
                                <div
                                    class="todo-item"
                                    :class="{
                                        'todo-item-del': scope.row.status,
                                    }"
                                >
                                    {{ scope.row.title }}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column width="60">
                            <template>
                                <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <div ref="chart" style="width: 100%; height: 220px"></div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <div ref="chart2" style="width: 100%; height: 220px"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>

export default {
    name: "dashboard",
    data() {
        return {
            todoList: [
                {
                    title: "今天要修复100个bug",
                    status: false,
                },
                {
                    title: "今天要修复100个bug",
                    status: false,
                },
                {
                    title: "今天要写100行代码加几个bug吧",
                    status: false,
                },
                {
                    title: "今天要修复100个bug",
                    status: false,
                },
                {
                    title: "今天要修复100个bug",
                    status: true,
                },
                {
                    title: "今天要写100行代码加几个bug吧",
                    status: true,
                },
            ],
        };
    },
    computed: {
        name() {
            return this.$store.state.username;
        },
        role() {
            return this.name === "admin" ? "超级管理员" : "普通用户";
        },
    },
    mounted() {
        this.getEchartData();
        this.getEchartData2();
    },
    methods: {
        getEchartData() {
            const chart = this.$refs.chart;
            if (chart) {
                const myChart = this.$echarts.init(chart);
                myChart.setOption({
                    title: {
                        text: "商品销售状况",
                        left: "center",
                    },
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    legend: {
                        data: ["家电", "百货", "食品"],
                        left: "right",
                    },
                    grid: {
                        left: "0%",
                        right: "4%",
                        bottom: "3%",
                        containLabel: true,
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun",
                            ],
                            axisTick: {
                                alignWithLabel: true,
                            },
                        },
                    ],
                    yAxis: [
                        {
                            type: "value",
                        },
                    ],
                    series: [
                        {
                            name: "家电",
                            type: "bar",
                            // barWidth: '60%',
                            barGap: 0,
                            label: {
                                show: true,
                                position: "top",
                            },
                            data: [10, 52, 200, 334, 390, 330, 220],
                        },
                        {
                            name: "百货",
                            type: "bar",
                            // barWidth: '60%',
                            label: {
                                show: true,
                                position: "top",
                            },
                            data: [110, 121, 202, 34, 360, 330, 270],
                        },
                        {
                            name: "食品",
                            type: "bar",
                            barWidth: "%",
                            label: {
                                show: true,
                                position: "top",
                            },
                            data: [110, 152, 230, 134, 370, 230, 120],
                        },
                    ],
                });
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }
        },
        getEchartData2(){
            const chart = this.$refs.chart2;
            if (chart) {
                const myChart = this.$echarts.init(chart);
                myChart.setOption({
                    title: {
                        text: "商品销售状况",
                        left: "center",
                    },
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    legend: {
                        data: ["家电", "百货", "食品"],
                        left: "right",
                    },
                    grid: {
                        left: "0%",
                        right: "4%",
                        bottom: "3%",
                        containLabel: true,
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun",
                            ],
                            axisTick: {
                                alignWithLabel: true,
                            },
                        },
                    ],
                    yAxis: [
                        {
                            type: "value",
                        },
                    ],
                    series: [
                        {
                            name: "家电",
                            type: "line",
                            // barWidth: '60%',
                            barGap: 0,
                            label: {
                                show: true,
                                position: "top",
                            },
                            data: [10, 52, 200, 334, 390, 330, 220],
                        },
                        {
                            name: "百货",
                            type: "line",
                            // barWidth: '60%',
                            label: {
                                show: true,
                                position: "top",
                            },
                            data: [110, 121, 202, 34, 360, 330, 270],
                        },
                        {
                            name: "食品",
                            type: "line",
                            barWidth: "%",
                            label: {
                                show: true,
                                position: "top",
                            },
                            data: [110, 152, 230, 134, 370, 230, 120],
                        },
                    ],
                });
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }
        }
    },
};
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
