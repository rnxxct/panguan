/**
 * Created by kc on 2018/11/5.
 */
import  request from  '@/utils/request'
import QS from 'qs'
export function getList() {
  return request({
    url:'/school/list',
    method:'get',
  })
}
export function getGrade() {
  return request({
    url:'/grade/list',
    method:'get',
  })
}
export function getSchoolGradeList() {
  return request({
    url:'/schoolgrade/list',
    method:'get'
  })
}
export function getSchoolNameByCode(query) {
  return request({
    url:'/schoolNameByCode',
    method:'post',
    data:QS.stringify(query)
  })
}
