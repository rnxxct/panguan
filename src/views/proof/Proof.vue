<template>
  <div>
    <el-row v-if="id_list.length>0">
      <el-col :span="col_span" v-for="(item, item_index) in id_list" :key="item.uid">
        <el-card :body-style="{ padding: '0px' }">
          <el-row>
            <el-col :span="12" v-for="(img, img_index) in item.imgs" :key="img_index">
              <img v-bind:src="'http://panguan-standard.oss-cn-zhangjiakou.aliyuncs.com/'+img" class="image"
                   @click="id_modifying_item=item_index,id_more_info=true">
            </el-col>
          </el-row>
          <el-select v-model="item.values[0]" filterable :placeholder="item.values[0]"
                     @change="((val)=>{selectChange(val, item_index)}) ">
            <el-option
              v-for="name in item.options"
              :key="name"
              :label="name"
              :value="name">
            </el-option>
          </el-select>
          <el-button type="warning" class="button" @click="id_more_info=true,id_modifying_item=item_index">看不清
          </el-button>
        </el-card>
      </el-col>
    </el-row>
    <div v-if="id_list.length>0">
      <el-dialog :visible.sync="id_more_info" :width="dialog_width">
        <el-row v-for="(img, img_index) in id_list[id_modifying_item].imgs" :key="img_index">
          <img v-bind:src="'http://panguan-standard.oss-cn-zhangjiakou.aliyuncs.com/'+img">
        </el-row>
        <el-select v-model="id_list[id_modifying_item].values[0]" filterable
                   :placeholder="id_list[id_modifying_item].values[0]">
          <el-option
            v-for="name in id_list[id_modifying_item].options"
            :key="name"
            :label="name"
            :value="name"
            ref="blur"
          >
          </el-option>
        </el-select>
        <el-form :inline="true">
          <el-form-item label="姓名">
            <el-input v-model="nameByHand" @change="handleHandChange"></el-input>
          </el-form-item>
          <el-form-item label="考号">
            <el-input v-model="testNumberByHand" @change="handleHandChange"></el-input>
          </el-form-item>
        </el-form>
        <el-row>
          <el-button @click="id_more_info=false,id_list[id_modifying_item].status=1" type="primary"> 确认 </el-button>
          <!--
                    <el-button @click="id_more_info=false,id_list[id_modifying_item].status=-1" type="warning"> 看不清 </el-button>
          -->
          <el-button @click="handleBlur" type="warning"> 看不清 </el-button>
          <el-button @click="handleProof(id_list[id_modifying_item].img.split('/')[2])" type="warning"> 整卷校对 </el-button>
        </el-row>
      </el-dialog>
    </div>
    <el-row v-if="option_list.length>0">
      <el-col style="width: 20%" :span="col_span" v-for="(item, item_index) in option_list" :key="item.uid">
        <el-card :body-style="{ padding: '0px' }">
          <el-row>
            <el-col :span="12" v-for="(img, img_index) in item.imgs" :key="img_index">
              <img v-bind:src="'http://panguan-standard.oss-cn-zhangjiakou.aliyuncs.com/'+img" class="image"
                   @click="option_more_info=true,option_modifying_item=item_index">
            </el-col>
          </el-row>
          <el-col :span="18">
            <el-checkbox-group v-model="item.values" @change="((val)=>{checkBoxChange(val, item_index)})">
              <el-checkbox
                v-for="name in item.options"
                :key="name"
                :label="name">
              </el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col :span="8">
            <el-button type="warning" class="button" @click="option_modifying_item=item_index,option_more_info=true">看不清
            </el-button>
          </el-col>
        </el-card>
      </el-col>
    </el-row>
    <div v-if="option_list.length>0">
      <el-dialog :visible.sync="option_more_info" :width="dialog_width">
        <el-row v-for="(img, img_index) in option_list[option_modifying_item].imgs" :key="img_index">
          <img v-bind:src="'http://panguan-standard.oss-cn-zhangjiakou.aliyuncs.com/'+img">
        </el-row>
        <el-checkbox-group v-model="option_list[option_modifying_item].values">
          <el-checkbox
            v-for="name in option_list[option_modifying_item].options"
            :key="name"
            :label="name">
          </el-checkbox>
        </el-checkbox-group>
        <el-row style="margin: 10px">
          <el-button @click="option_more_info=false,option_list[option_modifying_item].status=1" type="primary"> 确认
          </el-button>
          <el-button @click="option_more_info=false,option_list[option_modifying_item].status=-1" type="warning"> 看不清
          </el-button>
          <el-button @click="handleProof(option_list[option_modifying_item].img.split('/')[2])" type="warning"> 整卷校对 </el-button>
        </el-row>
      </el-dialog>
    </div>
    <div v-if="score_list.length>0">
      <el-row v-for="(item, item_index) in score_list" :key="item_index">
        <el-card>
          {{item.value}}
          <img style="margin: 4px" v-bind:src="'http://panguan-standard.oss-cn-zhangjiakou.aliyuncs.com/'+img"
               class="image" v-for="(img, img_index) in item.imgs" :key="img_index"
               @click="score_modifying_item=item_index,score_more_info=true,score_modifying_img=img_index">
        </el-card>
      </el-row>
    </div>
    <div v-if="score_list.length>0">
      <el-dialog :visible.sync="score_more_info" :width="dialog_width">
        <el-row>
          <img
            v-bind:src="'http://panguan-standard.oss-cn-zhangjiakou.aliyuncs.com/'+score_list[score_modifying_item].imgs[score_modifying_img]">
        </el-row>
        <el-row>
          <el-input
            v-model="veri_list[score_list[score_modifying_item].veri_list_indexes[score_modifying_img]].values[0]"
            style="width: 100px"></el-input>
        </el-row>
        <el-row style="margin: 10px">
          <el-button @click="setScore()" type="primary"> 确认 </el-button>
          <el-button @click="cancelScore()" type="warning"> 看不清 </el-button>
          <el-button @click="handleProof(veri_list[score_list[score_modifying_item].veri_list_indexes[score_modifying_img]].img.split('/')[2])" type="warning"> 整卷校对 </el-button>
        </el-row>
      </el-dialog>
    </div>
    <el-button @click="confirm" type="success">
      校对完成
    </el-button>
  </div>
