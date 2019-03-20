<template>
    <div style="width: 69%; margin: 0 auto">
        <el-button type="success" style="float: right; margin-right: 10px;" @click.native="handleExport">导出excel
        </el-button>
        <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto" highlight-current-row>
            <el-table-column align="left" min-width="25%" prop="name" label="题目"></el-table-column>
            <el-table-column align="left" min-width="50%" prop="difficulty" label="难度"></el-table-column>
            <el-table-column align="left" min-width="50%" prop="difference" label="区分度"></el-table-column>
        </el-table>
    </div>
</template>
<script>
    import {getDif} from '@/api/scoreAnalysis/testList'
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
                listQuery: {
                    testID: 0,
                },
                tableData: [],
                filename: ''
            }
        },
        created() {
            this.listQuery.testID = this.$route.query.testID;
            this.filename = this.$route.query.name;
            this.initTable();
        },
        methods: {
            initTable() {
                getDif(this.listQuery).then(response => {
                    this.tableData = response.data;
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            },
            handleExport() {
                var list = this.tableData;
                import('@/vendor/Export2Excel').then(excel => {
                    const tHeader = ['题目', '难度', '区分度']
                    const filterVal = ['name', 'difficulty', 'difference']
                    const data = this.formatJson(filterVal, list)
                    excel.export_json_to_excel({
                        header: tHeader,
                        data,
                        filename: this.filename + "_" + '试题分析',
                        autoWidth: this.autoWidth
                    })
                })
            }
            // handleSizeChange(val) {
            //     this.listQuery.pageSize = val
            //     this.initTable()
            // },
            // handleCurrentChange(val) {
            //     this.listQuery.pageNum = val
            //     this.initTable()
            // },
            // handleMore() {
            //     this.listQuery.isAll = true
            //     this.initTable()
            // },
            // handleCheck(index, row) {
            //     this.$router.push({path: "/scoreAnalysis/test/", query: {testID: row.id, name: row.name}})
            // },
            // handleStatistics(index, row) {
            //     this.$router.push({path: "/scoreAnalysis/statistics/", query: {testID: row.id, name: row.name}})
            // },
            // handleComparison(index, row) {
            //     this.$router.push({path: "/scoreAnalysis/classesComparison/" + row.id})
            // },
            // dateFormat(row, column, cellValue, index) {
            //     const daterc = row[column.property]
            //     return daterc.substr(0, 10) + ' ' + daterc.substr(11, 8)
            // }
        }
    }
</script>
