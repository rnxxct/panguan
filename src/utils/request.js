/**
 * Created by kc on 2018/10/22.
 */
import  axios from 'axios'
//create an axios instance
import {Message} from 'element-ui'
import router from '@/router'
const service = axios.create({
  // baseURL:"http://app.jouletek.com:8080/panguanb/",

  baseURL:'http://localhost:8080/',

  timeout: 10000000 //request timeout
})
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//request interceptor
service.interceptors.request.use(function (config) {
  //在发送请求之前做些什么
  //判断是否有token，如果存在将每个页面的header都添加token
  //config.headers.common["Authorization"] = store.state.token;
  //将token存入sessionStorage
  if (  sessionStorage.getItem("userToken") == null ||sessionStorage.getItem("userToken")==""){
    sessionStorage.setItem("userToken",'');
    config.headers.common["Authorization"] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6ImEiLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE1Mzk5NDA2NTYsInVzZXJuYW1lIjoiYWRtaW4ifQ.bj-fbEMrJFIaiU--UXaYQpha0dnOrGZW8n7cyzKidm8';
  }else {
    config.headers.common["Authorization"] = sessionStorage.getItem("userToken");
  }
  return config;
}, function (error) {
  return Promise.reject(error)
})
//response interceptor
service.interceptors.response.use(function (response) {
  //store.state.token = response.headers.Authorization
  const res = response.data;
  if (res.code !== '200'){
    if (res.code=='401'){
      Message({
        message : res.msg,
        type : 'error',
        duration: 600
      })
      router.push('/')
    }else {
      Message({
        message : res.msg,
        type : 'error',
        duration: 600
      })
/*
      this.$store.state.loading=false
*/
      return Promise.reject('error')
    }
  }else {
    return response.data
  }
  return response;
}, function (error) {
  return Promise.reject(error)
})

export  default  service
