<template>
    <div style="width: 90%; margin: 0 auto">
        <el-radio-group v-model="viewType" @change="handleViewTypeChange">
            <el-radio-button label="单科考试"></el-radio-button>
            <el-radio-button label="综合考试"></el-radio-button>
            <el-radio-button label="纵向对比"></el-radio-button>
        </el-radio-group>
        <div ref="singleTestView">
            <el-button type="primary" @click.native="handleMore" icon="el-icon-plus" style="float: right">查看更多
            </el-button>
            <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto" highlight-current-row>
                <el-table-column align="center" min-width="40%" prop="name" label="考试名称"></el-table-column>
                <el-table-column align="left" min-width="25%" prop="subjectName" label="学科"></el-table-column>
                <el-table-column align="left" min-width="25%" prop="createUserName" label="创建人"></el-table-column>
                <el-table-column align="left" min-width="50%" prop="createTime" :formatter="dateFormat"
                                 label="创建时间"></el-table-column>
                <el-table-column align="left" min-width="50%" prop="scanTime" :formatter="dateFormat"
                                 label="扫描时间"></el-table-column>
                <el-table-column align="center" min-width="130%">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click.native="handleCheck(scope.$index,scope.row)"
                                   style="float: left;">成绩单
                        </el-button>
                        <el-button size="mini" type="info"
                                   @click.native="handleQuestionStatistics(scope.$index,scope.row)"
                                   style="float: left;">试题分析
                        </el-button>
                        <el-button size="mini" type="success" @click.native="handleStatistics(scope.$index,scope.row)"
                                   style="float: left;">单题统计
                        </el-button>
                        <el-button size="mini" type="danger" @click.native="handleComparison(scope.$index,scope.row)"
                                   style="float: left">班级对比
                        </el-button>
                        <el-button size="mini" type="warning"
                                   @click.native="handleKnowledgeStatistics(scope.$index,scope.row)"
                                   style="float: left;">知识点
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination-container">
                <el-pagination
                    :current-page="listQuery.pageNum"
                    :page-sizes="[10,20,30, 50]"
                    :page-size="listQuery.pageSize"
                    :total="total"
                    background
                    layout="total, sizes, prev, pager, next, jumper"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"/>
            </div>
        </div>
        <div ref="examGroupView" style="display: none">
            <el-button type="primary" @click.native="handleMore2" icon="el-icon-plus" style="float: right"
                       v-text="more">查看更多
            </el-button>
            <el-table :data="tableDataExamGroup" :border=true stripe style="width:100%; margin: auto">
                <el-table-column align="left" prop="name" label="考试名称" :xs="4" :sm="4" :md="4"
                                 :lg="3"></el-table-column>
                <el-table-column align="left" prop="createUserName" label="创建人" :xs="4" :sm="5" :md="4"
                                 :lg="3"></el-table-column>
                <el-table-column align="left" prop="createTime" label="创建时间" :formatter="dateFormat" :xs="4" :sm="5"
                                 :md="4"
                                 :lg="3"></el-table-column>
                <el-table-column align="center" label="动作" :xs="10" :sm="10" :md="4" :lg="3" min-width="200%">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click.native="handlePrint(scope.$index,scope.row)">成绩单
                        </el-button>
                        <el-button size="mini" type="success" @click.native="handlePrint2(scope.$index,scope.row)">学科排名
                        </el-button>
                        <el-button size="mini" type="danger" style="display: none"
                                   @click.native="handlePrint3(scope.$index,scope.row)">贡献率
                        </el-button>
                        <el-button size="mini" type="warning" @click.native="handlePrint4(scope.$index,scope.row)">
                            班级排名
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination-container">
                <el-pagination
                    :page-sizes="[5,10,20,30, 50]"
                    :current-page="listQuery.page"
                    :page-size="listQuery.pageSize"
                    :total="total"
                    background
                    layout="total, sizes, prev, pager, next, jumper"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"/>
            </div>
        </div>
        <div ref="verticalView" style="display: none">
            <el-select v-model="listQuery.subjectID" @change="handleSubjectChange" style="float: left" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
            </el-select>
            <el-select v-model="listQuery.gradeID" @change="handleSubjectChange" style="float: left" placeholder="请选择">
                <el-option
                    v-for="item in optionsGrade"
                    :key="item.value"
                    :label="item.text"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" @click.native="handleVerticalMore" icon="el-icon-plus" style="float: right">查看更多
            </el-button>
            <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto" highlight-current-row>
                <el-table-column align="center" min-width="40%" prop="name" label="考试名称"></el-table-column>
                <el-table-column align="left" min-width="25%" prop="createUserName" label="创建人"></el-table-column>
                <el-table-column align="left" min-width="50%" prop="createTime" :formatter="dateFormat"
                                 label="创建时间"></el-table-column>
                <!--<el-table-column align="left" min-width="25%" prop="subjectName" label="学科"></el-table-column>-->
                <el-table-column align="center" min-width="20%">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.check"></el-checkbox>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination-container">
                <el-pagination
                    :current-page="listQuery.pageNum"
                    :page-sizes="[10,20,30, 50]"
                    :page-size="listQuery.pageSize"
                    :total="total"
                    background
                    layout="total, sizes, prev, pager, next, jumper"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"/>
            </div>
            <br/>
            <el-button size="mini" type="primary" @click.native="handleVerticalAnalysis">确定
            </el-button>
            <el-button size="mini" type="success" @click.native="handleCancel">取消
            </el-button>
        </div>
    </div>
