<template>
    <div style="width: 69%; margin: 0 auto">
        <div style="position: relative;height: 80px">
            <el-button size="mini" type="primary" :disabled="disabled" @click="handleScan">
                <span v-if="time==0">开始扫描</span>
                <span v-if="time>=1">继续扫描</span>
                <iframe src="/panguan/static/scan/scanNew.html" ref="iframe" width="800px" height="1000px"
                        frameborder="3"
                        scrolling="auto" style="display:none"></iframe>
            </el-button>
            <el-button size="mini" type="danger" @click="handleEnd">结束扫描</el-button>
            <el-radio-group v-model="viewType" @change="handleViewChange">
                <el-radio-button label="试卷视图"></el-radio-button>
                <el-radio-button label="班级视图"></el-radio-button>
            </el-radio-group>
            <el-button v-if="flag" size="mini" type="warning" @click="isRecognition=true">重新识别</el-button>
            <br/>
            <div style="position: absolute;">
                <div class="cell" ref="classViewState">
                    <div class="card">
                        <span style="line-height: 12px;" v-text='scanState'></span>
                        <span id="donotTouch" style="line-height: 12px; color: red; display: none">(请勿操作)</span>
                        <span id="timer-loader" style="display: none;margin-top:10px;" class="timer-loader">Loading&#8230;</span>
                    </div>
                </div>
            </div>
            <!--<div style="position: relative; float: left;">-->
            <!--<div class="cell" ref="classViewState">-->
            <!--<div class="card">-->
            <!--<span style="line-height: 12px;" v-text='scanCountText'></span>-->
            <!--<br>-->
            <!--<span style="line-height: 12px;" v-text='uploadCountText'></span>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
        </div>
        <div v-if="viewType=='班级视图'" style="height: 23px;"></div>
        <div ref="classView">
            <div style="margin: 0 auto;width: 70%;" v-if="list!==null">
                <div v-for="(item,index) in list.students"
                     style="border-radius: 8px;border: 2px solid rgb(96,96,96); margin-bottom: 50px;background: #eef0f4">
                    <h3 style="">{{item.classNumber}}班 未阅学生名单 ({{item.students.length}})</h3>
                    <el-button v-if="flag" size="mini" type="warning" @click="handleClear(item.classID)">清空班级数据</el-button>
                    <div>
          <span style="padding: 5px 5px 10px 5px;display:inline-block;"
                v-for="student in item.students">{{student}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="sheetView" ref="sheetView">
            <div>
                <el-input placeholder="请输入姓名/学号/考号" style="display:inline-block;width: 30%;" v-model="listQuery.keyword"
                          clearable></el-input>
                <el-button type="primary" @click="handleSearch">搜索</el-button>
            </div>
            <br/>
            <el-table :data="tableData" :border=true @sort-change="changeTableSort" @filter-change="filterChange" stripe
                      style="width:100%; margin: auto">
                <el-table-column align="center" label="状态">
                    <template slot-scope="scope">
                        <el-button size="mini" v-if="scope.row.state=='-10'" type="primary">图片上传中
                        </el-button>
                        <el-button size="mini" v-else-if="scope.row.state=='00'" type="primary">图片上传完
                        </el-button>
                        <el-button size="mini" v-else-if="scope.row.state=='01'" type="success"
                        >识别中
                        </el-button>
                        <el-button size="mini" v-else-if="scope.row.state=='02'" type="primary"
                        >识别完
                        </el-button>
                        <el-button size="mini" v-else-if="scope.row.state=='03'" type="info"
                        >判分中
                        </el-button>
                        <el-button size="mini" v-else-if="scope.row.state=='14'" type="success"
                        >判分完
                        </el-button>
                        <el-button size="mini" v-else-if="scope.row.state='54'" type="success">判分完</el-button>
                        <el-button size="mini" v-else-if="scope.row.state=='24'" type="danger"
                        >无此学生
                        </el-button>
                        <el-button size="mini" type="warning"
                                   v-else-if="scope.row.state.substr(scope.row.state.length-1,1)=='7'">
                            待重新识别
                        </el-button>
                        <el-button size="mini" v-else="1==1" type="success"
                        >未知
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column align="center" column-key="id" sortable="custom" :filters="classes" prop="className"
                                 label="班号"></el-table-column>
                <el-table-column align="center" column-key="id" sortable="custom" prop="studentNumber"
                                 label="学号"></el-table-column>
                <el-table-column align="center" prop="name" label="姓名"></el-table-column>
                <el-table-column align="center" prop="scanTime" label="扫描时间" :formatter="dateFormat"></el-table-column>
                <el-table-column align="center" prop="scaner" label="扫描员"></el-table-column>
                <el-table-column align="center" label="答卷">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click.native="handleCheck(scope.$index,scope.row)">查看
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
        <el-dialog width="55%" :visible.sync="isShow">
            <div style="color: gray;font-family: STHeiti;font-size: 20px;">{{currentRow.serverFileID}}</div>
            <template>
                <div style="display: inline-block; width: 49%;">
                    <el-carousel :autoplay="false" height="100%">
                        <canvas class="canvas" ref="canvas1" style="border: 0px;"></canvas>
                        <img ref="picHeight1" :src="imageList[0]" width="100%">
                    </el-carousel>
                </div>
                <div style="display: inline-block; width: 49%;" v-if="imageList.length>1">
                    <el-carousel :autoplay="false" height="100%">
                        <canvas class="canvas" ref="canvas2" style="border: 0px;"></canvas>
                        <img ref="picHeight2" :src="imageList[1]" width="100%">
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
        <el-dialog title="重新识别" :visible.sync="isRecognition">
            <span>本操作将导致{{total}}张试卷结果被清除并重新识别判分,时间较长而且会使系统响应变慢，请慎重!</span>
            <el-form :inline="true" algin="left">
                <el-form-item label="请输入密码">
                    <el-input autocomplete="off" type="password" v-model="password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isRecognition = false">取 消</el-button>
                <el-button type="primary" @click="toRecognition">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="清空扫描数据" :visible.sync="isClear" width="20%">
            <el-form :inline="true" algin="left">
                <el-form-item label="请输入密码">
                    <el-input autocomplete="off" type="password" v-model="password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isClear=false">取 消</el-button>
                <el-button type="primary"  @click.native="cleanData">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    var ctx;
    var ctx2;
    var my_canvas;
    var my_canvas2;
    import QS from 'qs'
    import {
        getList,
        Recongnition,
        RecognitionSheet,
        getCanvasPoints,
        getSearchResults,
        getScanPaperType
    } from '@/api/scan/scanNew'
    import {getList as getTableList,emptyDataByClass} from '@/api/scan/scan'
    import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
    import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
    import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input";

    export default {
        components: {
            ElInput,
            ElButton,
            ElOption,
            ElSelectDropdown,
            ElCheckbox
        },
        created() {
            this.listQuery2.testID = this.$route.query.testID
            this.listQuery.testID = this.$route.query.testID
            this.examName = this.$route.query.name
            if (sessionStorage.getItem('role') === 'admin') {
                this.flag = true
            } else {
                this.flag = false
            }
            this.getScanPaper()
        },
        watch: {
            'listQuery.keyword': function (val) {
                if (this.listQuery.keyword == '') {
                    this.initTable()
                }
            }
        },
        mounted() {
            this.$refs.sheetView.style.display = 'none'
            var that = this
            window.onresize = function temp() {
                that.imgHeight = that.$refs.picHeight1.height
                that.imgWidth = that.$refs.picHeight1.width
                that.drawCanvas(that.currentData)
            }
            this.initList()
            this.initTable()
            console.log('cccc')
            var that = this
            this.timer = setInterval(function () {
                console.log('create timer')
                that.initList()
                that.initTable()
            }, 10000);
        },
        beforeRouteLeave(to, from, next) {
            console.log("routeLeave")
            clearInterval(this.timer)
            clearInterval(this.timerContinue)
            clearInterval(this.imgTimer)
            clearInterval(this.countTimer)
            next()
        },
        beforeRouteUpdate(to, from, next) {
            console.log('update')
        },
        data() {
            return {
                flag: false,
                isClear: false,
                classID: 0,
                password: '',
                currentData: {}, /*当前的图片的canvas内容*/
                imgHeight: 0, /*图片的高度*/
                imgWidth: 0, /*图片的宽度*/
                viewType: '班级视图', /*视图类型*/
                isShow: false,
                isRecognition: false,
                /*
                 fullscreenLoading: false,
                 */
                currentRow: {}, /*当前的行,点击查看的时候进行赋值*/
                index: 0, /*当前图片的index*/
                time: 0,
                timer: {},
                timerContinue: {},
                countTimer: {},
                imgTimer: {},
                scanState: '',
                scanCountText: '扫描0张',
                uploadCountText: '上传0张',
                examName: '',
                disabled: false,
                tableData: [],
                total: 0,
                classes: [],
                list: {},
                listQuery2: {
                    testID: 0,
                },
                imageList: [],
                listQuery: {
                    testID: 0,
                    pageNum: 1,
                    pageSize: 10,
                    sortType: 0,
                    orderType: 0,
                    classes: '0',
                    keyword: '',
                },
                pixel_type: 'gray',
                page_size: 'a4',
                resolution: '200',
            }
        },
        methods: {
            getScanPaper() {
                getScanPaperType(this.listQuery2).then(response => {
                    if (response.data != null) {
                        console.log(1);
                        this.pixel_type = response.data.pixelType;
                        this.page_size = response.data.pageSize;
                        this.resolution = response.data.resolution;
                        console.log(response.data.pixelType);
                        console.log(response.data.pageSize);
                        console.log(response.data.resolution);
                    }
                })
            },
            initList() {
                getList(this.listQuery2).then(response => {
                    this.list = response.data
                    var isScanDone = sessionStorage.getItem("isScanDone")
                    if (isScanDone == 1) {
                        if (response.data.state == 1) {
                            clearInterval(this.timerContinue)
                            clearInterval(this.countTimer)
                            this.scanState = '扫描' + Math.round(this.$refs.iframe.contentWindow.Twain_scanCounter / 2) + '张'
                                + ',上传' + this.$refs.iframe.contentWindow.Twain_uploadCounter + '张' + "  阅卷完毕"
                            document.getElementById("timer-loader").style.display = 'none'
                            document.getElementById("donotTouch").style.display = 'none'
                            sessionStorage.removeItem("isScanDone")
                        } else {
                            clearInterval(this.countTimer)
                            this.scanState = '扫描' + Math.round(this.$refs.iframe.contentWindow.Twain_scanCounter / 2) + '张'
                                + ',上传' + this.$refs.iframe.contentWindow.Twain_uploadCounter + '张' + "上传完毕,阅卷中"
                            document.getElementById("donotTouch").style.display = 'none'
                            document.getElementById("timer-loader").style.display = 'inline-block'
                        }
                    } else {
                        // if (this.$refs.iframe.contentWindow.bSelected) {
                        //   this.scanState = "扫描中(请等待)"
                        //   document.getElementById("timer-loader").style.display = 'inline-block'
                        // } else {
                        //   if (isScanDone == 0) {
                        //     this.scanState = "上传中(请等待)"
                        //     document.getElementById("timer-loader").style.display = 'inline-block'
                        //   }
                        // }
                        // if (response.data !== null) {
                        //   if (response.data.state == 1) {
                        //     this.scanState = "阅卷完毕"
                        //     document.getElementById("timer-loader").style.display = 'none'
                        //     sessionStorage.removeItem("isScanDone")
                        //     clearInterval(this.timer)
                        //     clearInterval(this.timerContinue)
                        //   }
                        // }
                    }
                })
            },
            initTable() {
                getTableList(this.listQuery).then(response => {
                    this.tableData = response.data.testedSheets;
                    this.total = response.data.total;
                    this.classes = response.data.classes;
                })
            },
            handleClear(classID){
                this.isClear=true
                this.classID = classID
            },
            cleanData(){
                if (this.password !== 'qingkong') {
                    alert('密码错误')
                    return;
                }
                this.isClear=false
                emptyDataByClass({testID:this.listQuery.testID,classID:this.classID}).then(response=>{
                    this.$message({
                        type:'success',
                        message:'成功清空',
                        duration: 800
                    })
                })
            },
            count() {
                // this.scanCountText = '扫描' + Math.round(this.$refs.iframe.contentWindow.Twain_scanCounter / 2) + '张';
                // console.log('扫描' + this.$refs.iframe.contentWindow.Twain_scanCounter + '页')
                // this.uploadCountText = '上传' + this.$refs.iframe.contentWindow.Twain_uploadCounter + '张';
                if (document.getElementById("donotTouch").style.display == 'none') {
                    document.getElementById("donotTouch").style.display = 'inline'
                }
                if ((this.$refs.iframe.contentWindow.Twain_uploadCounter - 1) < 0) {
                    this.scanState = '扫描' + Math.round(this.$refs.iframe.contentWindow.Twain_scanCounter / 2) + '张' + ',上传' + this.$refs.iframe.contentWindow.Twain_uploadCounter + '张';
                    return;
                }
                this.scanState = '扫描' + Math.round(this.$refs.iframe.contentWindow.Twain_scanCounter / 2) + '张' + ',上传' + (this.$refs.iframe.contentWindow.Twain_uploadCounter - 1) + '张';
            },
            handleSizeChange(val) {
                this.listQuery.pageSize = val
                this.initTable()
            },
            handleCurrentChange(val) {
                this.listQuery.pageNum = val
                this.initTable()
            },
            handleCheckChange(value) {

            },
            changeTableSort(param) {
                if (param.prop == 'studentNumber') {
                    this.listQuery.sortType = 1
                } else if (param.prop == '') {
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
            initCanvas(points) {
                this.drawCanvas();
            },
            /*视图的变化*/
            handleViewChange(val) {
                if (val == '试卷视图') {
                    this.$refs.classView.style.display = 'none'
                    this.$refs.classViewState.style.display = 'none'
                    this.$refs.sheetView.style.display = 'block'
                } else {
                    this.$refs.classView.style.display = 'block'
                    this.$refs.classViewState.style.display = 'block'
                    this.$refs.sheetView.style.display = 'none'
                }
            },
            //继续扫描的按钮
            handleScan() {
                clearInterval(this.countTimer)
                clearInterval(this.timerContinue)
                clearInterval(this.timer)
                var that = this
                this.timerContinue = setInterval(function () {
                    console.log('new timeererererer')
                    that.initList()
                    that.initTable()
                }, 2000);
                this.countTimer = setInterval(function () {
                    console.log('in timeer')
                    that.count();
                }, 800);
                sessionStorage.removeItem("isScanDone")
                this.time++;
                // this.$refs.iframe.contentWindow.AcquireImage();
                this.$refs.iframe.contentWindow.AcquireImage(this.pixel_type, this.page_size, this.resolution);
            },
            //结束扫描的按钮
            handleEnd() {
                // clearInterval(this.timer)
                clearInterval(this.timerContinue)
                this.$router.push('/scoreAnalysis/tests/' + this.listQuery.testID)
                this.$router.push({
                    path: '/scoreAnalysis/test/',
                    query: {testID: this.listQuery.testID, name: this.examName}
                })
            },
            //查看答卷
            handleCheck(index, row) {
                this.index = index
                this.currentRow = row
                this.isShow = true
                if (this.currentRow.imgURLs.length == 1) {
                    this.imageList[0] = this.currentRow.imgURLs[0]
                } else {
                    this.imageList[0] = this.currentRow.imgURLs[0]
                    this.imageList[1] = this.currentRow.imgURLs[1]
                }
                this.initImageAndDrawCanvas()
            },
            dateFormat(row, column, cellValue, index) {
                const daterc = row[column.property]
                return daterc.substr(0, 10) + ' ' + daterc.substr(11, 8)
            },
            toRecognition() {
                if (this.password !== 'shibie') {
                    alert('密码错误')
                    return;
                }
                Recongnition({testID: this.listQuery.testID}).then(response => {
                    /*  this.$message({
                     message: '重新判分完成',
                     type: "success",
                     duration: 600
                     })*/
                })
                this.isRecognition = false
            },
            initImageAndDrawCanvas() {
                var that = this
                var imgTimer = setInterval(function () {
                    if (that.imageList.length == 1) {
                        if (that.$refs.picHeight1.complete) {
                            that.imgHeight = that.$refs.picHeight1.height
                            that.imgWidth = that.$refs.picHeight1.width
                            my_canvas = that.$refs.canvas1
                            ctx = my_canvas.getContext("2d")
                            clearInterval(imgTimer)
                            getCanvasPoints({
                                url: that.currentRow.imgURLs[0],
                                studentNumber: that.currentRow.studentNumber,
                                serverFileID: that.currentRow.serverFileID
                            }).then(response => {
                                that.currentData = response.data
                                that.drawCanvas(response.data)
                            })
                        }
                    } else {
                        if (that.$refs.picHeight1.complete && that.$refs.picHeight2.complete) {
                            that.imgHeight = that.$refs.picHeight1.height
                            that.imgWidth = that.$refs.picHeight1.width
                            my_canvas = that.$refs.canvas1
                            my_canvas2 = that.$refs.canvas2
                            ctx = my_canvas.getContext("2d")
                            ctx2 = my_canvas2.getContext("2d")
                            clearInterval(imgTimer)
                            getCanvasPoints({
                                url: that.currentRow.imgURLs[0],
                                studentNumber: that.currentRow.studentNumber,
                                serverFileID: that.currentRow.serverFileID
                            }).then(response => {
                                that.currentData = response.data
                                that.drawCanvas(response.data)
                            })
                        }
                    }
                }, 1000)
                this.imgTimer = imgTimer
            },
            handlePre() {
                if (this.index == 0) {
                    if (this.listQuery.pageNum == 1) {
                        return
                    }
                    this.listQuery.pageNum--;
                    getTableList(this.listQuery).then(response => {
                        this.tableData = response.data.testedSheets;
                        this.total = response.data.total;
                        this.classes = response.data.classes;
                        this.index = this.tableData.length - 1
                        this.currentRow = this.tableData[this.index]
                        this.imageList = this.currentRow.imgURLs
                        this.initImageAndDrawCanvas()
                    })
                }
                this.index--;
                this.currentRow = this.tableData[this.index]
                this.imageList = this.currentRow.imgURLs
                this.initImageAndDrawCanvas()
            },
            handleNext() {
                if (this.index == this.tableData.length - 1) {
                    if (this.listQuery.pageNum >= this.total / this.listQuery.pageSize) {
                        return
                    }
                    this.listQuery.pageNum++;
                    getTableList(this.listQuery).then(response => {
                        this.tableData = response.data.testedSheets;
                        this.total = response.data.total;
                        this.classes = response.data.classes;
                        this.index = 0
                        this.currentRow = this.tableData[this.index]
                        this.imageList = this.currentRow.imgURLs
                        this.initImageAndDrawCanvas()
                    })
                } else {
                    this.index++;
                    this.currentRow = this.tableData[this.index]
                    this.imageList = this.currentRow.imgURLs
                    this.initImageAndDrawCanvas()
                }
            },
            handleRecognionOfSheet() {
                RecognitionSheet({
                    testID: this.listQuery.testID,
                    serverFileID: this.currentRow.serverFileID
                }).then(response => {

                })
                this.isShow = false
            },
            handleProof() {
                this.$router.push({
                    path: '/proof/proofSheet/personal',
                    query: {
                        studentID: this.currentRow.studentID,
                        testID: this.listQuery.testID,
                        pageNum: this.listQuery.pageNum,
                        pageSize: this.listQuery.pageSize,
                        serverFileID: this.currentRow.serverFileID
                    }
                })
            },
            drawCanvas(data) {
                this.$refs.canvas1.width = this.imgWidth
                this.$refs.canvas1.height = this.imgHeight
                if (this.imageList.length > 1) {
                    this.$refs.canvas2.width = this.imgWidth
                    this.$refs.canvas2.height = this.imgHeight
                }
                this.drawAnswers(data)
                this.drawSubjects(data)
                this.drawNameAndNumber(data)
            },
            windowTocanvas(canvas, x, y) {
                var bbox = canvas.getBoundingClientRect();
                return {
                    x: x - bbox.left * (canvas.width / bbox.width),
                    y: y - bbox.top * (canvas.height / bbox.height)
                }
            },
            drawAnswers(data) {
                let ratio = this.imgWidth / data.width
                for (let i = 0; i < data.points.length; i++) {
                    let x = data.points[i].tl_x * ratio
                    let y = data.points[i].tl_y * ratio
                    let currentWidth = (data.points[i].br_x - data.points[i].tl_x) * ratio
                    let currentHeight = (data.points[i].br_y - data.points[i].tl_y) * ratio
                    if (data.points[i].filled == 1 && data.points[i].sheetNum == 1) {
                        this.drawAnswer(data.points[i].color, x - 1, y - 1, currentWidth + 2, currentHeight + 2, 2)
                    }
                }
            },
            drawAnswer(color, x, y, width, height, linewidth) {
                ctx.beginPath();
                ctx.fillStyle = color
                ctx.lineWidth = linewidth
                ctx.strokeStyle = color
                ctx.rect(x, y, width, height)
                ctx.stroke();
            },
            drawNameAndNumber(data) {
                let ratio = this.imgWidth / data.width
                let width = data.studentName.br_x - data.studentName.tl_x;
                let height = data.studentName.br_y - data.studentName.tl_y;
                for (let i = 0; i < data.studentName.length; i++) {
                    if (data.studentName[i].sheetNum == '1' || data.studentName[i].sheetNum == 1) {
                        this.drawNameAndID(ctx, data.studentName[i].tl_x * ratio, data.studentName[i].tl_y * ratio, width, data.studentName[i].studentName)
                        this.drawNameAndID(ctx, data.sheetStudentNumber[i].tl_x * ratio, data.sheetStudentNumber[i].tl_y * ratio, width, data.sheetStudentNumber[i].studentNumber)
                    } else {

                    }
                }
            },
            drawSubjects(data) {
                let ratio = this.imgWidth / data.width
                for (let i = 0; i < data.subjects.length; i++) {
                    let x = data.subjects[i].tl_x
                    let y = data.subjects[i].tl_y
                    let width = data.subjects[i].br_x - data.subjects[i].tl_x;
                    let height = data.subjects[i].br_y - data.subjects[i].tl_y;
                    if (data.subjects[i].sheetNum == '1' || data.subjects[i].sheetNum == 1) {
                        if (x < data.width / 2) {
                            this.drawSubjectNumber(ctx, (parseFloat(x) + 1.0 * parseFloat(width)) * ratio, (parseFloat(y) + parseFloat(height)) * ratio, width * ratio, height * ratio, data.subjects[i].test_score)
                        } else {
                            this.drawSubjectNumber(ctx, (parseFloat(x) - 1.0 * parseFloat(width)) * ratio, (parseFloat(y) + parseFloat(height)) * ratio, width * ratio, height * ratio, data.subjects[i].test_score)
                        }
                    } else if (data.subjects[i].sheetNum == '2' || data.subjects[i].sheetNum == '4') {
                        if (x < data.width / 2) {
                            this.drawSubjectNumber(ctx2, (parseFloat(x) + 1.0 * parseFloat(width)) * ratio, (parseFloat(y) + parseFloat(height)) * ratio, width * ratio, height * ratio, data.subjects[i].test_score)
                        } else {
                            this.drawSubjectNumber(ctx2, (parseFloat(x) - 1.0 * parseFloat(width)) * ratio, (parseFloat(y) + parseFloat(height)) * ratio, width * ratio, height * ratio, data.subjects[i].test_score)
                        }
                    }
                }
            },
            drawSubjectNumber(ctxCurrent, x, y, width, height, text) {
                ctxCurrent.fillStyle = 'rgba(255,255,255,0)'
                ctxCurrent.fillRect(x - width, y - height, width * 2, height * 2)
                ctxCurrent.fillStyle = 'red'
                ctxCurrent.font = '25px solid STHeiti'
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
                ctx.clearRect(0, 0, canvas_width, canvas_height)
            },
            handleSearch() {
                this.listQuery.keyword = this.listQuery.keyword.trim()
                this.initTable()
            }
        }
    }
</script>
<style scoped="true">
    @import "../../style/css/spinners.css";

    .cell {
        position: absolute;
        left: 50%;
        top: 0px;
        width: 700px;
        box-sizing: border-box;
        display: table;
    }

    .card {
        font-weight: 700;
        background: white;
        border-radius: 15px;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        height: 40px;
        width: 700px;
    }

    .canvas {
        position: absolute;
    }
</style>
