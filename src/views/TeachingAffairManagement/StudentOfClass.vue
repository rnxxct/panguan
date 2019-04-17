<template>
    <div class="inner_element" style="width: 69%;margin: 0 auto;">
        <!--<el-button type="success" @click.native="handleDownload" style="float: right">批量导入学生
        </el-button>-->
        <el-button type="success" @click.native="handleUploadTestNumber" icon="el-icon-plus" style="float: right">导入考号
        </el-button>
        <el-button type="success" @click.native="handUpload" icon="el-icon-plus"
                   style="float: right;margin-right: 20px">
            导入花名册
        </el-button>
        <el-button type="primary" @click.native="handleAdd" icon="el-icon-plus" style="float: right;margin-right: 20px">
            新增学生
        </el-button>
        <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto">
            <el-table-column align="left" min-width="100%" prop="name" label="姓名"></el-table-column>
            <el-table-column align="left" min-width="100%" prop="studentNumber" label="学号"></el-table-column>
            <!--添加考号-->
            <el-table-column align="left" min-width="100%" prop="studentTestNumber" label="考号"></el-table-column>

            <el-table-column align="left" min-width="100%" label="是否借读">
                <template slot-scope="scope">
                    <span>{{scope.row.temporary == 1 ? '是' : '否'}}</span>
                </template>
            </el-table-column>
            <el-table-column align="left" min-width="100%" prop="action" label="动作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="primary" plain
                        @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                        size="mini"
                        type="primary" plain
                        @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                    <el-button
                        size="mini"
                        type="primary" plain
                        @click="handleClass(scope.row)">转班
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="学生添加" :visible.sync="isAdd" @close='closeDialog'>
            <el-form :model="addForm">
                <el-form-item label="姓名">
                    <el-input autocomplete="off" v-model="addForm.name"></el-input>
                </el-form-item>
                <el-form-item label="学号">
                    <el-input autocomplete="off" v-model="addForm.studentNumber"></el-input>
                </el-form-item>
                <el-form-item label="是否借读">
                    <el-select v-model="addForm.temporary" onselect="0" placeholder="请选择">
                        <el-option value="1" label="是" :key="1"></el-option>
                        <el-option value="0" label="否" :key="0"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isAdd=false">取 消</el-button>
                <el-button type="primary" @click="toAdd">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="学生修改" :visible.sync="isEdit" @close='closeDialog'>
            <el-form :model="editForm">
                <el-form-item label="姓名">
                    <el-input autocomplete="off" v-model="editForm.name"></el-input>
                </el-form-item>
                <el-form-item label="学号">
                    <el-input autocomplete="off" v-model="editForm.studentNumber"></el-input>
                </el-form-item>
                <el-form-item label="是否借读">
                    <el-select v-model="editForm.temporary" onselect="0" placeholder="请选择">
                        <el-option value="1" label="是" :key="0"></el-option>
                        <el-option value="0" label="否" :key="1"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isEdit=false">取 消</el-button>
                <el-button type="primary" @click="toEdit">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="删除学生" :visible.sync="isDelete" width="30%">
            <span>确定删除</span>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isDelete=false">取 消</el-button>
                <el-button type="primary" @click="toDelete">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="批量导入学生" :visible.sync="isImport" width="30%">
            <div style="padding: 10px;float: right;position: relative">
                <a @mouseover="mouserover" @mouseleave="mouseleave" href="javascript:void(0)">导入规则？</a>
                <img ref="ruleImg" style="position: absolute; top: 50px;left: -20px;display: none;" width="300px"
                     src="/static/images/tip.PNG"/>
            </div>
            <el-input
                type="textarea"
                :autosize="{ minRows: 20, maxRows: 100}"
                placeholder="此处粘贴花名册"
                v-model="textarea">
            </el-input>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isImport=false">取 消</el-button>
                <el-button type="primary" @click="toUpload">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="导入考号" :visible.sync="importTestNumber" width="30%">
            <el-radio-group v-model="importType" style="margin-bottom: 5px">
                <el-radio-button label="先学号后考号"></el-radio-button>
                <el-radio-button label="先考号后学号"></el-radio-button>
            </el-radio-group>
            <el-input
                type="textarea"
                :autosize="{ minRows: 20, maxRows: 100}"
                placeholder="此处粘贴学号考号"
                v-model="textarea2">
            </el-input>
            <div slot="footer" class="dialog-footer">
                <el-button @click="importTestNumber=false">取 消</el-button>
                <el-button type="primary" @click="toUploadTestNumber">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="转班" :visible.sync="changeClass" width="30%">
            <template>
                <el-select v-model="tempClass" placeholder="请选择">
                    <el-option
                        v-for="item in classData"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-button @click="changeClass=false">取 消</el-button>
                <el-button type="primary" @click="toChangeClass">确 定</el-button>
            </template>
        </el-dialog>
        <div class="pagination-container">
            <el-pagination
                :current-page="listQuery.page"
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
    import {getGradeClass} from '@/api/TeachingAffair/classOfSchool'
    import {
        getList,
        addStudent,
        deleteStudent,
        updateStudent,
        importStudents,
        importTestNumber,
        changeStudentClass
    } from '@/api/TeachingAffair/studentOfClass'
    import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
    import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
    import ElDialog from "../../../node_modules/element-ui/packages/dialog/src/component";

    export default {
        components: {
            ElDialog,
            ElOption,
            ElFormItem,
            ElSelectDropdown
        },
        data() {
            return {
                isAdd: false,
                isDelete: false,
                isEdit: false,
                isImport: false,
                importTestNumber: false,
                checkAll: false,
                changeClass: false,
                tempClass: "",
                classData: [],
                studentID: 0,
                textarea: '',
                textarea2: '',
                importType: '先学号后考号',
                tableData: [],
                checkedClasses: [],
                total: 0,
                listQuery: {
                    pageNum: 1,
                    classID: '',
                    pageSize: 10,
                },
                addForm: {
                    classId: '',
                    name: '',
                    studentNumber: '',
                    temporary: 0,
                },
                editForm: {
                    id: '',
                    name: '',
                    studentNumber: '',
                    temporary: 0,
                },
                deleteForm: {
                    id: ''
                },
                gradeClassForm: {
                    schoolID: 0,
                    gradeID: 0,
                }
            }
        },
        mounted() {
        },
        created() {
            console.log(this.$route.query.id)
            this.listQuery.classID = this.$route.query.id
            this.addForm.classID = this.$route.query.id
            this.gradeClassForm.gradeID = this.$route.query.gradeID;
            this.gradeClassForm.schoolID = this.$route.query.schoolID;
            this.tempClass = this.$route.query.id.toString()
            /*
             this.editForm.classID =this.$route.params.classID
             */
            this.initTable();
        },
        methods: {
            initTable() {
                getList(this.listQuery).then(response => {
                    this.tableData = response.data.students;
                    this.total = response.data.total;
                })
                getGradeClass(this.gradeClassForm).then(response => {
                    this.classData = response.data;
                })
            },
            handleAdd() {
                this.isAdd = true
            },
            handleEdit(index, row) {
                this.isEdit = true
                this.editForm = row;
            },
            handleDelete(index, row) {
                this.isDelete = true
                this.deleteForm = row
            },
            handUpload() {
                this.isImport = true
            },
            toUpload() {
                var tempName;
                var tempNumber;
                var studentArray = [];
                var textAreaVal = this.textarea;
                if (textAreaVal == "") {
                    return false
                }
                var arr = textAreaVal.split("\n");
                for (var i = 0; i < arr.length; i++) {
                    let student = new Object();
                    var twoSpace = "";
                    var finalName = "";
                    var splitVal = arr[i].trim().split(/\s+/g);
                    if (splitVal.length > 2) {
                        for (var j = 0; j < splitVal.length; j++) {
                            splitVal[j] = splitVal[j].trim();
                            if (splitVal[j] == "姓名" || splitVal[j] == "学号" || splitVal[j] == "学生姓名" || splitVal[j] == "号数") continue;
                            else {
                                if (/^[0-9]*$/.test(splitVal[j])) {
                                    twoSpace += splitVal[j];
                                    tempNumber = twoSpace
                                } else {
                                    tempName = splitVal[j];
                                    finalName += tempName
                                }
                                if (finalName != "" && tempNumber != "") {
                                    if (tempNumber != "undefined" && tempNumber != undefined) if (/\S*[\d+]\S*/.test(finalName)) {
                                        return false
                                    } else if (isNaN(tempNumber) || tempNumber.indexOf(" ") > -1 || tempNumber.trim() == "" || tempNumber.trim().length > 10) {
                                        return false
                                    }
                                    /*
                                     student = '{"name":"' + finalName + '","studentNumber":"' + tempNumber + '"}'
                                     */
                                    student.name = tempName;
                                    student.studentNumber = tempNumber
                                }
                            }
                        }
                        if (student != undefined) studentArray.push(student)
                    } else if (splitVal != "") {
                        for (var j = 0; j < splitVal.length; j++) {
                            splitVal[j] =
                                $.trim(splitVal[j]);
                            if (splitVal[j] == "姓名" || splitVal[j] == "学号" || splitVal[j] == "学生姓名" || splitVal[j] == "号数") continue; else if (/^[0-9]*$/.test(splitVal[j])) tempNumber = splitVal[j]; else tempName = splitVal[j];
                            if (tempName != "" && tempNumber != "") {
                                if (tempNumber != "undefined" && tempNumber != undefined) if (/\S*[\d+]\S*/.test(tempName)) {
                                    return false
                                } else if (isNaN(tempNumber) ||
                                    tempNumber.indexOf(" ") > -1 || tempNumber.trim() == "" || tempNumber.trim().length > 10) {
                                    return false
                                }
                                /*
                                 student = '{"name":"' + tempName + '","studentNumber":"' + tempNumber + '"}'
                                 */
                                student.name = tempName;
                                student.studentNumber = tempNumber

                            }
                        }
                        if (student != undefined) studentArray.push(student)
                    }
                }
                importStudents({students: studentArray, classID: this.listQuery.classID}).then(response => {
                    this.$message({
                        message: '导入成功',
                        type: "success",
                        duration: 600
                    })
                    this.isImport = false
                    this.initTable()
                })
            },
            /*导入学号*/
            handleUploadTestNumber() {
                this.importTestNumber = true
            },
            toUploadTestNumber() {
                var studentArray = [];
                var textAreaVal2 = this.textarea2;
                if (textAreaVal2 == "") {
                    return false
                }
                if (this.importType == '先学号后考号') {
                    var arr = textAreaVal2.split("\n");
                    for (var i = 0; i < arr.length; i++) {
                        let student = new Object();
                        var twoSpace = "";
                        var finalName = "";
                        var splitVal = arr[i].trim().split(/\s+/g);
                        if (splitVal.length > 2) {
                            for (var j = 0; j < splitVal.length; j++) {
                                splitVal[j] = splitVal[j].trim();
                                if (splitVal[j] == "姓名" || splitVal[j] == "学号" || splitVal[j] == "学生姓名" || splitVal[j] == "号数") continue;
                                else {
                                    if (/^[0-9]*$/.test(splitVal[j])) {
                                        twoSpace += splitVal[j];
                                        tempNumber = twoSpace
                                    } else {
                                        tempName = splitVal[j];
                                        finalName += tempName
                                    }
                                    if (finalName != "" && tempNumber != "") {
                                        if (tempNumber != "undefined" && tempNumber != undefined) if (/\S*[\d+]\S*/.test(finalName)) {
                                            return false
                                        } else if (isNaN(tempNumber) || tempNumber.indexOf(" ") > -1 || tempNumber.trim() == "" || tempNumber.trim().length > 10) {
                                            return false
                                        }
                                        student.name = tempName;
                                        student.studentNumber = tempNumber
                                    }
                                }
                            }
                            if (student != undefined) studentArray.push(student)
                        } else if (splitVal != "" && splitVal.length == 2) {
                            if (splitVal[0] == "考号" || splitVal[0] == "学号" || splitVal[1] == "学号" || splitVal[1] == "考号" || splitVal[0] == "") continue;
                            student.studentNumber = splitVal[0]
                            student.studentTestNumber = splitVal[1]
                        }
                        if (student != undefined && student !== '' && student.studentNumber !== undefined && student.studentTestNumber !== undefined)
                            studentArray.push(student)
                    }
                } else {
                    var arr = textAreaVal2.split("\n");
                    for (var i = 0; i < arr.length; i++) {
                        let student = new Object();
                        var twoSpace = "";
                        var finalName = "";
                        var splitVal = arr[i].trim().split(/\s+/g);
                        if (splitVal.length > 2) {
                            for (var j = 0; j < splitVal.length; j++) {
                                splitVal[j] = splitVal[j].trim();
                                if (splitVal[j] == "姓名" || splitVal[j] == "学号" || splitVal[j] == "学生姓名" || splitVal[j] == "号数") continue;
                                else {
                                    if (/^[0-9]*$/.test(splitVal[j])) {
                                        twoSpace += splitVal[j];
                                        tempNumber = twoSpace
                                    } else {
                                        tempName = splitVal[j];
                                        finalName += tempName
                                    }
                                    if (finalName != "" && tempNumber != "") {
                                        if (tempNumber != "undefined" && tempNumber != undefined) if (/\S*[\d+]\S*/.test(finalName)) {
                                            return false
                                        } else if (isNaN(tempNumber) || tempNumber.indexOf(" ") > -1 || tempNumber.trim() == "" || tempNumber.trim().length > 10) {
                                            return false
                                        }
                                        student.name = tempName;
                                        student.studentNumber = tempNumber
                                    }
                                }
                            }
                            if (student != undefined) studentArray.push(student)
                        } else if (splitVal != "" && splitVal.length == 2) {
                            if (splitVal[0] == "考号" || splitVal[0] == "学号" || splitVal[1] == "学号" || splitVal[1] == "考号" || splitVal[0] == "") continue;
                            student.studentTestNumber = splitVal[0]
                            student.studentNumber = splitVal[1]
                        }
                        if (student != undefined && student !== '' && student.studentNumber !== undefined && student.studentTestNumber !== undefined) {
                            studentArray.push(student)
                        }
                        console.log(student.studentNumber == undefined)
                        console.log(student.studentTestNumber == undefined)
                    }
                }
                importTestNumber({students: studentArray, classID: this.listQuery.classID}).then(response => {
                    this.$message({
                        message: '添加成功',
                        type: "success",
                        duration: 600
                    });
                    this.importTestNumber = false
                })
            },
            handleDownload() {

            },
            handleClass(row) {
                this.changeClass = true
                this.studentID = row.id
            },
            toChangeClass() {
                changeStudentClass({studentID:this.studentID,classID: this.tempClass, oldClassID: this.$route.query.id}).then(response => {
                    this.initTable()
                });
                this.changeClass = false;
            },
            toAdd() {
                addStudent(this.addForm).then(response => {
                    this.$message({
                        message: '添加成功',
                        type: "success",
                        duration: 600
                    });
                    this.isAdd = false
                    this.initTable()
                })
            },
            toDelete() {
                deleteStudent(this.deleteForm).then(response => {
                    this.$message({
                        message: '删除成功',
                        type: "success",
                        duration: 600
                    });
                    this.isDelete = false
                    this.initTable();
                })
            },
            toEdit() {
                if (this.editForm.name == '' || this.editForm.studentNumber == '') {
                    this.$message({
                        message: '名字和学号不能为空!',
                        type: 'warning',
                        duration: 600
                    })
                    return
                }
                updateStudent(this.editForm).then(response => {
                    this.$message({
                        message: '修改成功',
                        type: "success",
                        duration: 600
                    });
                    this.isEdit = false
                    this.initTable()
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
            mouserover() {
                this.$refs.ruleImg.style.display = 'block'
            },
            mouseleave() {
                this.$refs.ruleImg.style.display = 'none'
            },
            closeDialog() {
                this.initTable()
            }
        }
    }
</script>
<style>
    .inner_element .el-dialog__body {
        padding-top: 0px;
    }

    /*.el-dialog__body{
      padding-top: 0px;
    }*/
</style>
