<template>
    <div>
        <el-select style="width: 150px;" v-model="checkedClass" @change="handleClassChange" placeholder="请选择">
            <el-option
                v-for="item in classes"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
        </el-select>
        <el-button @click="handleReturn">返回</el-button>
        <el-button type="primary" v-print="'#print'">打印</el-button>
        <el-button type="primary" @click.native="handleExport">导出excel
        </el-button>
        <div class="content" style="margin:0 auto;text-align: center;font-size: 0px;margin:0;padding:0;" id="print">
            <h3 style="font-size: 20px">{{testName}}</h3>
            <h3 style="font-size: 15px; ">{{classNumber}}班</h3>
            <div class="table" style="width: 220mm;margin: 0 auto;">
                <div style="border: 1px solid black">
                    <div class="td" style="width: 11mm;height:10mm;border-right: 1px solid black;font-size: 3mm">考号
                    </div>
                    <div class="td" style="width: 11mm;height:10mm;border-right: 1px solid black;font-size: 3mm">学号
                    </div>
                    <div class="td" style="width: 13mm;height:10mm;border-right: 1px solid black;font-size: 3mm">姓名
                    </div>
                    <div class="td" style="width: 25mm;height:10mm;border-right: 1px solid black;font-size: 3mm"
                         v-for="item in subjects">
                        <div style="border-bottom: 1px solid black;font-size: 3mm;height: 5mm;">{{item}}</div>
                        <div class="td" style="width: 8mm;font-size: 3mm;height:5mm;border-right: 1px solid black">客
                        </div>
                        <div class="td" style="width: 8mm;font-size: 3mm;height:5mm;border-right: 1px solid black">主
                        </div>
                        <div class="td" style="width: 8mm;font-size: 3mm;height:5mm;">总</div>
                    </div>
                    <div class="td" style="width: 8mm;height:10mm;border-right: 1px solid black;font-size: 3mm"
                         v-text="type"></div>
                    <div class="td" style="width: 8mm;height:10mm;border-right: 1px solid black;font-size: 3mm">总分</div>
                    <div class="td" style="width: 5mm;height:10mm;border-right: 1px solid black;font-size: 3mm">名次</div>
                    <div class="td" style="width: 7mm;height:10mm;border-right: 0px solid black;font-size: 3mm">级次</div>
                </div>
                <div>
                    <div v-for="item in data" style="border: 1px solid black;height:4mm;">
                        <div class="td" style="width: 11mm;border-right: 1px solid black;font-size: 3mm">
                            {{item.studentTestNumber}}
                        </div>
                        <div class="td" style="width: 11mm; border-right: 1px solid black;font-size: 3mm">
                            {{item.studentNumber}}
                        </div>
                        <div class="td" style="width: 13mm; border-right: 1px solid black;font-size: 3mm">
                            {{item.name}}
                        </div>
                        <div class="td" style="width: 25mm; border-right: 1px solid black;font-size: 3mm"
                             v-for="subject in item.subjects">
                            <div class="td" style="width: 8mm;font-size: 3mm;border-right: 1px solid black">
                                {{subject.objectiveScore}}
                            </div>
                            <div class="td" style="width: 8mm;font-size: 3mm;border-right: 1px solid black">
                                {{subject.subjectiveScore}}
                            </div>
                            <div class="td" style="width: 8mm;font-size: 3mm;border-right: 0px solid black">
                                {{subject.score}}
                            </div>
                        </div>
                        <div class="td" style="width: 8mm; border-right: 1px solid black;font-size: 3mm">
                            {{item.comprehensiveScore}}
                        </div>
                        <div class="td" style="width: 8mm; border-right: 1px solid black;font-size: 3mm">
                            {{item.score}}
                        </div>
                        <div class="td" style="width: 5mm; border-right: 1px solid black;font-size: 3mm">
                            {{item.classRank}}
                        </div>
                        <div class="td" style="width: 7mm; border-right: 0px solid black;;font-size: 3mm">
                            {{item.schoolRank}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="table" style="width: 220mm; height: 10mm; margin: 0 auto;font-size: 3mm">
            </div>
            <!--平均分等分析值-->
            <!-- <div class="table" style="width: 220mm;margin: 0 auto;font-size: 3mm">
               <div>
                 <div style="border: 1px solid black">
                   <div class="td" style="width: 20mm;border-right: 1px solid black">平均分</div>
                   <div class="td" style="width: 30mm;border-right: 1px solid black" v-for="item in analysis">
                     {{item.average}}
                   </div>
                   <div class="td">{{averTotal}}</div>
                 </div>
                 <div style="border: 1px solid black">
                   <div class="td" style="width: 20mm; border-right: 1px solid black">及格率</div>
                   <div class="td" style="width: 30mm; border-right: 1px solid black" v-for="item in analysis">
                     {{item.passRate}}
                   </div>
                 </div>
                 <div style="border: 1px solid black">
                   <div class="td" style="width: 20mm; border-right: 1px solid black">优秀率</div>
                   <div class="td" v-for="item in analysis" style="width: 30mm;border-right: 1px solid black">
                     {{item.excellentRate}}
                   </div>
                 </div>
                 <div style="border: 1px solid black">
                   <div class="td" style="width: 20mm;border-right: 1px solid black">最高分</div>
                   <div class="td" v-for="item in analysis" style="width: 30mm;border-right: 1px solid black">
                     {{item.maxScore}}
                   </div>
                 </div>
                 <div style="border: 1px solid black">
                   <div class="td" style="width: 20mm;border-right: 1px solid black">最低分</div>
                   <div class="td" v-for="item in analysis" style="width: 30mm;border-right: 1px solid black">
                     {{item.minScore}}
                   </div>
                 </div>
               </div>
             </div>-->
        </div>
    </div>
</template>
<script>
    import {getList} from '@/api/TeachingAffair/classOfSchool.js'
    import {getGradeList} from '@/api/exam/examGroup.js'
    import {getMultiClasses} from '@/api/TeachingAffair/studentOfSchool.js'

    export default {
        created() {
            this.multiTestID = this.$route.query.multiTestID
            this.schoolID = this.$route.query.schoolID
            this.testName = this.$route.query.testName
            this.initData()
        },
        data() {
            return {
                testName: '',
                multiTestID: '',
                classID: '',
                classNumber: '',
                checkedClass: '',
                classes: [],
                data: [],
                subjects: [],
                type: '理综',
                analysis: [],
                averTotal: 0,
                result: [],
                subjects_1: [],
            }
        },
        methods: {
            initData() {
                getMultiClasses({
                    schoolID: this.schoolID,
                    pageNum: 1,
                    pageSize: 100,
                    multiTestID: this.multiTestID
                }).then(response => {
                    this.classes = response.data.classes
                    /*默认选中第一个班级*/
                    this.checkedClass = this.classes[0].id
                    this.handleClassChange()
                })
            },
            handleReturn() {
                this.$router.push({path: '/scoreAnalysis/tests/choose', query: {isGroup: 1}})
            },
            handleClassChange() {
                getGradeList({multiTestID: this.multiTestID, classID: this.checkedClass}).then(response => {
                    this.subjects_1 = response.data.subjects
                    this.result = response.data.multiTestRanks
                    this.subjects = response.data.subjects
                    let subjects = response.data.subjects
                    let students = response.data.multiTestRanks
                    if (response.data.isArt == 1) {
                        this.type = '文综'
                    } else {
                        this.type = '理综'
                    }
                    let analysis = response.data.analysis
                    this.analysis = response.data.analysis

                    let averTotal = 0;
                    for (let x = 0; x < this.analysis.length; x++) {
                        averTotal += this.analysis[x].average
                    }
                    this.averTotal = averTotal.toFixed(2)

                    for (let i = 0; i < students.length; i++) {
                        let arrry = new Array()
                        for (let j = 0; j < subjects.length; j++) {
                            if (students[i].subjects.length == 0) {
                                arrry.push({subjectName: subjects[j], score: 0, objectiveScore: 0, subjectiveScore: 0})
                            }
                            for (let s = 0; s < students[i].subjects.length; s++) {
                                if (students[i].subjects[s].subjectName == subjects[j]) {
                                    arrry.push(students[i].subjects[s])
                                    break
                                }
                                if (s == students[i].subjects.length - 1) {
                                    arrry.push({
                                        subjectName: subjects[j],
                                        score: 0,
                                        objectiveScore: 0,
                                        subjectiveScore: 0
                                    })
                                }
                            }
                        }
                        students[i].subjects = arrry
                    }
                    /*添加数据测试*/
                    this.data = students
                })
                let obj = {}
                obj = this.classes.find(item => {
                    return item.id == this.checkedClass
                })
                this.classNumber = obj.name
            },
            handleExport() {
                var result = this.result;
                var subjects = this.subjects_1;
                // for (let i = 0; i < result.length; i++) {
                //     var k = 0;
                //     for (let j = 0; j < result[i].subjects.length; j++) {
                //         console.log('1111222'+this.subjects_1[this.subjects_1.length - (k + 1)])
                //         console.log(result[i].subjects[j].subjectName)
                //         console.log('j' + j)
                //         if (this.subjects_1[this.subjects_1.length - (k + 1)] == result[i].subjects[j].subjectName) {
                //             console.log("zhengchang")
                //             result[i]['score' + k] = result[i].subjects[j].score
                //             result[i]['subjectiveScore' + k] = result[i].subjects[j].subjectiveScore
                //             result[i]['objectiveScore' + k] = result[i].subjects[j].objectiveScore
                //         } else {
                //             result[i]['score' + k] = 0
                //             result[i]['subjectiveScore' + k] = 0
                //             result[i]['objectiveScore' + k] = 0
                //             j--;
                //         }
                //         k++;
                //     }
                // }

                for (let i = 0; i < result.length; i++) {
                    var k = 0;
                    for (let j = 0; j < result[i].subjects.length; j++) {
                        console.log('1111222'+this.subjects_1[this.subjects_1.length - (k + 1)])
                        console.log(result[i].subjects[j].subjectName)
                        console.log('j' + j)
                        if (this.subjects_1[k] == result[i].subjects[j].subjectName) {
                            console.log("zhengchang")
                            result[i]['score' + k] = result[i].subjects[j].score
                            result[i]['subjectiveScore' + k] = result[i].subjects[j].subjectiveScore
                            result[i]['objectiveScore' + k] = result[i].subjects[j].objectiveScore
                        } else {
                            result[i]['score' + k] = 0
                            result[i]['subjectiveScore' + k] = 0
                            result[i]['objectiveScore' + k] = 0
                            j--;
                        }
                        k++;
                    }
                }
                import('@/vendor/Export2Excel').then(excel => {
                    const tHeader = ['考号', '学号', '姓名'];
                    for (let i = 0; i < this.subjects.length; i++) {
                        tHeader.push(this.subjects[i] + "(客)");
                        tHeader.push(this.subjects[i] + "(主)");
                        tHeader.push(this.subjects[i] + "(总)");
                    }
                    tHeader.push(this.type);
                    tHeader.push("总分");
                    tHeader.push("名次");
                    tHeader.push("级次");
                    const filterVal = ['studentTestNumber', 'studentNumber', 'name'];
                    for (let j = this.subjects.length - 1; j >= 0; j--) {
                        filterVal.push('objectiveScore' + j);
                        filterVal.push('subjectiveScore' + j);
                        filterVal.push('score' + j);
                    }
                    filterVal.push('comprehensiveScore');
                    filterVal.push('score')
                    filterVal.push('classRank')
                    filterVal.push('schoolRank')
                    const list = result
                    const data = this.formatJson(filterVal, list)
                    excel.export_json_to_excel({
                        header: tHeader,
                        data,
                        filename: this.fileName,
                        autoWidth: this.autoWidth
                    })
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            },
        }
    }
</script>
<style scoped>
    .content {
    }

    .td {
        display: inline-table;
    }
</style>
