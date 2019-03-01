/**
 * Created by kc on 2018/11/21.
 */
import  request from  '@/utils/request'
import QS from 'qs'

export function getVeriList(query) {
  return request({
    url:'/verify/list',
    method:'post',
    data: QS.stringify(query)
  })
}
export function toConfirm(query) {
  return request({
    url:'/verify/processing',
    method:'post',
    data: query
  })
}
export function getSheetOfStudent(query) {
  return request({
    url:'/verify/sheet/student',
    method:'post',
    data: QS.stringify(query)
  })
}
export function getVerifySheetList(query) {
  return request({
    url:'/verify/sheet/list',
    method:'post',
    data: QS.stringify(query)
  })
}
export function toConfirmSheet(query) {
  return request({
    url:'/verify/sheet/processing',
    method:'post',
    data:query

  })
}
export function getType(query) {
  return request({
    url:'/verify/check',
    method:'post',
    data:QS.stringify(query)
  })
}
export function getStudentNameByNumber(query) {
  return request({
    url:'/studentNumber/name',
    method:'post',
    data:QS.stringify(query)
  })
}
