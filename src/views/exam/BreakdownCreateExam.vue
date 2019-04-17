<template>
    <div style="width: 69%;margin: 0 auto">
        试卷名称：
        <el-input v-model="editParams.examName" type="text" size="size" style="width: 200px;"></el-input>
        <el-radio-group v-model="numberType">
            <el-radio-button label="按学号"></el-radio-button>
            <el-radio-button label="按考号"></el-radio-button>
        </el-radio-group>
        <el-button size="mini" type="primary" @click.native="handleModifyScore()"
        >批量修改分值
        </el-button>
        <el-table
            :data="data"
            :row-style="showTr">
            <!--  <el-table-column v-for="(column, index) in columns" :key="column.dataIndex"
                               :label="column.text" align="left">
                <template slot-scope="scope">
                  <span v-if="spaceIconShow(index)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"
                        :key="levelIndex"></span>
                  <span v-if="toggleIconShow(index,scope.row)" @click="toggle(scope.$index)">
                    <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
                    <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
                  </span>
                  <span v-else-if="index===0" class="ms-tree-space"></span>
                  {{scope.row[column.dataIndex] | btnType}}
                </template>
              </el-table-column>-->
            <el-table-column label="题目" align="left" min-width="30%">
                <template slot-scope="scope">
        <span v-if="spaceIconShow(0)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"
              :key="levelIndex"></span>
                    <span v-if="toggleIconShow(0,scope.row)" @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
        </span>
                    <span v-else-if="0===0" class="ms-tree-space"></span>
                    {{scope.row['lable'] | btnType}}
                </template>
            </el-table-column>
            <el-table-column label="正确答案" align="left" min-width="100%">
                <template slot-scope="scope">
        <span v-if="spaceIconShow(1)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"
              :key="levelIndex"></span>
                    <span v-if="toggleIconShow(1,scope.row)" @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
        </span>
                    <span v-else-if="1===0" class="ms-tree-space"></span>
                    <!--
                            {{scope.row['type'] | btnType}}
                    -->
                    <!--
                            {{scope.$index}}
                    -->
                    <!--
                            {{scope.row['selectionKey'] }}
                    -->
                    <!--
                            {{ data[scope.$index].selectionKeys }}
                    -->
                    <!-- <el-checkbox-group :max="1" v-if="!scope.row._expanded && scope.row.type==='单项选择题'"
                                        v-model="scope.row.selectionKeys">
                       <el-checkbox v-for="value in scope.row.options" :label="value" :key="value">{{value}}</el-checkbox>
                     </el-checkbox-group>-->
                    <el-radio-group v-if="!scope.row._expanded && scope.row.type==='单项选择题'"
                                    v-model="scope.row.selectionKeys[0]">
                        <el-radio v-for="value in scope.row.options" :label="value" :key="value">{{value}}</el-radio>
                    </el-radio-group>
                    <el-checkbox-group :min="1" v-if="!scope.row._expanded && scope.row.type==='多项选择题'"
                                       v-model="scope.row.selectionKeys">
                        <el-checkbox v-for="value in scope.row.options" :label="value" :key="value">{{value}}
                        </el-checkbox>
                    </el-checkbox-group>
                </template>
            </el-table-column>
            <el-table-column label="满分" align="right" min-width="30%">
                <template slot-scope="scope">
        <span v-if="spaceIconShow(1)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"
              :key="levelIndex"></span>
                    <span v-if="toggleIconShow(1,scope.row)" @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
        </span>
                    <span v-else-if="1===0" class="ms-tree-space"></span>
                    <span v-if="!scope.row._expanded && scope.row.type==='多项选择题'">正选得分:</span>
                    <el-input v-if="scope.row.type!=='选择题'" style="width: 50px; display: inline-block"
                              v-model="scope.row.fullScore" v-on:change="changeFullScore(scope.row)" type="text"
                              size="mini">
                        {{scope.row.fullScore}}
                    </el-input>
                    <br/>
                    <span v-if="!scope.row._expanded && scope.row.type==='多项选择题'">漏选分值:</span>
                    <el-input style="width: 50px; display: inline-block" type="text"
                              v-if="!scope.row._expanded && scope.row.type==='多项选择题'"
                              v-model.number="scope.row.partScore" size="mini">{{parseFloat(scope.row.partScore)}}
                    </el-input>
                </template>
            </el-table-column>
            <el-table-column label="类型" align="center" min-width="40%">
                <template slot-scope="scope">
        <span v-if="spaceIconShow(1)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"
              :key="levelIndex"></span>
                    <span v-if="toggleIconShow(1,scope.row)" @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
        </span>
                    <span v-else-if="1===0" class="ms-tree-space"></span>
                    <el-select v-if="!scope.row._expanded" v-model="scope.row.type" placeholder="请选择">
                        <el-option
                            v-for="item in scope.row.types"
                            :key="item"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <!--srcheke-->
            <el-table-column label="知识点" align="center" min-width="40%">
                <template slot-scope="scope">
        <span v-if="spaceIconShow(1)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"
              :key="levelIndex"></span>
                    <span v-if="toggleIconShow(1,scope.row)" @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
        </span>
                    <span v-else-if="1===0" class="ms-tree-space"></span>
                    <el-select v-if="!scope.row._expanded"
                               v-model="scope.row.knowledges"
                               multiple
                               filterable
                               allow-create
                               default-first-option
                               placeholder="请选择知识点">
                        <el-option
                            v-for="item in options5"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
        </el-table>
        <el-button type="primary" @click="handleEdit">
            确定
        </el-button>
        <el-button type="success" @click="handleCancel">
            取消
        </el-button>

        <el-dialog title="确定修改" :visible.sync="isEdit" width="20%">
            <span>您修改的考试满分为:{{totalScore}}</span>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isEdit=false">取 消</el-button>
                <el-button type="primary" @click.native="toEdit">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="批量修改" :visible.sync="modifyScore" width="40%">
            <el-form :inline="true" labelWidth="120px">
                <el-form-item label="起始题号">
                    <el-input v-model="modifyScoreParam.start"></el-input>
                </el-form-item>
                <br/>
                <el-form-item label="题目个数">
                    <el-input v-model="modifyScoreParam.num"></el-input>
                </el-form-item>
                <el-form-item label="设置分数">
                    <el-input v-model="modifyScoreParam.score"></el-input>
                </el-form-item>
                <br/>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="modifyScore=false">取 消</el-button>
                <el-button type="primary" @click.native="toModifyScore">确 定</el-button>
            </div>

        </el-dialog>
    </div>
