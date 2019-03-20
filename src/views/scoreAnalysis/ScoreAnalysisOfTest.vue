<template>
    <div style="width: 69%; margin: 0 auto">
        <div>
            <!--<el-radio v-model="radio" @click="radioChange" v-for="item in classes" label="item.value">{{item.text}}</el-radio>-->
            <el-radio-group @change="radioChange" v-model="radio" v-if="classes.length<=3">
                    <el-radio v-for="item in classes" :key="item.value" :label="item.value">
                        {{ item.text }}
                    </el-radio>
            </el-radio-group>
            <el-input placeholder="请输入姓名/学号/考号" style="float: left;width: 30%;" v-model="listQuery.keyword"
                      clearable></el-input>
            <el-button type="primary" style="float: left" @click="handleSearch">搜索</el-button>
            <el-button type="success" style="float: right; margin-right: 10px;" @click.native="handleExport">导出excel
            </el-button>
            <el-button type="primary" style="float: right; margin-right: 10px;" @click.native="handleMore">查看更多
            </el-button>
            <el-table :data="tableData" :border=true @sort-change="changeTableSort" @filter-change="filterChange" stripe
                      style="width:100%; margin: auto">
                <el-table-column align="center" column-key="id" sortable="custom" :filters="classes" prop="className"
                                 label="班级"></el-table-column>
                <el-table-column align="center" column-key="id" sortable="custom" prop="studentNumber"
                                 label="学号"></el-table-column>
                <el-table-column align="center" prop="studentName" label="姓名"></el-table-column>
                <el-table-column align="center" sortable="custom" prop="score" label="成绩"></el-table-column>
                <el-table-column align="center" prop="classRank" label="班级名次"></el-table-column>
                <el-table-column align="center" prop="schoolRank" label="年级名次"></el-table-column>
                <el-table-column align="center">
                    <template slot-scope="scope">
                        <el-button type="primary" @click.native="handleCheck(scope.$index,scope.row)"
                                   style="float: left">查看
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination-container">
                <el-pagination
                    :current-page="listQuery.pageNum"
                    :page-sizes="[5,10,20,30, 50]"
                    :page-size="listQuery.pageSize"
                    :total="total"
                    background
                    layout="total, sizes, prev, pager, next, jumper"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"/>
            </div>
        </div>
        <el-dialog width="55%" :visible.sync="isShow">
            <div style="color: gray;font-family: STHeiti;font-size: 20px;">{{currentServerFileID}}</div>
            <template>
                <div style="display: inline-block; width: 49%;">
                    <span class="demonstration"><!--正面图片--></span>
                    <el-carousel :autoplay="false" :height="imgHeight+'px'" id="carousel1" arrow="always"
                                 ref="carousel1"
                                 indicator-position="none"
                                 @change="handleChange" :loop=false>
                        <el-carousel-item v-for="(item,index) in imageList1" :key="index">
                            <canvas class="canvas" ref="canvas1" style="border: 0px;"></canvas>
                            <img ref="picheight" id="pic" :src="item" width="100%">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div style="display: inline-block; width: 49%;" v-if="this.picSize!=1">
                    <span class="demonstration"><!--反面图片--></span>
                    <el-carousel :autoplay="false" :height="imgHeight+'px'" arrow="always" ref="carousel2"
                                 indicator-position="none"
                                 @change="handleChange" :loop=false>
                        <el-carousel-item v-for="(item,index) in imageList2" :key="index">
                            <canvas class="canvas" ref="canvas2" style="border: 0px;"></canvas>
                            <img :src="item" ref="picheight" width="100%">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div slot="footer" class="dialog-footer" style="text-align: center;">
                    <el-button @click="handleRecognionOfSheet" type="warning">重新识别</el-button>
                    <el-button @click="handlePre" type="success">
                        <上一张
                    </el-button>
                    <el-button @click="handleNext" type="success">下一张></el-button>
                    <el-button @click="handleProof" type="warning">校对</el-button>
                    <el-button @click="isShow=false">取 消</el-button>
                </div>
            </template>
        </el-dialog>
        <el-dialog title="请输入文件名" :visible.sync="isFileName">
            <el-form>
                <el-form-item label="文件名">
                    <el-input autocomplete="off" v-model="fileName"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer" style="text-align: center">
                <el-button @click="isFileName=false">取 消</el-button>
                <el-button type="primary" @click.native="handleExport">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    var ctx1, ctx2, ctx3, ctx4;
    var my_canvas1, my_canvas2, my_canvas3, my_canvas4;
    import QS from 'qs'
    import {getList, getImgUrls, getAllStudent} from '@/api/scoreAnalysis/testOfClasses'
    import {Recongnition, RecognitionSheet, getCanvasPoints} from '@/api/scan/scanNew'
    import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
    import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
    import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
    import ElDialog from "../../../node_modules/element-ui/packages/dialog/src/component";
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button";

    export default {
        components: {
            ElButton,
            ElInput,
            ElDialog,
            ElOption,
            ElSelectDropdown,
            ElCheckbox
        },
        created() {
            this.listQuery.testID = this.$route.query.testID
            this.fileName = this.$route.query.name
            this.initTable()
        },
        beforeRouteLeave(to, from, next) {
            clearInterval(this.timer)
            next()
        },
        mounted() {
            var that = this
            window.onresize = function temp() {
                that.imgHeight = that.$refs.picheight[0].height
            }
        },
        data() {
            return {
                radio: 0,
                imgIndex: 0,/*多张纸的时候，现在为第几张纸的index*/
                picSize: 2,
                imgWidth: '300',
                imgHeight: '600',
                isShow: false,
                currentServerFileID: '',/*当前的serverFileID*/
                currentRow: {}, /*当前的行,点击查看的时候进行赋值*/
                currentData: {},/*当前的学生canvas的值*/
                index: 0, /*当前图片的index*/
                isFileName: false,
                imageList: [],
                imageList1: [],
                imageList2: [],
                currentClasses: '0',
                fileName: '',
                tableData: [],
                total: 0,
                listQuery: {
                    testID: 0,
                    pageNum: 1,
                    pageSize: 10,
                    sortType: 1,
                    orderType: 1,
                    classes: '0',
                    keyword: '',
                },
                classes: [],
                options: [{
                    id: 1,
                    name: '学号'
                }, {
                    id: 2,
                    name: '分数'
                }],
                timer: {}
            }
        },
        watch: {
            'listQuery.keyword': function (val) {
                if (this.listQuery.keyword == '') {
                    this.initTable()
                }
            }
        },
        methods: {
            radioChange() {
                this.listQuery.classes = this.radio.toString()
                this.currentClasses = this.radio.toString()
                this.listQuery.pageNum = 1
                this.initTable()
            },
            initTable() {
                getList(this.listQuery).then(response => {
                    this.tableData = response.data.list;
                    this.total = response.data.total;
                    this.classes = response.data.classes;
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
            handleCheck(index, row) {
                this.index = index
                this.currentRow = row
                let ser = this.currentRow.serverFileIDs[this.currentRow.serverFileIDs.length - 1]
                this.currentServerFileID = ser
                this.imageList1 = []
                this.imageList2 = []
                this.getImageAndDraw()
            },
            changeTableSort(param) {
                if (param.prop == 'className') {
                    this.listQuery.sortType = 2
                } else if (param.prop == 'score') {
                    this.listQuery.sortType = 1
                } else if (param.prop == 'studentNumber') {
                    this.listQuery.sortType = 0
                }
                if (param.order == 'ascending') {
                    this.listQuery.orderType = 0
                } else {
                    this.listQuery.orderType = 1
                }
                this.initTable();
            },
            filterChange(classes) {
                if (classes.id.length == 0) {
                    this.listQuery.classes = '0'
                    this.currentClasses = '0'
                } else {
                    this.listQuery.classes = classes.id.toString()
                    this.currentClasses = classes.id.toString()
                }
                /*修改页号为1,防止第二页没有数据不显示*/
                this.listQuery.pageNum = 1
                this.initTable()
            },
            handleFileName() {
                this.isFileName = true
            },
            handleExport() {
                //this.isFileName = false
                getAllStudent({
                    testID: this.listQuery.testID,
                    pageSize: 1000,
                    pageNum: 1,
                    sortType: this.listQuery.sortType,
                    orderType: this.listQuery.orderType,
                    classes: this.currentClasses,
                    keyword: '',
                }).then(response => {
                    var result = response.data.list
                    import('@/vendor/Export2Excel').then(excel => {
                        const tHeader = ['学号', '姓名', '成绩', '班级名次', '年级名次']
                        const filterVal = ['studentNumber', 'studentName', 'score', 'classRank', 'schoolRank']
                        const list = result
                        const data = this.formatJson(filterVal, list)
                        excel.export_json_to_excel({
                            header: tHeader,
                            data,
                            filename: this.fileName + "_" + result[0].className + '班 成绩表',
                            autoWidth: this.autoWidth
                        })
                    })
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            },
            /*当走马灯改变的时候出发*/
            handleChange(new_index, old_index) {
                this.imgIndex = new_index
                this.$refs.carousel1.setActiveItem(new_index)
                this.$refs.carousel2.setActiveItem(new_index)
                if (this.currentRow.serverFileIDs.length > 1) {
                    if (old_index == 0) {
                        this.currentServerFileID = this.currentRow.serverFileIDs[1]
                    } else {
                        this.currentServerFileID = this.currentRow.serverFileIDs[0]
                    }
                }
            },
            handleMore() {
                this.$router.push({
                    path: "/scoreAnalysis/tests/more",
                    query: {
                        testID: this.listQuery.testID,
                        name: this.fileName,
                        pageNum: this.listQuery.pageNum,
                        pageSize: this.listQuery.pageSize
                    }
                })
            },
            handleRecognionOfSheet() {
                let tempArray = this.imageList1[0].split("/")
                let tempServerFileID = tempArray[tempArray.length - 2]
                RecognitionSheet({testID: this.listQuery.testID, serverFileID: tempServerFileID}).then(response => {

                })
                if (this.imageList2.length >= 2) {
                    let tempArray = this.imageList2[1].split("/")
                    let tempServerFileID = tempArray[tempArray.length - 2]
                    RecognitionSheet({testID: this.listQuery.testID, serverFileID: tempServerFileID}).then(response => {

                    })
                }
                this.isShow = false
            },
            handlePre() {
                if (this.index == 0) {
                    if (this.listQuery.pageNum == 1) {
                        return
                    }
                    this.listQuery.pageNum--;
                    getList(this.listQuery).then(response => {
                        this.tableData = response.data.list;
                        this.total = response.data.total;
                        this.classes = response.data.classes;
                        this.index = this.tableData.length - 1
                        this.currentRow = this.tableData[this.index]
                        if (this.imgIndex == 0) {
                            this.currentServerFileID = this.currentRow.serverFileIDs[0]
                        } else {
                            this.currentServerFileID = this.currentRow.serverFileIDs[1]
                        }
                        this.getImageAndDraw();
                    })
                }
                this.index--;
                this.currentRow = this.tableData[this.index]
                if (this.imgIndex == 0) {
                    this.currentServerFileID = this.currentRow.serverFileIDs[0]
                } else {
                    this.currentServerFileID = this.currentRow.serverFileIDs[1]
                }
                this.getImageAndDraw()
            },
            getImageAndDraw() {
                this.getImgUrls().then((response) => {
                    var that = this
                    var timer = setInterval(function () {
                        if (that.imageList.length == 4) {
                            if (that.$refs.picheight[0].complete && that.$refs.picheight[1].complete && that.$refs.picheight[2].complete && that.$refs.picheight[3].complete) {
                                that.imgHeight = that.$refs.picheight[0].height
                                that.imgWidth = that.$refs.picheight[0].width
                                my_canvas1 = that.$refs.canvas1[0]
                                my_canvas3 = that.$refs.canvas1[1]
                                my_canvas2 = that.$refs.canvas2[0]
                                my_canvas4 = that.$refs.canvas2[1]

                                ctx1 = my_canvas1.getContext("2d")
                                ctx2 = my_canvas2.getContext("2d")
                                ctx3 = my_canvas3.getContext("2d")
                                ctx4 = my_canvas4.getContext("2d")

                                that.$refs.canvas1[0].height = that.imgHeight
                                that.$refs.canvas1[0].width = that.imgWidth
                                that.$refs.canvas1[1].height = that.imgHeight
                                that.$refs.canvas1[1].width = that.imgWidth
                                that.$refs.canvas2[0].height = that.imgHeight
                                that.$refs.canvas2[0].width = that.imgWidth
                                that.$refs.canvas2[1].height = that.imgHeight
                                that.$refs.canvas2[1].width = that.imgWidth
                                clearInterval(timer)
                                that.drawCanvas(that.currentData)
                            }
                        } else if (that.imageList.length == 1) {
                            if (that.$refs.picheight[0].complete) {
                                my_canvas1 = that.$refs.canvas1[0]
                                that.imgHeight = that.$refs.picheight[0].height
                                that.imgWidth = that.$refs.picheight[0].width
                                that.$refs.canvas1[0].height = that.imgHeight
                                that.$refs.canvas1[0].width = that.imgWidth
                                ctx1 = my_canvas1.getContext("2d")
                                clearInterval(timer)
                                that.drawCanvas(that.currentData)
                            }
                        } else {
                            if (that.$refs.picheight[0].complete && that.$refs.picheight[1].complete) {
                                that.imgHeight = that.$refs.picheight[0].height
                                that.imgWidth = that.$refs.picheight[0].width
                                my_canvas1 = that.$refs.canvas1[0]
                                my_canvas2 = that.$refs.canvas2[0]
                                that.$refs.canvas1[0].height = that.imgHeight
                                that.$refs.canvas1[0].width = that.imgWidth
                                that.$refs.canvas2[0].height = that.imgHeight
                                that.$refs.canvas2[0].width = that.imgWidth
                                ctx1 = my_canvas1.getContext("2d")
                                ctx2 = my_canvas2.getContext("2d")
                                clearInterval(timer)
                                that.drawCanvas(that.currentData)
                            }
                        }
                    }, 1000)
                    this.timer = timer
                });

            },
            getImgUrls() {
                return new Promise((resolve, reject) => {
                    getImgUrls({studentID: this.currentRow.studentID, testID: this.listQuery.testID}).then(response => {
                        this.currentData = response.data
                        this.imageList1 = []
                        this.imageList2 = []
                        this.imageList = response.data.urls
                        if (this.imageList.length == 1) {
                            this.picSize = 1;
                            this.imageList1[0] = this.imageList[0]
                        } else {
                            for (let i = 0; i < this.imageList.length; i++) {
                                if (i % 2 == 0) {
                                    this.imageList1.push(this.imageList[i])
                                } else {
                                    this.imageList2.push(this.imageList[i])
                                }
                            }
                        }
                        this.isShow = true
                        resolve("liu")
                    })
                })
            },
            handleNext() {
                if (this.index == this.tableData.length - 1) {
                    if (this.listQuery.pageNum >= this.total / this.listQuery.pageSize) {
                        return
                    }
                    this.listQuery.pageNum++;
                    getList(this.listQuery).then(response => {
                        this.tableData = response.data.list;
                        this.total = response.data.total;
                        this.classes = response.data.classes;
                        this.index = 0
                        this.currentRow = this.tableData[this.index]
                        if (this.imgIndex == 0) {
                            this.currentServerFileID = this.currentRow.serverFileIDs[0]
                        } else {
                            this.currentServerFileID = this.currentRow.serverFileIDs[1]
                        }
                        this.getImageAndDraw()
                    })
                } else {
                    this.index++;
                    this.currentRow = this.tableData[this.index]
                    if (this.imgIndex == 0) {
                        this.currentServerFileID = this.currentRow.serverFileIDs[0]
                    } else {
                        this.currentServerFileID = this.currentRow.serverFileIDs[1]
                    }
                    this.getImageAndDraw()
                }
            },
            drawCanvas(data) {
                this.drawStep(ctx1, data, 1)
                if (this.imageList.length == 2) {
                    this.drawStep(ctx2, data, 2)
                }
                if (this.imageList.length == 4) {
                    this.drawStep(ctx2, data, 2)
                    this.drawStep(ctx3, data, 3)
                    this.drawStep(ctx4, data, 4)
                }
            },
            drawStep(ctx, data, num) {
                this.drawAnswers(ctx, data, num)
                this.drawSubjects(ctx, data, num)
                this.drawNameAndNumber(ctx, data, num)
            },
            /*点击事件的时候将位置转化到canvas上*/
            windowTocanvas(canvas, x, y) {
                var bbox = canvas.getBoundingClientRect();
                return {
                    x: x - bbox.left * (canvas.width / bbox.width),
                    y: y - bbox.top * (canvas.height / bbox.height)
                }
            },
            /*绘制答案*//*参数为:currentCtx:当前canvas的上下文,请求当前学生的数据,x表示当前是第几张图*/
            drawAnswers(currentCtx, data, num) {
                let ratio = this.imgWidth / data.width
                for (let i = 0; i < data.points.length; i++) {
                    let x = data.points[i].tl_x * ratio
                    let y = data.points[i].tl_y * ratio
                    let currentWidth = (data.points[i].br_x - data.points[i].tl_x) * ratio
                    let currentHeight = (data.points[i].br_y - data.points[i].tl_y) * ratio
                    if (data.points[i].filled == 1 && (data.points[i].sheetNum == num || data.points[i].sheetNum == num.toString())) {
                        this.drawAnswer(currentCtx, x - 1, y - 1, currentWidth + 2, currentHeight + 2, 2)
                    }
                }
            },
            drawAnswer(currentCtx, x, y, width, height, linewidth) {
                currentCtx.beginPath();
                currentCtx.fillStyle = 'red'
                currentCtx.lineWidth = linewidth
                currentCtx.strokeStyle = 'red'
                currentCtx.rect(x, y, width, height)
                currentCtx.stroke();
            },
            drawNameAndNumber(currentCtx, data, num) {
                let ratio = this.imgWidth / data.width
                for (let i = 0; i < data.studentName.length; i++) {
                    let width = data.studentName[i].br_x - data.studentName[i].tl_x;
                    let height = data.studentName[i].br_y - data.studentName[i].tl_y;
                    if (data.studentName[i].sheetNum == num) {
                        this.drawNameAndID(currentCtx, data.studentName[i].tl_x * ratio, data.studentName[i].tl_y * ratio, width, data.studentName[i].studentName)
                    }
                }
                for (let j = 0; j < data.sheetStudentNumber.length; j++) {
                    let width = data.sheetStudentNumber[j].br_x - data.sheetStudentNumber[j].tl_x;
                    let height = data.sheetStudentNumber[j].br_y - data.sheetStudentNumber[j].tl_y;
                    if (data.sheetStudentNumber[j].sheetNum == num) {
                        this.drawNameAndID(currentCtx, data.sheetStudentNumber[j].tl_x * ratio, data.sheetStudentNumber[j].tl_y * ratio, width, data.sheetStudentNumber[j].studentNumber)
                    }
                }
            },
            drawSubjects(currentCtx, data, num) {
                let ratio = this.imgWidth / data.width
                for (let i = 0; i < data.subjects.length; i++) {
                    let x = data.subjects[i].tl_x
                    let y = data.subjects[i].tl_y
                    let width = data.subjects[i].br_x - data.subjects[i].tl_x;
                    let height = data.subjects[i].br_y - data.subjects[i].tl_y;
                    if (data.subjects[i].sheetNum == num.toString() || data.subjects[i].sheetNum == num) {
                        if (x < data.width / 2) {
                            this.drawSubjectNumber(currentCtx, (parseFloat(x) + 1.0 * parseFloat(width)) * ratio, (parseFloat(y) + parseFloat(height)) * ratio, width * ratio, height * ratio, data.subjects[i].test_score)
                        } else {
                            this.drawSubjectNumber(currentCtx, (parseFloat(x) - 1.0 * parseFloat(width)) * ratio, (parseFloat(y) + parseFloat(height)) * ratio, width * ratio, height * ratio, data.subjects[i].test_score)
                        }
                    }
                }
            },
            drawSubjectNumber(ctxCurrent, x, y, width, height, text) {
                ctxCurrent.fillStyle = 'red'
                ctxCurrent.font = '25px solid 黑体'
                ctxCurrent.textAlign = 'center'
                ctxCurrent.fillText(text, x, y)
            },
            drawNameAndID(ctxCurrent, x, y, maxWidth, text) {
                ctxCurrent.fillStyle = 'red'
                ctxCurrent.font = '25px solid 黑体'
                ctxCurrent.textAlign = 'center'
                ctxCurrent.fillText(text, x, y)
            },
            clearCanvas() {
                ctx1.clearRect(0, 0, this.imgWidth, this.imgHeight)
                ctx2.clearRect(0, 0, this.imgWidth, this.imgHeight)
                ctx3.clearRect(0, 0, this.imgWidth, this.imgHeight)
                ctx4.clearRect(0, 0, this.imgWidth, this.imgHeight)

            },
            handleSearch() {
                this.listQuery.keyword = this.listQuery.keyword.trim()
                this.initTable()
            },
            handleProof() {
                this.$router.push({
                    path: '/proof/proofSheet/personal',
                    query: {
                        studentID: this.currentRow.studentID,
                        testID: this.listQuery.testID,
                        pageNum: this.listQuery.pageNum,
                        pageSize: this.listQuery.pageSize,
                        serverFileID: this.currentServerFileID
                    }
                })
            },
        }
    }
</script>
<style>
    .canvas {
        position: absolute;
    }
</style>
