<template>
  <div>
    <el-button @click="handleReturn">返回</el-button>
    <el-button type="primary" v-print="'#print'">打印</el-button>
    <div class="content" style="margin:0 auto;text-align: center;margin:0;padding:0;font-size: 0px" id="print">
      <div class="table" style="width: 270mm;height:210mm;margin: 0 auto;">
        <div style="border: 2px solid black;border-right: 0px solid black;height:18mm;">
          <div style="width: 25mm;border-right: 2px solid black" class="td">
            <div class="td" style="width: 80%;">班级</div>
            <div class="td" style="width: 20%;">基准人数</div>
          </div>
          <div class="td" style="width: 80mm;margin: 0;padding: 0;border-right: 2px solid black"
               v-for="item in artArray">
            <div>{{item.subjectName}}</div>
            <div class="td" style="width: 10mm;">任课老师</div>
            <div class="td" style="width: 10mm">平均分</div>
            <div class="td" style="width:5mm;">名次</div>
            <div class="td" style="width: 12mm;">及格率%</div>
            <div class="td" style="width: 5mm;">名次</div>
            <div class="td" style="width: 10mm;">优秀率</div>
            <div class="td" style="width: 5mm;">名次</div>
            <div class="td" style="width: 10mm">名次和</div>
            <div class="td" style="width: 5mm;">班科次</div>
          </div>
        </div>
        <div style=" border-bottom: 2px solid black;border-left: 2px solid black">
          <div class="td" style="height: 31mm;width: 25mm;border-right: 2px solid black">
            <div class="td" style="width:9mm">理科实验</div>
            <div class="td" style="border-left:1px solid black;">
              <div v-for="item in scienceSuper" style="height: 5mm;border-bottom: 1px solid black;">
                <div class="td" style="width: 9mm;">{{item.classNumber}}</div>
                <div class="td" style="width: 5mm;">{{item.classTotal}}</div>
              </div>
            </div>
          </div>
          <div class="td" style="width: 80mm;border-right: 2px solid black" v-for="item in scienceSuperArray">
            <div v-for="teacher in item.classComparisonDetails" style="height: 5mm;border-bottom: 1px solid black;">
              <div class="td"
                   style="width: 11mm;border-right: 0.5px solid black;">
                {{teacher.teacherName}}
              </div><div class="td" style="width: 10mm;border-right: 0.5px solid black;;">
              {{teacher.average}}
            </div><div class="td"
                       style="width: 5mm;border-right: 0.5px solid black;">
              {{teacher.averageRank}}
            </div><div class="td"
                       style="width: 12mm;border-right: 0.5px solid black;">
              {{teacher.passRate}}
            </div><div class="td"
                       style="width: 5mm;border-right: 0.5px solid black;">
              {{teacher.passRateRank}}
            </div><div class="td"
                       style="width: 10mm;border-right: 0.5px solid black;">
              {{teacher.excellentRate}}
            </div><div class="td"
                       style="width: 5mm;border-right: 0.5px solid black;">
              {{teacher.excellentRateRank}}
            </div><div class="td"
                       style="width: 10mm;border-right: 0.5px solid black;">
              {{teacher.rankSum}}
            </div><div class="td" style="width: 5mm;">
              {{teacher.classSubjectRank}}
            </div>
            </div>
          </div>
        </div>
        <div style=" border-bottom: 2px solid black;border-left: 2px solid black">
          <div class="td" style="height: 31mm;width: 25mm;border-right: 2px solid black">
            <div class="td" style="width:9mm">理</div>
            <div class="td" style="border-left:1px solid black;">
              <div v-for="item in science" style="height: 5mm;border-bottom: 1px solid black;">
                <div class="td" style="width: 9mm;">{{item.classNumber}}</div>
                <div class="td" style="width: 5mm;">{{item.classTotal}}</div>
              </div>
            </div>
          </div>
          <div class="td" style="width: 80mm;border-right: 2px solid black" v-for="item in scienceArray">
            <div v-for="teacher in item.classComparisonDetails" style="height: 5mm;border-bottom: 1px solid black;">
              <div class="td"
                   style="width: 11mm;border-right: 0.5px solid black;">
                {{teacher.teacherName}}
              </div><div class="td" style="width: 10mm;border-right: 0.5px solid black;;">
                {{teacher.average}}
              </div><div class="td"
                   style="width: 5mm;border-right: 0.5px solid black;">
                {{teacher.averageRank}}
              </div><div class="td"
                   style="width: 12mm;border-right: 0.5px solid black;">
                {{teacher.passRate}}
              </div><div class="td"
                   style="width: 5mm;border-right: 0.5px solid black;">
                {{teacher.passRateRank}}
              </div><div class="td"
                   style="width: 10mm;border-right: 0.5px solid black;">
                {{teacher.excellentRate}}
              </div><div class="td"
                   style="width: 5mm;border-right: 0.5px solid black;">
                {{teacher.excellentRateRank}}
              </div><div class="td"
                   style="width: 10mm;border-right: 0.5px solid black;">
                {{teacher.rankSum}}
              </div><div class="td" style="width: 5mm;">
                {{teacher.classSubjectRank}}
              </div>
            </div>
          </div>
        </div>
        <!--height: 31mm;-->
        <div style=" border-bottom: 2px solid black;border-left: 2px solid black">
          <div class="td" style="width: 25mm;border-right: 2px solid black">
            <div class="td" style="width:9mm">文</div>
            <div class="td">
              <div v-for="item in art" style="height: 5mm;border-bottom: 1px solid black;border-left: 1px solid black">
                <div class="td"
                     style="width: 9mm;">
                  {{item.classNumber}}
                </div>
                <div class="td" style="width: 5mm;">
                  {{item.classTotal}}
                </div>
              </div>
            </div>
          </div>
          <div class="td" style="width: 80mm;border-right: 2px solid black" v-for="item in artArray">
            <div v-for="teacher in item.classComparisonDetails" style="height: 5mm;border-bottom: 1px solid black;">
              <div class="td"
                   style="width: 11mm;border-right: 0.5px solid black;">
                {{teacher.teacherName}}
              </div><div class="td"
                   style="width: 10mm;border-right: 0.5px solid black;">
                {{teacher.average}}
              </div><div class="td"
                   style="width: 5mm;border-right: 0.5px solid black;">
                {{teacher.averageRank}}
              </div><div class="td"
                   style="width: 12mm;border-right: 0.5px solid black;">
                {{teacher.passRate}}
              </div><div class="td"
                   style="width: 5mm;border-right: 0.5px solid black;">
                {{teacher.passRateRank}}
              </div><div class="td"
                   style="width: 10mm;border-right: 0.5px solid black;">
                {{teacher.excellentRate}}
              </div><div class="td"
                   style="width: 5mm;border-right: 0.5px solid black;">
                {{teacher.excellentRateRank}}
              </div><div class="td"
                   style="width: 10mm;border-right: 0.5px solid black;">
                {{teacher.rankSum}}
              </div><div class="td" style="width: 5mm;">
                {{teacher.classSubjectRank}}
              </div>
            </div>
          </div>
        </div>
        <div style="border: 2px solid black;border-right: 0px ;border-top: 0px;height:18mm;">
          <div style="width: 25mm;border-right: 2px solid black" class="td">
            <div class="td" style="width: 80%;">班级</div>
            <div class="td" style="width: 20%;">基准人数</div>
          </div>
          <div class="td" style="width: 80mm;margin: 0;padding: 0;border-right: 2px solid black"
               v-for="item in scienceArrayLast">
            <div>{{item.subjectName}}</div>
            <div class="td" style="width: 11mm;">任课老师</div>
            <div class="td" style="width: 10mm">平均分</div>
            <div class="td" style="width:5mm;">名次</div>
            <div class="td" style="width: 12mm;">及格率%</div>
            <div class="td" style="width: 5mm;">名次</div>
            <div class="td" style="width: 10mm;">优秀率</div>
            <div class="td" style="width: 5mm;">名次</div>
            <div class="td" style="width: 10mm">名次和</div>
            <div class="td" style="width: 5mm;">班科次</div>
          </div>
        </div>
        <!--height: 31mm;-->
        <div style=" border-bottom: 2px solid black;border-left: 2px solid black">
          <div class="td" style="width: 25mm;border-right: 2px solid black">
            <div class="td" style="width:9mm">理科实验</div>
            <div class="td">
              <div v-for="item in scienceSuper" style="height: 5mm;border-bottom: 1px solid black;border-left: 1px solid black;">
                <div class="td"
                     style="width: 9mm;">
                  {{item.classNumber}}
                </div>
                <div class="td" style="width: 5mm;">
                  {{item.classTotal}}
                </div>
              </div>
            </div>
          </div>
          <div class="td" style="width: 80mm;border-right: 2px solid black"
               v-for="item in scienceSuperArrayLast">
            <div v-for="teacher in item.classComparisonDetails" style="height: 5mm;border-bottom: 1px solid black">
              <div class="td"
                   style="width: 11mm;border-right: 0.5px solid black;">
                {{teacher.teacherName}}
              </div><div class="td"
                         style="width: 10mm;border-right: 0.5px solid black;">
              {{teacher.average}}
            </div><div class="td"
                       style="width: 5mm;border-right: 0.5px solid black;">
              {{teacher.averageRank}}
            </div><div class="td"
                       style="width: 12mm;border-right: 0.5px solid black;">
              {{teacher.passRate}}
            </div><div class="td"
                       style="width: 5mm;border-right: 0.5px solid black;">
              {{teacher.passRateRank}}
            </div><div class="td"
                       style="width: 10mm;border-right: 0.5px solid black;">
              {{teacher.excellentRate}}
            </div><div class="td"
                       style="width: 5mm;border-right: 0.5px solid black;">
              {{teacher.excellentRateRank}}
            </div><div class="td"
                       style="width: 10mm;border-right: 0.5px solid black;">
              {{teacher.rankSum}}
            </div><div class="td" style="width: 5mm;">
              {{teacher.classSubjectRank}}
            </div>
            </div>
          </div>
        </div>
        <div style=" border-bottom: 2px solid black;border-left: 2px solid black">
          <div class="td" style="width: 25mm;border-right: 2px solid black">
            <div class="td" style="width:9mm">理</div>
            <div class="td">
              <div v-for="item in science" style="height: 5mm;border-bottom: 1px solid black;border-left: 1px solid black;">
                <div class="td"
                     style="width: 9mm;">
                  {{item.classNumber}}
                </div>
                <div class="td" style="width: 5mm;">
                  {{item.classTotal}}
                </div>
              </div>
            </div>
          </div>
          <div class="td" style="width: 80mm;border-right: 2px solid black"
               v-for="item in scienceArrayLast">
            <div v-for="teacher in item.classComparisonDetails" style="height: 5mm;border-bottom: 1px solid black">
              <div class="td"
                   style="width: 11mm;border-right: 0.5px solid black;">
                {{teacher.teacherName}}
              </div><div class="td"
                   style="width: 10mm;border-right: 0.5px solid black;">
                {{teacher.average}}
              </div><div class="td"
                   style="width: 5mm;border-right: 0.5px solid black;">
                {{teacher.averageRank}}
              </div><div class="td"
                   style="width: 12mm;border-right: 0.5px solid black;">
                {{teacher.passRate}}
              </div><div class="td"
                   style="width: 5mm;border-right: 0.5px solid black;">
                {{teacher.passRateRank}}
              </div><div class="td"
                   style="width: 10mm;border-right: 0.5px solid black;">
                {{teacher.excellentRate}}
              </div><div class="td"
                   style="width: 5mm;border-right: 0.5px solid black;">
                {{teacher.excellentRateRank}}
              </div><div class="td"
                   style="width: 10mm;border-right: 0.5px solid black;">
                {{teacher.rankSum}}
              </div><div class="td" style="width: 5mm;">
                {{teacher.classSubjectRank}}
              </div>
            </div>
          </div>
        </div>
        <div style="border: 2px solid black;border-right: 0px ;border-top: 0px;height:18mm;">
          <div style="width: 25mm;border-right: 2px solid black" class="td">
            <div class="td" style="width: 80%;">班级</div>
            <div class="td" style="width: 20%;">基准人数</div>
          </div>
          <div class="td" style="width: 80mm;margin: 0;padding: 0;border-right: 2px solid black"
               v-for="item in artArrayLast">
            <div>{{item.subjectName}}</div>
            <div class="td" style="width: 11mm;">任课老师</div>
            <div class="td" style="width: 10mm">平均分</div>
            <div class="td" style="width:5mm;">名次</div>
            <div class="td" style="width: 12mm;">及格率%</div>
            <div class="td" style="width: 5mm;">名次</div>
            <div class="td" style="width: 10mm;">优秀率</div>
            <div class="td" style="width: 5mm;">名次</div>
            <div class="td" style="width: 10mm">名次和</div>
            <div class="td" style="width: 5mm;">班科次</div>
          </div>
        </div>
        <div style="height: 31mm; border-bottom: 2px solid black;border-left: 2px solid black">
          <div class="td" style="width: 25mm;border-right: 2px solid black">
            <div class="td" style="width:9mm">文</div>
            <div class="td">
              <div v-for="item in art" style="height: 5mm;border-bottom: 1px solid black;border-left: 1px solid black">
                <div class="td"
                     style="width: 9mm;">
                  {{item.classNumber}}
                </div>
                <div class="td" style="width: 5mm;">
                  {{item.classTotal}}
                </div>
              </div>
            </div>
          </div>
          <div class="td" style="width: 80mm;border-right: 2px solid black" v-for="item in artArrayLast">
            <div v-for="teacher in item.classComparisonDetails" style="height: 5mm;border-bottom: 1px solid black;">
              <div class="td"
                   style="width: 11mm;border-right: 0.5px solid black;">
                {{teacher.teacherName}}
              </div><div class="td"
                   style="width: 10mm;border-right: 0.5px solid black;">
                {{teacher.average}}
              </div><div class="td"
                   style="width: 5mm;border-right: 0.5px solid black;">
                {{teacher.averageRank}}
              </div><div class="td"
                   style="width: 12mm;border-right: 0.5px solid black;">
                {{teacher.passRate}}
              </div><div class="td"
                   style="width: 5mm;border-right: 0.5px solid black;">
                {{teacher.passRateRank}}
              </div><div class="td"
                   style="width: 10mm;border-right: 0.5px solid black;">
                {{teacher.excellentRate}}
              </div><div class="td"
                   style="width: 5mm;border-right: 0.5px solid black;">
                {{teacher.excellentRateRank}}
              </div><div class="td"
                   style="width: 10mm;border-right: 0.5px solid black;">
                {{teacher.rankSum}}
              </div><div class="td" style="width: 5mm;">
                {{teacher.classSubjectRank}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getGradeAnalysisList} from '@/api/exam/examGroup.js'
  export default{
    created(){
      this.multiTestID = this.$route.query.multiTestID
      this.initData()
    },
    data(){
      return {
        multiTestID: '',
        classNumber: '',
        data: [],
        scienceSuper: [],
        science: [],
        art: [],
        scienceSuperArray: [],
        scienceArray: [],
        artArray: [],
        scienceSuperArrayLast: [],
        scienceArrayLast: [],
        artArrayLast: []
      }
    },
    methods: {
      initData(){
        getGradeAnalysisList({multiTestID: this.multiTestID}).then(response => {
/*
          response.data = {
            "science": [
              {
                "classNumber": "1601",
                "classTotal": 1,
                "classID": 2
              },
              {
                "classNumber": "1601",
                "classTotal": 1,
                "classID": 2
              },
              {
                "classNumber": "1613",
                "classTotal": 3,
                "classID": 14
              },
              {
                "classNumber": "1614",
                "classTotal": 4,
                "classID": 15
              },
              {
                "classNumber": "1615",
                "classTotal": 8,
                "classID": 16
              },
              {
                "classNumber": "1616",
                "classTotal": 15,
                "classID": 17
              }
            ],
            "art": [
              {
                "classNumber": "1601",
                "classTotal": 1,
                "classID": 2
              },
              {
                "classNumber": "1613",
                "classTotal": 3,
                "classID": 14
              },
              {
                "classNumber": "1614",
                "classTotal": 4,
                "classID": 15
              },
              {
                "classNumber": "1615",
                "classTotal": 8,
                "classID": 16
              },
              {
                "classNumber": "1616",
                "classTotal": 15,
                "classID": 17
              },
              {
                "classNumber": "1616",
                "classTotal": 15,
                "classID": 17
              }
            ],
            "scienceDetail": [
              {
                "subjectName": '语文',
                "classComparisonDetails": [
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 14,
                    "testID": 101,
                    "teacherName": "1613ZZ",
                    "average": 62,
                    "averageRank": 2,
                    "passRate": 66.0,
                    "passRateRank": 1,
                    "excellentRate": 0,
                    "excellentRateRank": 2,
                    "rankSum": 30,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  }, {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 16,
                    "testID": 101,
                    "teacherName": "1615ZZ",
                    "average": 54.0,
                    "averageRank": 3,
                    "passRate": 37.5,
                    "passRateRank": 4,
                    "excellentRate": 0,
                    "excellentRateRank": 3,
                    "rankSum": 116,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 17,
                    "testID": 101,
                    "teacherName": "1616ZZ",
                    "average": 54.0,
                    "averageRank": 4,
                    "passRate": 38.3,
                    "passRateRank": 3,
                    "excellentRate": 0,
                    "excellentRateRank": 4,
                    "rankSum": 183,
                    "classSubjectRank": 0
                  }
                ]
              },
              {
                "subjectName": '数学',
                "classComparisonDetails": [
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 14,
                    "testID": 101,
                    "teacherName": "1613ZZ",
                    "average": 62,
                    "averageRank": 2,
                    "passRate": 66.0,
                    "passRateRank": 1,
                    "excellentRate": 0,
                    "excellentRateRank": 2,
                    "rankSum": 30,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  }, {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 16,
                    "testID": 101,
                    "teacherName": "1615ZZ",
                    "average": 54.0,
                    "averageRank": 3,
                    "passRate": 37.5,
                    "passRateRank": 4,
                    "excellentRate": 0,
                    "excellentRateRank": 3,
                    "rankSum": 116,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 17,
                    "testID": 101,
                    "teacherName": "1616ZZ",
                    "average": 54.0,
                    "averageRank": 4,
                    "passRate": 38.3,
                    "passRateRank": 3,
                    "excellentRate": 0,
                    "excellentRateRank": 4,
                    "rankSum": 183,
                    "classSubjectRank": 0
                  }
                ]
              },
              {
                "subjectName": '英语',
                "classComparisonDetails": [
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 14,
                    "testID": 101,
                    "teacherName": "1613ZZ",
                    "average": 62,
                    "averageRank": 2,
                    "passRate": 66.0,
                    "passRateRank": 1,
                    "excellentRate": 0,
                    "excellentRateRank": 2,
                    "rankSum": 30,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  }, {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 16,
                    "testID": 101,
                    "teacherName": "1615ZZ",
                    "average": 54.0,
                    "averageRank": 3,
                    "passRate": 37.5,
                    "passRateRank": 4,
                    "excellentRate": 0,
                    "excellentRateRank": 3,
                    "rankSum": 116,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 17,
                    "testID": 101,
                    "teacherName": "1616ZZ",
                    "average": 54.0,
                    "averageRank": 4,
                    "passRate": 38.3,
                    "passRateRank": 3,
                    "excellentRate": 0,
                    "excellentRateRank": 4,
                    "rankSum": 183,
                    "classSubjectRank": 0
                  }
                ]
              },
              {
                "subjectName": '物理',
                "classComparisonDetails": [
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 14,
                    "testID": 101,
                    "teacherName": "1613ZZ",
                    "average": 62,
                    "averageRank": 2,
                    "passRate": 66.0,
                    "passRateRank": 1,
                    "excellentRate": 0,
                    "excellentRateRank": 2,
                    "rankSum": 30,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  }, {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 16,
                    "testID": 101,
                    "teacherName": "1615ZZ",
                    "average": 54.0,
                    "averageRank": 3,
                    "passRate": 37.5,
                    "passRateRank": 4,
                    "excellentRate": 0,
                    "excellentRateRank": 3,
                    "rankSum": 116,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 17,
                    "testID": 101,
                    "teacherName": "1616ZZ",
                    "average": 54.0,
                    "averageRank": 4,
                    "passRate": 38.3,
                    "passRateRank": 3,
                    "excellentRate": 0,
                    "excellentRateRank": 4,
                    "rankSum": 183,
                    "classSubjectRank": 0
                  }
                ]
              },
              {
                "subjectName": '化学',
                "classComparisonDetails": [
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 14,
                    "testID": 101,
                    "teacherName": "1613ZZ",
                    "average": 62,
                    "averageRank": 2,
                    "passRate": 66.0,
                    "passRateRank": 1,
                    "excellentRate": 0,
                    "excellentRateRank": 2,
                    "rankSum": 30,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  }, {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 16,
                    "testID": 101,
                    "teacherName": "1615ZZ",
                    "average": 54.0,
                    "averageRank": 3,
                    "passRate": 37.5,
                    "passRateRank": 4,
                    "excellentRate": 0,
                    "excellentRateRank": 3,
                    "rankSum": 116,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 17,
                    "testID": 101,
                    "teacherName": "1616ZZ",
                    "average": 54.0,
                    "averageRank": 4,
                    "passRate": 38.3,
                    "passRateRank": 3,
                    "excellentRate": 0,
                    "excellentRateRank": 4,
                    "rankSum": 183,
                    "classSubjectRank": 0
                  }
                ]
              },
              {
                "subjectName": '生物',
                "classComparisonDetails": [
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 14,
                    "testID": 101,
                    "teacherName": "1613ZZ",
                    "average": 62,
                    "averageRank": 2,
                    "passRate": 66.0,
                    "passRateRank": 1,
                    "excellentRate": 0,
                    "excellentRateRank": 2,
                    "rankSum": 30,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  }, {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 16,
                    "testID": 101,
                    "teacherName": "1615ZZ",
                    "average": 54.0,
                    "averageRank": 3,
                    "passRate": 37.5,
                    "passRateRank": 4,
                    "excellentRate": 0,
                    "excellentRateRank": 3,
                    "rankSum": 116,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 17,
                    "testID": 101,
                    "teacherName": "1616ZZ",
                    "average": 54.0,
                    "averageRank": 4,
                    "passRate": 38.3,
                    "passRateRank": 3,
                    "excellentRate": 0,
                    "excellentRateRank": 4,
                    "rankSum": 183,
                    "classSubjectRank": 0
                  }
                ]
              },

            ],
            "artDetail": [
              {
                "subjectName": '英语',
                "classComparisonDetails": [
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 14,
                    "testID": 101,
                    "teacherName": "1613ZZ",
                    "average": 62,
                    "averageRank": 2,
                    "passRate": 66.0,
                    "passRateRank": 1,
                    "excellentRate": 0,
                    "excellentRateRank": 2,
                    "rankSum": 30,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  }, {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 16,
                    "testID": 101,
                    "teacherName": "1615ZZ",
                    "average": 54.0,
                    "averageRank": 3,
                    "passRate": 37.5,
                    "passRateRank": 4,
                    "excellentRate": 0,
                    "excellentRateRank": 3,
                    "rankSum": 116,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 17,
                    "testID": 101,
                    "teacherName": "1616ZZ",
                    "average": 54.0,
                    "averageRank": 4,
                    "passRate": 38.3,
                    "passRateRank": 3,
                    "excellentRate": 0,
                    "excellentRateRank": 4,
                    "rankSum": 183,
                    "classSubjectRank": 0
                  }
                ]
              },

              {
                "subjectName": '语文',
                "classComparisonDetails": [
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 14,
                    "testID": 101,
                    "teacherName": "1613ZZ",
                    "average": 62,
                    "averageRank": 2,
                    "passRate": 66.0,
                    "passRateRank": 1,
                    "excellentRate": 0,
                    "excellentRateRank": 2,
                    "rankSum": 30,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  }, {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 16,
                    "testID": 101,
                    "teacherName": "1615ZZ",
                    "average": 54.0,
                    "averageRank": 3,
                    "passRate": 37.5,
                    "passRateRank": 4,
                    "excellentRate": 0,
                    "excellentRateRank": 3,
                    "rankSum": 116,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 17,
                    "testID": 101,
                    "teacherName": "1616ZZ",
                    "average": 54.0,
                    "averageRank": 4,
                    "passRate": 38.3,
                    "passRateRank": 3,
                    "excellentRate": 0,
                    "excellentRateRank": 4,
                    "rankSum": 183,
                    "classSubjectRank": 0
                  }
                ]
              },
              {
                "subjectName": '数学',
                "classComparisonDetails": [
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 14,
                    "testID": 101,
                    "teacherName": "1613ZZ",
                    "average": 62,
                    "averageRank": 2,
                    "passRate": 66.0,
                    "passRateRank": 1,
                    "excellentRate": 0,
                    "excellentRateRank": 2,
                    "rankSum": 30,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  }, {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 16,
                    "testID": 101,
                    "teacherName": "1615ZZ",
                    "average": 54.0,
                    "averageRank": 3,
                    "passRate": 37.5,
                    "passRateRank": 4,
                    "excellentRate": 0,
                    "excellentRateRank": 3,
                    "rankSum": 116,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 17,
                    "testID": 101,
                    "teacherName": "1616ZZ",
                    "average": 54.0,
                    "averageRank": 4,
                    "passRate": 38.3,
                    "passRateRank": 3,
                    "excellentRate": 0,
                    "excellentRateRank": 4,
                    "rankSum": 183,
                    "classSubjectRank": 0
                  }
                ]
              },
              {
                "subjectName": '历史',
                "classComparisonDetails": [
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 14,
                    "testID": 101,
                    "teacherName": "1613ZZ",
                    "average": 62,
                    "averageRank": 2,
                    "passRate": 66.0,
                    "passRateRank": 1,
                    "excellentRate": 0,
                    "excellentRateRank": 2,
                    "rankSum": 30,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  }, {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 16,
                    "testID": 101,
                    "teacherName": "1615ZZ",
                    "average": 54.0,
                    "averageRank": 3,
                    "passRate": 37.5,
                    "passRateRank": 4,
                    "excellentRate": 0,
                    "excellentRateRank": 3,
                    "rankSum": 116,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 17,
                    "testID": 101,
                    "teacherName": "1616ZZ",
                    "average": 54.0,
                    "averageRank": 4,
                    "passRate": 38.3,
                    "passRateRank": 3,
                    "excellentRate": 0,
                    "excellentRateRank": 4,
                    "rankSum": 183,
                    "classSubjectRank": 0
                  }
                ]
              },
              {
                "subjectName": '地理',
                "classComparisonDetails": [
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 14,
                    "testID": 101,
                    "teacherName": "1613ZZ",
                    "average": 62,
                    "averageRank": 2,
                    "passRate": 66.0,
                    "passRateRank": 1,
                    "excellentRate": 0,
                    "excellentRateRank": 2,
                    "rankSum": 30,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  }, {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 16,
                    "testID": 101,
                    "teacherName": "1615ZZ",
                    "average": 54.0,
                    "averageRank": 3,
                    "passRate": 37.5,
                    "passRateRank": 4,
                    "excellentRate": 0,
                    "excellentRateRank": 3,
                    "rankSum": 116,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 17,
                    "testID": 101,
                    "teacherName": "1616ZZ",
                    "average": 54.0,
                    "averageRank": 4,
                    "passRate": 38.3,
                    "passRateRank": 3,
                    "excellentRate": 0,
                    "excellentRateRank": 4,
                    "rankSum": 183,
                    "classSubjectRank": 0
                  }
                ]
              },
              {
                "subjectName": '政治',
                "classComparisonDetails": [
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 14,
                    "testID": 101,
                    "teacherName": "1613ZZ",
                    "average": 62,
                    "averageRank": 2,
                    "passRate": 66.0,
                    "passRateRank": 1,
                    "excellentRate": 0,
                    "excellentRateRank": 2,
                    "rankSum": 30,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  }, {
                    "classID": 15,
                    "testID": 101,
                    "teacherName": "1614ZZ",
                    "average": 64.5,
                    "averageRank": 1,
                    "passRate": 50,
                    "passRateRank": 2,
                    "excellentRate": 0,
                    "excellentRateRank": 1,
                    "rankSum": 17,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 16,
                    "testID": 101,
                    "teacherName": "1615ZZ",
                    "average": 54.0,
                    "averageRank": 3,
                    "passRate": 37.5,
                    "passRateRank": 4,
                    "excellentRate": 0,
                    "excellentRateRank": 3,
                    "rankSum": 116,
                    "classSubjectRank": 0
                  },
                  {
                    "classID": 17,
                    "testID": 101,
                    "teacherName": "1616ZZ",
                    "average": 54.0,
                    "averageRank": 4,
                    "passRate": 38.3,
                    "passRateRank": 3,
                    "excellentRate": 0,
                    "excellentRateRank": 4,
                    "rankSum": 183,
                    "classSubjectRank": 0
                  }
                ]
              }
            ]
          }
*/
          this.science = response.data.science;
          this.art = response.data.art;
          this.scienceSuper = response.data.scienceSuper;
          let scienceDetail = response.data.scienceDetail
          let artDetail = response.data.artDetail
          let scienceSuperDetail = response.data.scienceSuperDetail;
          if (scienceDetail !== null && scienceDetail.length !== 0) {
            if (artDetail !== null && artDetail.length !== 0) {
              let scienceArray = new Array()
              let artArray = new Array()
              let scienceArrayLast = new Array()
              let artArrayLast = new Array()
              let scienceSuperArray = new Array()
              let scienceSuperArrayLast = new Array()
              if (scienceDetail.length >= artDetail.length) {/*根据文理科数量进行比较，使用数量最大的一方进行外层循环*/
                for (let i = 0; i < scienceDetail.length; i++) {
                  for (let j = 0; j < artDetail.length; j++) {
                    if (scienceDetail[i].subjectName == artDetail[j].subjectName) {
                      scienceArray.push(scienceDetail[i])
                      artArray.push(artDetail[j])
                      for (let k = 0; k < scienceSuperDetail.length; k++) {
                        if (scienceDetail[i].subjectName == scienceSuperDetail[k].subjectName){
                          scienceSuperArray.push(scienceSuperDetail[k]);
                        }
                      }
                      break
                    }
                    if (j == (artDetail.length - 1)) {
                      scienceArrayLast.push(scienceDetail[i])
                      for (let k = 0; k < scienceSuperDetail.length; k++) {
                        if (scienceDetail[i].subjectName == scienceSuperDetail[k].subjectName){
                          scienceSuperArrayLast.push(scienceSuperDetail[k]);
                        }
                      }
                    }
                  }
                }
                for (let i = 0; i < artDetail.length; i++) {
                  for (let j = 0; j < scienceDetail.length; j++) {
                    if (artDetail[i].subjectName == scienceDetail[j].subjectName) {
                      break
                    }
                    if (j == (scienceDetail.length - 1)) {
                      artArrayLast.push(artDetail[i])
                    }
                  }
                }
                /*将数据转化后放入变量*/
                this.scienceSuperArray = scienceSuperArray;
                this.scienceSuperArrayLast = scienceSuperArrayLast;
                this.artArray = artArray
                this.scienceArray = scienceArray
                this.artArrayLast = artArrayLast
                this.scienceArrayLast = scienceArrayLast
              } else {
                for (let i = 0; i < artDetail.length; i++) {
                  for (let j = 0; j < scienceDetail.length; j++) {
                    if (artDetail[i].subjectName == scienceDetail[j].subjectName) {
                      artArray.push(artDetail[i])
                      scienceArray.push(scienceDetail[j])
                      for (let k = 0; k < scienceSuperDetail.length; k++) {
                        if (scienceDetail[j].subjectName == scienceSuperDetail[k].subjectName){
                          scienceSuperArray.push(scienceSuperDetail[k]);
                        }
                      }
                      break
                    }
                    if (j == (scienceDetail.length - 1)) {
                      artArrayLast.push(artDetail[i])
                      scienceArrayLast.push(scienceDetail[j])
                      for (let k = 0; k < scienceSuperDetail.length; k++) {
                        if (scienceDetail[j].subjectName == scienceSuperDetail[k].subjectName){
                          scienceSuperArrayLast.push(scienceSuperDetail[k]);
                        }
                      }
                    }
                  }
                }
                /*将数据转化后放入变量*/
                this.scienceSuperArray = scienceSuperArray;
                this.scienceSuperArrayLast = scienceSuperArrayLast;
                this.artArray = artArray
                this.scienceArray = scienceArray
                this.artArrayLast = artArrayLast
                this.scienceArrayLast = scienceArrayLast
              }
            }
          }
        })
      },
      handleReturn(){
        this.$router.push({path:'/scoreAnalysis/tests/choose',query:{isGroup:1}})
      },
    }
  }
</script>
<style scoped>
  .content {

  }

  .td {
    display: inline-table;
    font-size: 13px;
  }
</style>
