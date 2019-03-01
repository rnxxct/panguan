<template>
  <div style="width: 69%; margin: 0 auto">
    <div>
      <el-button size="mini" type="primary" :disabled="disabled" @click="handleScan">
        <span v-if="time==0">开始扫描</span>
        <span v-if="time>=1">继续扫描</span>
        <iframe src="/panguan/static/scan/DWT_Scan_Upload_Demo.html" ref="iframe" width="100" height="50" frameborder="3"
                scrolling="auto" style="border: 2px;display: none"></iframe>
      </el-button>
      <el-button size="mini" type="danger" @click="handleEnd">结束扫描</el-button>
      <div style="height: 30px;"></div>
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
            <el-button size="mini" v-else-if="scope.row.state=='24'" type="danger"
            >无此学生
            </el-button>
            <el-button size="mini" v-else="1==1" type="success"
            >判分完
            </el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" column-key="id" sortable="custom" :filters="classes" prop="className"
                         label="班号"></el-table-column>
        <el-table-column align="center" column-key="id" sortable="custom" prop="studentNumber"
                         label="学号"></el-table-column>
        <el-table-column align="center" prop="name" label="姓名"></el-table-column>
        <el-table-column align="center" prop="scanTime" label="扫描时间" :formatter="dateFormat"></el-table-column>
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
      <template>
        <div style="display: inline-block; width: 49%;">
          <el-carousel :autoplay="false" height="100%">
           <!-- <el-carousel-item v-for="(item,index) in imageList1" :key="index">
              <img :src="item" width="100%" height="600px">
            </el-carousel-item>-->
            <img :src="imageList[0]" width="100%">
          </el-carousel>
        </div>
        <div style="display: inline-block; width: 49%;">
          <el-carousel :autoplay="false" height="100%">
        <!--    <el-carousel-item v-for="(item,index) in imageList2" :key="index">
              <img :src="item" width="100%" height="100%">
            </el-carousel-item>-->
            <img :src="imageList[1]" width="100%">
          </el-carousel>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="isShow=false">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script>
  import QS from 'qs'
  import {getList} from '@/api/scan/scan'
  import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
  import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {
      ElButton,
      ElOption,
      ElSelectDropdown,
      ElCheckbox
    },
    created(){
      this.listQuery.testID = this.$route.query.testID
      this.examName = this.$route.query.name
      //this.initTable()
      this.timer2 = setInterval(this.timer, 2000);
    },
    beforeRouteLeave(to,from,next){
      clearInterval(this.timer2)
       next()
    },
    data(){
      return {
        isShow:false,
        picSize:2,
        tableData: [],
        total: 0,
        time:0,
        examName:'',
        imageList:[],
        imageList:[],
        imageList2:[],
        listQuery: {
          testID: 0,
          pageNum: 1,
          pageSize: 10,
          sortType: 0,
          orderType: 0,
          classes: '0'
        },
        disabled: false,
        classes: [],
        options: [{
          id: 1,
          name: '学号'
        }, {
          id: 2,
          name: '分数'
        }]
      }
    },
    methods: {
      timer(){
        this.initTable();
      },
      timer2:function () {

      },
      initTable(){
        getList(this.listQuery).then(response => {
          this.tableData = response.data.testedSheets;
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
      handleCheckChange(value){

      },
      /*  filterHandle(value,row,column){
       const property = column['property'];
       /!*    alert(property)
       alert(value)*!/
       return row[property]=value;
       },*/
      changeTableSort(param){
        if (param.prop == 'className') {
          this.listQuery.sortType = 2
        } else if (param.prop == 'score') {
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
      filterChange(classes){
        /*
         this.listQuery.classes = QS.stringify({class:classes.className},{arrayFormat:'brackets'})
         */
        /*
         this.listQuery.classes=JSON.stringify(classes.className)
         */
        this.listQuery.classes = classes.id.toString()
        this.initTable()
      },
      //继续扫描的按钮
      handleScan(){
        this.time++;
        this.$refs.iframe.contentWindow.AcquireImage();
      },
      //结束扫描的按钮
      handleEnd(){
        clearInterval(this.timer2)
        this.$router.push({path:"/scoreAnalysis/test/",query:{testID:this.listQuery.testID,name:this.fileName}})
      },
      //查看答卷
      handleCheck(index,row){
        this.isShow=true
        this.imageList = row.imgURLs
      },
      dateFormat(row, column, cellValue, index){
        const daterc = row[column.property]
        return daterc.substr(0, 10) + ' ' + daterc.substr(11, 8)
      }
    }
  }
</script>
