<template>
  <div style="width: 100%;height: 100%">
    <div style="position: relative; left: 0px">
<!--
      <el-button type="primary" @click="handleDone">完成设置</el-button>
-->
      <el-button type="success" @click="handleMore">更多设置</el-button>
    </div>
    <div style="position:relative;height: 100%;width: 1200px;left:0; right:0; top:0; bottom:0;margin: auto;background: #3a8ee6">
      <div class="father">
        <img class="canvas_bgp" v-if="done==1" id="canvas_bgp" v-bind:src="data.urls[0]"/>
        <canvas class="canvas" width="500px" height="707.21px" id="canvas"></canvas>
      </div>
      <div class="father2">
        <canvas class="canvas" width="500px" height="707.21px" id="canvas2"></canvas>
        <img class="canvas_bgp" v-if="done==1" id="canvas_bgp2" v-bind:src="data.urls[1]"/>
      </div>
    </div>
    <el-dialog title="考试名称" style="z-index: 10000000" :visible.sync="isAdd" width="20%">
      <el-form>
        <el-form-item label="考试名称">
          <el-input autocomplete="off" v-model="data.examName"></el-input>
          <el-input autocomplete="off" v-model="data.examName" style="display: none"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="toDone">确 定</el-button>
        <el-button @click="isAdd=false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  var my_canvas;
  var my_canvas2;
  var ctx2;
  var ctx;
  var pic_width;
  var pic_height;
  var canvas_width;
  var canvas_height;
  var ratio;
  import {getList} from '@/api/exam/canvas.js'
  import {confirm} from '@/api/exam/canvas.js'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {ElButton},
    data(){
      return {
        imageUrls: [],
        isAdd: false,
        done: 1,
        data: {},
        listQuery: {
          templateID: 0,
          sheetID: 0
        },
        addParams: {
          examName: '',
          schoolID: 0,
          gradeID: 0,
          subjectID: 0
        }
      }
    },
    created(){
      this.listQuery.templateID = this.$route.query.templateID
      if (this.$route.query.sheetID == null) {
        this.listQuery.sheetID = ''
      } else {
        this.listQuery.sheetID = this.$route.query.sheetID
      }
    },
    methods: {
      initData(){
        getList(this.listQuery).then(response => {
          this.data = response.data
          this.data.schoolID = this.$route.query.schoolID
          this.data.gradeID = this.$route.query.gradeID
          this.data.subjectID = this.$route.query.subjectID
          this.data.templateID = this.$route.query.templateID
          this.data.sheetID = this.listQuery.sheetID
          this.data.examName = ""
          var that = this
          var timer = setInterval(function () {
            if (document.getElementById('canvas_bgp').complete && document.getElementById('canvas_bgp2').complete) {
              that.initCanvas();
              //that.initCanvas2()
              clearInterval(timer)
            }
          })
        })
      },
      initCanvas(){
        var that = this
        // 获取窗口宽度
        let winWidth = 500;
        if (window.innerWidth)
          winWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
          winWidth = document.body.clientWidth;
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
          winWidth = document.documentElement.clientWidth;
        }
        my_canvas = document.getElementById("canvas")
/*        my_canvas.width=winWidth/3
        my_canvas.height=winWidth/3/0.707*/
        ctx = my_canvas.getContext("2d");
        canvas_height = my_canvas.height
        canvas_width = my_canvas.width
        pic_width = that.data.width
        pic_height = that.data.height
        ratio = canvas_width / pic_width

  /*      var img = document.getElementById("canvas_bgp")
        img.style.width=canvas_width+"px";
        img.style.height=canvas_height+'px'*/

        my_canvas.addEventListener('click', function (e) {
          var loc = that.windowTocanvas(my_canvas, event.clientX, event.clientY);
          let x = parseInt(loc.x)
          let y = parseInt(loc.y)
          for (let i = 0; i < that.data.points.length; i++) {
            if (that.data.points[i].tl_x * ratio - 2 <= x && x <= that.data.points[i].br_x * ratio + 2 && that.data.points[i].tl_y * ratio - 2 <= y && y <= that.data.points[i].br_y * ratio + 2) {
              if (that.data.points[i].filled == null) {
                that.data.points[i].filled = 1
              }
              if (that.data.points[i].filled == 1) {
                that.data.points[i].filled = 0
              } else if (that.data.points[i].filled == 0) {
                that.data.points[i].filled = 1
              }
            }
          }
          that.clearCanvas()
          that.drawAnswers()
        })
        this.drawAnswers()
      },
      initCanvas2(){
        var that = this
        my_canvas2 = document.getElementById("canvas2")
        ctx2 = my_canvas2.getContext("2d");
        canvas_height = my_canvas2.height
        canvas_width = my_canvas2.width
        pic_width = that.data.width
        pic_height = that.data.height
        ratio = canvas_width / pic_width
        my_canvas2.addEventListener('click', function (e) {
          var loc = that.windowTocanvas(my_canvas2, event.clientX, event.clientY);
          let x = parseInt(loc.x)
          let y = parseInt(loc.y)
          for (let i = 0; i < that.data.points.length; i++) {
            if (that.data.points[i].tl_x * ratio - 2 <= x && x <= that.data.points[i].br_x * ratio + 2 && that.data.points[i].tl_y * ratio - 2 <= y && y <= that.data.points[i].br_y * ratio + 2) {
              if (that.data.points[i].filled == 1) {
                that.data.points[i].filled = 0
              } else if (that.data.points[i].filled == 0) {
                that.data.points[i].filled = 1
              }
            }
          }
          that.clearCanvas()
          that.drawAnswers()
        })
        this.drawAnswers()
      },
      windowTocanvas(canvas, x, y){
        var bbox = canvas.getBoundingClientRect();
        return {
          x: x - bbox.left * (canvas.width / bbox.width),
          y: y - bbox.top * (canvas.height / bbox.height)
        }
      },
      drawAnswers(){
        for (let i = 0; i < this.data.points.length; i++) {
          let x = this.data.points[i].tl_x * canvas_width / pic_width
          let y = this.data.points[i].tl_y * canvas_height / pic_height
          let currentWidth = canvas_width / pic_width * (this.data.points[i].br_x - this.data.points[i].tl_x)
          let currentHeight = canvas_height / pic_height * (this.data.points[i].br_y - this.data.points[i].tl_y)
          if (this.data.points[i].filled == 1) {
            this.drawAnswer(x - 2, y - 2, currentWidth + 2, currentHeight + 2, 2)
          }
        }
      },
      drawAnswer(x, y, width, height, linewidth){
        ctx.beginPath();
        ctx.fillStyle = 'red'
        //ctx.fillRect(230, 191, 12, 8)
        ctx.lineWidth = linewidth
        ctx.strokeStyle = 'red'
        ctx.rect(x, y, width, height)
        ctx.stroke();
      },
      clearCanvas(){
        ctx.clearRect(0, 0, canvas_width, canvas_height)
      },
      handleMore(){
        /*添加完成还是更多的标志符 0为完成，1为更多*/
        this.data.isMore = 1
        confirm(this.data).then(response => {
          let testID = response.data
          this.$router.push({
            path: "/exam/edit/",
            query: {
              subjectID: this.data.subjectID,
              id: this.data.templateID,
              gradeID: this.data.gradeID,
              schoolID: this.data.schoolID,
              testID: testID
            }
          })
        })
      },
      handleDone(){
        this.isAdd = true
      },
      toDone(){
        if (this.data.examName == '' || this.data.examName == null) {
          this.$message({
            type: 'warning',
            message: '考试名不能为空！'
          })
          return
        }
        /*2018年12月28日16:27:46 添加判断是否为完成或者更多的标志符*/
        this.data.isMore = 0
        confirm(this.data).then(response => {
          this.$router.push("/exam/list")
        })
      }
    },
    mounted(){
      this.initData();
    }
  }
