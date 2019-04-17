<template>
    <div>
        <el-radio-group v-model="verticalType" v-if="flag" @change="handleVerticalTypeChange">
            <el-radio-button label="班级"></el-radio-button>
            <el-radio-button label="学生"></el-radio-button>
        </el-radio-group>
        <!--<el-button label="返回"  @change="handleReturn"></el-button>-->
        <el-button v-if="!flag" type="primary" @click.native="handleReturn">返回
        </el-button>

        <div ref="chartView" id="app" style="width: 98%; margin: 0 auto">
            <div style="width: 100%;">
                <el-select v-model="listQuery.classID" @change="handleClassChange" style="margin-top: 20px"
                           placeholder="请选择">
                    <el-option
                        v-for="item in classesChart"
                        :key="item.value"
                        :label="item.text"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div ref="line" style="width: 92%; height: 500px;">
            </div>
            <div ref="line1" style="width: 92%; height: 500px;">
            </div>
            <div ref="line2" style="width: 92%; height: 500px;">
            </div>
        </div>
        <div ref="tableView" style="display: none; width: 85%; margin: auto">
            <!--<el-radio-group @change="radioChange" v-model="radio" v-if="classes.length<=3">-->
            <!--<el-radio v-for="item in classes" :key="item.value" :label="item.value">-->
            <!--{{ item.text }}-->
            <!--</el-radio>-->
            <!--</el-radio-group>-->
            <!--<el-select v-model="tableQuery.classID" @change="handleClassChange1" style="margin-top: 50px;float: right"-->
                       <!--placeholder="请选择">-->
                <!--<el-option-->
                    <!--v-for="item in classes"-->
                    <!--:key="item.value"-->
                    <!--:label="item.text"-->
                    <!--:value="item.value">-->
                <!--</el-option>-->
            <!--</el-select>-->
            <el-input placeholder="请输入完整姓名/学号" style="float: left;width: 30%;" v-model="tableQuery.keyword"
                      clearable></el-input>
            <el-button type="primary" style="float: left" @click.native="handleSearch">搜索</el-button>
            <el-table :data="tableData" :border=true @sort-change="changeTableSort" @filter-change="filterChange" stripe
                      style="width:100%; margin: auto">
                <el-table-column align="center" prop="studentName" label="姓名"></el-table-column>
                <el-table-column align="center" column-key="id" sortable="custom"
                                 prop="studentNumber" label="学号"></el-table-column>
                <el-table-column align="center" column-key="id" sortable="custom" :filters="classes"
                                 prop="className" label="班级"></el-table-column>
                <el-table-column v-for="(col,index) in cols" min-width="100%" column-key=index sortable="custom"
                                 prop="col.prop" :label="col.label" :type = "index.toString()"
                                 :key="col.prop">
                    <template slot-scope="scope">
                        <span>{{scope.row[col.prop]}}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" column-key="id" sortable="custom"
                                 prop="sumScore" label="成绩和"></el-table-column>
                <el-table-column align="center" column-key="id" sortable="custom"
                                 prop="classRank" label="名次和"></el-table-column>
                <el-table-column align="center" label="图表">
                    <template slot-scope="scope">
                        <el-button type="primary" @click.native="handleCheckStudent(scope.row)"
                                   style="float: left">查看
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination-container">
                <el-pagination
                    :current-page="tableQuery.pageNum"
                    :page-sizes="[5,10,20,30, 50]"
                    :page-size="tableQuery.pageSize"
                    :total="total"
                    background
                    layout="total, sizes, prev, pager, next, jumper"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"/>
            </div>
        </div>
        <div ref="chartView1" id="app1" style="width: 98%; margin: 0 auto">
            <div ref="bar" style="width: 92%; height: 500px; float: left">
            </div>
        </div>
    </div>
</template>

