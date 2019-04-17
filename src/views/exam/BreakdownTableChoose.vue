<template>
    <div style="width: 69%;margin: 0 auto">
        细目表名称：
        <el-input v-model="editParams.examName" type="text" size="size" style="width: 200px;"></el-input>
        <el-table
            :data="data"
            :row-style="showTr">
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
                               placeholder=""
                               remote>
                        <el-option
                            v-for="item in options5"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-cascader
                        v-if="!scope.row._expanded"
                        expand-trigger="hover"
                        :options="options6"
                        @visible-change="handleFocus($event,scope.$index)"
                        @change="handleCascaderChange($event,scope.$index)"
                        v-model="scope.row.selectionKeys"
                        change-on-select
                        filterable
                        clearable
                        placeholder="请选择知识点">
                    </el-cascader>
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
            <div slot="footer" class="dialog-footer">
                <el-button @click="isEdit=false">取 消</el-button>
                <el-button type="primary" @click.native="toEdit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import Utils from '@/utils/tree/index'
    import {getKnowledge} from '@/api/exam/updateExam' //srcheke
    import {getTreeOfSubjectB} from  '@/api/subject/knowledgeOfSubject'
    import {getQuestion, addBreakdown} from '@/api/exam/breakdown'
    import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input";

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
                options6: [],//srcheke
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
                    id: 0
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
            this.listQuery.id = this.$route.query.id
            this.editParams.subjectID = this.$route.query.subjectID
        }
        ,
        mounted() {
            this.initTree()
        },
        methods: {
            initTree() {
                getKnowledge(this.editParams).then(response => {
                    this.options5 = response.data;
                });//srcheke
                getTreeOfSubjectB(this.editParams).then(res => {
                    this.options6 = res.data.children;
                })
                getQuestion(this.listQuery).then(response => {
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
                })
            },
            showTr(row, index) {
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
            },
            handleEdit() {
                if (this.editParams.examName == '' || this.editParams.examName == null) {
                    this.$message({
                        type: 'warning',
                        message: '细目表名不能为空！',
                        duration: 600
                    })
                    return
                }
                this.isEdit = true
            },
            toEdit() {
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
                this.editParams.id = this.$route.query.id;
                this.editParams.xmlQuestionSets = resultTrans;
                console.log(this.editParams.xmlQuestionSets);
                addBreakdown(this.editParams).then(response => {
                    this.$message({
                        message: '新增细目表成功',
                        type: "success",
                        duration: 600
                    });
                    this.$router.push('/exam/breakdown')
                })
            },
            handleCascaderChange(val,index) {
            },
            handleFocus(flag,index) {
                if (flag == false) {
                    this.data[index].knowledges.push(this.data[index].selectionKeys[this.data[index].selectionKeys.length-1]);
                    // this.data[index].knowledges
                    this.data[index].knowledges = this.data[index].knowledges.filter(function(element,index,self){
                        return self.indexOf(element) === index;
                    });
                    if (this.data[index].type == '主观题') {
                        console.log(this.data[index])
                        console.log(this.data[index].children[0])
                        this.data[index].children[0].knowledges = this.data[index].knowledges;
                    }
                }
            },
            handleCancel() {
                this.$router.push('/exam/breakdown')
            },
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