</script>
<style>
  /*为了设置两个标签叠加在一起,需要设置其父标签*/
  .father {
    /*设置标签为相对的*/
    position: relative;
    background: #99a9bf;
    width: 500px;
    text-align: left;

  }
  .father2 {
    /*设置标签为相对的*/
    position: relative;
    top:0;
    left:0;
    margin-left: 0px;
    background: #00ff00;
    width: 500px;
    text-align: right;
  }
  /*canvas的大小需要在标签内设置,否则会拉伸或缩小默认的大小*/
  .canvas {
    border: 1px solid black;
    /*位置绝对*/
    position: absolute;
    top: 0;
    z-index: 998;
  }

  .canvas_bgp {
    width: 500px;
    height: 707.21px;
    /*位置绝对*/
    position: absolute;
    top: 0;
    z-index: -1;
  }
</style>
<!--<template>
    <div style="width: 100%;position: relative;">
        &lt;!&ndash; <div style="width: 100%;height: 84px;position: absolute;background: white;"></div> &ndash;&gt;		&lt;!&ndash; 月黑风高 &ndash;&gt;
        <div style="position: relative;">
            &lt;!&ndash;
                  <el-button type="primary" @click="handleDone">完成设置</el-button>
            &ndash;&gt;
            <el-button type="success" @click="handleMore">更多设置</el-button>
        </div>
        <div style="position:relative;width: 100%;display: flex;justify-content: center;">
            <div class="father" :style="masklist">
                &lt;!&ndash; <div class="tophidden" v-bind:style="{bottom:bottom}"></div> 这里的hiddempass掉&ndash;&gt;
                <img class="canvas_bgp" v-if="done==1" id="canvas_bgp" v-bind:src="data.urls[0]" :style="imglist" style="width: 2000px;height: 2828.84px;"/>
                <canvas class="canvas" width="2000px" height="2828.84px"  :style="canvlist" id="canvas" onselectstart="return false;"></canvas>
                &lt;!&ndash; 这里存在一个小小的体验bug就是双击canvas区域会选中整个canvas，onselectstart="return false;"可解决此问题 &ndash;&gt;
            </div>
            &lt;!&ndash; 	<div class="father2" v-if="data.urls.length==2">
                    <canvas class="canvas" width="2000px" height="2828.84px" id="canvas2"></canvas>
                    <img class="canvas_bgp" v-if="done==1" id="canvas_bgp2" v-bind:src="data.urls[1]"/>
                </div> &ndash;&gt;
        </div>
        <el-dialog title="考试名称" style="z-index: 10000000" :visible.sync="isAdd" width="20%">
            <el-form>
                <el-form-item label="考试名称">
                    <el-input autocomplete="off" v-model="data.examName"></el-input>
                    <el-input autocomplete="off" v-model="data.examName" style="display: none"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="toDone">确 定</el-button>
                <el-button @click="isAdd=false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    var my_canvas;
    var my_canvas2;
    var ctx2;
    var ctx;
    var pic_width;
    var pic_height;
    var canvas_width;
    var canvas_height;
    var ratio;
    var ratioY;

    import {getList} from '@/api/exam/canvas.js'
    import {confirm} from '@/api/exam/canvas.js'
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
    export default{
        components: {ElButton},
        data(){
            return {
                imageUrls: [],
                isAdd: false,
                done: 1,

                masklist:{
                    "width":0,		//father的大小
                    "height":0,
                },
                canvlist:{		//canvas在father下的位置
                    "top":0,
                    "left":0
                },

                imglist:{			//img在father下的位置
                    "top":0,
                    "left":0
                },

                Scale:1,				//father的缩放比例

                data: {},
                listQuery: {
                    templateID: 0,
                    sheetID: 0
                },
                addParams: {
                    examName: '',
                    schoolID: 0,
                    gradeID: 0,
                    subjectID: 0
                }
            }
        },
        created(){
            this.listQuery.templateID = this.$route.query.templateID
            if (this.$route.query.sheetID == null) {
                this.listQuery.sheetID = ''
            } else {
                this.listQuery.sheetID = this.$route.query.sheetID
            }
        },
        methods: {
            initData(){
                getList(this.listQuery).then(response => {
                    this.data = response.data
                    // console.log(this.data.points[0],this.data.points[this.data.points.length-1])
                    this.data.schoolID = this.$route.query.schoolID
                    this.data.gradeID = this.$route.query.gradeID
                    this.data.subjectID = this.$route.query.subjectID
                    this.data.templateID = this.$route.query.templateID
                    this.data.sheetID = this.listQuery.sheetID
                    this.data.examName = ""

                    var that = this
                    var timer = setInterval(function () {
                        if (document.getElementById('canvas_bgp').complete) {
                            that.initCanvas();
                            //that.initCanvas2()
                            clearInterval(timer)
                        }
                    })
// 					if(this.data.width == 3306){
// 						alert(this.data.width)
// 					}
                })
            },
            initCanvas(){
                // 获取可视窗口宽高
                window.onresize =()  =>{
                    return (()=>{
                        window.screenHeight = window.innerHeight;
                        window.screenWidth = window.innerWidth;
                        var fatherScale = document.getElementsByClassName("father")[0];		//获取father
                        var canvasScale = document.getElementsByClassName("canvas")[0];
                        var imgScale = document.getElementsByClassName("canvas_bgp")[0];
                        var fatherWidth = parseInt(this.masklist.width);			//获取father的宽度
                        var Ratio = window.screenWidth/fatherWidth;						//计算出窗口与father的宽比
                        this.data.Scale = Ratio;
                        // console.log(this.Scale);
                        //等比缩放
// 							if(this.data.Scale<1){
// 								fatherScale.style.transform = "scale("+Ratio+")";
// 								canvasScale.style.transform = "scale("+Ratio+")";
// 								imgScale.style.transform = "scale("+Ratio+")";
// 							}
                        // console.log(this.data.Scale)
                        // console.log(fatherWidth,this.masklist.width,this.data.Scale);
                    })()
                }

                var that = this
                // 获取窗口宽度
                let winWidth = 500;
                if (window.innerWidth)	//获取窗口可视化宽度
                    winWidth = window.innerWidth;
                else if ((document.body) && (document.body.clientWidth))	//width+左右padding
                    winWidth = document.body.clientWidth;
                if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
                    winWidth = document.documentElement.clientWidth;
                }
                my_canvas = document.getElementById("canvas");
                /*      my_canvas.width=winWidth/3
                        my_canvas.height=winWidth/3/0.707*/
                ctx = my_canvas.getContext("2d");
                canvas_height = my_canvas.height	//canvas的高old
                canvas_width = my_canvas.width		//canvas的宽old
                pic_width = that.data.width				//图片宽old
                pic_height = that.data.height			//图片高old
                ratio = canvas_width / pic_width		//计算canvas和底图的宽度比例old
                ratioY = canvas_height / pic_height		//计算canvas和底图的高度比例old
// 				console.log(ratio,this.data.points[0],this.data.points[this.data.points.length-1])
                // console.log(my_canvas.height,my_canvas.width,that.data.width,that.data.height,ratio,ratioY)

                var Maxbr_x = []
                var Maxbr_y = []
                for(var k=0;k<this.data.points.length;k++){
                    Maxbr_x.push(this.data.points[k].br_x);
                    Maxbr_y.push(this.data.points[k].br_y);
                }
                // console.log(Maxbr_x);
                var maxbr_x = Math.max.apply(null,Maxbr_x);		//获取最大x坐标
                var maxbr_y = Math.max.apply(null,Maxbr_y);		//获取最大y坐标
                // console.log(maxbr_x,maxbr_y);
                if(this.data.width){
                    //获取选择题区域宽高，也就是mask的宽高
                    this.masklist.width = (maxbr_x - this.data.points[0].tl_x) * ratio+ 'px';
                    this.masklist.height = (maxbr_y - this.data.points[0].tl_y) * ratioY + 'px';
                    //获取选择题左上角的top值和left值参考基准以mask为准
                    this.canvlist.top = -this.data.points[0].tl_y * ratioY + 'px';
                    this.canvlist.left = -this.data.points[0].tl_x * ratio + 'px';
                    // (图片原比例)
                    this.imglist.top = -this.data.points[0].tl_y * ratioY + 'px';
                    this.imglist.left = -this.data.points[0].tl_x * ratio + 'px';
                    console.log(ratio)
                }
                my_canvas.addEventListener('click', function (e) {		//向指定元素添加事件句柄。
                    var loc = that.windowTocanvas(my_canvas, event.clientX, event.clientY);	//
                    let x = parseInt(loc.x)		//鼠标x轴坐标
                    let y = parseInt(loc.y)
                    // console.log(that.data,x,y,that.data.points)		//这里的points里面包含了所有选项对应框的位置
                    for (let i = 0; i < that.data.points.length; i++) {		//当宽度为1653时
                        //将鼠标位置与points中的对应区间做对比
                        if (that.data.points[i].tl_x*ratio <= x && x <= that.data.points[i].br_x*ratio && that.data.points[i].tl_y*ratioY <= y && y <= that.data.points[i].br_y*ratioY) {
                            if (that.data.points[i].filled == null) {
                                that.data.points[i].filled = 1
                            }
                            if (that.data.points[i].filled == 1) {
                                that.data.points[i].filled = 0
                            }
                            else if (that.data.points[i].filled == 0) {
                                that.data.points[i].filled = 1
                            }
                        }
                    }
                    that.clearCanvas()
                    that.drawAnswers()
                })
                this.drawAnswers()
            },
//       initCanvas2(){		//目前不使用canvas2
//         var that = this
//         my_canvas2 = document.getElementById("canvas2")
//         ctx2 = my_canvas2.getContext("2d");
//         canvas_height = my_canvas2.height
//         canvas_width = my_canvas2.width
//         pic_width = that.data.width
//         pic_height = that.data.height
//         ratio = canvas_width / pic_width
//         my_canvas2.addEventListener('click', function (e) {
//           var loc = that.windowTocanvas(my_canvas2, event.clientX, event.clientY);
//           let x = parseInt(loc.x)
//           let y = parseInt(loc.y)
//           for (let i = 0; i < that.data.points.length; i++) {
//             if (that.data.points[i].tl_x * ratio - 2 <= x && x <= that.data.points[i].br_x * ratio + 2 && that.data.points[i].tl_y * ratio - 2 <= y && y <= that.data.points[i].br_y * ratio + 2) {
//               if (that.data.points[i].filled == 1) {
//                 that.data.points[i].filled = 0
//               } else if (that.data.points[i].filled == 0) {
//                 that.data.points[i].filled = 1
//               }
//             }
//           }
//           that.clearCanvas()
//           that.drawAnswers()
//         })
//         this.drawAnswers()
//       },
            windowTocanvas(canvas, x, y){		//x,y为鼠标点击位置
                var bbox = canvas.getBoundingClientRect();	//这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。分别表示元素各边与页面上边和左边的距离。

                //以下为鼠标点击的位置
                let Top = parseInt(bbox.top)
                let Bottom = parseInt(bbox.bottom)
                let Left = parseInt(bbox.left)
                let Right = parseInt(bbox.right)
                // console.log(Top,Bottom,Left,Right,x,y)
                return {
                    x: x - bbox.left,		//控制鼠标点击的位置与canvas选择框的对比
                    y: y - bbox.top
                }
            },
            drawAnswers(){
                for (let i = 0; i < this.data.points.length; i++) {
                    let x = this.data.points[i].tl_x * canvas_width / pic_width			//这里控制画框的水平位置
                    let y = this.data.points[i].tl_y * canvas_height / pic_height		//这里控制画框的垂直位置
                    let currentWidth = canvas_width / pic_width * (this.data.points[i].br_x - this.data.points[i].tl_x)	//画框的宽
                    let currentHeight = canvas_height / pic_height * (this.data.points[i].br_y - this.data.points[i].tl_y)	//画框的高
                    if (this.data.points[i].filled == 1) {
                        this.drawAnswer(x - 2, y - 2, currentWidth + 2, currentHeight + 2, 2)		//红色选中框的起点及宽高
                    }
                }
            },
            drawAnswer(x, y, width, height, linewidth){
                ctx.beginPath();
                ctx.fillStyle = 'red'
                //ctx.fillRect(230, 191, 12, 8)
                ctx.lineWidth = linewidth
                ctx.strokeStyle = 'red'
                ctx.rect(x, y, width, height)
                ctx.stroke();
            },
            clearCanvas(){
                ctx.clearRect(0, 0, canvas_width, canvas_height)
            },
            handleMore(){
                /*添加完成还是更多的标志符 0为完成，1为更多*/
                this.data.isMore = 1
                confirm(this.data).then(response => {
                    let testID = response.data
                    this.$router.push({
                        path: "/exam/edit/",
                        query: {
                            subjectID: this.data.subjectID,
                            id: this.data.templateID,
                            gradeID: this.data.gradeID,
                            schoolID: this.data.schoolID,
                            testID: testID
                        }
                    })
                })
            },
            handleDone(){
                this.isAdd = true
            },
            toDone(){
                if (this.data.examName == '' || this.data.examName == null) {
                    this.$message({
                        type: 'warning',
                        message: '考试名不能为空！'
                    })
                    return
                }
                /*2018年12月28日16:27:46 添加判断是否为完成或者更多的标志符*/
                this.data.isMore = 0
                confirm(this.data).then(response => {
                    this.$router.push("/exam/list")
                })
            }
        },
        mounted(){
            this.initData();
            window.onresize =()  =>{
                // console.log(window.innerWidth)	//这里获取到的是可视窗口的width；
            }

        },
// 		watch:{
// 			 innerWidth(val){
//          this.innerWidth = val
//          this.tableHeight = this.innerWidth - 250
//        }
// 		}
    }
</script>
<style scoped>
    /*为了设置两个标签叠加在一起,需要设置其父标签*/
    .father {
        /*设置标签为相对的*/
        position: relative;
        top: 20px;
        overflow: hidden;
        box-shadow: 5px 5px 12px 5px gray;
    }

    /*canvas的大小需要在标签内设置,否则会拉伸或缩小默认的大小*/
    .canvas {
        /* border: 1px solid black; */
        /*位置绝对*/
        position: absolute;
        top: 0;
        left: 0;
        z-index: 998;
    }
    .canvas_bgp {		/* new */
        /*位置绝对*/
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>-->