<script>
    import theme from 'echarts/theme/macarons.js'
    import {getVerticalData, getUserClass, getStudentVertical} from '@/api/scoreAnalysis/classesComparison'
    import * as mybar from "element-ui";

    function compare(prop) {
        return function (obj1, obj2) {
            var val1 = parseFloat(obj1[prop]);
            var val2 = parseFloat(obj2[prop]);
            if (val1 < val2) {
                return -1;
            } else if (val1 > val2) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    function comparedesc(prop) {
        return function (obj1, obj2) {
            var val1 = parseFloat(obj1[prop]);
            var val2 = parseFloat(obj2[prop]);
            if (val1 > val2) {
                return -1;
            } else if (val1 < val2) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    require('echarts/theme/macarons');
    export default {
        data() {
            return {
                tableData: [],
                tableDataTemp:[],
                flag: true,
                cols: [],
                listQuery: {
                    testIDs: [],
                    multiTestIDs: [],
                    classID: '',
                },
                tableQuery: {
                    testIDs: [],
                    multiTestIDs: [],
                    pageNum: 1,
                    pageSize: 10,
                    classID: '',
                    classIDs: [],
                    keyword: '',
                },
                student: {
                    rank: [],
                    grade: []
                },
                classes: [],
                classesChart: [],
                total: 0,
                currentClass: {},//当前班级
                analysis: [],
                verticalType: '班级',
                checkStudent: false,
            }
        },
        mounted() {
            console.log("moun")
            this.initClass()
        },
        created() {
            this.listQuery.testIDs = this.$route.query.testIDs;
            this.tableQuery.testIDs = this.$route.query.testIDs;
            this.listQuery.multiTestIDs = this.$route.query.multiTestIDs;
            this.tableQuery.multiTestIDs = this.$route.query.multiTestIDs;
            this.listQuery.testIDs.sort();
            this.tableQuery.testIDs.sort()
            this.listQuery.multiTestIDs.sort()
            this.tableQuery.multiTestIDs.sort()
            console.log("create")
            this.initClass()
        },
        methods: {
            initClass() {
                if (this.$route.query.testIDs != undefined && this.$route.query.testIDs.length > 0) {
                    getUserClass({testID: this.listQuery.testIDs[0], type: 0}).then(response => {
                        this.classes = response.data;
                        this.classesChart = response.data;
                        this.classes.push({value:0,text:'全部'})

                            this.tableQuery.classIDs[0] = 0

                        this.listQuery.classID = this.classes[0].value;
                        this.init();
                    });
                } else {
                    getUserClass({testID: this.listQuery.multiTestIDs[0], type: 1}).then(response => {
                        this.classesChart = response.data;
                        this.classes = response.data;
                        this.classes.push({value:-1,text:'文科'},
                            {value:0,text:'理科'},
                            {value:-2,text:'理科实验'})
                        this.listQuery.classID = this.classes[0].value;
                        this.tableQuery.classIDs[0] = 0
                        this.init();
                    });
                }
            },
            init() {
                getVerticalData(this.listQuery).then(response => {
                    this.analysis = response.data.analysis;
                    let object = new Object();
                    for (let i = 0; i < this.classes.length; i++) {
                        if (i == 0) {
                            object[this.classes[i].text] = true
                        } else {
                            object[this.classes[i].text] = false
                        }
                    }
                    // var sum = 0;
                    // for (let j = 0; j < this.analysis[0].average.length; j++) {
                    //     sum += this.analysis[0].average[j];
                    // }
                    // var average = sum / this.analysis[0].average.length;
                    // var s = 0;
                    // for (let j = 0; j < this.analysis[0].average.length; j++) {
                    //     s += (this.analysis[0].average[j] - average) * (this.analysis[0].average[j] - average);
                    // }
                    // s = Math.sqrt(s / this.analysis[0].average.length);
                    // for (let j = 0; j < this.analysis[0].average.length; j++) {
                    //     this.z.push((this.analysis[0].average[j] - average) / s);
                    // }
                    // console.log(this.z)
                    this.currentClass = object
                    this.drawLine();
                    this.drawLine1();
                    this.drawLine2();
                })
            },
            handleSizeChange(val) {
                this.tableQuery.pageSize = val
                this.tableData = this.tableDataTemp.slice((this.tableQuery.pageNum - 1) * this.tableQuery.pageSize, this.tableQuery.pageNum * this.tableQuery.pageSize)
            },
            handleCurrentChange(val) {
                this.tableQuery.pageNum = val
                this.tableData = this.tableDataTemp.slice((this.tableQuery.pageNum - 1) * this.tableQuery.pageSize, this.tableQuery.pageNum * this.tableQuery.pageSize)
            },
            handleSearch() {
                // this.tableQuery.keyword = this.tableQuery.keyword.trim()
                this.initTable()
            },
            initTable() {
                getStudentVertical(this.tableQuery).then(response => {
                    this.tableData = response.data.list;
                    this.tableDataTemp = response.data.list;
                    var studentID = this.tableData[0].studentID;
                    if (this.tableQuery.keyword != '') {
                        this.tableData = this.tableData.filter(function(item){
                            return item.id == studentID;
                        })
                    } else {
                        this.tableData.sort(compare('classRank'))
                        this.tableData = this.tableData.slice((this.tableQuery.pageNum - 1) * this.tableQuery.pageSize, this.tableQuery.pageNum * this.tableQuery.pageSize)
                    }
                    this.cols = response.data.cols;
                    this.total = response.data.total;
                })
            },
            getClasses() {
                let array = new Array();
                for (let i = 0; i < this.classes.length; i++) {
                    array.push(this.classes[i].text);
                }
                return array
            },
            getNumber() {
                let array = new Array();
                for (let i = 1; i <= this.analysis[0].average.length; i++) {
                    array.push("第" + i + "次");
                }
                return array;
            },
            getStudentNumber() {
                let array = new Array();
                for (let i = 1; i <= this.cols.length; i++) {
                    if (i % 2 != 0) {
                        array.push("第" + Math.ceil(i / 2) + "次");
                    }
                }
                return array;
            },
            handleVerticalTypeChange(val) {
                if (val == '学生') {
                    this.initTable();
                    this.$refs.tableView.style.display = "block";
                    this.$refs.chartView.style.display = "none";
                } else {
                    this.$refs.tableView.style.display = "none";
                    this.$refs.chartView.style.display = "block";
                }
            },
            handleClassChange() {
                this.init()
            },
            // handleClassChange1() {
            //     this.initTable()
            // },
            handleCheckStudent(row) {
                this.student.grade = [];
                this.student.rank = [];
                for (let i = 1; i <= this.cols.length; i++) {
                    if (i % 2 != 0) {
                        this.student.grade.push(row[this.cols[i - 1].prop]);
                    } else {
                        this.student.rank.push(row[this.cols[i - 1].prop]);
                    }
                }
                this.$refs.chartView1.style.display = "block";
                this.$refs.tableView.style.display = "none";
                this.$refs.chartView.style.display = "none";
                this.flag = false;
                this.drawBar();
            },
            handleReturn() {
                this.$refs.chartView1.style.display = "none";
                this.$refs.tableView.style.display = "block";
                this.$refs.chartView.style.display = "none";
                this.flag = true;
            },
            changeTableSort(param) {
                if (param.prop === 'col.prop'){
                    if (param.order == 'ascending') {
                        this.tableDataTemp.sort(compare(this.cols[param.column.type].prop))
                        this.tableData = this.tableDataTemp;
                        this.tableData = this.tableData.slice((this.tableQuery.pageNum - 1) * this.tableQuery.pageSize, this.tableQuery.pageNum * this.tableQuery.pageSize)
                    } else {
                        this.tableDataTemp.sort(comparedesc(this.cols[param.column.type].prop))
                        this.tableData = this.tableDataTemp;
                        this.tableData = this.tableData.slice((this.tableQuery.pageNum - 1) * this.tableQuery.pageSize, this.tableQuery.pageNum * this.tableQuery.pageSize)
                    }
                } else {
                    if (param.order == 'ascending') {
                        this.tableData = this.tableDataTemp;
                        this.tableData.sort(compare(param.prop))
                        this.tableData = this.tableData.slice((this.tableQuery.pageNum - 1) * this.tableQuery.pageSize, this.tableQuery.pageNum * this.tableQuery.pageSize)
                    } else {
                        this.tableData = this.tableDataTemp;
                        this.tableData.sort(comparedesc(param.prop))
                        this.tableData = this.tableData.slice((this.tableQuery.pageNum - 1) * this.tableQuery.pageSize, this.tableQuery.pageNum * this.tableQuery.pageSize)
                    }
                }
            },
            filterChange(classes) {
                this.tableQuery.classIDs = [];
                if (classes.id.length == 1 && classes.id[0] == 0 && this.$route.query.testIDs.length > 0) {
                    for (let i = 0; i<this.classes.length-1; i++) {
                        this.tableQuery.classIDs.push(this.classes[i].value)
                    }
                } else {
                    this.tableQuery.classIDs = classes.id
                }
                /*修改页号为1,防止第二页没有数据不显示*/
                this.tableQuery.pageNum = 1
                this.initTable()
            },
            // getLegendsSeries() {
            //     var series = [];
            //     series.push({
            //         name: '平均分Z分值',
            //         type: 'line',
            //         data: this.z,
            //     },{
            //         name: '平均分',
            //         type: 'line',
            //         data: this.analysis[0].average,
            //     }, {
            //         name: '及格率',
            //         type: 'line',
            //         data: this.analysis[0].pass,
            //     }, {
            //         name: '良好率',
            //         type: 'line',
            //         data: this.analysis[0].good,
            //     }, {
            //         name: '优秀率',
            //         type: 'line',
            //         data: this.analysis[0].outstanding,
            //     })
            //     return series
            // },
            drawLine() {
                var line = this.$refs.line
                var that = this;
                /*绘制*/
                if (line) {
                    let myline = this.$echarts.init(line)
                    myline.setOption({
                        title: {
                            text: '纵向对比Z分值',
                            // subtext: this.listQuery.classID
                        },
                        tooltip: {
                            trigger: 'axis',
                        },
                        legend: {
                            data: ['平均分Z分值'],
                        },
                        toolbox: {
                            show: true,
                            feature: {
                                mark: {show: true},
                                dataView: {show: true, readOnly: false},
                                magicType: {show: true, type: ['bar', 'line']},
                                restore: {show: true},
                                saveAsImage: {show: true}
                            }
                        },
                        calculable: true,
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: this.getNumber(),
                                axisLabel: {
                                    interval: 0,
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                            }
                        ],
                        series: [{
                            name: '平均分Z分值',
                            type: 'line',
                            avoidLabelOverlap: false,
                            data: this.analysis[0].maxScore,
                        }]
                    })
                    $(window).resize(function() {
                        //重置容器高宽
                        myline.resize();
                    });
                }
            },
            drawLine1() {
                var line = this.$refs.line1
                var that = this;
                /*绘制*/
                if (line) {
                    let myline = this.$echarts.init(line)
                    myline.setOption({
                        title: {
                            text: '纵向对比平均分',
                        },
                        tooltip: {
                            trigger: 'axis',
                        },
                        legend: {
                            data: ['平均分'],
                        },
                        toolbox: {
                            show: true,
                            feature: {
                                mark: {show: true},
                                dataView: {show: true, readOnly: false},
                                magicType: {show: true, type: ['bar', 'line']},
                                restore: {show: true},
                                saveAsImage: {show: true}
                            }
                        },
                        calculable: true,
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: this.getNumber(),
                                axisLabel: {
                                    interval: 0,
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                            }
                        ],
                        series: [{
                            name: '平均分',
                            type: 'line',
                            data: this.analysis[0].average,
                        }]
                    })
                    $(window).resize(function() {
                        //重置容器高宽
                        myline.resize();
                    });
                }

            },
            drawLine2() {
                var line = this.$refs.line2
                var that = this;
                /*绘制*/
                console.log(this.$refs.line2.style.width)
                if (line) {
                    let myline = this.$echarts.init(line)

                    myline.setOption({
                        title: {
                            text: '纵向对比三率',
                        },
                        tooltip: {
                            trigger: 'axis',
                        },
                        legend: {
                            data: ['及格率', '良好率', '优秀率'],
                        },
                        toolbox: {
                            show: true,
                            feature: {
                                mark: {show: true},
                                dataView: {show: true, readOnly: false},
                                magicType: {show: true, type: ['bar', 'line']},
                                restore: {show: true},
                                saveAsImage: {show: true}
                            }
                        },
                        calculable: true,
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: this.getNumber(),
                                axisLabel: {
                                    interval: 0,
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                            }
                        ],
                        series: [{
                            name: '及格率',
                            type: 'line',
                            data: this.analysis[0].pass,
                        }, {
                            name: '良好率',
                            type: 'line',
                            data: this.analysis[0].good,
                        }, {
                            name: '优秀率',
                            type: 'line',
                            data: this.analysis[0].outstanding,
                        }]
                    });
                    $(window).resize(function() {
                        //重置容器高宽
                        myline.resize();
                    });
                }

            },
            drawBar() {
                var bar = this.$refs.bar
                var that = this;
                /*绘制*/
                console.log(this.$refs.bar)
                if (bar) {
                    let mybar = this.$echarts.init(bar)
                    mybar.setOption({
                        title: {
                            text: '学生纵向对比',
                            // subtext: this.listQuery.classID
                        },
                        tooltip: {
                            trigger: 'axis',
                        },
                        legend: {
                            data: ['成绩', '名次'],
                        },
                        toolbox: {
                            show: true,
                            feature: {
                                mark: {show: true},
                                dataView: {show: true, readOnly: false},
                                magicType: {show: true, type: ['bar', 'line']},
                                restore: {show: true},
                                saveAsImage: {show: true}
                            }
                        },
                        calculable: true,
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: this.getStudentNumber(),
                                axisLabel: {
                                    interval: 0,
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                            }
                        ],
                        series: [{
                            name: '成绩',
                            type: 'line',
                            data: this.student.grade,
                        }, {
                            name: '名次',
                            type: 'line',
                            data: this.student.rank,
                        }]
                    })
                    $(window).resize(function() {
                        //重置容器高宽
                        mybar.resize();
                    });
                }

            },
        }
    }
</script>
