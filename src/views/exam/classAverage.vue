<template>
  <div style="width: 80%; margin: 0 auto">
    <div>
      <el-select v-model="listQuery.classType" v-on:change="handleGet" style="float: left; margin-right: 10px;" placeholder="请选择班级类型">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
      <el-button type="success" style="float: right; margin-right: 10px;" @click.native="handleExport">导出excel
      </el-button>
      <el-table :data="tableData" :border=true @sort-change="changeTableSort" stripe
                style="width:100%; margin: auto">
        <el-table-column align="center" prop="className" sortable="custom" label="班级"></el-table-column>
        <el-table-column align="center" prop="classScore" sortable="custom" label="班级平均分"></el-table-column>
        <el-table-column align="center" prop="classRank" label="名次"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import {getGradeAnalysisList1} from '@/api/exam/examGroup.js'
  import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
  import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
  import ElDialog from "../../../node_modules/element-ui/packages/dialog/src/component";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";

  function compare(prop) {
    return function (obj1, obj2) {
      var val1 = obj1[prop];
      var val2 = obj2[prop];
      if (val1 < val2) {
        return -1;
      } else if (val1 > val2) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  function comparedesc(prop) {
    return function (obj1, obj2) {
      var val1 = obj1[prop];
      var val2 = obj2[prop];
      if (val1 > val2) {
        return -1;
      } else if (val1 < val2) {
        return 1;
      } else {
        return 0;
      }
    }
  }

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
      this.listQuery.multiTestID = this.$route.query.multiTestID
      this.listQuery.classType = '2'
      this.initTable()
    },
    mounted() {

    },
    data() {
      return {
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
          multiTestID: 0,
          classType: '',
        },
        classes: [],
        timer: {},
        options1: [{
          value: '2',
          label: '理科实验'
        }, {
          value: '0',
          label: '理科',
        }, {
          value: '1',
          label: '文科'
        }],
      }
    },
    methods: {
      initTable() {
        if (this.listQuery)
          getGradeAnalysisList1(this.listQuery).then(response => {
            this.tableData = response.data;
            this.tableData.sort(comparedesc("classScore"));
            for (let i = 0; i < this.tableData.length; i++) {
              this.tableData[i].classRank = (i+1);
            }
            this.tableData.sort(compare("className"));
          })
      },
      handleGet() {
        getGradeAnalysisList1(this.listQuery).then(response => {
          this.tableData = response.data;
          this.tableData.sort(comparedesc("classScore"));
          for (let i = 0; i < this.tableData.length; i++) {
            this.tableData[i].classRank = (i+1);
          }
          this.tableData.sort(compare("className"));
        })

      },
      changeTableSort(param) {
        if (param.order == 'ascending') {
          this.tableData.sort(compare(param.prop))
        } else {
          this.tableData.sort(comparedesc(param.prop))
        }
      },
      handleExport() {
        var that = this;
        getGradeAnalysisListNew(this.listQuery).then(response => {
          var result = response.data
          var classType = '';
          console.log(that.listQuery.classType+'classt')
          switch (that.listQuery.classType) {
            case '0' :
              classType = '理科';
              break;
            case '1' :
              classType = '文科';
              break;
            case '2' :
              classType = '理科实验';
              break;
          }
          console.log(classType)
          import('@/vendor/Export2Excel').then(excel => {
            const tHeader = ['班级', '学科', '教师', '应考人数', '实考人数', '平均分', '及格率', '优秀率']
            const filterVal = ['className', 'subjectName', 'teacherName', 'studentCount', 'actualStudentCount', 'average',
              'passRate', 'excellentRate']
            const list = result
            const data = this.formatJson(filterVal, list)
            excel.export_json_to_excel({
              header: tHeader,
              data,
              filename: this.fileName + "_" + classType + result[0].subjectName + '学科排名',
              autoWidth: this.autoWidth
            })
          })
        })

      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      },
    }
  }
</script>
<style>
</style>
