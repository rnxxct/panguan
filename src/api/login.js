/**
 * Created by kc on 2018/10/22.
 */
import  request from  '@/utils/request'
import QS from 'qs'
/*请求登录的方法*/
export function loginByUserName(schoolCode,username,password) {
  console.log(username+password)
  const data ={
    schoolCode,
    username,
    password
  }
  return request({
    url:'/auth/login',
    method:'post',
    data: QS.stringify(data)
  })
}
export function getCode(phoneNumber) {
  const data={
    phoneNumber
  }
  return request({
    url:'/verify/code',
    method:'post',
    data:QS.stringify(data)
  })
}
export function loginByCode(phoneNumber,code) {
  const data={
    phoneNumber,
    code
  }
  return request({
    url:'/loginByCode',
    method:'post',
    data:QS.stringify(data)
  })
}
export function updatePassword(password,phoneNumber) {
  const data={
    password,
    phoneNumber
  }
  return request({
    url:'/modify/password',
    method:'post',
    data:QS.stringify(data)
  })
}


export function logout() {
  return request({
    url:'/expireTime',
    method:'get',
  })
}

