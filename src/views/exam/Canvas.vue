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
