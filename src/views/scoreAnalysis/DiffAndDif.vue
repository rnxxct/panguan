<template>
    <div style="width: 85%; margin: 0 auto">
        <el-button type="success" style="float: right; margin-right: 10px;" @click.native="handleExport">导出excel
        </el-button>
        <el-table :data="tableData" :cell-style="tableCellStyle" :border=true stripe style="width:100%; margin: auto"
                  highlight-current-row>
            <el-table-column align="left" min-width="25%" prop="name" label="题目"></el-table-column>
            <el-table-column align="left" min-width="85%" prop="difficulty" label="知识点">
                <template slot-scope="scope">
                    <el-select v-model="scope.row.knowledgeID"
                               multiple
                               filterable
                               allow-create
                               default-first-option
                               placeholder="请选择知识点"
                               @change="handleChange"
                               @remove-tag="handleRemove($event,scope.row)"
                               @visible-change="changeValue($event,scope.row)">
                        <el-option
                            v-for="item in options5"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column align="left" min-width="20%" prop="difficulty" label="难度"></el-table-column>
            <el-table-column align="left" min-width="20%" prop="difference" label="区分度"></el-table-column>
            <el-table-column align="left" min-width="80%" prop="suggestion" label="建议">
                <template slot-scope="scope">
                    <el-input type="textarea" autosize="true" v-model="scope.row.suggestion"
                              v-on:change="handleSuggestionChange(scope.index,scope.row)"></el-input>
                </template>
            </el-table-column>
            <el-table-column align="left" min-width="85%" prop="difficulty" label="下次知识点">
                <template slot-scope="scope">
                    <el-select v-model="scope.row.nextKnowledgeID"
                               multiple
                               filterable
                               allow-create
                               default-first-option
                               placeholder=""
                               remote
                               @change="handleChange1"
                               @remove-tag="handleRemove1($event,scope.row)"
                               @visible-change="changeValue1($event,scope.row)">
                        <el-option
                            v-for="item in options5"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-cascader
                        expand-trigger="hover"
                        :options="options6"
                        @visible-change="handleFocus($event,scope.$index)"
                        @change="handleCascaderChange($event,scope.$index)"
                        v-model="scope.row.children"
                        change-on-select
                        filterable
                        clearable
                        placeholder="请选择知识点">
                    </el-cascader>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="请输入细目表名称" :visible.sync="isName" width="20%">
            <div slot="footer" class="dialog-footer">
                <el-input v-model="editDifParams.breakdownName" type="text" size="size"
                          style="width: 200px;"></el-input>
                <el-button @click="isName=false">确 定</el-button>
                <!--<el-button type="primary" @click.native="toEdit">确 定</el-button>-->
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import {getDif, updateSuggestion, difChange} from '@/api/scoreAnalysis/testList'
    import {getBreakdownName} from '@/api/exam/breakdown'
    import {getKnowledge} from '@/api/exam/updateExam' //srcheke
    import {getTreeOfSubjectB} from  '@/api/subject/knowledgeOfSubject'
    import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
    import ElOption from "../../../node_modules/element-ui/packages/select/src/option";

    export default {
        components: {
            ElOption,
            ElFormItem,
            ElSelectDropdown
        },
        data() {
            return {
                options6: [],
                red: 0.6,
                yellow: 0.7,
                options5: [],//srcheke
                listQuery: {
                    testID: 0,
                },
                tableData: [],
                filename: '',
                editParams: {
                    subjectID: 0,
                },
                editSuggestionParams: {
                    id: 0,
                    suggestion: '',
                },
                editDifParams: {
                    breakdownName: '',
                    preNext: 0,
                    type: 0,
                    id: 0,
                    knowledgeIDs: [],
                },
                isName: false,
                change: false,
                change_1: false,
                // flag: false,
            }
        },
        created() {
            this.listQuery.testID = this.$route.query.testID;
            this.filename = this.$route.query.name;
            this.editParams.subjectID = this.$route.query.subjectID
            this.initTable();
        },
        methods: {
            tableCellStyle({row, column, rowIndex, columnIndex}) {
                if (column.label == '难度') {
                    if (row.difficulty < this.red) {
                        return 'background-color: #F56C6C'
                    } else if (row.difficulty >= this.red && row.difficulty < this.yellow) {
                        return 'background-color: yellow'
                    } else {
                        return 'background-color: lightgreen'
                    }

                }
            },
            initTable() {
                getTreeOfSubjectB(this.editParams).then(res => {
                    this.options6 = res.data.children;
                })
                getKnowledge(this.editParams).then(response => {
                    this.options5 = response.data;
                });//srcheke
                getDif(this.listQuery).then(response => {
                    this.tableData = response.data;
                    for (let i = 0; i < this.tableData.length; i++) {
                        if (this.tableData[i].difficulty < this.red) {
                            if (this.tableData[i].suggestion == null) {
                                this.tableData[i].suggestion = '建议加练'
                            }
                            // if (this.tableData[i].nextKnowledgeID.length == 0) {
                            //     this.tableData[i].nextKnowledgeID = this.tableData[i].knowledgeID
                            // }
                        } else if (this.tableData[i].difficulty >= this.red && this.tableData[i].difficulty < this.yellow) {
                            if (this.tableData[i].suggestion == null) {
                                this.tableData[i].suggestion = '可考虑加练'
                            }
                        } else {
                            console.log("green")
                        }
                    }
                })
                getBreakdownName(this.listQuery).then(response => {
                    this.editDifParams.breakdownName = response.data;
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            },
            handleExport() {
                var list = this.tableData;
                import('@/vendor/Export2Excel').then(excel => {
                    const tHeader = ['题目', '知识点', '难度', '区分度', '建议', '下次知识点']
                    const filterVal = ['name', 'knowledgePoint', 'difficulty', 'difference', 'suggestion', 'nextKnowledgePoint']
                    const data = this.formatJson(filterVal, list)
                    excel.export_json_to_excel({
                        header: tHeader,
                        data,
                        filename: this.filename + "_" + '试题分析',
                        autoWidth: this.autoWidth
                    })
                })
            },

            handleChange: function (callback) {
                this.change = true;
            },
            changeValue: function (callback, row) {
                console.log(row)
                this.editDifParams.preNext = 0;
                this.editDifParams.type = 0;
                this.editDifParams.id = row.id;
                this.editDifParams.knowledgeIDs = row.knowledgeID;
                if (!callback && this.change == true) {
                    console.log("修改pre")
                    difChange(this.editDifParams).then(response => {
                        console.log(response)
                    });
                    this.change = false;
                }
            },
            handleRemove: function (callback, row) {
                this.editDifParams.preNext = 0;
                this.editDifParams.type = 1;
                this.editDifParams.id = row.id;
                this.editDifParams.knowledgeIDs = [];
                this.editDifParams.knowledgeIDs.push(callback);
                difChange(this.editDifParams).then(response => {
                    console.log(response)
                });
            },

            handleChange1: function (callback) {
                this.change_1 = true;
            },
            changeValue1: function (callback, row) {
                this.editDifParams.preNext = this.$route.query.testID;
                this.editDifParams.type = 0;
                this.editDifParams.id = row.id;
                this.editDifParams.knowledgeIDs = row.nextKnowledgeID;
                if (!callback && this.change_1) {
                    console.log("修改next")
                    if (this.editDifParams.breakdownName == '' || this.editDifParams.breakdownName == null) {
                        this.isName = true;
                        // this.flag = true;
                        row.nextKnowledgeID = [];
                        return;
                    }
                    difChange(this.editDifParams).then(response => {
                        // if (this.flag) {
                        //     console.log("进来了")
                        //     for (let i = 0; i < this.tableData.length; i++) {
                        //         console.log(this.tableData[i])
                        //         if (this.tableData[i].difficulty < this.red) {
                        //             console.log(this.tableData[i].id)
                        //             console.log(this.tableData[i].knowledgeID)
                        //             this.editDifParams.id = this.tableData[i].id;
                        //             this.editDifParams.knowledgeIDs = this.tableData[i].knowledgeID;
                        //             let x = this.editDifParams;
                        //             difChange(x).then(response => {
                        //
                        //             });
                        //         }
                        //     }
                        //     this.flag = false;
                        // }
                    });
                    this.change_1 = false;
                }
            },
            handleRemove1: function (callback, row) {
                this.editDifParams.preNext = this.$route.query.testID;
                this.editDifParams.type = 1;
                this.editDifParams.id = row.id;
                this.editDifParams.knowledgeIDs = [];
                this.editDifParams.knowledgeIDs.push(callback);
                difChange(this.editDifParams).then(response => {
                    console.log(response)
                });
            },
            handleCascaderChange(val,index) {
            },
            handleFocus(flag,index) {
                if (flag == false) {
                    console.log(this.tableData[index])
                    this.tableData[index].nextKnowledgeID.push(this.tableData[index].children[this.tableData[index].children.length-1]);
                    this.tableData[index].nextKnowledgeID = this.tableData[index].nextKnowledgeID.filter(function(element,index,self){
                        return self.indexOf(element) === index;
                    });
                    this.change_1 = true;
                    this.changeValue1(false,this.tableData[index])
                    // if (this.data[index].type == '主观题') {
                    //     console.log(this.data[index])
                    //     console.log(this.data[index].children[0])
                    //     this.data[index].children[0].nextKnowledgeID = this.data[index].nextKnowledgeID;
                    // }
                }
            },
            handleSuggestionChange(index, row) {
                this.editSuggestionParams.id = row.id;
                this.editSuggestionParams.suggestion = row.suggestion;
                updateSuggestion(this.editSuggestionParams).then(response => {
                    console.log(response)
                });
            },
        }
    }
</script>