</template>

<script>
  import {getVeriList, toConfirm, getStudentNameByNumber} from '@/api/proof/proof'
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  export default {
    components: {
      ElInput,
      ElFormItem,
      ElForm
    },
    data () {
      return {
        veri_list: [],
        id_list: [],
        option_list: [],
        score_list: [],
        score_more_info: false,
        id_more_info: false,
        option_more_info: false,
        id_modifying_item: 0,
        option_modifying_item: 0,
        score_modifying_item: 0,
        score_modifying_img: 0,
        listQuery: {
          testID: 0,
        },
        nameByHand: '',
        testNumberByHand: ''
      }
    },
    watch: {
      'nameByHand': function (val) {
        this.handleHandChange()
      },
      'testNumberByHand': function (val) {
        this.handleChange(val);
        this.handleHandChange()
      },
    },
    created(){
      this.listQuery.testID = this.$route.params.testID
      this.getData()
    },
    methods: {
      handleProof(x) {
        this.$router.push({
          path: '/proof/proofSheet/personal',
          query: {
            testID: this.listQuery.testID,
            serverFileID: x
          }
        })
      },
      handleChange(value){
        getStudentNameByNumber({testID:this.listQuery.testID,studentNumber:value}).then(response=>{
          this.nameByHand = response.data
        })
      },
      getData () {
        getVeriList(this.listQuery).then(response => {
          this.veri_list = response.data
          this.regroupData()
        })
      },
      confirm () {
        toConfirm({verifies: this.veri_list}).then(response => {
          this.$message({
            type: 'success',
            message: '校对成功!',
            duration: 600
          })
          this.$router.push("/scoreAnalysis/tests/choose")
        })
        /* this.$http.post('http://cnn.jouletek.com:8081/panguanb/verify/processing', {verifies: this.veri_list},
         {
         headers: {
         'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6ImEiLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE1NDI4N' +
         'TAyMTAsInVzZXJuYW1lIjoiYWRtaW4ifQ.1Nx6VR-zyyenuYJ-WF-Y5a7vZybUiCVmBfXRC80BjYA'
         }
         })*/
      },
      regroupData () {
        this.id_list = []
        this.score_list = []
        this.option_list = []
        for (var i = 0; i <= this.veri_list.length - 1; i++) {
          switch (this.veri_list[i].type) {
            case 0:
              this.id_list.push(this.veri_list[i])
              break
            case 1:
              this.option_list.push(this.veri_list[i])
              break
            case 2:
              var found = false
              for (var j = 0; j < this.score_list.length; j++) {
                if (this.veri_list[i].values[0] === this.score_list[j].value) {
                  found = true
                  this.score_list[j].imgs.push(this.veri_list[i].imgs[0])
                  this.score_list[j].uids.push(this.veri_list[i].uid)
                  this.score_list[j].veri_list_indexes.push(i)
                }
              }
              if (!found) {
                var item = {
                  value: this.veri_list[i].values[0],
                  uids: [],
                  imgs: [],
                  more_info: false,
                  veri_list_indexes: []
                }
                item.imgs.push(this.veri_list[i].imgs[0])
                item.uids.push(this.veri_list[i].uid)
                item.veri_list_indexes.push(i)
                this.score_list.push(item)
              }
              break
          }
        }
      },
      setScore () {
        this.score_more_info = false
        this.veri_list[this.score_list[this.score_modifying_item].veri_list_indexes[this.score_modifying_img]].status = 1
        this.score_modifying_item = 0
        this.score_modifying_img = 0
        this.regroupData()
      },
      cancelScore () {
        this.score_more_info = false
        this.veri_list[this.score_list[this.score_modifying_item].veri_list_indexes[this.score_modifying_img]].status = -1
        this.veri_list[this.score_list[this.score_modifying_item].veri_list_indexes[this.score_modifying_img]].values[0] = -1
        this.score_modifying_item = 0
        this.score_modifying_img = 0
        this.regroupData()
      },
      selectChange(val, index){
        //alert(JSON.stringify(val)+"--"+index)
        this.id_list[index].status = 1
      },
      checkBoxChange(val, index){
        this.option_list[index].status = 1
      },
      handleBlur(){
        this.id_more_info = false,
          this.id_list[this.id_modifying_item].status = 1//更改标志
        this.id_list[this.id_modifying_item].values[0] = ''
      },
      handleHandChange(){
        if (this.nameByHand !== '' && this.testNumberByHand !== '') {
          this.id_list[this.id_modifying_item].values[0] = this.nameByHand + "_" + this.testNumberByHand
        }
      },
    },

    computed: {
      col_span: {
        get: function () {
          return Math.floor(24 / Math.floor(document.documentElement.clientWidth / 300))
        }
      },
      dialog_width: {
        get: function () {
          if (document.documentElement.clientWidth > 1000) {
            return 200
          } else {
            return 200
          }
        }
      }
    }
  }
</script>

<style>
  .image {
    height: 50px;
  }
</style>