</template>
<script>
    import {getList, getVerticalList} from '@/api/scoreAnalysis/testList'
    import {getUserGrade} from '@/api/school/school'
    import {getList as getExamGroupList} from '@/api/exam/examGroup.js'
    import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
    import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
    import {getUserSubject} from '@/api/subject/subject'

    export default {
        components: {
            ElButton,
            ElOption,
            ElFormItem,
            ElSelectDropdown
        },
        data() {
            return {
                isGroup: '',
                total: 0,
                viewType: '单科考试',
                more: '查看更多',
                listQuery: {
                    isAll: false,
                    pageNum: 1,
                    pageSize: 10,
                    subjectID: 0,
                    gradeID: 0,
                },
                tableData: [],
                tableDataExamGroup: [],
                options: [],
                optionsGrade: [],
                testIDs: [],
                multiTestIDs: [],
            }
        },
        created() {
            this.isGroup = this.$route.query.isGroup
        },
        mounted() {
            if (this.isGroup == null || this.isGroup == undefined || this.isGroup !== 1) {
                this.initTable();
            } else if (this.isGroup == 1) {
                this.viewType = '综合考试'
                this.handleViewTypeChange(this.type)
            }
        },
        methods: {
            initTable() {
                getList(this.listQuery).then(response => {
                    this.tableData = response.data.list;
                    this.total = response.data.total;
                })
            },
            initTableForExamGroup() {
                getExamGroupList(this.listQuery).then(response => {
                    this.tableDataExamGroup = response.data.list
                    this.total = response.data.total
                })
            },
            initTableVertical() {
                getUserSubject().then(response => {
                    this.options = response.data
                    this.options.push({name:"综合",id:0})
                })
                getUserGrade().then(response => {
                    this.optionsGrade = response.data;
                    this.optionsGrade.push({text:"年级",value:0})
                })
                getVerticalList(this.listQuery).then(response => {
                    var gradeID = this.listQuery.gradeID;
                    if (gradeID != 0) {
                        var temp = response.data.list;
                        this.tableData = temp.filter(function (item) {
                            return item.gradeID == gradeID;
                        })
                        this.total = this.tableData.length;
                        this.tableData = this.tableData.slice((this.listQuery.pageNum-1)*this.listQuery.pageSize, this.listQuery.pageNum*this.listQuery.pageSize)
                    } else {
                        this.tableData = response.data.list;
                        this.total = response.data.total;
                    }
                })
            },
            handleSubjectChange() {
                this.initTableVertical()
            },
            handleVerticalAnalysis() {
                for (let i = 0; i < this.tableData.length; i++) {
                    if (this.tableData[i].check == true && this.listQuery.subjectID != 0) {
                        this.testIDs.push(this.tableData[i].id);
                    } else if (this.tableData[i].check == true) {
                        this.multiTestIDs.push(this.tableData[i].id);
                    }
                }
                this.testIDs = this.testIDs.filter(function(element,index,self){
                        return self.indexOf(element) === index;
                });

              this.$router.push({path: "vertical", query: {testIDs: this.testIDs,multiTestIDs: this.multiTestIDs}});
            },
            handleCancel(){
              console.log(this.tableData)
            },
            handleSizeChange(val) {
                this.listQuery.pageSize = val
                if (this.viewType == '单科考试') {
                    this.initTable()
                } else if (this.viewType == '综合考试') {
                    this.initTableForExamGroup()
                } else {
                    this.initTableVertical()
                }
            },
            handleCurrentChange(val) {
                this.listQuery.pageNum = val
                if (this.viewType == '单科考试') {
                    this.initTable()
                } else if (this.viewType == '综合考试') {
                    this.initTableForExamGroup()
                } else {
                    for (let i = 0; i < this.tableData.length; i++) {
                        if (this.tableData[i].check == true && this.listQuery.subjectID != 0) {
                            this.testIDs.push(this.tableData[i].id);
                        } else if (this.tableData[i].check == true) {
                            this.multiTestIDs.push(this.tableData[i].id);
                        }
                    }
                    this.initTableVertical()
                }
            },
            handleMore() {
                this.listQuery.isAll = true
                this.initTable()
            },
            handleMore2() {
                if (this.more == '查看更多') {
                    this.more = '一周考试'
                    this.listQuery.isAll = true
                    this.initTableForExamGroup()
                } else {
                    this.listQuery.isAll = false
                    this.more = '查看更多'
                    this.initTableForExamGroup()
                }
            },
            handleVerticalMore() {
                this.listQuery.isAll = true
                this.initTableVertical()
            },
            handleCheck(index, row) {
                this.$router.push({path: "/scoreAnalysis/test/", query: {testID: row.id, name: row.name}})
            },
            handleStatistics(index, row) {
                this.$router.push({path: "/scoreAnalysis/statistics/", query: {testID: row.id, name: row.name}})
            },
            handleQuestionStatistics(index, row) {
                this.$router.push({path: "/scoreAnalysis/diffAndDif/", query: {testID: row.id, name: row.name, subjectID: row.subjectID}})
            },
            handleComparison(index, row) {
                this.$router.push({path: "/scoreAnalysis/classesComparison/" + row.id})
            },
            dateFormat(row, column, cellValue, index) {
                const daterc = row[column.property]
                return daterc.substr(0, 10) + ' ' + daterc.substr(11, 8)
            },
            handlePrint(index, row) {
                this.$router.push({
                    path: '/exam/examGroupToPrint',
                    query: {multiTestID: row.id, schoolID: row.schoolID, testName: row.name}
                })
            },
            handlePrint2(index, row) {
                // this.$router.push({path: '/exam/examAnalysisToPrint', query: {multiTestID: row.id, schoolID: row.schoolID}})
                this.$router.push({
                    path: '/exam/subjectRanking',
                    query: {multiTestID: row.id, schoolID: row.schoolID, name: row.name}
                })
            },
            /*打印各种指标*/
            handlePrint3(index, row) {
                this.$router.push({path: '/exam/quotaToPrint', query: {multiTestID: row.id}})
            },
            /*打印班级的平均分 以及排名*/
            handlePrint4(index, row) {
                this.$router.push({path: '/exam/classes/average', query: {multiTestID: row.id}})
            },
            handleViewTypeChange(val) {
                this.listQuery.pageNum = 1
                this.listQuery.pageSize = 10
                this.listQuery.isAll = false
                if (val == '单科考试') {
                    this.$refs.singleTestView.style.display = 'block'
                    this.$refs.examGroupView.style.display = 'none'
                    this.$refs.verticalView.style.display = 'none'
                    this.initTable()
                } else if (val == '综合考试') {
                    this.$refs.singleTestView.style.display = 'none'
                    this.$refs.examGroupView.style.display = 'block'
                    this.$refs.verticalView.style.display = 'none'
                    this.initTableForExamGroup()
                } else {
                    this.$refs.singleTestView.style.display = 'none'
                    this.$refs.examGroupView.style.display = 'none'
                    this.$refs.verticalView.style.display = 'block'
                    this.initTableVertical()
                }
            },
            handleKnowledgeStatistics(index, row) {
                this.$router.push({
                    path: "/scoreAnalysis/knowledgeStatistics/",
                    query: {testID: row.id, name: row.name}
                })
            }
        }
    }
</script>
