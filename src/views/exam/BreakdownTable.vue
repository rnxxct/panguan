<template>
    <div style="width: 69%; margin: 0 auto">
        <el-button type="primary" @click.native="handleMore" style="float: right">查看更多
        </el-button>
        <el-button type="success" @click.native="handleAdd" icon="el-icon-plus" style="float: right">新建细目表
        </el-button>
        <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto" highlight-current-row>
            <el-table-column align="center" min-width="45%" prop="name" label="名称"></el-table-column>
            <el-table-column align="center" min-width="30%" prop="createUserName" label="创建人"></el-table-column>
            <el-table-column align="center" min-width="50%" prop="createTime" :formatter="dateFormat"
                             label="创建时间"></el-table-column>
            <el-table-column align="center" min-width="50%">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click.native="handleEdit(scope.$index,scope.row)">编辑
                    </el-button>
                    <el-button size="mini" type="primary"
                               @click.native="handleDelete(scope.$index,scope.row)">删除
                    </el-button>
                    <el-button size="mini" type="primary"
                               @click.native="createExam(scope.$index,scope.row)">创建考试
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
</template>
<script>

    import {getType} from '@/api/proof/proof'
    import {getList, deleteBreakdown} from '@/api/exam/breakdown'
    import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
    import ElOption from "../../../node_modules/element-ui/packages/select/src/option";

    export default {
        components: {
            ElOption,
            ElFormItem,
            ElSelectDropdown,
        },
        data() {
            return {
                total: 0,
                flag: false,
                listQuery: {
                    isAll: false,
                    pageNum: 1,
                    pageSize: 10,
                },
                tableData: [],
                param: {
                    id: 0,
                }
            }
        },
        created() {
            this.initTable();
        },
        methods: {
            initTable() {
                getList(this.listQuery).then(response => {
                    this.tableData = response.data.list;
                    this.total = response.data.total;
                })
            },
            handleSizeChange(val) {
                this.listQuery.pageSize = val
                this.initTable()
            },
            handleCurrentChange(val) {
                this.listQuery.pageNum = val
                this.initTable()
            },
            handleAdd() {
                this.$router.push({path:'/exam/breakdown/template'})
            },
            handleMore() {
                this.listQuery.isAll = true
                this.initTable()
            },
            handleEdit(index, row) {
                this.$router.push({path: "/exam/breakdown/edit",query:{id:row.id,name:row.name,subjectID:row.subjectID,templateID:row.templateID}})//在这里判断进行页面的跳转
            },
            handleDelete(index, row) {
                this.param.id = row.id;
                deleteBreakdown(this.param).then(response => {
                    this.initTable();
                    this.$message({
                        message: '删除成功',
                        type: "success",
                        duration: 600
                    });
                })
            },
            createExam(index, row){
                this.isShow = false
                this.$router.push({
                    path: "/exam/breakdown/create/exam",
                    query: {
                        subjectID: row.subjectID,
                        id: row.templateID,
                        gradeID: row.gradeID,
                        schoolID: row.schoolID,
                        breakdownID: row.id,
                        name: row.name,
                    }
                })
            },
            dateFormat(row, column, cellValue, index) {
                const daterc = row[column.property]
                return daterc.substr(0, 10) + ' ' + daterc.substr(11, 8)
            }
        }
    }
</script>
