<template>
  <div style="width: 80%;margin: 0 auto">
    <div style="width: 49%; float: left">
      <el-form :model="addForm" inline="true">
        <el-form-item label="模板名称">
          <el-input autocomplete="off" v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="学科">
          <el-select v-model="addForm.subjectID" placeholder="请选择">
            <el-option
              v-for="item in subjects"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <div></div>
        <el-form-item label="学校名称">
          <el-select v-model="addForm.schoolID" filterable="true" placeholder="请选择">
            <el-option
              v-for="item in schools"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年级">
          <el-select v-model="addForm.gradeID" placeholder="请选择">
            <el-option
              v-for="item in grades"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <div>
        <el-form>
          <el-upload
            class="upload-demo"
            ref="upload"
            action=""
            :http-request="uploadDirect"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false"
            :on-change="handleChange"
            :before-upload="beforeUpload"
            :onSuccess="onSuccess">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
<!--
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
-->
          </el-upload>
        </el-form>
      </div>
    </div>
    <div style="width: 49%;float: right">
      <el-input
        type="textarea"
        :rows="30"
        placeholder="模板xml描述内容"
        v-model="addForm.xmlContent">
      </el-input>
    </div>
  </div>
</template>
<script>
  /*
   import OSS from 'ali-oss'
   */

  const OSS = require('ali-oss')

  import $ from 'jquery'
  import {getList as getSubject} from '@/api/subject/subject'
  import {getList as getSchoolList} from '@/api/school/school'
  import {getGrade} from  '@/api/school/school'
  import {templateAdd} from '@/api/template/template.js'
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  export default{
    components: {ElFormItem},
    data(){
      return {
        currentUrl: '',
        fileNames: [],
        subjects: [],
        schools: [],
        grades: [],
        nums:0,
        addForm: {
          name: '',
          subjectID: '',
          schoolID: '',
          gradeID: '',
          xmlContent: '',
          filesName: '',
          urls:[]
        },
        urls: [],
        fileList: [],
      }
    },
    created(){
      this.init();
    },
    methods: {
      onSuccess(response, file, fileList){
      },
      init(){
        getSubject().then(response => {
          this.subjects = response.data
        })
        getSchoolList().then(response => {
          this.schools = response.data
        })
        getGrade().then(response => {
          this.grades = response.data
        })
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        this.fileNames = [];
        for (let i = 0; i < fileList.length; i++) {
          this.fileNames.push(fileList[i].name)
        }
      },
      beforeUpload(file){
        //jquery发送同步请求
        this.nums=this.fileNames.length
        //alert(this.nums)
        /*  this.addForm.filesName = this.fileNames.toString()
         templateAdd(this.addForm).then(response => {
         this.urls = response.data;
         console.log(this.urls)
         })*/
      },
      handlePreview(file) {

      },
      handleChange(file, fileList){
        this.fileNames = [];
        for (let i = 0; i < fileList.length; i++) {
          this.fileNames.push(fileList[i].name)
        }
      },
      requestUrl(){
        this.addForm.filesName = this.fileNames.toString()
        templateAdd(this.addForm).then(response => {
          this.urls = response.data;
          /* for (let i = 0; i < this.urls.length; i++) {
           let object = new Object();
           object.name = this.fileNames[i]
           object.url = this.urls[i]
           this.fileList.push(object)
           }
           console.log(this.fileList)*/
          this.$router.push('/template/show')
        })
      },
      upload(param){
        var formData = new FormData();
        formData.append("file", param.file);
        let headers = {headers: {'Content-Type': 'multipart/form-data', "x-oss-meta-author": "aliy"}}
        this.$http.put("http://panguan-standard.oss-cn-zhangjiakou.aliyuncs.com/template/img/1541666878745479filename.jpg?Expires=1541670479&OSSAccessKeyId=LTAIBQQtw9GvFpht&Signature=o89%2F3Bvu3LrVCfuywfGKgtryqLs%3D",
          formData,
          headers,
        ).then(response => {
        })
        this.addForm.filesName = this.fileNames.toString()
        templateAdd(this.addForm).then(response => {
          this.urls = response.data;
        })
      },
      uploadDirect(param){
        const vthis = this;
        var client = new OSS({
          region: "oss-cn-zhangjiakou.aliyuncs.com",
          endpoint: 'oss-cn-zhangjiakou.aliyuncs.com',
          accessKeyId: "LTAIBQQtw9GvFpht",
          accessKeySecret: "bUyrKLwBWsLv3SkUYMj4OcNoC3WtZq",
          bucket: "panguan-standard"
        })
        /*  // 上传
         let random_name =  new Date().getTime() + '.' + param.file.name.split('.').pop()
         client.multipartUpload("upload-file", param.file).then((results) => {
         // 上传完成
         const url = 'http://aliyun-oss-upload.oss-cn-hangzhou.aliyuncs.com/' + results.name;
         _this.url = url;
         console.log(url);
         }).catch((err) => {
         console.log(err)
         })*/
        var that=this
        client.put("/template/" + param.file.name, param.file, {
          progress: function*(percentage, cpt) {
            vthis.percentage = percentage
          }
        }).then((results) => {
          that.addForm.urls.push(results.url);
          that.nums=that.nums-1;
          if (that.nums<=0){
              that.addForm.urls=that.addForm.urls.toString()
              that.requestUrl()
          }
        }).catch((err) => {
        });
      },

    }
  }
</script>