</template>
<script>
    import Utils from '@/utils/tree/index'
    import {getQuestionAndKnowledge,updateBreakdown, createExam} from '@/api/exam/breakdown'
    import {getKnowledge, updateExam} from '@/api/exam/updateExam' //srcheke
    import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
    //  import Vue from 'vue'
    export default {
        components: {
            ElInput,
            ElCheckbox
        },
        name: 'tree-grid',
        /*props: {
         // 该属性是确认父组件传过来的数据是否已经是树形结构了，如果是，则不需要进行树形格式化
         treeStructure: {
         type: Boolean,
         default: function () {
         return false
         }
         },
         // 这是相应的字段展示
         columns: {
         type: Array,
         default: function () {
         return []
         }
         },
         // 这是数据源
         dataSource: {
         type: Array,
         default: function () {
         return []
         }
         },
         // 这个作用是根据自己需求来的，比如在操作中涉及相关按钮编辑，删除等，需要向服务端发送请求，则可以把url传过来
         requestUrl: {
         type: String,
         default: function () {
         return ''
         }
         },
         // 这个是是否展示操作列
         treeType: {
         type: String,
         default: function () {
         return 'normal'
         }
         },
         // 是否默认展开所有树
         defaultExpandAll: {
         type: Boolean,
         default: function () {
         return false
         }
         }
         },*/
        data() {
            return {
                options5: [],//srcheke
                columns: [
                    {
                        text: '题目',
                        dataIndex: 'menuName'
                    },
                    {
                        text: '类型',
                        dataIndex: 'menuType'
                    }
                ],
                numberType: '按学号', /*识别类型*/
                isEdit: false,
                modifyScore: false,
                modifyScoreParam: {
                    start: 1,
                    num: 0,
                    score: 0,
                },
                totalScore: 0.0,
                dataSource: [],
                label: '-选择',
                inTestSN: 0,
                type: null,
                children: [],
                menuData: [],
                knowledges: [],//srcheke
                treeStructure: true,
                defaultExpandAll: false,
                treeType: 'normal',
                dialogStatus: false,
                title: ['新增菜单', '修改菜单'],
                titleStatus: 0,
                id: '',
                defaultProps: {
                    children: 'menuBeans',
                    label: 'menuName'
                },
                listQuery: {
                    id: 0,
                    templateID: 0,
                },
                editParams: {
                    id: 0,
                    testID: 0,
                    examName: '',
                    subjectID: 0,
                    gradeID: 0,
                    schoolID: 0,
                    xmlQuestionSets: [],
                    numberType: 0, /*这是考号还是学号进行判断*/
                    fullScore: 0, /*这是总分*/
                }
            }
        },
        computed: {
            // 格式化数据源
            data: function () {
                let me = this
                if (me.treeStructure) {
                    let data = Utils.MSDataTransfer.treeToArray(me.dataSource, null, null, me.defaultExpandAll)
                    data[0]._expanded = true;
                    return data
                }
                return me.dataSource
            },
            dataWithoutStep: function () {
                let array = new Array()
                for (let i = 0; i < this.data.length; i++) {
                    if (this.data[i].type !== "步骤分") {
                        array.push(this.data[i])
                    }
                }
                return array
            }
        },
        filters: {
            btnType(value) {
                if (value === 'M') {
                    return '菜单'
                } else if (value === 'B') {
                    return '按钮'
                } else {
                    return value
                }
            }
        }
        ,
        created() {
            this.listQuery.id = this.$route.query.breakdownID;
            this.listQuery.templateID = this.$route.query.id;
            this.editParams.id = this.$route.query.id;
            this.editParams.schoolID = this.$route.query.schoolID
            this.editParams.gradeID = this.$route.query.gradeID
            this.editParams.subjectID = this.$route.query.subjectID
        }
        ,
        mounted() {
            this.initTree()
        },
        methods: {
            changeFullScore(val) {
                if (val.lable.includes('选做题')) {
                    for (let i = 0; i < this.data.length; i++) {
                        if (this.data[i].lable.includes("选做题")) {
                            // if (this.data[i].fullScore == null || this.data[i].fullScore == undefined) {
                            // } else {
                            //   console.log(this.data[i].lable)
                            //   if (!(this.data[i].lable.includes('选做题') && this.data[i].lable != '选做题')) {
                            //     total = total + parseFloat(this.data[i].fullScore)
                            //   }
                            // }
                            this.data[i].fullScore = val.fullScore;
                        }
                    }
                }
            },
            initTree() {
                getKnowledge(this.editParams).then(response => {
                    this.options5 = response.data;
                });//srcheke
                /*getTree(this.listQuery).then(response => {
                    //this.dataSource = response.data
                    /!*  let array = new Array();
                     for (let i = 0; i < response.data.length; i++) {
                     array.push(response.data[i].xmlQuestionSet)
                     }*!/
                    var date = new Date();
                    this.dataSource = response.data;
                    if (response.data.name !== '') {
                        this.editParams.examName = response.data.name;
                    } else {
                        this.editParams.examName = response.data.subjectName + (date.getMonth() + 1) + "月" + date.getDate() + "日考试";
                    }
                    if (response.data.numberType !== null && response.data.numberType !== undefined) {
                        if (response.data.numberType == 0) {
                            this.numberType = '按学号'
                        } else {
                            this.numberType = '按考号'
                        }
                    }
                    console.log(this.dataSource)
                })*/
                getQuestionAndKnowledge(this.listQuery).then(response => {
                    this.dataSource = response.data;
                    var date = new Date();
                    this.editParams.examName = this.$route.query.name + (date.getMonth() + 1) + "月" + date.getDate() + "日考试";
                    console.log(this.dataSource)
                })
            },
            /* // 显示行
             showTr(row, index)
             {
             let show = (row.row._parent ? (row.row._parent._expanded && row.row._parent._show) : true)
             row.row._show = show
             return show ? '' : 'display:none;'
             },*/
            showTr(row, index) {
                /*
                 let show = (row.row._parent ? (row.row._parent._expanded && row.row._parent._show) : true)
                 */
                if (!row.row._parent) {
                    row.row._show = true
                    return '';
                } else {
                    if (row.row._parent._expanded && row.row._parent._show && row.row.type !== '步骤分' && row.row.lable !== '总分') {
                        row.row._show = true
                        return ''
                    }
                }
                row.row._show = false
                return 'display:none'
            },
            // 展开下级
            toggle(trIndex) {
                let record = this.data[trIndex]
                record._expanded = !record._expanded
            }
            ,
            // 显示层级关系的空格和图标
            spaceIconShow(index) {
                if (this.treeStructure && index === 0) {
                    return true
                }
                return false
            }
            ,
            // 点击展开和关闭的时候，图标的切换
            toggleIconShow(index, record) {
                if (this.treeStructure && index === 0 && record.children && record.children.length > 0) {
                    return true
                }
                return false
            }
            ,
            handleDelete() {
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'error'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
            },
            handleEdit() {
                if (this.editParams.examName == '' || this.editParams.examName == null) {
                    this.$message({
                        type: 'warning',
                        message: '考试名不能为空！',
                        duration: 600
                    })
                    return
                }
                for (let j = 0; j < this.data.length; j++) {
                    if (this.data[j].type == '单项选择题' || this.data[j].type == '多项选择题') {
                        this.data[j].selectionKeys.sort();
                        if (this.data[j].selectionKeys.length == 0 && (this.data[j].fullScore !== 0 && this.data[j].fullScore !== '0')) {
                            this.$message({
                                type: 'warning',
                                message: '选择题非0分不能空选！'
                            })
                            return
                        }
                    }
                }
                this.totalScore = 0.0;
                let total = 0;
                for (let i = 0; i < this.data.length; i++) {
                    if (this.data[i].type == '单项选择题' || this.data[i].type == '多项选择题' || (this.data[i].lable !== "总分" && this.data[i].type == '主观题')) {
                        if (this.data[i].fullScore == null || this.data[i].fullScore == undefined) {
                        } else {
                            console.log(this.data[i].lable)
                            if (!(this.data[i].lable.includes('选做题') && this.data[i].lable != '选做题')) {
                                total = total + parseFloat(this.data[i].fullScore)
                            }
                        }
                    }
                }
                this.totalScore = total;
                this.isEdit = true
            },
            toEdit() {
                if (this.numberType == '按学号') {
                    this.editParams.numberType = 0
                } else {
                    this.editParams.numberType = 1
                }
                this.isEdit = false
                let array = new Array;
                for (let i = 0; i < this.data.length; i++) {
                    if (this.data[i]._level == 0) {
                        array.push(this.data[i]);
                    }
                }
                let result = JSON.stringify(array, function (key, value) {
                    if (key == '_parent') {
                        return undefined
                    }
                    return value
                });
                let resultTrans = JSON.parse(result);
                this.editParams.xmlQuestionSets = resultTrans;
                this.editParams.fullScore = this.totalScore;
                console.log(this.editParams.xmlQuestionSets);
                createExam(this.editParams).then(response => {
                    this.$message({
                        message: '考试创建成功',
                        type: "success",
                        duration: 600
                    });
                    this.$router.push('/exam/list')
                })
            },
            handleCancel() {
                this.$router.push('/exam/list')
            },
            toModifyScore() {
                for (let i = 0; i < this.modifyScoreParam.num; i++) {
                    this.data[parseInt(this.modifyScoreParam.start) + i].fullScore = this.modifyScoreParam.score;
                }
                this.modifyScore = false;
                this.modifyScoreParam.start = parseInt(this.modifyScoreParam.start) + parseInt(this.modifyScoreParam.num);
            },
            handleModifyScore() {
                this.modifyScore = true;
            }
        }
    }
</script>
<style scoped>
    .ms-tree-space {
        position: relative;
        top: 1px;
        display: inline-block;
        font-family: 'Glyphicons Halflings';
        font-style: normal;
        font-weight: 400;
        line-height: 1;
        width: 18px;
        height: 14px;
    }

    .ms-tree-space::before {
        content: ""
    }

    table td {
        line-height: 26px;
    }
</style>
