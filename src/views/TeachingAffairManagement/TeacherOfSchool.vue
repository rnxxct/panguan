<template>
    <div style="width:69%;margin: 0 auto">
        <el-button type="primary" @click.native="handleAdd" icon="el-icon-plus" style="float: right">新增教师
        </el-button>
        <el-table :data="tableDataTrans" :border=true stripe style="width:100%; margin: auto">
            <el-table-column align="left" min-width="25%" prop="username" label="姓名"></el-table-column>
            <el-table-column align="left" min-width="50%" prop="loginName" label="登录名"></el-table-column>
            <el-table-column align="left" min-width="50%" prop="subjectInfos" label="授课信息"></el-table-column>
            <el-table-column align="left" min-width="50%" prop="action" label="动作">
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
                        @click="handleSetCharacter(scope.$index, scope.row)">设置角色
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="设置角色" :visible.sync="character" @close='closeDialog'>
            <div class="dialog-footer" align="center">
                <el-button type="primary" @click="classNumber=true">班 主 任</el-button>
                <el-button type="primary" @click="toChangeCharacter(2)">备 课 组 长</el-button>
                <el-button type="primary" @click="toChangeCharacter(3)">年 级 主 任</el-button>
                <el-button @click="character=false">取 消</el-button>
            </div>
        </el-dialog>
        <el-dialog title="选择班级" :visible.sync="classNumber" @close='closeDialog'>
            <el-form :model="addForm" :inline=true label-width="80px" align="left">
                <el-form-item label="班级">
                    <el-select v-model="tempClass" placeholder="请选择">
                        <el-option
                            v-for="item in classData"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer" align="center">
                <el-button type="primary" @click="toChangeCharacter(1,tempClass)">确 定</el-button>
                <el-button @click="classNumber=false">取 消</el-button>
            </div>
        </el-dialog>
        <el-dialog title="新增教师" :visible.sync="isAdd" @close='closeDialog'>
            <el-form :model="addForm" :inline=true label-width="80px" align="left">
                <el-form-item label="姓名">
                    <el-input autocomplete="off" v-model="addForm.username"></el-input>
                </el-form-item>
                <el-form-item label="登录名">
                    <el-input autocomplete="off" v-model="addForm.loginName"></el-input>
                </el-form-item>
                <br/>
                <el-form-item label="手机">
                    <el-input autocomplete="off" v-model="addForm.mobile"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input autocomplete="off" v-model="addForm.email"></el-input>
                </el-form-item>
                <br/>
                <el-form-item label="设置密码">
                    <el-input autocomplete="off" type="password" v-model="addForm.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input autocomplete="off" type="password" v-model="addForm.password2"></el-input>
                </el-form-item>
                <br/><br/>
                <el-form-item label="班级">
                    <el-select v-model="tempClass" placeholder="请选择">
                        <el-option
                            v-for="item in classData"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="学科">
                    <el-select v-model="tempSubject" placeholder="请选择">
                        <el-option
                            v-for="item in subjectData"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-button type="primary" @click="handleSubjectAdd">新增授课</el-button>
                <p>当前授课:</p>
                <el-table :data="tempSubjectData" :border=true stripe style="width:100%; margin: auto"
                          :show-header="false">
                    <el-table-column align="left" min-width="25%" prop="className" label="班号"></el-table-column>
                    <el-table-column align="left" min-width="50%" prop="subjectName" label="课程名"></el-table-column>
                    <el-table-column align="left" min-width="50%" prop="action" label="动作">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                type="primary" plain
                                @click="handleSubjectDelete(scope.$index, scope.row)">删除授课
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-form>
            <div slot="footer" class="dialog-footer" align="center">
                <el-button type="primary" @click="toAdd">确 定</el-button>
                <el-button @click="isAdd=false">取 消</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改教师" :visible.sync="isEdit" @close='closeDialog'>
            <el-form :model="editForm" :inline=true label-width="80px" align="left">
                <el-form-item label="姓名">
                    <el-input autocomplete="off" v-model="editForm.username"></el-input>
                </el-form-item>
                <el-form-item label="登录名">
                    <el-input autocomplete="off" v-model="editForm.loginName"></el-input>
                </el-form-item>
                <br/>
                <el-form-item label="手机">
                    <el-input autocomplete="off" v-model="editForm.mobile"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input autocomplete="off" v-model="editForm.email"></el-input>
                </el-form-item>
                <br/>
                <el-form-item label="设置密码">
                    <el-input autocomplete="off" v-model="editForm.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input autocomplete="off" v-model="editForm.password2"></el-input>
                </el-form-item>
                <br/><br/>
                <el-form-item label="班级">
                    <el-select v-model="tempClass" placeholder="请选择">
                        <el-option
                            v-for="item in classData"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="学科">
                    <el-select v-model="tempSubject" placeholder="请选择">
                        <el-option
                            v-for="item in subjectData"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-button type="primary" @click="handleSubjectAdd">新增授课</el-button>
                <p>当前授课:</p>
                <el-table :data="tempSubjectData" :border=true stripe style="width:100%; margin: auto"
                          :show-header="false">
                    <el-table-column align="left" min-width="25%" prop="className" label="班号"></el-table-column>
                    <el-table-column align="left" min-width="50%" prop="subjectName" label="课程名"></el-table-column>
                    <el-table-column align="left" min-width="50%" prop="action" label="动作">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                type="primary" plain
                                @click="handleSubjectDelete(scope.$index, scope.row)">删除授课
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-form>
            <div slot="footer" class="dialog-footer" align="center">
                <el-button type="primary" @click="toEdit">确 定</el-button>
                <el-button @click="isEdit=false">取 消</el-button>
            </div>
        </el-dialog>
        <el-dialog title="删除教师" :visible.sync="isDelete" width="30%">
            <span>确定删除</span>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isDelete=false">取 消</el-button>
                <el-button type="primary" @click="toDelete">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import {getList, addTeacher, addCharacter, deleteTeacher, updateTeacher} from '@/api/TeachingAffair/teacherOfSchool'
    import {getList as getSubject} from '@/api/subject/subject'
    import {getList as getClass} from '@/api/TeachingAffair/classOfSchool'
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
                classNumber: false,
                subjectOfClass: 0,
                character: false,
                isAdd: false,
                isDelete: false,
                isEdit: false,
                tableDataRow: [],
                tableDataTrans: [],
                tempSubjectData: [],
                classData: [],
                subjectData: [],
                tempClass: '',
                tempSubject: '',
                formLabelWidth: '50%',
                listQuery: {
                    schoolID: ''
                },
                addForm: {
                    username: '',
                    loginName: '',
                    mobile: '',
                    email: '',
                    password: '',
                    password2: '',
                    subjects: []
                },
                editForm: {
                    id: '',
                    loginName: '',
                    username: '',
                    mobile: '',
                    email: '',
                    password: '',
                    password2: '',
                    subjects: []
                },
                deleteForm: {
                    id: ''
                },
                characterForm: {
                    id: '',
                    characters: 0,
                    classID: 0,
                }
            }
        },
        created() {
            this.listQuery.schoolID = this.$route.params.schoolID
            this.addForm.schoolID = this.$route.params.schoolID
            this.initTable();
        },
        methods: {
            initTable() {
                getSubject().then(response => {
                    this.subjectData = response.data;
                })
                getClass(this.listQuery).then(response => {
                    this.classData = response.data.classes;
                })
                getList(this.listQuery).then(response => {
                    this.tableDataTrans = response.data;
                    this.tableDataRow = response.data;

                    let length = response.data.length;
                    var subjectJoint = "";
                    for (let i = 0; i < length; i++) {
                        let subjectInfo = response.data[i].subjectInfo;
                        let subjectLength = subjectInfo.length;
                        for (let j = 0; j < subjectLength; j++) {
                            subjectJoint += subjectInfo[j].gradeName + subjectInfo[j].classNumber + "班" + subjectInfo[j].subjectName + ',';
                        }
                        subjectJoint = subjectJoint.substr(0, subjectJoint.length - 1)
                        this.tableDataTrans[i].subjectInfos = subjectJoint;
                        subjectJoint = "";
                    }
                })
            },
            handleAdd() {
                this.isAdd = true
            },
            handleEdit(index, row) {
                this.editForm = row
                this.isEdit = true
                let teacher = this.tableDataRow.find((item) => {
                    return item.id == row.id;
                })
                this.tempSubjectData = teacher.subjectInfo.slice(0, teacher.subjectInfo.length)
            },
            handleDelete(index, row) {
                this.isDelete = true
                this.deleteForm = row
            },
            handleSetCharacter(index, row) {
                this.character = true
                this.characterForm = row
                console.log(row)
            },
            toChangeCharacter(x,classID) {
                if (classID == undefined) {
                    classID = 0;
                } else {
                    this.classNumber = false;
                }
                this.characterForm.characters = x;
                this.characterForm.classID = classID;
                addCharacter(this.characterForm).then(response => {
                    this.$message({
                        message: '添加成功',
                        type: "success",
                        duration: 600
                    });
                    this.initTable()
                    this.character = false;
                })
            },
            toAdd() {
                if (this.addForm.username == '' || this.addForm.loginName == "") {
                    this.$message({
                        message: '姓名和用户名不能为空！',
                        type: "warning",
                        duration: 800
                    })
                    return
                }
                if (this.addForm.password !== this.addForm.password2) {
                    this.$message({
                        message: '密码不相同！',
                        type: "warning",
                        duration: 800
                    })
                    return
                }
                let subjects = this.tempSubjectData
                this.addForm.subjects = subjects
                addTeacher(this.addForm).then(response => {
                    this.$message({
                        message: '添加成功',
                        type: "success",
                        duration: 600
                    });
                    this.isAdd = false
                    this.initTable()
                })
            },
            toEdit() {
                if (this.editForm.username == '' || this.editForm.loginName == "") {
                    this.$message({
                        message: '姓名和用户名不能为空！',
                        type: "warning",
                        duration: 800
                    })
                    return
                }
                if ((this.editForm.password !== this.editForm.password2) && (this.editForm.password !== null && this.editForm.password2 !== null)) {
                    this.$message({
                        message: '密码不相同！',
                        type: "warning",
                        duration: 800
                    })
                    return
                }
                let subjects = this.tempSubjectData
                this.editForm.subjects = subjects
                updateTeacher(this.editForm).then(response => {
                    this.$message({
                        message: '修改成功',
                        type: "success",
                        duration: 600
                    });
                    this.isEdit = false
                    this.initTable()
                })
            },
            toDelete() {
                deleteTeacher(this.deleteForm).then(response => {
                    this.$message({
                        message: '删除成功',
                        type: "success",
                        duration: 600
                    });
                    this.isDelete = false
                    this.initTable();
                })
            },
            /*点击新增授课的时候，先添加表格内容*/
            handleSubjectAdd() {
                if (this.tempSubject !== '' && this.tempClass !== '') {
                    var classObj = {};
                    classObj = this.classData.find((item) => {
                        return item.id == this.tempClass
                    })
                    var subjectObj = {};
                    subjectObj = this.subjectData.find((item) => {
                        return item.id == this.tempSubject;
                    })
                    let subject = {
                        //id: this.subjectOfClass,
                        classID: this.tempClass,
                        subjectID: this.tempSubject,
                        className: classObj.name,
                        subjectName: subjectObj.name
                    }
                    this.tempSubjectData.push(subject)
                    this.subjectOfClass += 1;
                }
            },
            /*点击删除授课的时候,将temp数据删除其中的*/
            handleSubjectDelete(index, row) {
                var deleteSubject = {};
                deleteSubject = this.tempSubjectData.find((item) => {
                    return item.classID == row.classID && item.subjectID == row.subjectID;
                })
                for (let i = 0; i < this.tempSubjectData.length; i++) {
                    if (this.tempSubjectData[i].classID == deleteSubject.classID && this.tempSubjectData[i].subjectID == deleteSubject.subjectID) {
                        this.tempSubjectData.splice(i, 1)
                    }
                }
            },
            closeDialog() {
                this.tempSubjectData = []
                this.addForm.loginName = ""
                this.addForm.username = ""
                this.addForm.mobile = ""
                this.addForm.email = ""
                this.addForm.password = ""
                this.initTable()
            }
        }
    }
</script>
